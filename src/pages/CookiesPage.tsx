import React from 'react';
import { MarkdownPage } from '../components/MarkdownPage';

export function CookiesPage() {
  return (
    <MarkdownPage 
      title="Cookie Policy" 
      subtitle="Last Updated: July 8, 2026 &bull; How Veritas AI utilizes cookies and local storage to secure sessions and monitor system latency."
    >
      <h3>1. Strictly Necessary Session Cookies</h3>
      <p>
        Veritas AI uses secure, HTTP-only cookies to manage authenticated sessions. When you log in via single sign-on (SSO), these cookies maintain your authentication state and protect against Cross-Site Request Forgery (CSRF) attacks. Because these cookies are essential to platform security, they cannot be turned off.
      </p>

      <h3 style={{ marginTop: '32px' }}>2. Application Local Storage</h3>
      <p>
        We use your browser's local storage (localStorage) to store user interface configurations, such as your preferred sidebar collapse state and theme selection (light or dark mode). This data is kept locally on your machine and is never sent to our servers.
      </p>

      <h3 style={{ marginTop: '32px' }}>3. Analytics & System Diagnostics</h3>
      <p>
        To ensure platform reliability during heavy grading periods (e.g., midterms and finals), we use anonymous diagnostics cookies to measure page load latency, api call response times, and identify client-side script errors.
      </p>
      <div style={{ background: 'rgba(66, 153, 225, 0.05)', borderLeft: '4px solid var(--accent-blue)', padding: '16px', borderRadius: '0 8px 8px 0', margin: '24px 0' }}>
        <strong>No Third-Party Ad Trackers:</strong> Veritas AI is built exclusively for education. We never use advertising, marketing, or behavioral tracking cookies to target ads to students or faculty.
      </div>

      <h3 style={{ marginTop: '32px' }}>4. Managing Cookies</h3>
      <p>
        You can block or delete cookies using your browser settings, but doing so will log you out of the authenticated student or teacher portals. Public website visitors can adjust non-essential cookies via the consent banner.
      </p>
    </MarkdownPage>
  );
}
