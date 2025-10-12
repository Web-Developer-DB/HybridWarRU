import Reveal from '../Reveal.jsx';
import { timelineSteps, caseStudies } from '../../data/content.js';

export default function CaseStudiesSection() {
  return (
    <section id="beispiele">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Beispielhafter Ablauf & Fallstudien
        </Reveal>
        <div className="timeline">
          {timelineSteps.map((step) => (
            <Reveal as="div" className="timeline-item" key={step.title}>
              <h4>{step.title}</h4>
              <p className="muted">{step.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="grid case-study-grid">
          {caseStudies.map((study) => (
            <Reveal as="article" className="card" key={study.title}>
              {study.badge ? <span className="badge">{study.badge}</span> : null}
              <h3>{study.title}</h3>
              <p className="muted">{study.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
