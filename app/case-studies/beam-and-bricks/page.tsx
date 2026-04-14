import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beam & Bricks — Case Study — Hassan Ali Mehdi",
  description:
    "A full-stack platform for a construction company with project tracking, client dashboards, inventory, and investor portals with live returns.",
};

export default function BeamAndBricks() {
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
          <div className="case-big-num">04</div>

          <div className="case-tag">Construction · Full-Stack</div>
          <h1>
            Beam &amp; Bricks<span className="period">.</span>
          </h1>
          <p className="case-pitch">
            A full-stack platform with{" "}
            <span className="accent">live percentages and returns</span> for a
            construction company and its investors.
          </p>

          <div className="case-blocks">
            <div className="case-block">
              <div className="case-block-label">What it is</div>
              <div className="case-block-body">
                A platform built for a construction company that covers{" "}
                <span className="accent">
                  project tracking, client progress dashboards, inventory
                  in/out, and investor portals
                </span>
                . Every stakeholder — operator, client, investor — gets the
                view they actually need.
              </div>
            </div>

            <div className="case-block">
              <div className="case-block-label">The shape of it</div>
              <div className="case-block-body">
                Three audiences, one data layer. Operators see inventory and
                project state. Clients see progress. Investors see live
                percentages and returns. The design work was less about
                features and more about building the right view for each role.
              </div>
            </div>

            <div className="case-block">
              <div className="case-block-label">Stack</div>
              <div className="case-chips">
                <span className="case-chip">Full-Stack</span>
                <span className="case-chip">Inventory</span>
                <span className="case-chip">Investor Portal</span>
                <span className="case-chip">Dashboards</span>
              </div>
            </div>
          </div>

          <div className="case-nav-bottom">
            <Link href="/case-studies/autorecai" className="case-nav-link">
              ← Prev: AutoRecAI
            </Link>
            <Link href="/case-studies/turbo-learn" className="case-nav-link">
              Next: Turbo-Learn →
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
