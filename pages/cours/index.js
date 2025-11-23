import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { topics } from "../../lib/topics";
import { useMemo, useState } from "react";

export default function Cours() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return topics;
    return topics.filter(
      (t) =>
        t.title.toLowerCase().includes(query) ||
        t.summary.toLowerCase().includes(query) ||
        t.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [q]);

  return (
    <Layout>
      <Head>
        <title>Tous les cours ? Concours de M?decine</title>
        <meta name="description" content="Liste des cours et synth?ses pour pr?parer le concours de m?decine." />
      </Head>
      <div className="card">
        <h1 style={{ marginTop: 0 }}>Tous les cours</h1>
        <input
          className="search"
          placeholder="Rechercher un cours, un tag, un concept?"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Recherche"
        />
      </div>

      <div className="grid" style={{ marginTop: 16 }}>
        {filtered.map((t) => (
          <div className="card" key={t.slug}>
            <Link className="topic-link" href={`/cours/${t.slug}`}>{t.title}</Link>
            <p style={{ margin: 0 }}>{t.summary}</p>
            <div style={{ marginTop: 8 }}>
              {t.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
