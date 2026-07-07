import React, { useState } from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { BookOpen, AlertTriangle } from 'lucide-react';

export function StudentPortal() {
  const [assignment, setAssignment] = useState('');
  const [text, setText] = useState('');
  const [aiDisclosed, setAiDisclosed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!text || !assignment) {
      setMessage('Please enter a title and paste your text.');
      return;
    }
    
    setSubmitting(true);
    setMessage('');
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const res = await fetch(`${API_URL}/api/submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          student: 'Demo Student',
          assignment,
          text,
          aiDisclosed
        })
      });
      if (res.ok) {
        setMessage('Assignment submitted successfully! It is now pending analysis.');
        setAssignment('');
        setText('');
      } else {
        setMessage('Error submitting assignment.');
      }
    } catch (err) {
      setMessage('Failed to connect to server.');
    }
    setSubmitting(false);
  };

  return (
    <DashboardLayout role="student">
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '8px' }}>Student Portal</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Submit assignments and view your writing history.</p>
      </div>

      <div className="dash-grid">
        <div className="metric-card" style={{ gridColumn: 'span 8' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '24px' }}>New Submission</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '8px', color: 'var(--text-secondary)' }}>Assignment Title</label>
              <input 
                type="text" 
                value={assignment}
                onChange={e => setAssignment(e.target.value)}
                placeholder="e.g. History 101 - Final Essay" 
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} 
              />
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '8px', color: 'var(--text-secondary)' }}>Paste Assignment Text</label>
              <textarea 
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Paste your essay here..."
                rows={10}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', resize: 'vertical' }}
              />
            </div>

            <div style={{ background: 'rgba(237, 137, 54, 0.1)', border: '1px solid rgba(237, 137, 54, 0.2)', padding: '16px', borderRadius: '8px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <AlertTriangle size={20} color="var(--accent-orange)" />
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>AI Disclosure Assistant</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>Does this submission include any AI-generated content or assistance (e.g. outlining, grammar checking)? Declaring it now helps build your provenance graph.</p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <label style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <input type="radio" name="ai" checked={aiDisclosed} onChange={() => setAiDisclosed(true)} /> Yes, I used AI
                  </label>
                  <label style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <input type="radio" name="ai" checked={!aiDisclosed} onChange={() => setAiDisclosed(false)} /> No, purely original work
                  </label>
                </div>
              </div>
            </div>

            {message && <p style={{ color: message.includes('successfully') ? '#38a169' : '#e53e3e', fontSize: '0.9rem' }}>{message}</p>}

            <button 
              onClick={handleSubmit}
              disabled={submitting}
              style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)', border: 'none', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, marginTop: '16px', opacity: submitting ? 0.7 : 1 }}
            >
              {submitting ? 'Submitting...' : 'Submit Assignment'}
            </button>
          </div>
        </div>

        <div className="metric-card" style={{ gridColumn: 'span 4' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '24px' }}>Writing History</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Your writing DNA profile is healthy and consistent across 12 assignments this semester.</p>
          <div style={{ marginTop: '24px', height: '8px', background: 'var(--bg-tertiary)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: '92%', height: '100%', background: '#38a169' }}></div>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: '8px', textAlign: 'right' }}>92% Consistency Score</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
