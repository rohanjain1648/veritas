import React from 'react';
import { MarkdownPage } from '../components/MarkdownPage';

export function PrivacyPage() {
  return (
    <MarkdownPage 
      title="Privacy Policy" 
      subtitle="Last Updated: July 8, 2026"
    >
      <h3>1. Information We Collect</h3>
      <p>
        Veritas AI collects only the minimal data points necessary to establish stylometric baseline models and perform citation audits:
      </p>
      <ul>
        <li><strong>Account Information:</strong> Student and faculty names, email addresses, and roles, imported from your university Single Sign-On (SSO) or LMS roster.</li>
        <li><strong>Academic Submissions:</strong> Text, essays, files, and citation data submitted by students for analysis.</li>
        <li><strong>System Usage Logs:</strong> IP addresses, browser agents, access times, and session IDs to ensure platform stability and security.</li>
      </ul>

      <h3 style={{ marginTop: '32px' }}>2. Data Usage and Processing</h3>
      <p>
        Student submissions are used <strong>only</strong> to calculate individual writing DNA baselines and cross-reference citation validity against academic databases. 
      </p>
      <div style={{ background: 'rgba(237, 137, 54, 0.05)', borderLeft: '4px solid var(--accent-orange)', padding: '16px', borderRadius: '0 8px 8px 0', margin: '24px 0' }}>
        <strong>No LLM Training:</strong> Veritas AI strictly guarantees that student submissions will never be sold, leased, or used to train, test, or fine-tune commercial or open-source Large Language Models.
      </div>

      <h3 style={{ marginTop: '32px' }}>3. Third-Party Integrations</h3>
      <p>
        Veritas AI passes textual payloads to external processing APIs (such as Groq and OpenAI) for semantic evaluation. These endpoints are covered under enterprise service contracts that guarantee zero-retention (data is processed ephemerally and deleted instantly post-analysis).
      </p>

      <h3 style={{ marginTop: '32px' }}>4. Data Deletion and Portability</h3>
      <p>
        All student data is managed under retention schedules set by the university's administrator. Students have the right to request deletion of their stylometric profiles, subject to institutional verification. Upon deletion, data is removed from active stores and securely shredded from database backups within 30 days.
      </p>
      <p>
        If you have questions regarding your data privacy rights under FERPA or FOIP, contact our privacy officer at <strong>privacy@veritas-ai.edu</strong>.
      </p>
    </MarkdownPage>
  );
}
