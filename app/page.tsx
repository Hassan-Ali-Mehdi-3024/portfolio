import ContactForm from "./contact-form";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="container">
        <nav>
          <div className="nav-mark">
            Hassan<span>.</span>
          </div>
          <div className="nav-links">
            <a href="#build">
              <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M12 12h.01"/><path d="M17 12h.01"/><path d="M7 12h.01"/></svg>
              <span className="nav-text">Build</span>
            </a>
            <a href="#shipped">
              <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              <span className="nav-text">Shipped</span>
            </a>
            <Link href="/case-studies">
              <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              <span className="nav-text">Cases</span>
            </Link>
            <Link href="/contact">
              <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span className="nav-text">Contact</span>
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <header className="hero">
          <div className="eyebrow">Agentic &middot; AI &middot; Architect</div>
          <div className="greeting">Hi, I&apos;m</div>
          <h1>
            Hassan Ali Mehdi<span className="period">.</span>
          </h1>
          <p className="hero-intro">
            I build <span className="accent">agentic AI systems</span> for
            teams that need the thing actually shipped, not another strategy
            deck. Founder of <span className="accent">Codantrix Labs</span>.
            Five production systems shipped across education, real estate,
            construction, lead-gen, and field ops — most of them agentic before
            the word was fashionable.
          </p>
          <div className="hero-meta">
            <span>Based in Lahore</span>
            <span>Founder, Codantrix Labs</span>
            <span>Open to collaborations</span>
          </div>
        </header>

        {/* WHAT I BUILD */}
        <section id="build">
          <div className="section-head">
            <div className="section-label">01 / What I build</div>
            <h2>The implementation layer, not the slide deck.</h2>
          </div>
          <div className="build-grid">
            <div className="build-card">
              <div className="build-num">01</div>
              <h3>Multi-agent orchestration &amp; end-to-end agentic workflows</h3>
            </div>
            <div className="build-card">
              <div className="build-num">02</div>
              <h3>RAG systems with hierarchical retrieval</h3>
            </div>
            <div className="build-card">
              <div className="build-num">03</div>
              <h3>
                AI-integrated automation for ops, sales &amp; content pipelines
              </h3>
            </div>
            <div className="build-card">
              <div className="build-num">04</div>
              <h3>Fine-tuning &amp; open-weight model deployment</h3>
            </div>
          </div>
        </section>

        {/* SHIPPED */}
        <section id="shipped">
          <div className="section-head">
            <div className="section-label">02 / Things I&apos;ve shipped</div>
            <h2>Full systems. Not prototypes that die in a notebook.</h2>
          </div>
          <div className="shipped-list">
            <Link href="/case-studies/rentcentral" className="shipped-card">
              <div>
                <div className="ship-title">RentCentral</div>
                <div className="ship-tag">US Real Estate &middot; Copilot</div>
              </div>
              <div className="ship-desc">
                Copilot for US real estate agents. Integrated Zillow and other
                platforms into a workflow that handled offering, negotiation,
                appointment-setting, and follow-up. Effectively a{" "}
                <span className="accent">multi-agent dealmaker</span> before
                &quot;agent&quot; meant what it means now.
              </div>
            </Link>

            <Link href="/case-studies/luxe-maintenance" className="shipped-card">
              <div>
                <div className="ship-title">Luxe Maintenance Corp</div>
                <div className="ship-tag">
                  Field Ops &middot; Full System
                </div>
              </div>
              <div className="ship-desc">
                Full ops system for a field-services company. AI handled
                scraping, lead qualification, estimating, technician assignment,
                and invoicing. Client portals for tracking, billing, and job
                history. One of the first systems where I watched{" "}
                <span className="accent">
                  AI quietly run a business in the background
                </span>
                .
              </div>
            </Link>

            <Link href="/case-studies/autorecai" className="shipped-card">
              <div>
                <div className="ship-title">AutoRecAI</div>
                <div className="ship-tag">
                  UK Market &middot; Data Pipeline
                </div>
              </div>
              <div className="ship-desc">
                AI-integrated web scraper for the UK market. NHS data, LinkedIn
                profiles, general site extraction. Built to feed{" "}
                <span className="accent">structured intelligence</span> into
                downstream sales workflows.
              </div>
            </Link>

            <Link href="/case-studies/beam-and-bricks" className="shipped-card">
              <div>
                <div className="ship-title">Beam &amp; Bricks</div>
                <div className="ship-tag">
                  Construction &middot; Full-Stack
                </div>
              </div>
              <div className="ship-desc">
                Full-stack platform for a construction company. Project tracking,
                client progress dashboards, inventory in/out, investor portals
                showing{" "}
                <span className="accent">live percentages and returns</span>.
              </div>
            </Link>

            <Link href="/case-studies/turbo-learn" className="shipped-card">
              <div>
                <div className="ship-title">Turbo-Learn</div>
                <div className="ship-tag">
                  Education &middot; Gemini API
                </div>
              </div>
              <div className="ship-desc">
                Educational product that turns any uploaded document into
                quizzes, flashcards, and a chat tutor. Gemini API under the
                hood. The first system where I realized AI could{" "}
                <span className="accent">
                  replace entire categories of static software
                </span>
                .
              </div>
            </Link>
          </div>
        </section>

        {/* NEXT */}
        <section id="next">
          <div className="section-head">
            <div className="section-label">03 / What&apos;s next</div>
            <h2>The next chapter.</h2>
          </div>
          <div className="next-wrap">
            <div className="next-lead">
              Codantrix Labs is the next chapter — building{" "}
              <span className="accent">agentic products of my own</span>{" "}
              instead of for clients.
            </div>
            <div className="next-body">
              <strong>GraspEdge</strong> — an agentic visual teaching platform —
              is first in line. More to come. Architecture, system design, and
              decisions are where I spend my hours. AI is the implementation
              layer. The output is full systems.
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="closing" id="contact">
          <div className="closing-quote">
            If you need the thing{" "}
            <span className="accent">actually shipped</span> — let&apos;s talk.
          </div>
          <div className="closing-sub">Lahore &middot; Remote &middot; Worldwide</div>
          <ContactForm />
        </section>

        <footer>
          <div>&copy; 2026 Hassan &middot; Codantrix Labs</div>
          <div>
            <a href="https://linkedin.com/in/hassan-ali-mehdi" target="_blank" rel="noopener noreferrer">LinkedIn</a> &nbsp;&middot;&nbsp;{" "}
            <a href="mailto:hello@hassanalimehdi.dev">Email</a>{" "}
            &nbsp;&middot;&nbsp; <a href="https://github.com/Hassan-Ali-Mehdi-3024" target="_blank" rel="noopener noreferrer">GitHub</a>{" "}
            &nbsp;&middot;&nbsp; <a href="https://wa.me/923004101153" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </footer>
      </div>
    </>
  );
}
