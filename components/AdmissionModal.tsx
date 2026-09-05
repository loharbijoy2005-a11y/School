import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { AdmissionInquiry } from '../types';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<AdmissionInquiry>({
    studentName: '',
    guardianName: '',
    targetClass: 'Class V New Admission',
    phoneNumber: '',
    address: '',
    remarks: '',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.guardianName || !formData.phoneNumber) {
      alert('Please fill in required fields.');
      return;
    }
    const refCode = 'MGGHS-2026-' + Math.floor(1000 + Math.random() * 9000);
    setSubmittedRef(refCode);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFormData({
      studentName: '',
      guardianName: '',
      targetClass: 'Class V New Admission',
      phoneNumber: '',
      address: '',
      remarks: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-200">
        
        <button
          onClick={handleReset}
          className="absolute right-4 top-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-rose-600 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedRef ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-extrabold text-slate-900 mb-2">
              Inquiry Submitted Successfully!
            </h3>
            <p className="text-slate-600 text-sm mb-6">
              Thank you, <strong>{formData.guardianName}</strong>. Admission inquiry for student <strong>{formData.studentName}</strong> has been received.
            </p>
            <div className="bg-slate-50 border border-dashed border-slate-300 p-4 rounded-xl mb-6">
              <span className="text-xs text-slate-500 font-bold block">School Reference Tracking Code</span>
              <span className="text-2xl font-black text-rose-600 tracking-wider">{submittedRef}</span>
            </div>
            <button
              onClick={handleReset}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-full text-sm"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <h3 className="font-serif text-2xl font-extrabold text-slate-900 mb-1">
              Parent Admission Inquiry Form
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Submit your query for Class V to XI admission (Session 2026-27).
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Student's Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Das"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Guardian / Father Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Swapan Kumar Das"
                  value={formData.guardianName}
                  onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-200"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Target Class *
                  </label>
                  <select
                    value={formData.targetClass}
                    onChange={(e) => setFormData({ ...formData, targetClass: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-200"
                  >
                    <option value="Class V New Admission">Class V New Admission</option>
                    <option value="Class VI - IX Transfer">Class VI - IX Transfer Admission</option>
                    <option value="Class XI Arts">Class XI Arts Stream (WBCHSE)</option>
                    <option value="Class XI Science">Class XI Science Stream (WBCHSE)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Parent Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Residential Address *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vill- Mahishadal, P.O.- Mahishadal, Purba Medinipur, PIN-721628"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-200"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 text-sm mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Submit Admission Inquiry</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
