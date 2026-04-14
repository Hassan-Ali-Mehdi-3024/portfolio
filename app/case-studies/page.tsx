import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies — Hassan Ali Mehdi",
  description:
    "Five production systems, built and shipped. Real estate, field ops, data pipelines, construction, education.",
};

const cases = [
  {
    num: "01",
    title: "RentCentral",
    tag: "US Real Estate · Copilot",
    slug: "rentcentral",
    pitch:
      "A multi-agent dealmaker for US real estate agents — before \"agent\" meant what it means now.",
  },
  {
    num: "02",
    title: "Luxe Maintenance Corp",
    tag: "Field Ops · Full System",
    slug: "luxe-maintenance",
    pitch:
      "An ops system where AI quietly ran a business in the background.",
  },
  {
    num: "03",
    title: "AutoRecAI",
    tag: "UK Market · Data Pipeline",
    slug: "autorecai",
    pitch:
      "An AI-integrated scraper that feeds structured intelligence into downstream sales workflows.",
  },
  {
    num: "04",
    title: "Beam & Bricks",
    tag: "Construction · Full-Stack",
    slug: "beam-and-bricks",
    pitch:
      "A full-stack platform with live percentages and returns for a construction company and its investors.",
  },
  {
    num: "05",
    title: "Turbo-Learn",
    tag: "Education · Gemini API",
    slug: "turbo-learn",
    pitch:
      "The first system where I realised AI could replace entire categories of static software.",
  },
];

export default function CaseStudies() {
  return (
    <>
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="container">
        <nav>
          <Link href="/" className="nav-mark">
            Hassan<span>.</span>
          </Link>
          <div className="nav-links">
            <Link href="/#build">
              <span className="nav-text">Build</span>
            </Link>
            <Link href="/#shipped">
              <span className="nav-text">Shipped</span>
            </Link>
            <Link href="/case-studies" className="nav-active">
              <span className="nav-text">Cases</span>
            </Link>
            <Link href="/#contact">
              <span className="nav-text">Contact</span>
            </Link>
          </div>
        </nav>

        <header className="hero">
          <div className="eyebrow">Case Studies · 2026</div>
          <h1>
            Case studies<span className="period">.</span>
          </h1>
          <p className="hero-intro">
            Five production systems, built and shipped. Real estate, field ops,
            data pipelines, construction, education. Most of them{" "}
            <span className="accent">
              agentic before the word was fashionable
            </span>
            .
          </p>
        </header>

        <section>
          <div className="cases-list">
            {cases.map((c) => (
              <Link
                href={`/case-studies/${c.slug}`}
                key={c.slug}
                className="case-index-card"
              >
                <div className="case-index-num">{c.num}</div>
                <div className="case-index-body">
                  <div className="case-index-title">{c.title}</div>
                  <div className="case-index-tag">{c.tag}</div>
                  <div className="case-index-pitch">{c.pitch}</div>
                </div>
                <div className="case-index-arrow">→</div>
              </Link>
            ))}
          </div>
        </section>

        <footer>
          <div>&copy; 2026 Hassan &middot; Codantrix Labs</div>
          <div>
            <a
              href="https://linkedin.com/in/hassan-ali-mehdi"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            &nbsp;&middot;&nbsp;{" "}
            <a href="mailto:hello@hassanalimehdi.dev">Email</a>{" "}
            &nbsp;&middot;&nbsp;{" "}
            <a
              href="https://github.com/Hassan-Ali-Mehdi-3024"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            &nbsp;&middot;&nbsp;{" "}
            <a
              href="https://wa.me/923004101153"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
