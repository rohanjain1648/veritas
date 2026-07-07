import React from 'react';
import { MarkdownPage } from '../components/MarkdownPage';

export function CaseStudiesPage() {
  return (
    <MarkdownPage 
      title="Institutional Case Studies" 
      subtitle="Analyzing the quantitative and qualitative impacts of Veritas AI across North American campuses."
    >
      <h3>University of Calgary: Combating the GenAI Misconduct Surge</h3>
      <p>
        In late 2023, the University of Calgary faced a 400% surge in academic integrity investigations, overwhelming department heads and the academic misconduct committees. Initial reliance on static AI detectors resulted in high volumes of contested cases, specifically from international students and ESL writers, who were unfairly flagged by standard Turnitin and GPTZero classifiers due to their simpler syntactic profiles.
      </p>
      
      <h4>The Intervention</h4>
      <p>
        UCalgary implemented Veritas AI in select undergraduate humanities and graduate thesis courses. Faculty were instructed to deploy the <strong>Transparent AI Disclosure Model</strong> and utilize the <strong>Triage Queue</strong> rather than applying zero grades immediately upon detector alerts.
      </p>

      <h4>The Quantitative Results (12-Month Pilot)</h4>
      <ul>
        <li><strong>40% Reduction in False Misconduct Reports:</strong> By establishing Writing DNA baselines and discarding static classifiers, UCalgary eliminated the systemic bias that had previously flagged ESL essays, dropping false reports dramatically.</li>
        <li><strong>75% Increase in Student Disclosures:</strong> Because students knew the policy was pedagogical rather than punitive, the majority felt safe documenting and disclosing their AI use.</li>
        <li><strong>Operational Time Saved:</strong> The "Citation Hallucination Checker" automatically verified citations against scholarly databases, saving professors an average of 4.2 hours of manual grading verification time per week.</li>
      </ul>
      <blockquote style={{ borderLeft: '4px solid var(--accent-blue)', paddingLeft: '16px', margin: '24px 0', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
        "Veritas AI has allowed us to restore trust in the student-educator relationship. By moving away from binary 'AI vs. Human' accusations and towards explainable writing baselines, we've transformed potential integrity violations into constructive teaching opportunities."
        <br />
        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', fontStyle: 'normal' }}>— Dr. Sarah Eaton, Academic Integrity Expert & Consultant</span>
      </blockquote>

      <h3 style={{ marginTop: '48px' }}>Mount Royal University: Redesigning Assessments for Co-Creation</h3>
      <p>
        Mount Royal University's AI guidelines mandate that instructors explicitly state AI usage policies in their syllabi and require students to cite AI-generated content. MRU partnered with Veritas AI to pilot the **Co-Creation Workflow**.
      </p>
      <p>
        In upper-level English and Communications courses, students were permitted to use AI to generate outlines, brainstorm research queries, and proofread drafts. Veritas AI was used to trace the student's editing history and highlight the specific modifications made to the machine-generated text. 
      </p>
      <p>
        The pilot demonstrated that analyzing the "interaction delta" between raw AI output and the student's final revision provided a much more accurate representation of student learning and critical thinking than traditional essay grading.
      </p>
    </MarkdownPage>
  );
}
