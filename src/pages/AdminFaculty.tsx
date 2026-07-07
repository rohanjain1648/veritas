import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { Search, Filter, TrendingUp, TrendingDown } from 'lucide-react';

const faculty = [
  { id: 'FAC-001', name: 'Dr. Emily Chen', dept: 'Computer Science', flags: 42, rate: 'High' },
  { id: 'FAC-002', name: 'Prof. Mark Davis', dept: 'English', flags: 5, rate: 'Low' },
  { id: 'FAC-003', name: 'Dr. Sarah Smith', dept: 'History', flags: 12, rate: 'Average' },
  { id: 'FAC-004', name: 'Prof. John Doe', dept: 'Physics', flags: 2, rate: 'Low' },
  { id: 'FAC-005', name: 'Dr. Jane Roe', dept: 'Business', flags: 89, rate: 'High' },
];

export function AdminFaculty() {
  return (
    <DashboardLayout role="admin">
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '8px' }}>Faculty Management</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Identify flagging trends and departments requiring AI literacy training.</p>
        </div>
      </div>

      <div className="dash-grid">
        <div className="metric-card" style={{ gridColumn: 'span 12', padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-color)', display: 'flex', gap: '16px' }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
              <input type="text" placeholder="Search faculty..." style={{ width: '100%', padding: '10px 10px 10px 40px', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
            </div>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                <th style={{ padding: '12px 24px', fontWeight: 500 }}>Name</th>
                <th style={{ padding: '12px 24px', fontWeight: 500 }}>Department</th>
                <th style={{ padding: '12px 24px', fontWeight: 500 }}>Total AI Flags (Term)</th>
                <th style={{ padding: '12px 24px', fontWeight: 500 }}>Flagging Rate</th>
                <th style={{ padding: '12px 24px', fontWeight: 500 }}></th>
              </tr>
            </thead>
            <tbody>
              {faculty.map(fac => (
                <tr key={fac.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '16px 24px', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>{fac.name}</td>
                  <td style={{ padding: '16px 24px', fontSize: '0.9rem', color: 'var(--text-primary)' }}>{fac.dept}</td>
                  <td style={{ padding: '16px 24px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{fac.flags}</td>
                  <td style={{ padding: '16px 24px', fontSize: '0.9rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: fac.rate === 'High' ? '#e53e3e' : fac.rate === 'Average' ? 'var(--accent-orange)' : '#38a169', fontWeight: 500 }}>
                      {fac.rate === 'High' ? <TrendingUp size={16} /> : fac.rate === 'Low' ? <TrendingDown size={16} /> : null}
                      {fac.rate}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                    <button style={{ color: 'var(--text-primary)', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: '6px', cursor: 'pointer', fontWeight: 500, fontSize: '0.8rem', padding: '6px 12px' }}>Recommend Training</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
