import { useEffect, useMemo, useRef, useState } from 'react';

export default function Header({ navItems }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const previousOverflow = useRef('');

  useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined;
    }

    if (isOpen) {
      previousOverflow.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = previousOverflow.current || '';
      };
    }

    document.body.style.overflow = previousOverflow.current || '';

    return undefined;
  }, [isOpen]);

  const navLinks = useMemo(
    () =>
      navItems.map((item) => (
        <li key={item.href}>
          <a href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        </li>
      )),
    [navItems],
  );

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className="site-header" role="banner">
        <div className="container header-row">
          <span className="brand">
            <span className="logo" aria-hidden="true" />
            <span>Hybride Kriegsführung</span>
          </span>
          <button
            type="button"
            className={`menu-toggle${isOpen ? ' is-open' : ''}`}
            aria-controls="main-drawer"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            title="Menü"
            onClick={toggleMenu}
          >
            <span className="burger" aria-hidden="true" />
          </button>
        </div>
      </header>

      <aside
        id="main-drawer"
        className={`drawer${isOpen ? ' is-open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="backdrop" tabIndex={-1} onClick={() => setIsOpen(false)} />
        <nav className="panel" aria-label="Hauptnavigation">
          <ul className="nav-list">{navLinks}</ul>
        </nav>
      </aside>
    </>
  );
}
