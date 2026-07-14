import React from 'react';
import { Link } from 'react-router-dom';

export function PublicFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-dark pt-16 pb-8">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col lg:flex-row justify-between gap-12 mb-12">
        <div className="lg:w-1/3">
          <div className="flex items-center gap-2 mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#4299e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#d9f100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#9f7aea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-display font-bold text-xl text-white tracking-tight">Veritas AI</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6 font-sans">
            Transforming academic integrity from a punitive measure into a pedagogical conversation. Built for modern universities.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:w-2/3">
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-sm text-brand-chartreuse mb-2 uppercase">Platform</h4>
            <Link to="/evidence-engine" className="text-white/70 hover:text-white transition-colors text-sm">Evidence Engine</Link>
            <Link to="/dashboard/professor" className="text-white/70 hover:text-white transition-colors text-sm">Professor Dashboard</Link>
            <Link to="/dashboard/student" className="text-white/70 hover:text-white transition-colors text-sm">Student Portal</Link>
            <Link to="/admin" className="text-white/70 hover:text-white transition-colors text-sm">Admin Analytics</Link>
            <Link to="/integrations" className="text-white/70 hover:text-white transition-colors text-sm">Integrations</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-sm text-brand-chartreuse mb-2 uppercase">Resources</h4>
            <Link to="/documentation" className="text-white/70 hover:text-white transition-colors text-sm">Documentation</Link>
            <Link to="/api" className="text-white/70 hover:text-white transition-colors text-sm">API Reference</Link>
            <Link to="/pedagogical-guides" className="text-white/70 hover:text-white transition-colors text-sm">Pedagogical Guides</Link>
            <Link to="/case-studies" className="text-white/70 hover:text-white transition-colors text-sm">Case Studies</Link>
            <Link to="/blog" className="text-white/70 hover:text-white transition-colors text-sm">Blog</Link>
          </div>
          <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
            <h4 className="font-mono text-sm text-brand-chartreuse mb-2 uppercase">Company</h4>
            <Link to="/about" className="text-white/70 hover:text-white transition-colors text-sm">About Us</Link>
            <Link to="/security" className="text-white/70 hover:text-white transition-colors text-sm">Security</Link>
            <Link to="/partners" className="text-white/70 hover:text-white transition-colors text-sm">Partners</Link>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl px-4 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm font-sans">&copy; {new Date().getFullYear()} Veritas AI. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="text-white/50 hover:text-white transition-colors text-sm">Privacy Policy</Link>
          <Link to="/terms" className="text-white/50 hover:text-white transition-colors text-sm">Terms of Service</Link>
          <Link to="/cookies" className="text-white/50 hover:text-white transition-colors text-sm">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
