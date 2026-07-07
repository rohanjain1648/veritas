import React from 'react';
import { MarkdownPage } from '../components/MarkdownPage';

export function PartnersPage() {
  return (
    <MarkdownPage 
      title="Partners & Collaborators" 
      subtitle="Fostering academic trust through technology integrations and peer-reviewed research."
    >
      <h3>Technology Infrastructure Partners</h3>
      <p>
        Veritas AI partners with leading cloud infrastructure and foundational model providers to offer fast, secure, and privacy-compliant analysis services.
      </p>
      <ul>
        <li><strong>Groq:</strong> Powering our stylometric analysis engine with ultra-low latency Llama inference endpoints.</li>
        <li><strong>OpenAI:</strong> Providing access to advanced reasoning models (o1) used in our semantic consistency checks.</li>
        <li><strong>Anthropic:</strong> Integrating Claude models for long-form thesis baseline evaluations.</li>
      </ul>

      <h3 style={{ marginTop: '32px' }}>Supported LMS Hubs</h3>
      <p>
        Through LTI 1.3 compliance, Veritas AI is listed as a certified integration partner in key EdTech marketplaces:
      </p>
      <ul>
        <li><strong>Instructure Canvas Partner Network:</strong> Certified integration with Canvas's gradebook and SpeedGrader pipelines.</li>
        <li><strong>Anthology App Hub:</strong> Blackboard integration offering support for Ultra experiences.</li>
        <li><strong>D2L Brightspace App Finder:</strong> Dropbox-linked analysis solutions for K-12 and Higher Education.</li>
      </ul>

      <h3 style={{ marginTop: '32px' }}>Research Partnerships</h3>
      <p>
        We collaborate with NLP and educational research groups at leading institutions, including the University of Calgary, to publish research on the evolution of writing baselines and academic integrity. We share anonymized datasets (with student and school consent) to advance research on bias reduction in educational technology.
      </p>
      <p>
        If your department is interested in joining the research consortium, contact our partnerships team at <strong>partnerships@veritas-ai.edu</strong>.
      </p>
    </MarkdownPage>
  );
}
