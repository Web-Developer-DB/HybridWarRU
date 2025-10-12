import Reveal from '../Reveal.jsx';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <Reveal as="p" className="muted eyebrow">
          Einsteigerfreundlich · Neutral
        </Reveal>
        <Reveal as="h1" className="h1">
          Hybride Kriegsführung – einfach erklärt
        </Reveal>
        <Reveal as="p" className="lead">
          Hybride Kriegsführung bündelt militärische und nicht-militärische Werkzeuge,
          um Staaten zu schwächen, Entscheidungen zu verzerren und gesellschaftliche
          Spaltungen auszunutzen. Statt einer offenen Kriegserklärung entstehen Druck,
          Verwirrung und Kosten – oft so dosiert, dass Eskalationsschwellen nicht
          eindeutig überschritten werden. Diese Seite bietet einen fundierten Einstieg
          mit Beispielen und praxisnahen Hinweisen.
        </Reveal>
        <Reveal as="a" className="cta" href="#was-ist-das">
          Mehr erfahren
        </Reveal>
        <Reveal as="div" className="hero-card" role="region" aria-label="Kurzüberblick">
          <strong className="card-title">Kurzüberblick</strong>
          <p className="muted">
            Hybride Kampagnen kombinieren Informationsoperationen, Cyberangriffe,
            wirtschaftliche Hebel sowie diplomatische und rechtliche Manöver. Die
            Maßnahmen sind zeitlich abgestimmt, plausibel abstreitbar und zielen darauf,
            Vertrauen zu untergraben, Handlungsspielräume zu verengen und die
            Reaktionsfähigkeit der Zielgesellschaft zu testen.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
