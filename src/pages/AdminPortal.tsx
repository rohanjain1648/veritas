import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const analyticsData = [
  { name: 'Computer Science', flags: 42 },
  { name: 'English Lit', flags: 89 },
  { name: 'History', flags: 55 },
  { name: 'Physics', flags: 12 },
  { name: 'Business', flags: 110 },
];

export function AdminPortal() {
  return (
    <DashboardLayout role="admin">
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '8px' }}>University Analytics</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Institutional overview of academic integrity and AI usage trends.</p>
      </div>

      <div className="dash-grid">
        <div className="metric-card" style={{ gridColumn: 'span 4' }}>
          <div className="metric-title">Total Active Students</div>
          <div className="metric-value">12,450</div>
        </div>
        <div className="metric-card" style={{ gridColumn: 'span 4' }}>
          <div className="metric-title">Integrity Cases (Active)</div>
          <div className="metric-value">34</div>
          <div className="metric-trend trend-down">-12% from last month</div>
        </div>
        <div className="metric-card" style={{ gridColumn: 'span 4' }}>
          <div className="metric-title">AI Tool Disclosures</div>
          <div className="metric-value">4,892</div>
          <div className="metric-trend trend-up">+45% this semester</div>
        </div>

        <div className="metric-card" style={{ gridColumn: 'span 8', minHeight: '350px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '24px' }}>AI Flags by Department</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={analyticsData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
              <XAxis dataKey="name" stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                cursor={{fill: 'var(--bg-tertiary)'}}
                contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderRadius: '8px' }}
                itemStyle={{ color: 'var(--text-primary)' }}
              />
              <Bar dataKey="flags" fill="var(--accent-purple)" radius={[4, 4, 0, 0]} name="Total Flags" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="metric-card" style={{ gridColumn: 'span 4' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '24px' }}>System Audit Log</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
              <span style={{ color: 'var(--text-primary)' }}>Policy updated by Dr. Smith</span>
              <span style={{ color: 'var(--text-tertiary)' }}>10m ago</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
              <span style={{ color: 'var(--text-primary)' }}>Case #402 resolved</span>
              <span style={{ color: 'var(--text-tertiary)' }}>1h ago</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
              <span style={{ color: 'var(--text-primary)' }}>Canvas LMS Sync Completed</span>
              <span style={{ color: 'var(--text-tertiary)' }}>3h ago</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
              <span style={{ color: 'var(--text-primary)' }}>New Faculty Account: E. Wong</span>
              <span style={{ color: 'var(--text-tertiary)' }}>1d ago</span>
            </div>
          </div>
          <button style={{ marginTop: '16px', background: 'transparent', border: 'none', color: 'var(--accent-blue)', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 500, padding: 0 }}>View Full Log &rarr;</button>
        </div>
      </div>
    </DashboardLayout>
  );
}
