import React from 'react';
import { MarkdownPage } from '../components/MarkdownPage';

export function SecurityPage() {
  return (
    <MarkdownPage 
      title="Security, Privacy & Data Governance" 
      subtitle="Ensuring enterprise-grade security, student privacy preservation, and strict compliance with global educational laws."
    >
      <h3>The Privacy Risk of Third-Party Detectors</h3>
      <p>
        Many consumer-facing AI detectors require students or faculty to paste full text submissions into unverified web forms. As the University of Calgary's academic integrity policies highlight, relying on unregulated third-party detection tools can lead to severe breaches of student privacy. These tools often retain student intellectual property in external databases, using it to train their proprietary models without consent.
      </p>
      <p>
        Veritas AI is built on a "Privacy by Design" framework. We provide institutions with absolute control over their data, ensuring that student work never becomes training fodder for third-party commercial applications.
      </p>

      <h3 style={{ marginTop: '32px' }}>FERPA and FOIP Compliance</h3>
      <p>
        In the United States, Veritas AI is fully compliant with the Family Educational Rights and Privacy Act (FERPA). We operate as a "School Official" under 34 CFR § 99.31(a)(1)(i)(B), ensuring that Student personally identifiable information (PII) is only used for authorized institutional purposes under the direct control of the university.
      </p>
      <p>
        In Canada, we adhere to the Freedom of Information and Protection of Privacy Act (FOIP) and the Personal Information Protection Act (PIPA). All student records, submissions, and analysis metadata are treated as highly confidential and are subjected to strict institutional data-sharing agreements.
      </p>

      <h3 style={{ marginTop: '32px' }}>Data Sovereignty & Localized Hosting</h3>
      <p>
        Under Canadian and European regulations, transferring student data across international borders is highly restricted. Veritas AI supports complete <strong>Data Sovereignty</strong>. During the onboarding process, university IT administrators can choose their specific hosting region. For example:
      </p>
      <ul>
        <li><strong>Canada-Central (AWS / Azure):</strong> Ensuring all data remains on Canadian soil, fully compliant with Alberta and federal regulations.</li>
        <li><strong>EU-West (Frankfurt):</strong> Fully compliant with the General Data Protection Regulation (GDPR) and the Schrems II framework.</li>
        <li><strong>US-East (N. Virginia):</strong> Meeting SOC 2 Type II and FedRAMP Moderate baseline controls.</li>
      </ul>

      <h3 style={{ marginTop: '32px' }}>Technical Security Controls</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px', marginBottom: '16px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--border-color)', textAlign: 'left' }}>
            <th style={{ padding: '8px' }}>Security Dimension</th>
            <th style={{ padding: '8px' }}>Veritas AI Control Specification</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
            <td style={{ padding: '8px', fontWeight: 600 }}>Encryption in Transit</td>
            <td style={{ padding: '8px' }}>TLS 1.3 with Perfect Forward Secrecy (PFS), enforcing HSTS.</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
            <td style={{ padding: '8px', fontWeight: 600 }}>Encryption at Rest</td>
            <td style={{ padding: '8px' }}>AES-256 at the storage layer with customer-managed keys (CMK) via AWS KMS.</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
            <td style={{ padding: '8px', fontWeight: 600 }}>Access Control</td>
            <td style={{ padding: '8px' }}>Role-Based Access Control (RBAC) integrated with Shibboleth or Azure AD SSO.</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
            <td style={{ padding: '8px', fontWeight: 600 }}>Groq API Processing</td>
            <td style={{ padding: '8px' }}>Zero-retention data transmission via secure private API endpoints.</td>
          </tr>
        </tbody>
      </table>

      <h3 style={{ marginTop: '32px' }}>Cryptographic Data Shredding</h3>
      <p>
        Once a student graduates or requests account deletion (subject to institutional policy), their historical stylometric baseline vectors and original submission text are processed via cryptographic shredding. The encryption keys associated with their data partition are deleted, rendering the underlying records completely unrecoverable, fulfilling GDPR's "Right to Erasure" requirements.
      </p>
    </MarkdownPage>
  );
}
