"""
MAHISHADAL GAYESWARI GIRLS' HIGH SCHOOL (H.S.)
Python FastAPI Backend Layer
REST API Endpoints for Notices, Admissions, Admin Dashboard & Media Uploads
"""

from fastapi import FastAPI, HTTPException, status, Depends, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import random
import io

app = FastAPI(
    title="Mahishadal Gayeswari Girls' High School API",
    description="Backend REST service for notice circulars, admission inquiries, media management, and admin auth.",
    version="1.1.0"
)

# CORS Configuration
origins = [
    "http://localhost:3000",
    "http://localhost:8085",
    "https://mgg-highschool.ac.in"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic Schemas
class NoticeBase(BaseModel):
    title: str = Field(..., example="2nd Summative Unit Test Routine 2026")
    category: str = Field(..., example="wbbse")
    description: str
    file_size: str = "250 KB"
    is_new: bool = True
    is_pinned: bool = False

class NoticeCreate(NoticeBase):
    pdf_url: str

class NoticeResponse(NoticeBase):
    id: str
    publish_date: str
    pdf_url: str

class AdmissionInquiryCreate(BaseModel):
    student_name: str = Field(..., min_length=2, example="Ananya Das")
    guardian_name: str = Field(..., min_length=2, example="Swapan Kumar Das")
    target_class: str = Field(..., example="Class V New Admission")
    phone_number: str = Field(..., pattern=r'^[0-9]{10}$', example="9876543210")
    address: str = Field(..., min_length=5, example="Vill- Mahishadal, Purba Medinipur")
    remarks: Optional[str] = None

class AdmissionInquiryResponse(BaseModel):
    success: bool
    tracking_code: str
    message: str
    timestamp: str

class AdminLoginRequest(BaseModel):
    username: str
    password: str

class AdminLoginResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    role: str

class DashboardStatsResponse(BaseModel):
    active_notices_count: int
    gallery_photos_count: int
    pending_inquiries_count: int
    storage_used_mb: float
    emergency_ticker_active: bool

# In-Memory Database
notices_db: List[dict] = [
    {
        "id": "1",
        "title": "2nd Summative Evaluation / Unit Test Routine (Classes V to X)",
        "category": "wbbse",
        "publish_date": "05 Sep 2026",
        "pdf_url": "/notices/unit-test-routine-2026.pdf",
        "is_new": True,
        "is_pinned": True,
        "file_size": "240 KB",
        "description": "All guardians and students are informed that the 2nd Unit Test examinations will commence from 15th September 2026."
    },
    {
        "id": "2",
        "title": "Class XII H.S. Science Practical Laboratory Exam Schedule",
        "category": "wbchse",
        "publish_date": "02 Sep 2026",
        "pdf_url": "/notices/hs-practical-2026.pdf",
        "is_new": True,
        "is_pinned": False,
        "file_size": "310 KB",
        "description": "Physics, Chemistry, Biology, and Geography practical examination timetable for Class XII Science and Arts students."
    }
]

inquiries_db: List[dict] = [
    {
        "id": "1",
        "student_name": "Ananya Das",
        "guardian_name": "Swapan Kumar Das",
        "target_class": "Class V New Admission",
        "phone_number": "9876543210",
        "address": "Vill- Mahishadal, Purba Medinipur",
        "submitted_at": "2026-09-05 14:30",
        "status": "pending"
    }
]

@app.get("/api/v1/health")
def health_check():
    return {
        "status": "online",
        "school": "Mahishadal Gayeswari Girls' High School (H.S.)",
        "server_time": datetime.utcnow().isoformat()
    }

@app.get("/api/v1/notices", response_model=List[NoticeResponse])
def get_notices(category: Optional[str] = None):
    if category and category != "all":
        filtered = [n for n in notices_db if n["category"] == category]
        return filtered
    return notices_db

@app.post("/api/v1/notices", response_model=NoticeResponse, status_code=status.HTTP_201_CREATED)
def create_notice(notice: NoticeCreate):
    new_id = str(len(notices_db) + 1)
    new_notice = {
        "id": new_id,
        "title": notice.title,
        "category": notice.category,
        "publish_date": datetime.now().strftime("%d %b %Y"),
        "pdf_url": notice.pdf_url,
        "is_new": notice.is_new,
        "is_pinned": notice.is_pinned,
        "file_size": notice.file_size,
        "description": notice.description
    }
    notices_db.insert(0, new_notice)
    return new_notice

@app.delete("/api/v1/notices/{notice_id}")
def delete_notice(notice_id: str):
    global notices_db
    notices_db = [n for n in notices_db if n["id"] != notice_id]
    return {"success": True, "message": f"Notice {notice_id} deleted."}

@app.post("/api/v1/inquiry", response_model=AdmissionInquiryResponse)
def submit_admission_inquiry(inquiry: AdmissionInquiryCreate):
    tracking_code = f"MGGHS-2026-{random.randint(1000, 9999)}"
    inquiries_db.append({
        "id": str(len(inquiries_db) + 1),
        "student_name": inquiry.student_name,
        "guardian_name": inquiry.guardian_name,
        "target_class": inquiry.target_class,
        "phone_number": inquiry.phone_number,
        "address": inquiry.address,
        "submitted_at": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "status": "pending"
    })
    return {
        "success": True,
        "tracking_code": tracking_code,
        "message": f"Inquiry for student {inquiry.student_name} registered successfully.",
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }

@app.get("/api/v1/admin/dashboard-stats", response_model=DashboardStatsResponse)
def get_dashboard_stats():
    return {
        "active_notices_count": len(notices_db),
        "gallery_photos_count": 8,
        "pending_inquiries_count": len(inquiries_db),
        "storage_used_mb": 42.8,
        "emergency_ticker_active": True
    }

@app.get("/api/v1/admin/export-inquiries-csv")
def export_inquiries_csv():
    csv_output = "Student Name,Guardian Name,Target Class,Phone Number,Address,Submitted At,Status\n"
    for i in inquiries_db:
        csv_output += f'"{i["student_name"]}","{i["guardian_name"]}","{i["target_class"]}","{i["phone_number"]}","{i["address"]}","{i["submitted_at"]}","{i["status"]}"\n'
    
    stream = io.StringIO(csv_output)
    return StreamingResponse(
        io.BytesIO(stream.getvalue().encode()),
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=MGGHS_Inquiries_2026.csv"}
    )

@app.post("/api/v1/auth/login", response_model=AdminLoginResponse)
def admin_login(creds: AdminLoginRequest):
    if creds.username == "headmistress" and creds.password == "mgghs1945":
        return {
            "access_token": "mock-jwt-token-mgghs-headmistress-2026",
            "token_type": "bearer",
            "role": "headmistress_admin"
        }
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid credentials for Headmistress portal login"
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
