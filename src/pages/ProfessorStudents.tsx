import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { User, Activity, AlertCircle } from 'lucide-react';

const studentDNA = [
  { term: 'Week 1', score: 85 },
  { term: 'Week 2', score: 86 },
  { term: 'Week 3', score: 84 },
  { term: 'Week 4', score: 88 },
  { term: 'Week 5', score: 85 },
  { term: 'Week 6', score: 87 },
  { term: 'Week 7 (Midterm)', score: 32 }, // Major shift
  { term: 'Week 8', score: 86 },
];

export function ProfessorStudents() {
  return (
    <DashboardLayout role="professor">
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '8px' }}>Student Directory & DNA Profiles</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Analyze individual student writing evolution and baseline consistency.</p>
      </div>

      <div className="dash-grid">
        <div className="metric-card" style={{ gridColumn: 'span 4' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #4299e1, #9f7aea)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <User size={32} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Alex Johnson</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Computer Science • Year 3</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Total Submissions</span>
              <span style={{ fontWeight: 500 }}>14</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>DNA Consistency</span>
              <span style={{ fontWeight: 500, color: '#e53e3e' }}>Critical Shift</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Active Flags</span>
              <span style={{ fontWeight: 500 }}>1</span>
            </div>
          </div>
          
          <button style={{ width: '100%', marginTop: '24px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', padding: '8px', borderRadius: '6px', color: 'var(--text-primary)', cursor: 'pointer', fontWeight: 500 }}>
            Message Student
          </button>
        </div>

        <div className="metric-card" style={{ gridColumn: 'span 8', minHeight: '350px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 500 }}>Writing DNA Baseline: Alex Johnson</h3>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e53e3e', fontSize: '0.85rem', fontWeight: 500, background: 'rgba(229, 62, 62, 0.1)', padding: '6px 12px', borderRadius: '20px' }}>
              <AlertCircle size={16} /> Stylometric Shift Detected
            </span>
          </div>
          
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={studentDNA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
              <XAxis dataKey="term" stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderRadius: '8px' }}
                itemStyle={{ color: 'var(--text-primary)' }}
              />
              <Line type="monotone" dataKey="score" stroke="var(--accent-blue)" strokeWidth={3} dot={{ r: 4, fill: 'var(--bg-primary)', strokeWidth: 2 }} activeDot={{ r: 6 }} name="DNA Match %" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  );
}
