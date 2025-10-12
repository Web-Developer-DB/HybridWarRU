import Reveal from '../Reveal.jsx';

export default function DefinitionSection() {
  return (
    <section id="was-ist-das">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Was bedeutet „hybride Kriegsführung“?
        </Reveal>
        <Reveal as="p">
          Der Begriff beschreibt die bewusste Verknüpfung verschiedener Instrumente der
          Machtausübung über mehrere Ebenen hinweg. Militärische Drohkulisse, digitale
          Störungen, wirtschaftlicher Druck, rechtliche Winkelzüge und aggressive
          Narrativarbeit greifen ineinander. Entscheidend ist weniger die Einzelmaßnahme
          als die Gesamtwirkung: Unsicherheit erzeugen, Institutionen belasten,
          gesellschaftliche Lager gegeneinander ausspielen und politische Entscheidungen im
          Sinne des Angreifers beeinflussen.
        </Reveal>
      </div>
    </section>
  );
}
