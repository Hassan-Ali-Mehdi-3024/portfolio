import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RentCentral — Case Study — Hassan Ali Mehdi",
  description:
    "A multi-agent dealmaker for US real estate agents. Integrated Zillow into an agentic workflow for offering, negotiation, and follow-up.",
};

export default function RentCentral() {
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
          <div className="case-big-num">01</div>

          <div className="case-tag">US Real Estate · Copilot</div>
          <h1>
            RentCentral<span className="period">.</span>
          </h1>
          <p className="case-pitch">
            A multi-agent{" "}
            <span className="accent">dealmaker</span> for US real estate
            agents — before &quot;agent&quot; meant what it means now.
          </p>

          <div className="case-blocks">
            <div className="case-block">
              <div className="case-block-label">What it is</div>
              <div className="case-block-body">
                A copilot that plugs into{" "}
                <span className="accent">Zillow</span> and other listing
                platforms and runs the deal cycle end-to-end. Offering,
                negotiation, appointment-setting, and follow-up — handled
                inside a single agentic workflow rather than bounced between
                humans and tools.
              </div>
            </div>

            <div className="case-block">
              <div className="case-block-label">The shape of it</div>
              <div className="case-block-body">
                Multiple coordinated agents, each responsible for one stage of
                the pipeline, sharing context through a central state. The
                human agent stays in the loop for approvals but never has to
                manually move a lead from one step to the next.
              </div>
            </div>

            <div className="case-block">
              <div className="case-block-label">Stack</div>
              <div className="case-chips">
                <span className="case-chip">Multi-Agent</span>
                <span className="case-chip">Zillow API</span>
                <span className="case-chip">Orchestration</span>
                <span className="case-chip">RAG</span>
              </div>
            </div>
          </div>

          <div className="case-nav-bottom">
            <div />
            <Link href="/case-studies/luxe-maintenance" className="case-nav-link">
              Next: Luxe Maintenance →
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
