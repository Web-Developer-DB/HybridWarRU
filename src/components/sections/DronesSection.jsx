import Reveal from '../Reveal.jsx';
import { droneCards } from '../../data/content.js';

export default function DronesSection() {
  return (
    <section id="drohnen">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Drohnenangriffe – Einsatz & Abwehr
        </Reveal>
        <div className="grid">
          {droneCards.map((card) => (
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
