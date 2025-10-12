import Reveal from '../Reveal.jsx';
import { citizenCards } from '../../data/content.js';

export default function CitizenSection() {
  return (
    <section id="schutz">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Was können Bürger:innen tun?
        </Reveal>
        <div className="grid">
          {citizenCards.map((card) => (
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
