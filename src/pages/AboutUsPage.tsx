import React from 'react';
import { MarkdownPage } from '../components/MarkdownPage';

export function AboutUsPage() {
  return (
    <MarkdownPage 
      title="About Veritas AI" 
      subtitle="Our origins, values, and pedagogical vision for restoring trust in higher education."
    >
      <h3>Our Philosophy</h3>
      <p>
        Veritas AI was founded in response to the adversarial atmosphere that emerged in classrooms after the launch of ChatGPT. We saw schools adopting inaccurate, black-box AI detectors, leading to false accusations and destroyed trust between students and teachers. Independent studies in Alberta confirmed that these detectors were highly unreliable, especially for multilingual and ESL students.
      </p>
      <p>
        We believe that writing is a tool for thinking. Generative AI is here to stay, and our goal is to build a platform that turns AI from an easy shortcut into an interactive learning aid. We prioritize <strong>Explainable Evidence</strong> over binary accusations, and we advocate for <strong>Pedagogical Intervention over Punitive Action</strong>.
      </p>

      <h3 style={{ marginTop: '32px' }}>The Advisory Board</h3>
      <p>
        To ensure our platform respects academic values and institutional policies, we collaborate with an advisory board of educators, academic integrity scholars, and legal compliance experts:
      </p>
      <ul>
        <li><strong>Dr. Sarah Eaton (University of Calgary):</strong> Educational researcher and expert on post-plagiarism integrity, advising on pedagogical workflows.</li>
        <li><strong>Dr. Marcus Tremblay (University of Alberta):</strong> Computational linguist, guiding the development of our stylometric baseline engines to prevent bias.</li>
        <li><strong>Elena Rostova (Compliance Consultant):</strong> Advises on FERPA, GDPR, and data protection rules to ensure secure enterprise deployments.</li>
      </ul>

      <h3 style={{ marginTop: '32px' }}>Our Commitment to Fairness</h3>
      <p>
        We are committed to building unbiased algorithms. We audit our stylometric models regularly to ensure they do not discriminate based on native language, cultural syntax, or neurodiversity. Student data is processed securely and is never used to train or improve external commercial LLMs.
      </p>
    </MarkdownPage>
  );
}
