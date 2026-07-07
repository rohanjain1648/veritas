import React from 'react';
import { MarkdownPage } from '../components/MarkdownPage';

export function APIReferencePage() {
  return (
    <MarkdownPage 
      title="Developer API Reference" 
      subtitle="Integrating Veritas AI's stylometric analysis and citation verification programmatically."
    >
      <h3>Overview & Authentication</h3>
      <p>
        The Veritas AI REST API allows enterprise partners and institutional IT departments to programmatically trigger stylometric analyses, retrieve student baseline statistics, sync triage queues, and manage integrations.
      </p>
      <p>
        All API requests must be made over HTTPS, consume JSON payloads, and return JSON responses. Requests are authenticated using a Bearer token generated from the Admin Portal.
      </p>
      <pre style={{ background: 'var(--bg-primary)', padding: '16px', borderRadius: '8px', overflowX: 'auto', border: '1px solid var(--border-color)', fontSize: '0.9rem', marginTop: '16px' }}>
        <code>{`GET /v1/students/std_8923472/dna HTTP/1.1
Host: api.veritas-ai.edu
Authorization: Bearer veritas_live_3f92a1d82e8f
Accept: application/json`}</code>
      </pre>

      <h3 style={{ marginTop: '32px' }}>Core Endpoints</h3>

      <h4>1. Analyze Document</h4>
      <p><code>POST /v1/analyze</code></p>
      <p>Submit a student's document for synchronous analysis against their historical corpus and academic citation databases.</p>
      <p><strong>Request Body:</strong></p>
      <pre style={{ background: 'var(--bg-primary)', padding: '16px', borderRadius: '8px', overflowX: 'auto', border: '1px solid var(--border-color)', fontSize: '0.9rem' }}>
        <code>{`{
  "student_id": "std_8923472",
  "assignment_id": "asn_4892",
  "document_text": "The thermodynamic properties of entropy indicate...",
  "citations": [
    { "text": "Einstein, A. (1905). On the Electrodynamics of Moving Bodies.", "doi": "10.1002/andp.19053221004" }
  ]
}`}</code>
      </pre>
      <p><strong>Response Body:</strong></p>
      <pre style={{ background: 'var(--bg-primary)', padding: '16px', borderRadius: '8px', overflowX: 'auto', border: '1px solid var(--border-color)', fontSize: '0.9rem' }}>
        <code>{`{
  "analysis_id": "anl_789123",
  "confidence_score": 0.89,
  "stylometric_deviation": 2.45,
  "citation_audit": {
    "total_checked": 1,
    "unverified_count": 0,
    "citations": [
      { "text": "Einstein, A. (1905)...", "status": "VERIFIED", "source": "CrossRef" }
    ]
  },
  "flags": ["STYLOMETRIC_SHIFT"]
}`}</code>
      </pre>

      <h4>2. Retrieve Student DNA Baseline</h4>
      <p><code>GET /v1/students/&#123;student_id&#125;/dna</code></p>
      <p>Retrieve the time-series vector data representing the student's writing fingerprint. Returns dimensions representing vocabulary complexity, punctuation distributions, and structural parameters.</p>

      <h3 style={{ marginTop: '32px' }}>Webhooks & Event Streams</h3>
      <p>
        Instead of polling our API, register HTTP webhooks to receive real-time POST notifications when specific events occur. Each webhook payload includes a signature in the <code>X-Veritas-Signature</code> header generated using your webhook secret and HMAC-SHA256, allowing your servers to verify the authenticity of the incoming request.
      </p>
      <ul>
        <li><code>intervention.triggered</code>: Sent when a submission is flagged as High Triage.</li>
        <li><code>baseline.ready</code>: Sent when a student has submitted enough work (minimum 3 documents) to establish a reliable baseline.</li>
      </ul>
    </MarkdownPage>
  );
}
