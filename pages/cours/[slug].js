import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { topics, getTopicBySlug } from "../../lib/topics";

export default function TopicPage({ topic }) {
  if (!topic) {
    return (
      <Layout>
        <Head>
          <title>Cours introuvable ? Concours de M?decine</title>
        </Head>
        <div className="card">
          <h1 style={{ marginTop: 0 }}>Cours introuvable</h1>
          <p>Le cours demand? n'existe pas.</p>
          <p>
            <Link href="/cours">? Retour aux cours</Link>
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{topic.title} ? Concours de M?decine</title>
        <meta name="description" content={topic.summary} />
      </Head>
      <article className="card prose">
        <p>
          <Link href="/cours">? Tous les cours</Link>
        </p>
        <h1 style={{ marginTop: 0 }}>{topic.title}</h1>
        <div style={{ marginBottom: 12 }}>
          {topic.tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
        <Section content={topic.content} />
      </article>
    </Layout>
  );
}

function Section({ content }) {
  return (
    <div>
      {content.split("\n").map((line, idx) => {
        if (line.startsWith("## ")) {
          return (
            <h2 key={idx}>{line.replace("## ", "")}</h2>
          );
        }
        if (line.startsWith("- ")) {
          return <li key={idx}>{line.replace("- ", "")}</li>;
        }
        if (line.trim() === "") {
          return <div key={idx} style={{ height: 8 }} />;
        }
        return <p key={idx}>{line}</p>;
      })}
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: topics.map((t) => ({ params: { slug: t.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const topic = getTopicBySlug(params.slug) || null;
  return { props: { topic } };
}
