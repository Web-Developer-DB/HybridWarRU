import Reveal from '../Reveal.jsx';
import { faqItems } from '../../data/content.js';

export default function FaqSection() {
  return (
    <section id="faq">
      <div className="container">
        <Reveal as="h2" className="section-title">
          FAQ – Häufige Fragen
        </Reveal>
        {faqItems.map((item) => (
          <Reveal as="details" key={item.question}>
            <summary>{item.question}</summary>
            <p className="muted">{item.answer}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
