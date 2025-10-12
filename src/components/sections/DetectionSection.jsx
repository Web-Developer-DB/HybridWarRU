import Reveal from '../Reveal.jsx';
import { detectionCards } from '../../data/content.js';

export default function DetectionSection() {
  return (
    <section id="erkennen">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Desinformation erkennen – praxisnahe Checks
        </Reveal>
        <div className="grid">
          {detectionCards.map((card) => (
            <Reveal as="article" className="card" key={card.title}>
              <h3>{card.title}</h3>
              <p className="muted">{card.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
