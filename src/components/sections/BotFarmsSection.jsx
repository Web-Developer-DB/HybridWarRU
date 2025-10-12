import Reveal from '../Reveal.jsx';
import { botFarmCards } from '../../data/content.js';

export default function BotFarmsSection() {
  return (
    <section id="botfarmen">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Bot-Farmen & koordinierte Inauthentische Aktivitäten
        </Reveal>
        <div className="grid">
          {botFarmCards.map((card) => (
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
