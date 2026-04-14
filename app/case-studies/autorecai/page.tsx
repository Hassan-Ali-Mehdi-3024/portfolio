import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AutoRecAI — Case Study — Hassan Ali Mehdi",
  description:
    "An AI-integrated scraper for the UK market. NHS data, LinkedIn profiles, and website extraction feeding structured intelligence into sales workflows.",
};

export default function AutoRecAI() {
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
          <div className="case-big-num">03</div>

          <div className="case-tag">UK Market · Data Pipeline</div>
          <h1>
            AutoRecAI<span className="period">.</span>
          </h1>
          <p className="case-pitch">
            An AI-integrated scraper that feeds{" "}
            <span className="accent">structured intelligence</span> into
            downstream sales workflows.
          </p>

          <div className="case-blocks">
            <div className="case-block">
              <div className="case-block-label">What it is</div>
              <div className="case-block-body">
                A data extraction system built for the UK market. It pulls from{" "}
                <span className="accent">
                  NHS data, LinkedIn profiles, and general website sources
                </span>
                , then cleans and structures the output into something sales
                teams can actually use.
              </div>
            </div>

            <div className="case-block">
              <div className="case-block-label">The shape of it</div>
              <div className="case-block-body">
                The scraper layer handles the heterogeneous input side. The AI
                layer normalises, deduplicates, and enriches — turning raw
                extraction into structured records that drop into a sales CRM
                without human cleanup.
              </div>
            </div>

            <div className="case-block">
              <div className="case-block-label">Stack</div>
              <div className="case-chips">
                <span className="case-chip">Web Scraping</span>
                <span className="case-chip">Data Pipeline</span>
                <span className="case-chip">Enrichment</span>
                <span className="case-chip">UK Market</span>
              </div>
            </div>
          </div>

          <div className="case-nav-bottom">
            <Link href="/case-studies/luxe-maintenance" className="case-nav-link">
              ← Prev: Luxe Maintenance
            </Link>
            <Link href="/case-studies/beam-and-bricks" className="case-nav-link">
              Next: Beam &amp; Bricks →
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
