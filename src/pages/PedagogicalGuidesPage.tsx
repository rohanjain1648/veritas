import React from 'react';
import { MarkdownPage } from '../components/MarkdownPage';

export function PedagogicalGuidesPage() {
  return (
    <MarkdownPage 
      title="Pedagogical Guides & Policy Frameworks" 
      subtitle="Guiding faculty through the post-plagiarism era using transparent co-creation models and constructive intervention."
    >
      <h3>Embracing the Post-Plagiarism Era</h3>
      <p>
        The rapid emergence of advanced Generative AI tools (such as ChatGPT, Gemini, and Claude) has fundamentally altered the landscape of assessment in higher education. As academic integrity experts like Dr. Sarah Eaton of the University of Calgary highlight, we have entered a "post-plagiarism" era where traditional ideas of individual authorship are being replaced by machine co-creation. 
      </p>
      <p>
        Outright bans on AI tools are both technologically unenforceable and pedagogically counterproductive. The consensus among Alberta institutions (including the University of Lethbridge and Mount Royal University) is that students need structured, transparent guidance on how to ethically integrate these tools into their learning process without compromising critical thinking skills.
      </p>

      <h3 style={{ marginTop: '32px' }}>The Transparent Co-Creation Model</h3>
      <p>
        Veritas AI shifts the focus from adversarial detection to collaborative provenance. We recommend that faculty structure their assignments using a three-tier AI permission framework:
      </p>
      <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
        <li>
          <strong>Tier 1: Closed-Loop Human Writing (No AI permitted).</strong> Used for baseline development, in-class timed essays, and early-stage critical thinking assessments. Veritas AI flags are evaluated strictly to confirm authorship.
        </li>
        <li>
          <strong>Tier 2: Assisted Co-Creation (Ideation & Grammar).</strong> Students are permitted to use AI for outlining, brainstorming, and translation, but the final prose must be human-authored. Students must utilize the Veritas AI Student Portal to disclose the tools used, the exact prompts entered, and the percentage of influence.
        </li>
        <li>
          <strong>Tier 3: Full Integration.</strong> AI-generated text is permitted in the final submission, provided it is properly cited and accompanied by a detailed critique of the AI's output, assessing its accuracy and biases.
        </li>
      </ol>

      <h3 style={{ marginTop: '32px' }}>How to Conduct a Pedagogical Intervention</h3>
      <p>
        When Veritas AI flags a submission with a high-confidence stylometric shift or a citation hallucination, the system prompts the instructor to initiate a pedagogical intervention. We provide templates and workflows for three main actions:
      </p>
      <ul>
        <li>
          <strong>The 5-Minute Oral Defense:</strong> Rather than filing a misconduct report, the instructor schedules a brief check-in. The instructor asks the student to explain the core argument of a flagged paragraph, discuss their research process, or explain why they chose a specific citation. If the student can articulate their ideas, the flag is cleared.
        </li>
        <li>
          <strong>Revision Request:</strong> If the student struggled to explain their work but admitted to using AI helper tools without full awareness of formatting rules (e.g., as documented in Mount Royal University's guidelines), the instructor can assign a revision, letting the student rewrite the flagged passages to ensure academic honesty.
        </li>
        <li>
          <strong>AI Literacy Remediation:</strong> Provide students with targeted training modules on the limits of LLMs, how citation hallucination occurs, and how to cite AI tools in APA, MLA, or Chicago formats.
        </li>
      </ul>

      <h3 style={{ marginTop: '32px' }}>Syllabus Design Templates</h3>
      <p>
        We offer downloadable syllabus templates that explicitly state AI policies, helping instructors set clear expectations on day one. By defining what constitutes "fair use" vs. "academic dishonesty," institutions foster a culture of transparency and respect.
      </p>
    </MarkdownPage>
  );
}
