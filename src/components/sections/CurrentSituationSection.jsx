import Reveal from '../Reveal.jsx';
import { currentSituationCards } from '../../data/content.js';

export default function CurrentSituationSection() {
  return (
    <section id="aktuell">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Aktuelle Lage in Europa – Fokus Russland{' '}
          <span className="muted text-sm">(Stand: 3. Oktober 2025)</span>
        </Reveal>
        <div className="grid">
          {currentSituationCards.map((item) => (
            <Reveal as="article" className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p className="muted">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
