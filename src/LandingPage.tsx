import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Fingerprint, History, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Hero3D } from './components/Hero3D';
import { PublicNavbar } from './components/PublicNavbar';
import { PublicFooter } from './components/PublicFooter';

export function LandingPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-dark text-white overflow-hidden font-sans selection:bg-brand-chartreuse selection:text-brand-dark">
      {/* Background Elements */}
      <div className="neon-glow top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="fixed inset-0 z-[-2] opacity-20" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      
      {/* Navigation */}
      <PublicNavbar />

      {/* Main Content */}
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 max-w-6xl relative">
          <motion.div 
            className="flex flex-col items-center text-center z-10 relative pt-12 pb-20"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full border border-brand-chartreuse/30 bg-brand-chartreuse/10 text-brand-chartreuse font-mono text-sm font-medium tracking-wide mb-8">
              VERITAS AI FOR HIGHER EDUCATION
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8">
              We Build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-chartreuse to-green-400">Academic Trust</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 font-light">
              Built on pedagogical collaboration. Powered by explainable evidence. Delivering transparent academic integrity.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <button className="px-8 py-4 bg-brand-chartreuse text-brand-dark font-semibold rounded-lg hover:bg-brand-chartreuseHover transition-colors text-lg shadow-[0_0_20px_rgba(217,241,0,0.3)]">
                Request Demo
              </button>
              <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors text-lg">
                View Evidence
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Marquee */}
        <section className="py-12 border-y border-white/5 bg-black/20 overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl mb-6">
            <p className="text-center font-mono text-xs text-white/40 tracking-[0.2em]">UNIVERSITIES BUILD WITH VERITAS</p>
          </div>
          <div className="relative w-full flex overflow-hidden group">
            <div className="flex w-max animate-marquee-scroll gap-16 px-8 items-center opacity-60 group-hover:opacity-100 transition-opacity">
               {/* Repeat set 1 */}
              <div className="font-display font-bold text-2xl tracking-tight">UCalgary</div>
              <div className="font-display font-bold text-2xl tracking-tight">Alberta</div>
              <div className="font-display font-bold text-2xl tracking-tight">MRU</div>
              <div className="font-display font-bold text-2xl tracking-tight">Lethbridge</div>
              <div className="font-display font-bold text-2xl tracking-tight">Stanford</div>
              <div className="font-display font-bold text-2xl tracking-tight">MIT</div>
              {/* Repeat set 2 for seamless scrolling */}
              <div className="font-display font-bold text-2xl tracking-tight">UCalgary</div>
              <div className="font-display font-bold text-2xl tracking-tight">Alberta</div>
              <div className="font-display font-bold text-2xl tracking-tight">MRU</div>
              <div className="font-display font-bold text-2xl tracking-tight">Lethbridge</div>
              <div className="font-display font-bold text-2xl tracking-tight">Stanford</div>
              <div className="font-display font-bold text-2xl tracking-tight">MIT</div>
            </div>
          </div>
        </section>

        {/* Bento Box Grid (Comparison / Features) */}
        <section className="py-24 container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Us vs. Them</h2>
            <p className="text-white/60 text-lg">Why legacy systems fail and how Veritas builds trust.</p>
          </div>

          <div className="bento-grid">
            <div className="bento-card col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-2 font-mono text-sm text-brand-chartreuse mb-4">
                  <Fingerprint size={16} /> <span>EVIDENCE / Writing DNA</span>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-4 group-hover:text-brand-chartreuse transition-colors">Stylometric Baselines</h3>
                <p className="text-white/60 mb-6 max-w-lg leading-relaxed">
                  Veritas AI uses advanced stylometrics to automatically establish a student's unique baseline. A simple submission is analyzed against their writing DNA, tagged for stylistic shifts, and routed with full explainability.
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-4 border border-white/5 font-mono text-sm mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/40">Confidence Score:</span>
                  <span className="text-brand-chartreuse">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/40">Status:</span>
                  <span className="text-red-400">Stylometric Shift Detected</span>
                </div>
              </div>
            </div>

            <div className="bento-card col-span-1 flex flex-col justify-center items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-brand-chartreuse/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={32} className="text-brand-chartreuse" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Pedagogical Correction</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Focus on education over punitive action.
              </p>
            </div>

            <div className="bento-card col-span-1">
              <div className="flex items-center gap-2 font-mono text-sm text-brand-chartreuse mb-4">
                <Search size={16} /> <span>Deep Scan</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">AI Categorization</h3>
              <p className="text-white/60 text-sm leading-relaxed">Detecting subtle patterns of synthetic text generation.</p>
            </div>

            <div className="bento-card col-span-1 md:col-span-2 bg-gradient-to-br from-white/5 to-brand-chartreuse/5 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-2 font-mono text-sm text-brand-chartreuse mb-4">
                  <BookOpen size={16} /> <span>Citation Verify</span>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">Eliminate Hallucinations</h3>
                <p className="text-white/60 text-sm mb-6 max-w-md leading-relaxed">
                  Automatically checks all references against scholarly databases to flag non-existent or hallucinated citations.
                </p>
                <button className="text-sm font-semibold text-white group-hover:text-brand-chartreuse transition-colors flex items-center gap-2">
                  Learn how <ChevronDown className="-rotate-90" size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Draggable Showcase */}
        <section className="py-24 border-y border-white/5 bg-white/[0.02] overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Evidence Dashboard</h2>
            <p className="text-white/60 text-lg">Grab and drag to explore the analysis modules.</p>
          </div>
          
          <div className="pl-4 md:pl-[calc((100vw-72rem)/2+1rem)]">
            <motion.div 
              className="flex gap-6 cursor-grab active:cursor-grabbing pb-8"
              drag="x"
              dragConstraints={{ right: 0, left: -800 }}
            >
              {[
                { title: 'Stylometric Shift', status: 'MEDIUM', icon: Search, color: 'text-blue-400', bg: 'bg-blue-400/10' },
                { title: 'Citation Hallucination', status: 'HIGH', icon: BookOpen, color: 'text-red-400', bg: 'bg-red-400/10' },
                { title: 'Co-Creation Approved', status: 'LOW', icon: Fingerprint, color: 'text-brand-chartreuse', bg: 'bg-brand-chartreuse/10' },
                { title: 'Evolution History', status: 'INFO', icon: History, color: 'text-purple-400', bg: 'bg-purple-400/10' },
              ].map((flag, idx) => (
                <motion.div 
                  key={idx}
                  className="min-w-[300px] sm:min-w-[400px] bento-card flex-shrink-0 select-none"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${flag.bg}`}>
                      <flag.icon size={24} className={flag.color} />
                    </div>
                    <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full border border-white/10 bg-white/5 tracking-wider">
                      {flag.status}
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-semibold mb-2">{flag.title}</h4>
                  <p className="text-white/40 text-sm font-mono">Module / {String(idx + 1).padStart(2, '0')}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Curriculum Accordion */}
        <section className="py-24 container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Deep Dive</h2>
            <p className="text-white/60 text-lg">The science behind our evidence engine.</p>
          </div>

          <div className="space-y-4">
            {[
              { week: '01', title: 'Stylometric Baselines & Analysis', content: 'Learn to extract features from text and establish a baseline for individual student writing styles.' },
              { week: '02', title: 'Detecting Synthetic Generation', content: 'Deep dive into LLM detection strategies, perplexity analysis, and burstiness metrics.' },
              { week: '03', title: 'Citation Verification Engine', content: 'Building an automated scraper and verifier to cross-reference academic citations.' },
              { week: '04', title: 'Pedagogical Dashboards', content: 'Constructing the professor-facing UI to present explainable evidence clearly.' }
            ].map((item, idx) => (
              <div key={idx} className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm transition-colors hover:border-white/20">
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors outline-none focus:ring-2 focus:ring-brand-chartreuse/50 rounded-xl"
                  onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-brand-chartreuse text-sm">WK. {item.week}</span>
                    <span className="font-display text-lg font-medium">{item.title}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: activeAccordion === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-white/40" />
                  </motion.div>
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: activeAccordion === idx ? 'auto' : 0, opacity: activeAccordion === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 text-white/60 border-t border-white/5 ml-16 leading-relaxed text-sm">
                    {item.content}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Production Ready Footer */}
      <PublicFooter />
    </div>
  );
}
