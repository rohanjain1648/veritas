import React from 'react';
import { MarkdownPage } from '../components/MarkdownPage';

export function TermsPage() {
  return (
    <MarkdownPage 
      title="Terms of Service" 
      subtitle="Effective Date: July 8, 2026"
    >
      <h3>1. Acceptance of Terms</h3>
      <p>
        By using the Veritas AI platform, its API endpoints, or its LMS LTI integrations, you agree to comply with these Terms of Service. If you represent an educational institution, you warrant that you are authorized to agree to these terms on behalf of the university.
      </p>

      <h3 style={{ marginTop: '32px' }}>2. Acceptable Use and Restrictions</h3>
      <p>
        You are permitted to use Veritas AI solely for academic evaluation, research, and learning support. You may not:
      </p>
      <ul>
        <li>Bypass or attempt to bypass the authentication mechanisms, SSO layers, or LTI tokens.</li>
        <li>Submit malicious files, scripts, or automated crawling traffic designed to disrupt or degrade service performance.</li>
        <li>Attempt to extract or reverse engineer the stylometric weights, vectors, or training methodologies used in our Evidence Engine.</li>
      </ul>

      <h3 style={{ marginTop: '32px' }}>3. Interpretation of Flags & Educational Autonomy</h3>
      <p>
        Veritas AI operates as an assistant to educator judgment. A "Confidence Score" or "Stylometric Shift" flag is a probabilistic indicator, not a definitive verdict of misconduct. 
      </p>
      <p>
        The university, its instructors, and academic integrity officers retain full autonomy and final authority in all grading, revision requests, or disciplinary actions. Veritas AI holds no liability for institutional decisions resulting from data flags.
      </p>

      <h3 style={{ marginTop: '32px' }}>4. System Uptime & SLA</h3>
      <p>
        We aim to maintain 99.9% availability of all LTI launch endpoints. Scheduled updates and maintenance will be announced to system administrators via the Admin Portal at least 72 hours in advance.
      </p>
      <p>
        For inquiries regarding enterprise license limits, reach out to <strong>licensing@veritas-ai.edu</strong>.
      </p>
    </MarkdownPage>
  );
}
