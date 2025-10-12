import Reveal from '../Reveal.jsx';
import { buildingBlocks } from '../../data/content.js';

export default function BuildingBlocksSection() {
  return (
    <section id="bausteine">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Typische Bausteine
        </Reveal>
        <div className="grid">
          {buildingBlocks.map((item) => (
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
