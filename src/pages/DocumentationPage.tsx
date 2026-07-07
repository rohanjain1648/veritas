import React from 'react';
import { MarkdownPage } from '../components/MarkdownPage';

export function DocumentationPage() {
  return (
    <MarkdownPage 
      title="Documentation & Training Hub" 
      subtitle="Step-by-step technical guides, user manuals, and policy playbooks for administrators, faculty, and students."
    >
      <h3>Administrator Implementation Playbook</h3>
      <p>
        Deploying Veritas AI at scale requires coordination across IT Services, Academic Integrity Offices, and Faculty Development Centers. This guide outlines the key steps to configure the system:
      </p>
      <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
        <li>
          <strong>Tenant Provisioning:</strong> Initial database setup and regional residency confirmation (e.g., verifying Canada-Central hosting to comply with local FOIP regulations).
        </li>
        <li>
          <strong>SSO Integration:</strong> Configuring SAML 2.0 Identity Provider (IdP) metadata, mapping attributes for dynamic account generation, and establishing security groups.
        </li>
        <li>
          <strong>LTI Advantage Setup:</strong> Registering the Veritas AI LTI tool in Canvas, Blackboard, or Brightspace using client IDs and deployment IDs.
        </li>
        <li>
          <strong>Global Policy Tuning:</strong> Establishing institutional baselines for Confidence Score thresholds, citation check domains, and defining automated student notification triggers.
        </li>
      </ol>

      <h3 style={{ marginTop: '32px' }}>Faculty Reference Guide</h3>
      
      <h4>Interpreting the Triage Queue</h4>
      <p>
        The Faculty Dashboard features a prioritized triage queue. Submissions are categorized into three flag tiers based on our Evidence Engine outputs:
      </p>
      <ul>
        <li><strong>High Triage (Urgent):</strong> Submissions with multiple unverifiable citations (Citation Hallucinations) or a stylometric vector deviation indicating a complete outlier from the student's historical DNA. These require immediate educator review.</li>
        <li><strong>Medium Triage (Indicative):</strong> Significant stylometric shift detected, or minor unverified citations. Suggests potential AI-assisted paraphrasing or incomplete references. Recommended for a 5-minute check-in.</li>
        <li><strong>Low Triage (Normal):</strong> High stylometric baseline matching. Fully verified references. No further action needed.</li>
      </ul>

      <h4>Understanding Stylometric Visualization</h4>
      <p>
        Veritas AI displays writing patterns as interactive multi-dimensional scatterplots (mapped via t-SNE or UMAP dimensional reduction). Educators can visually inspect a flagged submission's data point and see its distance from the student's historical centroid. 
      </p>

      <h3 style={{ marginTop: '32px' }}>Student User Manual</h3>
      
      <h4>The Transparent Submission Process</h4>
      <p>
        When submitting an assignment via Veritas AI, students are guided through an interactive dashboard where they can:
      </p>
      <ul>
        <li>View their current writing DNA baseline statistics (e.g., lexical density, average sentence length).</li>
        <li>Fill out the **Transparent AI Disclosure Form**, indicating if they used AI tools, which tools were used (ChatGPT, Claude, etc.), and detailing their specific prompt workflows.</li>
        <li>Review their citations in real-time before final submission to identify accidental hallucinations or formatting errors.</li>
      </ul>
    </MarkdownPage>
  );
}
