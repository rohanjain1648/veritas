import React from 'react';
import { MarkdownPage } from '../components/MarkdownPage';

export function CareersPage() {
  return (
    <MarkdownPage 
      title="Careers at Veritas AI" 
      subtitle="Join a mission-driven team building the trust and integrity infrastructure for global education."
    >
      <h3>Why Work with Us?</h3>
      <p>
        At Veritas AI, we believe in solving real, systemic challenges in education. We are building the tools that will redefine how institutions assess student learning in the age of generative models. We are a remote-first, globally distributed team value autonomy, deep research, and collaborative problem-solving.
      </p>
      <p>
        We provide our team with:
      </p>
      <ul>
        <li><strong>Competitive Equity & Compensation:</strong> Salary matching industry standards, plus equity packages.</li>
        <li><strong>Comprehensive Benefits:</strong> Full health, dental, and vision coverage, alongside a stipend for home office setup.</li>
        <li><strong>Minimum Mandatory Vacation:</strong> 4 weeks of paid time off per year, encouraging rest and longevity.</li>
        <li><strong>Academic Connection:</strong> We support publishing research and attending NLP/EdTech conferences worldwide.</li>
      </ul>

      <h3 style={{ marginTop: '32px' }}>Current Openings</h3>
      
      <div style={{ padding: '24px', border: '1px solid var(--border-color)', borderRadius: '12px', marginBottom: '16px', background: 'var(--bg-secondary)' }}>
        <h4 style={{ margin: '0 0 12px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Senior NLP Research Scientist
          <span style={{ fontSize: '0.8rem', background: 'var(--text-primary)', color: 'var(--bg-primary)', padding: '4px 8px', borderRadius: '4px' }}>Remote (Canada/US)</span>
        </h4>
        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
          Lead the optimization of our stylometric vector baselines. You will develop models that quantify lexical diversity, syntactic patterns, and coordinate structure distributions, with a focus on minimizing bias against non-native English writers. Requires a PhD or MS in Computer Science, Linguistics, or equivalent, and experience with PyTorch and Transformer architectures.
        </p>
        <button style={{ marginTop: '16px', padding: '8px 16px', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '6px', cursor: 'pointer', color: 'var(--text-primary)', fontWeight: 600 }}>Apply Now</button>
      </div>

      <div style={{ padding: '24px', border: '1px solid var(--border-color)', borderRadius: '12px', marginBottom: '16px', background: 'var(--bg-secondary)' }}>
        <h4 style={{ margin: '0 0 12px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Full-Stack Integration Engineer
          <span style={{ fontSize: '0.8rem', background: 'var(--text-primary)', color: 'var(--bg-primary)', padding: '4px 8px', borderRadius: '4px' }}>Remote (Global)</span>
        </h4>
        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
          Build and scale our IMS LTI 1.3 integrations and Student Information System (SIS) sync pipelines. You will work closely with Canvas, Blackboard, and D2L API interfaces to ensure seamless SSO, Gradebook syncing, and SpeedGrader visual extensions.
        </p>
        <button style={{ marginTop: '16px', padding: '8px 16px', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '6px', cursor: 'pointer', color: 'var(--text-primary)', fontWeight: 600 }}>Apply Now</button>
      </div>
    </MarkdownPage>
  );
}
