import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <header className="container header">
        <Link href="/" className="logo" aria-label="Accueil - Concours de M?decine">
          <span style={{ fontWeight: 800 }}>Concours M?decine</span>
        </Link>
        <nav className="nav">
          <Link href="/cours">Cours</Link>
          <Link href="/">Accueil</Link>
        </nav>
      </header>
      <main className="container">{children}</main>
      <footer className="container footer">? {new Date().getFullYear()} Concours M?decine ? R?visions et m?thodologie</footer>
    </div>
  );
}
