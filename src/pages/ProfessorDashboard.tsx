import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { ShieldAlert, CheckCircle, Clock } from 'lucide-react';

const dnaData = [
  { name: 'Sep 1', score: 85, baseline: 82 },
  { name: 'Sep 15', score: 88, baseline: 83 },
  { name: 'Oct 1', score: 86, baseline: 84 },
  { name: 'Oct 15', score: 91, baseline: 85 },
  { name: 'Nov 1', score: 42, baseline: 86 }, // Sudden drop = AI flag
  { name: 'Nov 15', score: 87, baseline: 86 },
];

export function ProfessorDashboard() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [reviewingId, setReviewingId] = useState<string | null>(null);
  const [interveneNote, setInterveneNote] = useState('');

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
        const res = await fetch(`${API_URL}/api/submissions`);
        const data = await res.json();
        setSubmissions(data);
      } catch (err) {
        console.error('Failed to fetch submissions', err);
      }
    };
    fetchSubmissions();
    const interval = setInterval(fetchSubmissions, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardLayout role="professor">
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '8px' }}>Overview</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Welcome back. You have 3 submissions requiring your attention.</p>
      </div>

      <div className="dash-grid">
        {/* Metric Cards */}
        <div className="metric-card" style={{ gridColumn: 'span 4' }}>
          <div className="metric-title">Total Submissions (This Week)</div>
          <div className="metric-value">142</div>
          <div className="metric-trend trend-up">+12% from last week</div>
        </div>
        <div className="metric-card" style={{ gridColumn: 'span 4' }}>
          <div className="metric-title">AI Flags</div>
          <div className="metric-value">18</div>
          <div className="metric-trend trend-down">-5% from last week</div>
        </div>
        <div className="metric-card" style={{ gridColumn: 'span 4' }}>
          <div className="metric-title">Avg. DNA Consistency</div>
          <div className="metric-value">91%</div>
          <div className="metric-trend trend-up">Healthy baseline</div>
        </div>

        {/* Charts */}
        <div className="metric-card" style={{ gridColumn: 'span 8', minHeight: '350px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '24px' }}>Class Writing DNA (Aggregate)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={dnaData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--accent-blue)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--accent-blue)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
              <XAxis dataKey="name" stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderRadius: '8px' }}
                itemStyle={{ color: 'var(--text-primary)' }}
              />
              <Area type="monotone" dataKey="score" stroke="var(--accent-blue)" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" name="Submission Score" />
              <Line type="monotone" dataKey="baseline" stroke="var(--accent-purple)" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Expected Baseline" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="metric-card" style={{ gridColumn: 'span 4' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '24px' }}>Action Items</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(229, 62, 62, 0.1)', color: '#e53e3e', padding: '8px', borderRadius: '8px' }}>
                <ShieldAlert size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>Stylometric Shift Detected</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Alex J. • Thesis Draft • 94% Confidence</p>
                <button style={{ marginTop: '8px', background: 'transparent', border: 'none', color: 'var(--accent-blue)', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 500 }}>Review Evidence &rarr;</button>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(237, 137, 54, 0.1)', color: 'var(--accent-orange)', padding: '8px', borderRadius: '8px' }}>
                <Clock size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>Oral Defense Pending</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Michael T. • Lab Report • Scheduled tomorrow</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(56, 161, 105, 0.1)', color: '#38a169', padding: '8px', borderRadius: '8px' }}>
                <CheckCircle size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>12 Submissions Cleared</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Midterm Essay batch completed analysis.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="metric-card" style={{ gridColumn: 'span 12' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 500 }}>Recent Submissions</h3>
            <button style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', padding: '6px 12px', borderRadius: '6px', color: 'var(--text-primary)', cursor: 'pointer', fontSize: '0.8rem' }}>View All</button>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                <th style={{ paddingBottom: '12px', fontWeight: 500 }}>ID</th>
                <th style={{ paddingBottom: '12px', fontWeight: 500 }}>Student</th>
                <th style={{ paddingBottom: '12px', fontWeight: 500 }}>Assignment</th>
                <th style={{ paddingBottom: '12px', fontWeight: 500 }}>Time</th>
                <th style={{ paddingBottom: '12px', fontWeight: 500 }}>Risk Level</th>
                <th style={{ paddingBottom: '12px', fontWeight: 500 }}>Status</th>
                <th style={{ paddingBottom: '12px', fontWeight: 500 }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map(sub => (
                <React.Fragment key={sub.id}>
                  <tr style={{ borderBottom: reviewingId === sub.id ? 'none' : '1px solid var(--border-color)' }}>
                    <td style={{ padding: '16px 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{sub.id}</td>
                    <td style={{ padding: '16px 0', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>{sub.student}</td>
                    <td style={{ padding: '16px 0', fontSize: '0.9rem', color: 'var(--text-primary)' }}>{sub.assignment}</td>
                    <td style={{ padding: '16px 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{sub.date}</td>
                    <td style={{ padding: '16px 0' }}>
                      <span style={{ 
                        padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600,
                        background: sub.risk === 'High' ? 'rgba(229, 62, 62, 0.1)' : sub.risk === 'Medium' ? 'rgba(237, 137, 54, 0.1)' : 'rgba(56, 161, 105, 0.1)',
                        color: sub.risk === 'High' ? '#e53e3e' : sub.risk === 'Medium' ? 'var(--accent-orange)' : '#38a169'
                      }}>
                        {sub.risk}
                      </span>
                    </td>
                    <td style={{ padding: '16px 0', fontSize: '0.9rem' }}>
                      <span style={{ color: sub.status === 'Flagged' ? '#e53e3e' : sub.status === 'Analyzing' ? 'var(--accent-orange)' : 'var(--text-secondary)' }}>
                        {sub.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px 0' }}>
                      <button 
                        onClick={() => setReviewingId(reviewingId === sub.id ? null : sub.id)}
                        style={{ background: 'transparent', border: '1px solid var(--border-color)', padding: '6px 12px', borderRadius: '6px', color: 'var(--text-primary)', cursor: 'pointer', fontSize: '0.8rem' }}
                      >
                        {reviewingId === sub.id ? 'Close Review' : 'Review'}
                      </button>
                    </td>
                  </tr>
                  
                  {/* Inline Review Panel */}
                  {reviewingId === sub.id && (
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td colSpan={7} style={{ padding: '0 0 24px 0' }}>
                        <div style={{ background: 'var(--bg-tertiary)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                          <div style={{ display: 'flex', gap: '24px' }}>
                            <div style={{ flex: 1 }}>
                              <h4 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '12px', color: 'var(--text-primary)' }}>AI Analysis Engine Report</h4>
                              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                                <strong>AI Score:</strong> {sub.aiScore}% | <strong>Disclosed AI:</strong> {sub.aiDisclosed ? 'Yes' : 'No'}
                              </p>
                              <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '16px', fontStyle: 'italic' }}>
                                {sub.rationale}
                              </p>
                              
                              <h5 style={{ fontSize: '0.9rem', fontWeight: 500, marginBottom: '8px' }}>Flagged Passages:</h5>
                              {sub.flaggedPassages?.length > 0 ? sub.flaggedPassages.map((fp: any, idx: number) => (
                                <div key={idx} style={{ background: 'var(--bg-primary)', padding: '12px', borderRadius: '8px', borderLeft: '3px solid #e53e3e', marginBottom: '8px' }}>
                                  <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '4px' }}>"{fp.text}"</p>
                                  <p style={{ fontSize: '0.75rem', color: '#e53e3e' }}>Reason: {fp.reason}</p>
                                </div>
                              )) : (
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>No specific passages flagged.</p>
                              )}
                            </div>
                            
                            <div style={{ width: '300px', borderLeft: '1px solid var(--border-color)', paddingLeft: '24px' }}>
                              <h4 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '12px', color: 'var(--text-primary)' }}>Intervention Workflow</h4>
                              <textarea 
                                value={interveneNote}
                                onChange={e => setInterveneNote(e.target.value)}
                                placeholder="Add notes for the student..."
                                rows={4}
                                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', resize: 'vertical', marginBottom: '12px' }}
                              />
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <button 
                                  onClick={() => {
                                    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
                                    fetch(`${API_URL}/api/submissions/${sub.id}/intervene`, {
                                      method: 'PUT',
                                      headers: { 'Content-Type': 'application/json' },
                                      body: JSON.stringify({ status: 'Request Revision', note: interveneNote })
                                    }).then(() => { setReviewingId(null); setInterveneNote(''); });
                                  }}
                                  style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)', border: 'none', padding: '8px', borderRadius: '6px', cursor: 'pointer', fontWeight: 500, fontSize: '0.85rem' }}
                                >
                                  Request Revision
                                </button>
                                <button 
                                  onClick={() => {
                                    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
                                    fetch(`${API_URL}/api/submissions/${sub.id}/intervene`, {
                                      method: 'PUT',
                                      headers: { 'Content-Type': 'application/json' },
                                      body: JSON.stringify({ status: 'Cleared', note: interveneNote })
                                    }).then(() => { setReviewingId(null); setInterveneNote(''); });
                                  }}
                                  style={{ background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '8px', borderRadius: '6px', cursor: 'pointer', fontWeight: 500, fontSize: '0.85rem' }}
                                >
                                  Clear Flag (Accept)
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
