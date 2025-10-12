import Header from './components/Header.jsx';
import Reveal from './components/Reveal.jsx';
import {
  navItems,
  buildingBlocks,
  timelineSteps,
  caseStudies,
  currentSituationCards,
  botFarmCards,
  falseFlagCards,
  droneCards,
  detectionCards,
  citizenCards,
  sources,
  faqItems,
} from './data/content.js';

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header navItems={navItems} />
      <main id="main">
        <HeroSection />
        <DefinitionSection />
        <BuildingBlocksSection />
        <CaseStudiesSection />
        <CurrentSituationSection />
        <BotFarmsSection />
        <FalseFlagSection />
        <DronesSection />
        <DetectionSection />
        <CitizenSection />
        <SourcesSection />
        <FaqSection />
      </main>
      <FooterSection year={currentYear} />
    </>
  );
}

function HeroSection() {
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
          Hybride Kriegsführung bündelt militärische und nicht-militärische
          Werkzeuge, um Staaten zu schwächen, Entscheidungen zu verzerren und
          gesellschaftliche Spaltungen auszunutzen. Statt einer offenen
          Kriegserklärung entstehen Druck, Verwirrung und Kosten – oft so
          dosiert, dass Eskalationsschwellen nicht eindeutig überschritten
          werden. Diese Seite bietet einen fundierten Einstieg mit Beispielen
          und praxisnahen Hinweisen.
        </Reveal>
        <Reveal as="a" className="cta" href="#was-ist-das">
          Mehr erfahren
        </Reveal>
        <Reveal as="div" className="hero-card" role="region" aria-label="Kurzüberblick">
          <strong className="card-title">Kurzüberblick</strong>
          <p className="muted">
            Hybride Kampagnen kombinieren Informationsoperationen, Cyberangriffe,
            wirtschaftliche Hebel sowie diplomatische und rechtliche Manöver. Die
            Maßnahmen sind zeitlich abgestimmt, plausibel abstreitbar und zielen
            darauf, Vertrauen zu untergraben, Handlungsspielräume zu verengen und
            die Reaktionsfähigkeit der Zielgesellschaft zu testen.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function DefinitionSection() {
  return (
    <section id="was-ist-das">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Was bedeutet „hybride Kriegsführung“?
        </Reveal>
        <Reveal as="p">
          Der Begriff beschreibt die bewusste Verknüpfung verschiedener Instrumente
          der Machtausübung über mehrere Ebenen hinweg. Militärische Drohkulisse,
          digitale Störungen, wirtschaftlicher Druck, rechtliche Winkelzüge und
          aggressive Narrativarbeit greifen ineinander. Entscheidend ist weniger
          die Einzelmaßnahme als die Gesamtwirkung: Unsicherheit erzeugen,
          Institutionen belasten, gesellschaftliche Lager gegeneinander ausspielen
          und politische Entscheidungen im Sinne des Angreifers beeinflussen.
        </Reveal>
      </div>
    </section>
  );
}

function BuildingBlocksSection() {
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

function CaseStudiesSection() {
  return (
    <section id="beispiele">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Beispielhafter Ablauf & Fallstudien
        </Reveal>
        <div className="timeline">
          {timelineSteps.map((step) => (
            <Reveal as="div" className="timeline-item" key={step.title}>
              <h4>{step.title}</h4>
              <p className="muted">{step.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="grid case-study-grid">
          {caseStudies.map((study) => (
            <Reveal as="article" className="card" key={study.title}>
              {study.badge ? <span className="badge">{study.badge}</span> : null}
              <h3>{study.title}</h3>
              <p className="muted">{study.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CurrentSituationSection() {
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

function BotFarmsSection() {
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

function FalseFlagSection() {
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

function DronesSection() {
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

function DetectionSection() {
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

function CitizenSection() {
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

function SourcesSection() {
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

function FaqSection() {
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

function FooterSection({ year }) {
  return (
    <footer>
      <div className="container">
        <p>
          <strong>Hinweis:</strong> Diese Seite bietet einen allgemeinen
          Überblick und ersetzt keine behördlichen Informationen.
        </p>
        <p>
          Stand: 3. Oktober 2025 · © {year} Hybride Kriegsführung – Einfach
          erklärt · Copyright by Dimitri B
        </p>
      </div>
    </footer>
  );
}
