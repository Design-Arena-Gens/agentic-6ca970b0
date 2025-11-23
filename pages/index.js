import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { topics } from "../lib/topics";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Concours de M?decine ? R?visions et Cours</title>
        <meta name="description" content="Cours synth?tiques et m?thodologie pour r?ussir le concours de m?decine." />
      </Head>
      <div className="card">
        <h1 style={{ marginTop: 0 }}>R?ussir le concours de m?decine</h1>
        <p>
          Cours en fran?ais, synth?ses visuelles et m?thodes de travail pour les mati?res cl?s: anatomie, physiologie, biochimie, biophysique, chimie orga, statistiques et biologie cellulaire.
        </p>
        <div style={{ marginTop: 12 }}>
          {topics.map((t) => (
            <span className="tag" key={t.slug}>{t.title}</span>
          ))}
        </div>
      </div>

      <section style={{ marginTop: 24 }}>
        <h2>Par o? commencer ?</h2>
        <div className="grid">
          {topics.map((t) => (
            <div className="card" key={t.slug}>
              <Link className="topic-link" href={`/cours/${t.slug}`}>{t.title}</Link>
              <p style={{ margin: 0 }}>{t.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 32 }} className="card">
        <h2 style={{ marginTop: 0 }}>M?thodologie express</h2>
        <ul>
          <li><strong>Active recall</strong>: tester la restitution sans cours sous les yeux.</li>
          <li><strong>Spaced repetition</strong>: planifier des r?visions ? J1, J3, J7, J14?</li>
          <li><strong>Exercices cibl?s</strong>: prioriser les annales et pi?ges r?currents.</li>
        </ul>
        <Link href="/cours">Voir tous les cours ?</Link>
      </section>
    </Layout>
  );
}
