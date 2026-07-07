import React from 'react';
import { MarkdownPage } from '../components/MarkdownPage';

export function ContactPage() {
  return (
    <MarkdownPage 
      title="Contact Veritas AI" 
      subtitle="Connect with our sales, technical support, or partnership teams."
    >
      <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h3>Institutional Pilot Requests</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            We offer 60-day sandbox pilots for accredited universities. Our team provides LTI 1.3 integrations, administrator training, and templates for syllabus guidelines customized for your institution's specific policies.
          </p>
          <p style={{ margin: '8px 0' }}>Email: <strong>sales@veritas-ai.edu</strong></p>
          <p style={{ margin: '8px 0' }}>Phone: <strong>+1 (800) 555-0199</strong> (Mon-Fri, 9AM-5PM MST)</p>
          
          <h3 style={{ marginTop: '48px' }}>Technical & Integration Support</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Current institutional administrators can reach our 24/7 technical support team. We assist with Shibboleth/Okta SSO config, LTI launch errors, or API rate-limit questions.
          </p>
          <p style={{ margin: '8px 0' }}>Email: <strong>support@veritas-ai.edu</strong></p>
          
          <h3 style={{ marginTop: '48px' }}>Academic Collaboration</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            If you are a researcher in computational linguistics or educational integrity interested in partnering with us, get in touch with our research office.
          </p>
          <p style={{ margin: '8px 0' }}>Email: <strong>research@veritas-ai.edu</strong></p>
        </div>
        
        <div style={{ flex: 1, minWidth: '300px', background: 'var(--bg-secondary)', padding: '32px', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <h4 style={{ marginTop: 0, marginBottom: '24px', fontSize: '1.2rem', fontWeight: 700 }}>Request an Enterprise Demo</h4>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', color: 'var(--text-secondary)', fontWeight: 600 }}>First Name</label>
                <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', color: 'var(--text-secondary)', fontWeight: 600 }}>Last Name</label>
                <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', color: 'var(--text-secondary)', fontWeight: 600 }}>Institution Name</label>
              <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', color: 'var(--text-secondary)', fontWeight: 600 }}>Work Email</label>
              <input type="email" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', color: 'var(--text-secondary)', fontWeight: 600 }}>Message</label>
              <textarea rows={4} style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', resize: 'vertical' }}></textarea>
            </div>
            <button className="btn-dark" style={{ padding: '14px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '1rem', marginTop: '8px' }}>Submit Request</button>
          </form>
        </div>
      </div>
    </MarkdownPage>
  );
}
