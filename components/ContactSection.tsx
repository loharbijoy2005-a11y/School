import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      alert('Please fill in Name, Phone, and Inquiry Message.');
      return;
    }

    setIsSubmitted(true);
    setName('');
    setPhone('');
    setEmail('');
    setSubject('');
    setMessage('');
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF7F2] text-slate-800 relative border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#B45309] uppercase tracking-widest bg-amber-100/60 px-3 py-1 rounded-full border border-amber-300/60">
            Reach Out To Us
          </span>
          <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-[#1E293B]">
            Dual Query & Geolocation Office Desk
          </h2>
          <p className="text-xs text-slate-600">
            Contact the Headmistress office, inquiry helpdesk, or visit our Mahishadal campus.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Contact Info */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[#E8DFD0] space-y-6 shadow-sm">
            <div className="border-b border-[#E8DFD0] pb-4">
              <h3 className="font-serif font-extrabold text-2xl text-[#1E293B]">
                School Address & Helpdesk
              </h3>
              <p className="text-xs text-[#B45309] mt-1 font-bold">
                Mahishadal Gayeswari Girls' High School (H.S.)
              </p>
            </div>

            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-100 text-[#9D174D] flex items-center justify-center shrink-0 border border-rose-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[#1E293B] text-sm">School Campus Location:</p>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">
                    Garkamalpur / Rajbari Road, P.O. & P.S.- Mahishadal,<br />
                    Purba Medinipur, West Bengal - 721628
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-[#B45309] flex items-center justify-center shrink-0 border border-amber-200">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[#1E293B] text-sm">Phone Helpline:</p>
                  <p className="text-slate-600 mt-0.5">+91 3228 240211 (School Office)</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#047857] flex items-center justify-center shrink-0 border border-emerald-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[#1E293B] text-sm">Official Email Address:</p>
                  <p className="text-slate-600 mt-0.5">mgghschool1945@gmail.com</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 border border-blue-200">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[#1E293B] text-sm">Office Working Hours:</p>
                  <p className="text-slate-600 mt-0.5">Mon - Fri: 10:30 AM to 4:30 PM | Sat: 10:30 AM to 2:00 PM</p>
                </div>
              </li>
            </ul>

            {/* Embedded Circular Map Pin Preview */}
            <div className="pt-2">
              <div className="h-44 rounded-2xl overflow-hidden border border-[#E8DFD0] relative bg-slate-100 flex items-center justify-center shadow-xs">
                <iframe
                  title="Mahishadal Campus Location Map"
                  src="https://maps.google.com/maps?q=Mahishadal+Girls+High+School+Purba+Medinipur&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 opacity-90"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Ajax Message Submission Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#E8DFD0] space-y-6 shadow-sm">
            <div className="border-b border-[#E8DFD0] pb-4">
              <h3 className="font-serif font-extrabold text-2xl text-[#1E293B]">
                Online Inquiry & Message Form
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Submit your query regarding admissions, certificates, or school activities directly to office administration.
              </p>
            </div>

            {isSubmitted && (
              <div className="bg-emerald-50 border border-emerald-300 text-[#047857] p-4 rounded-2xl text-xs flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-[#047857]" />
                <span>Thank you! Your message has been sent to the Headmistress & Office Desk. We will contact you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#9D174D]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#9D174D]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#9D174D]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="Admission / Certificate / General"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#9D174D]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase mb-1">Inquiry Details *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your message or admission query..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-[#9D174D]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#9D174D] to-[#B45309] hover:from-[#881337] hover:to-[#92400E] text-white font-extrabold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-xs"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry Message</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
