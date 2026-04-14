import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luxe Maintenance Corp — Case Study — Hassan Ali Mehdi",
  description:
    "A full operations system for a field-services company. AI handles scraping, lead qualification, estimating, technician assignment, and invoicing.",
};

export default function LuxeMaintenance() {
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
            <Link href="/case-studies">
              <span className="nav-text">← All Cases</span>
            </Link>
            <Link href="/#contact">
              <span className="nav-text">Contact</span>
            </Link>
          </div>
        </nav>

        <article className="case-detail">
          <div className="case-big-num">02</div>

          <div className="case-tag">Field Ops · Full System</div>
          <h1>
            Luxe Maintenance<span className="period">.</span>
          </h1>
          <p className="case-pitch">
            An ops system where I watched{" "}
            <span className="accent">AI quietly run a business</span> in the
            background.
          </p>

          <div className="case-blocks">
            <div className="case-block">
              <div className="case-block-label">What it is</div>
              <div className="case-block-body">
                A full operations system for a field-services company. AI
                handles{" "}
                <span className="accent">
                  scraping, lead qualification, estimating, technician
                  assignment, and invoicing
                </span>
                . On top of that, client-facing portals for tracking, billing,
                and job history.
              </div>
            </div>

            <div className="case-block">
              <div className="case-block-label">The shape of it</div>
              <div className="case-block-body">
                The AI sits at the ingestion and decision layer — it finds
                leads, qualifies them, quotes them, and routes them to the
                right technician. The human side of the business reviews, signs
                off, and does the on-site work. Everything else runs without
                intervention.
              </div>
            </div>

            <div className="case-block">
              <div className="case-block-label">Stack</div>
              <div className="case-chips">
                <span className="case-chip">Automation</span>
                <span className="case-chip">Scraping</span>
                <span className="case-chip">Client Portal</span>
                <span className="case-chip">Invoicing</span>
              </div>
            </div>
          </div>

          <div className="case-nav-bottom">
            <Link href="/case-studies/rentcentral" className="case-nav-link">
              ← Prev: RentCentral
            </Link>
            <Link href="/case-studies/autorecai" className="case-nav-link">
              Next: AutoRecAI →
            </Link>
          </div>
        </article>

        <footer>
          <div>&copy; 2026 Hassan &middot; Codantrix Labs</div>
          <div>
            <a href="https://linkedin.com/in/hassan-ali-mehdi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            &nbsp;&middot;&nbsp;
            <a href="mailto:hello@hassanalimehdi.dev">Email</a>
            &nbsp;&middot;&nbsp;
            <a href="https://github.com/Hassan-Ali-Mehdi-3024" target="_blank" rel="noopener noreferrer">GitHub</a>
            &nbsp;&middot;&nbsp;
            <a href="https://wa.me/923004101153" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </footer>
      </div>
    </>
  );
}
