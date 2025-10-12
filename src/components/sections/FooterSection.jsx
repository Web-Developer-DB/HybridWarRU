export default function FooterSection({ year }) {
  return (
    <footer>
      <div className="container">
        <p>
          <strong>Hinweis:</strong> Diese Seite bietet einen allgemeinen Überblick und
          ersetzt keine behördlichen Informationen.
        </p>
        <p>
          Stand: 3. Oktober 2025 · © {year} Hybride Kriegsführung – Einfach erklärt ·
          Copyright by Dimitri B
        </p>
      </div>
    </footer>
  );
}
