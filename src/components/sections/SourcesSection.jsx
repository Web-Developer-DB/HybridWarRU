import Reveal from '../Reveal.jsx';
import { sources } from '../../data/content.js';

export default function SourcesSection() {
  return (
    <section id="quellen">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Quellen & Weiterführende Links
        </Reveal>
        <div className="grid">
          {sources.map((source) => (
            <Reveal as="article" className="card" key={source.title}>
              <h3>{source.title}</h3>
              <p className="muted">{source.text}</p>
              <p>
                {source.links.map((link, index) => (
                  <span key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener">
                      {link.label}
                    </a>
                    {index < source.links.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
