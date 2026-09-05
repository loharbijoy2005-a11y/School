import React, { useState } from 'react';
import { ShieldCheck, Lock, User, X, AlertCircle } from 'lucide-react';
import { AdminUser } from '../types';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: AdminUser) => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [attempts, setAttempts] = useState(0);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (attempts >= 5) {
      setErrorMsg('Too many failed attempts. Please try again after 15 minutes.');
      return;
    }

    const isHeadmistress = username === 'headmistress' && password === 'mgghs1945';
    const isAdmin = (username === 'admin' || username === 'headmistress') && (password === 'admin123' || password === 'mgghs1945');

    if (isAdmin || isHeadmistress) {
      const adminUser: AdminUser = {
        username: username || 'admin',
        role: 'headmistress',
        token: 'mock-jwt-token-mgghs-2026',
      };
      onLoginSuccess(adminUser);
      onClose();
      setUsername('');
      setPassword('');
      setErrorMsg('');
    } else {
      setAttempts((prev) => prev + 1);
      setErrorMsg('Invalid login! Username: admin or headmistress | Password: admin123 or mgghs1945');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 md:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-200">
        
        <button
          onClick={onClose}
          className="absolute right-4 top-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-rose-600 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h3 className="font-serif font-extrabold text-2xl text-slate-900">
            School Admin Portal
          </h3>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">
            Headmistress & Office Portal
          </p>
        </div>

        {errorMsg && (
          <div className="bg-rose-50 border border-rose-300 text-rose-700 text-xs p-3 rounded-xl mb-4 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Admin Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="Username (headmistress)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Secret Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="Password (mgghs1945)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-200"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm mt-2"
          >
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Authenticate & Access Portal</span>
          </button>

          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={() => {
                setUsername('admin');
                setPassword('admin123');
              }}
              className="text-xs font-bold text-rose-600 hover:underline inline-flex items-center gap-1"
            >
              <span>⚡ Click to Auto-fill Demo Credentials (admin / admin123)</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
