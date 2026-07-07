import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { ShieldAlert, FileText, CheckCircle } from 'lucide-react';

export function StudentDisclosures() {
  return (
    <DashboardLayout role="student">
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '8px' }}>AI Disclosures & Feedback</h1>
        <p style={{ color: 'var(--text-secondary)' }}>View your transparent AI usage declarations and professor feedback.</p>
      </div>

      <div className="dash-grid">
        <div className="metric-card" style={{ gridColumn: 'span 12' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '24px' }}>Action Required</h3>
          
          <div style={{ border: '1px solid #e53e3e', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ background: 'rgba(229, 62, 62, 0.1)', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(229, 62, 62, 0.2)' }}>
              <ShieldAlert color="#e53e3e" size={20} />
              <h4 style={{ color: '#e53e3e', fontWeight: 600, margin: 0 }}>Revision Requested: History 101 - Final Essay</h4>
            </div>
            <div style={{ padding: '24px', background: 'var(--bg-primary)' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '16px' }}>
                <strong>Professor's Note:</strong> "The system flagged a significant stylometric shift in your third paragraph, and you did not disclose AI usage. Please explain your writing process or submit a revised version."
              </p>
              
              <div style={{ display: 'flex', gap: '16px' }}>
                <button style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>
                  Submit Revision
                </button>
                <button style={{ background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '10px 20px', borderRadius: '6px', fontWeight: 500, cursor: 'pointer' }}>
                  File an Appeal / Explain Process
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="metric-card" style={{ gridColumn: 'span 12', marginTop: '24px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '24px' }}>Historical Disclosures</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FileText size={20} color="var(--text-secondary)" />
                <div>
                  <h5 style={{ fontWeight: 500, fontSize: '0.95rem', margin: '0 0 4px 0' }}>Midterm Essay</h5>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>Disclosed: Grammar checking via Grammarly</p>
                </div>
              </div>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#38a169', fontSize: '0.85rem', fontWeight: 600 }}>
                <CheckCircle size={16} /> Approved
              </span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
