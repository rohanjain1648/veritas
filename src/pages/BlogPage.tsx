import React from 'react';
import { MarkdownPage } from '../components/MarkdownPage';

export function BlogPage() {
  return (
    <MarkdownPage 
      title="The Veritas Journal" 
      subtitle="Critical perspectives on AI policy, higher education, NLP research, and academic trust."
    >
      <h3>Featured Analysis</h3>
      
      <div style={{ padding: '32px', border: '1px solid var(--border-color)', borderRadius: '16px', marginBottom: '24px', background: 'var(--bg-secondary)' }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>NLP Research &bull; July 8, 2026</span>
        <h4 style={{ fontSize: '1.5rem', margin: '12px 0 8px 0', color: 'var(--text-primary)', fontWeight: 700 }}>
          Why We Built the Citation Hallucination Checker
        </h4>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
          Large Language Models are excellent at generating syntactically flawless text, but they lack semantic grounding. This manifests in citation hallucination—fabricating DOIs, author names, and journals. As UAlberta's academic code clarifies, submitting fabricated references is a severe violation of academic integrity.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginTop: '8px' }}>
          This article explores the technical details of our Citation Auditor. By checking bibtex arrays directly against scholarly indexes (CrossRef/Semantic Scholar), we offer educators 100% mathematical certainty when identifying hallucinated AI texts, completely bypassing the heuristic bias and demographic issues of traditional AI classifiers.
        </p>
        <button style={{ background: 'transparent', border: 'none', color: 'var(--accent-blue)', fontWeight: 600, padding: 0, marginTop: '16px', cursor: 'pointer', fontSize: '1rem' }}>Read full article &rarr;</button>
      </div>

      <div style={{ padding: '32px', border: '1px solid var(--border-color)', borderRadius: '16px', marginBottom: '24px', background: 'var(--bg-secondary)' }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Pedagogy &bull; September 12, 2025</span>
        <h4 style={{ fontSize: '1.5rem', margin: '12px 0 8px 0', color: 'var(--text-primary)', fontWeight: 700 }}>
          Moving Beyond the Zero: The Power of Short Oral Defenses
        </h4>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
          Academic integrity should educate, not punish. Confronted with a suspicious AI flag, issuing a failing grade creates resentment and litigation. Instead, scheduling a 5-minute oral defense enables constructive pedagogical intervention. 
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginTop: '8px' }}>
          By asking students to explain their writing process, outline their arguments, or define specific complex vocabulary in their essays, teachers can distinguish between unauthorized generation and constructive AI assistance, fostering a transparent learning environment.
        </p>
        <button style={{ background: 'transparent', border: 'none', color: 'var(--accent-blue)', fontWeight: 600, padding: 0, marginTop: '16px', cursor: 'pointer', fontSize: '1rem' }}>Read full article &rarr;</button>
      </div>

      <div style={{ padding: '32px', border: '1px solid var(--border-color)', borderRadius: '16px', marginBottom: '24px', background: 'var(--bg-secondary)' }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Product Updates &bull; August 03, 2025</span>
        <h4 style={{ fontSize: '1.5rem', margin: '12px 0 8px 0', color: 'var(--text-primary)', fontWeight: 700 }}>
          Veritas AI Achieves LTI Advantage 1.3 Certification
        </h4>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
          We are officially certified by IMS Global. This certification guarantees secure, Single Sign-On integrations and seamless Gradebook syncs with major platforms including Canvas, Blackboard Learn Ultra, D2L Brightspace, and Moodle.
        </p>
        <button style={{ background: 'transparent', border: 'none', color: 'var(--accent-blue)', fontWeight: 600, padding: 0, marginTop: '16px', cursor: 'pointer', fontSize: '1rem' }}>Read full article &rarr;</button>
      </div>
    </MarkdownPage>
  );
}
