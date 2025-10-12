import { useMemo, useState } from 'react';
import Reveal from '../Reveal.jsx';
import {
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
} from '../../data/content.js';

const sections = [
  {
    id: 'was-ist-das',
    title: 'Überblick & Definition',
    entries: [
      {
        title: 'Was bedeutet „hybride Kriegsführung“?',
        text: 'Der Begriff beschreibt die bewusste Verknüpfung verschiedener Instrumente der Machtausübung über mehrere Ebenen hinweg.',
      },
    ],
  },
  {
    id: 'bausteine',
    title: 'Typische Bausteine',
    entries: buildingBlocks,
  },
  {
    id: 'beispiele',
    title: 'Ablauf & Fallstudien',
    entries: [...timelineSteps, ...caseStudies],
  },
  {
    id: 'aktuell',
    title: 'Aktuelle Lage',
    entries: currentSituationCards,
  },
  {
    id: 'botfarmen',
    title: 'Bot-Farmen',
    entries: botFarmCards,
  },
  {
    id: 'falseflag',
    title: 'False-Flag',
    entries: falseFlagCards,
  },
  {
    id: 'drohnen',
    title: 'Drohnenangriffe',
    entries: droneCards,
  },
  {
    id: 'erkennen',
    title: 'Desinformation erkennen',
    entries: detectionCards,
  },
  {
    id: 'schutz',
    title: 'Schutz & Handlungstipps',
    entries: citizenCards,
  },
  {
    id: 'quellen',
    title: 'Quellen & Links',
    entries: sources,
  },
  {
    id: 'faq',
    title: 'FAQ',
    entries: faqItems.map((item) => ({
      title: item.question,
      text: item.answer,
    })),
  },
];

const normalize = (value) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

function matches(entry, query) {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return false;

  const fields = [entry.title, entry.text]?.filter(Boolean) ?? [];
  return fields.some((field) => normalize(field).includes(normalizedQuery));
}

export default function SearchSection() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      return [];
    }

    return sections.flatMap((section) =>
      section.entries
        .filter((entry) => matches(entry, trimmed))
        .map((entry) => ({
          sectionId: section.id,
          sectionTitle: section.title,
          title: entry.title,
          text: entry.text,
        })),
    );
  }, [query]);

  const hasQuery = query.trim().length > 0;

  return (
    <section id="suche">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Inhalte durchsuchen
        </Reveal>
        <Reveal
          as="form"
          className="search-form"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="site-search" className="search-label">
            Suchbegriff
          </label>
          <input
            id="site-search"
            type="search"
            className="search-input"
            placeholder="Begriffe wie Desinformation, Drohnen, Bot-Farmen …"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <p className="muted text-sm">
            Treffer zeigen relevante Abschnitte und verlinken direkt zur Stelle.
          </p>
        </Reveal>

        {hasQuery ? (
          results.length > 0 ? (
            <div className="grid search-results">
              {results.map((result) => (
                <Reveal as="article" className="card" key={`${result.sectionId}-${result.title}`}>
                  <span className="muted text-sm">{result.sectionTitle}</span>
                  <h3>{result.title}</h3>
                  <p className="muted">{result.text}</p>
                  <a href={`#${result.sectionId}`} className="text-sm">
                    Zum Abschnitt
                  </a>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal as="p" className="muted">
              Keine Treffer – versuche es mit einem anderen Begriff.
            </Reveal>
          )
        ) : (
          <Reveal as="p" className="muted">
            Tipp: Suche nach Schlagworten wie „Informationsoperationen“, „Cyberangriffe“ oder „Resilienz“.
          </Reveal>
        )}
      </div>
    </section>
  );
}
