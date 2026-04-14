import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../contact-form";

export const metadata: Metadata = {
  title: "Contact — Hassan Ali Mehdi",
  description:
    "Get in touch. Email, WhatsApp, LinkedIn, or send a message directly. Based in Lahore, available worldwide.",
};

export default function Contact() {
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
            <Link href="/case-studies">
              <span className="nav-text">Cases</span>
            </Link>
            <Link href="/contact" className="nav-active">
              <span className="nav-text">Contact</span>
            </Link>
          </div>
        </nav>

        <header className="hero">
          <div className="eyebrow">Get in touch</div>
          <h1>
            Let&apos;s talk<span className="period">.</span>
          </h1>
          <p className="hero-intro">
            If you need the thing{" "}
            <span className="accent">actually shipped</span> — I&apos;m one
            message away. Available for collaborations, consulting, and
            building agentic systems end-to-end.
          </p>
        </header>

        <section className="contact-page-section">
          {/* Contact channels */}
          <div className="contact-channels">
            <a
              href="mailto:hello@hassanalimehdi.dev"
              className="contact-channel-card"
            >
              <div className="channel-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div className="channel-label">Email</div>
              <div className="channel-value">hello@hassanalimehdi.dev</div>
              <div className="channel-hint">Best for project inquiries</div>
            </a>

            <a
              href="https://wa.me/923004101153"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card"
            >
              <div className="channel-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </div>
              <div className="channel-label">WhatsApp</div>
              <div className="channel-value">+92 300 410 1153</div>
              <div className="channel-hint">Quick questions &amp; calls</div>
            </a>

            <a
              href="https://linkedin.com/in/hassan-ali-mehdi"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card"
            >
              <div className="channel-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div className="channel-label">LinkedIn</div>
              <div className="channel-value">hassan-ali-mehdi</div>
              <div className="channel-hint">Connect &amp; follow updates</div>
            </a>

            <a
              href="https://github.com/Hassan-Ali-Mehdi-3024"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card"
            >
              <div className="channel-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </div>
              <div className="channel-label">GitHub</div>
              <div className="channel-value">Hassan-Ali-Mehdi-3024</div>
              <div className="channel-hint">See what I&apos;m building</div>
            </a>
          </div>

          {/* Details row */}
          <div className="contact-details-row">
            <div className="contact-detail-item">
              <div className="detail-label">Based in</div>
              <div className="detail-value">Lahore, Pakistan</div>
            </div>
            <div className="contact-detail-item">
              <div className="detail-label">Availability</div>
              <div className="detail-value">Remote worldwide</div>
            </div>
            <div className="contact-detail-item">
              <div className="detail-label">Role</div>
              <div className="detail-value">Founder, Codantrix Labs</div>
            </div>
            <div className="contact-detail-item">
              <div className="detail-label">Response time</div>
              <div className="detail-value">Usually within 24 hours</div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-section">
            <div className="contact-form-heading">
              <div className="section-label">Or send a message directly</div>
              <h2>Drop me a line.</h2>
            </div>
            <ContactForm />
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
