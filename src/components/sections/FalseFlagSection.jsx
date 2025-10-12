import Reveal from '../Reveal.jsx';
import { falseFlagCards } from '../../data/content.js';

export default function FalseFlagSection() {
  return (
    <section id="falseflag">
      <div className="container">
        <Reveal as="h2" className="section-title">
          False-Flag-Operationen (Scheinangriffe)
        </Reveal>
        <div className="grid">
          {falseFlagCards.map((card) => (
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
