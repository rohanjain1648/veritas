import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function PublicNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pointer-events-none">
      <div className="container mx-auto max-w-6xl pointer-events-auto">
        <motion.div 
          className="flex items-center justify-between px-6 py-3 glass-panel"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#4299e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#d9f100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#9f7aea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-display font-bold text-xl tracking-tight text-white">Veritas AI</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 font-mono text-sm text-white/70">
            <Link to="/evidence-engine" className="hover:text-brand-chartreuse transition-colors">EVIDENCE ENGINE</Link>
            <Link to="/integrations" className="hover:text-brand-chartreuse transition-colors">INTEGRATIONS</Link>
            <Link to="/case-studies" className="hover:text-brand-chartreuse transition-colors">INSTITUTIONS</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/dashboard/professor">
              <button className="hidden sm:block text-sm font-medium text-white/80 hover:text-white transition-colors">Sign in</button>
            </Link>
            <Link to="/dashboard/professor">
              <button className="px-5 py-2 text-sm font-semibold text-brand-dark bg-brand-chartreuse rounded-full hover:bg-brand-chartreuseHover transition-colors shadow-[0_0_15px_rgba(217,241,0,0.4)]">
                View Dashboard
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
