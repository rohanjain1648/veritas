import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { Search, Filter, AlertTriangle } from 'lucide-react';

const cases = [
  { id: 'CASE-405', student: 'Alex Johnson', course: 'CS 301', status: 'Under Investigation', date: 'Oct 24, 2025' },
  { id: 'CASE-404', student: 'Michael T.', course: 'ENG 101', status: 'Pending Oral Defense', date: 'Oct 22, 2025' },
  { id: 'CASE-402', student: 'Sarah Smith', course: 'HIS 202', status: 'Resolved - Warning', date: 'Oct 15, 2025' },
];

export function AdminCases() {
  return (
    <DashboardLayout role="admin">
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '8px' }}>Integrity Cases</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Manage and audit university-wide academic integrity investigations.</p>
        </div>
        <button style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--text-primary)', color: 'var(--bg-primary)', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
          Export Report
        </button>
      </div>

      <div className="dash-grid">
        <div className="metric-card" style={{ gridColumn: 'span 12', padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-color)', display: 'flex', gap: '16px' }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
              <input type="text" placeholder="Search case ID or student..." style={{ width: '100%', padding: '10px 10px 10px 40px', borderRadius: '6px', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)' }} />
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', padding: '10px 16px', borderRadius: '6px', color: 'var(--text-primary)', cursor: 'pointer' }}>
              <Filter size={16} /> Filter Status
            </button>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                <th style={{ padding: '12px 24px', fontWeight: 500 }}>Case ID</th>
                <th style={{ padding: '12px 24px', fontWeight: 500 }}>Student</th>
                <th style={{ padding: '12px 24px', fontWeight: 500 }}>Course</th>
                <th style={{ padding: '12px 24px', fontWeight: 500 }}>Date Opened</th>
                <th style={{ padding: '12px 24px', fontWeight: 500 }}>Status</th>
                <th style={{ padding: '12px 24px', fontWeight: 500 }}></th>
              </tr>
            </thead>
            <tbody>
              {cases.map(c => (
                <tr key={c.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '16px 24px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{c.id}</td>
                  <td style={{ padding: '16px 24px', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>{c.student}</td>
                  <td style={{ padding: '16px 24px', fontSize: '0.9rem', color: 'var(--text-primary)' }}>{c.course}</td>
                  <td style={{ padding: '16px 24px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{c.date}</td>
                  <td style={{ padding: '16px 24px', fontSize: '0.9rem' }}>
                    <span style={{ 
                      padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600,
                      background: c.status.includes('Resolved') ? 'rgba(56, 161, 105, 0.1)' : 'rgba(237, 137, 54, 0.1)',
                      color: c.status.includes('Resolved') ? '#38a169' : 'var(--accent-orange)'
                    }}>
                      {c.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                    <button style={{ color: 'var(--accent-blue)', background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 500, fontSize: '0.85rem' }}>View Dossier</button>
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
