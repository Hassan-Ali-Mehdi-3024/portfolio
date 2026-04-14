import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Turbo-Learn — Case Study — Hassan Ali Mehdi",
  description:
    "An educational product that turns any uploaded document into quizzes, flashcards, and a chat tutor. Gemini API under the hood.",
};

export default function TurboLearn() {
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
          <div className="case-big-num">05</div>

          <div className="case-tag">Education · Gemini API</div>
          <h1>
            Turbo-Learn<span className="period">.</span>
          </h1>
          <p className="case-pitch">
            The first system where I realised AI could{" "}
            <span className="accent">
              replace entire categories of static software
            </span>
            .
          </p>

          <div className="case-blocks">
            <div className="case-block">
              <div className="case-block-label">What it is</div>
              <div className="case-block-body">
                An educational product that takes any uploaded document and
                turns it into{" "}
                <span className="accent">
                  quizzes, flashcards, and a chat tutor
                </span>
                . Upload a PDF, get a study set and a tutor you can
                interrogate. Gemini API under the hood.
              </div>
            </div>

            <div className="case-block">
              <div className="case-block-label">The shape of it</div>
              <div className="case-block-body">
                Document ingestion feeds into a generation layer that produces
                the three learning modes from the same source. The tutor holds
                context across the document so follow-up questions stay
                grounded in what the student actually uploaded.
              </div>
            </div>

            <div className="case-block">
              <div className="case-block-label">Stack</div>
              <div className="case-chips">
                <span className="case-chip">Gemini API</span>
                <span className="case-chip">Document AI</span>
                <span className="case-chip">RAG</span>
                <span className="case-chip">EdTech</span>
              </div>
            </div>
          </div>

          <div className="case-nav-bottom">
            <Link href="/case-studies/beam-and-bricks" className="case-nav-link">
              ← Prev: Beam &amp; Bricks
            </Link>
            <div />
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
