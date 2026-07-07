import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { ThemeProvider } from './components/ThemeProvider';
import { ProfessorDashboard } from './pages/ProfessorDashboard';
import { ProfessorSubmissions } from './pages/ProfessorSubmissions';
import { ProfessorStudents } from './pages/ProfessorStudents';
import { ProfessorFlags } from './pages/ProfessorFlags';
import { StudentPortal } from './pages/StudentPortal';
import { StudentDisclosures } from './pages/StudentDisclosures';
import { AdminPortal } from './pages/AdminPortal';
import { AdminCases } from './pages/AdminCases';
import { AdminFaculty } from './pages/AdminFaculty';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          <Route path="/dashboard/professor" element={<ProfessorDashboard />} />
          <Route path="/dashboard/professor/submissions" element={<ProfessorSubmissions />} />
          <Route path="/dashboard/professor/students" element={<ProfessorStudents />} />
          <Route path="/dashboard/professor/flags" element={<ProfessorFlags />} />
          
          <Route path="/dashboard/student" element={<StudentPortal />} />
          <Route path="/dashboard/student/disclosures" element={<StudentDisclosures />} />
          
          <Route path="/admin" element={<AdminPortal />} />
          <Route path="/admin/cases" element={<AdminCases />} />
          <Route path="/admin/faculty" element={<AdminFaculty />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
