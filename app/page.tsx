const navItems = [
  { label: "Why", href: "#why" },
  { label: "What We Do", href: "#capabilities" },
  { label: "How We Work", href: "#model" },
  { label: "Contact", href: "#contact" },
];

const logoStrip = [
  "Financial services",
  "Logistics",
  "Professional services",
  "Healthcare administration",
  "Operations teams",
  "Leadership teams",
];

const capabilities = [
  {
    title: "Audit the work",
    description:
      "We map how teams actually operate and identify where AI can save the most time, money, or operational effort.",
  },
  {
    title: "Deploy what already works",
    description:
      "We use the right existing tools when they already solve the problem. No ego, no unnecessary rebuilding.",
  },
  {
    title: "Use our internal tools",
    description:
      "When off-the-shelf software is not enough, we bring the internal tools and workflows we have already developed.",
  },
  {
    title: "Build from scratch when needed",
    description:
      "If nothing useful exists, we build purpose-built systems for the client and make sure they are robust enough to last.",
  },
  {
    title: "Train teams to use it",
    description:
      "We do not stop at implementation. We train teams until the tools are used well and confidently inside the business.",
  },
  {
    title: "Stay until it sticks",
    description:
      "We remain embedded long enough to prove the transformation is real, measurable, and durable after rollout.",
  },
];

const operatingSystem = [
  {
    step: "01",
    title: "Embed, do not advise from afar",
    description:
      "We work inside the company, alongside the people doing the work, so the change is grounded in reality.",
  },
  {
    step: "02",
    title: "Use the best tool for the job",
    description:
      "We use existing products where they fit, our own tools where they help, and custom builds only when nothing else is good enough.",
  },
  {
    step: "03",
    title: "Measure what changed",
    description:
      "If we cannot show impact in time saved, quality improved, or waste reduced, the work is not finished.",
  },
];

const outcomes = [
  "We are not an agency.",
  "We are not a consultancy.",
  "We are an embedded AI lab that helps organisations actually use AI.",
];

const sectors = [
  "Mid-to-large businesses ready to move",
  "Forward-thinking leadership teams",
  "Organisations where efficiency is mission critical",
  "Teams building for durable operational change",
];

const labSignals = [
  {
    num: "01",
    title: "Hands-on delivery",
    detail: "We embed with teams and work inside the process.",
  },
  {
    num: "02",
    title: "Pragmatic tooling",
    detail: "Existing tools first, custom builds only when needed.",
  },
  {
    num: "03",
    title: "Measurable impact",
    detail: "Every engagement is tied to operational outcomes.",
  },
];

export default function Home() {
  return (
    <main className="site">
      <header className="topbar">
        <a href="#" className="brand">
          <span className="brand-mark" />
          <span>TDT Technologies</span>
        </a>

        <nav className="nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="topbar-cta" href="#contact">
          Start a conversation
        </a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">TDT Technologies Lab</p>
          <h1>
            We help organisations actually use <em>AI</em>, not just talk about
            it.
          </h1>
          <p className="lede">
            We are an embedded AI lab that comes into a company, gets its hands
            dirty, and helps rebuild how work happens from the inside. Smarter
            processes. Less wasted time. Real results.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="primary-link">
              Start an engagement
            </a>
            <a href="#why" className="text-link">
              Read the thesis
            </a>
          </div>
        </div>

        <div className="hero-aside">
          <div className="hero-note">
            <p className="note-label">How to think about us</p>
            <p>
              Not a software vendor. Not a deck-producing consultancy. An
              embedded lab focused on practical AI transformation.
            </p>
          </div>

          <div className="hero-grid">
            <div>
              <span>Audit</span>
              <p>Find where AI can remove waste and improve throughput.</p>
            </div>
            <div>
              <span>Deploy</span>
              <p>Use the right tools, internal systems, or custom builds.</p>
            </div>
            <div>
              <span>Embed</span>
              <p>Stay long enough to make sure the change is real and sticks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Ideal partners">
        {logoStrip.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className="signal-band" aria-label="Lab principles">
        {labSignals.map((item) => (
          <article key={item.title} className="signal-card">
            <span className="signal-card-num">{item.num}</span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="intro-band" id="why">
        <div className="band-heading">
          <p className="section-kicker">Why we exist</p>
          <h2>Most companies know AI matters. Very few know what to do with it.</h2>
        </div>
        <div className="band-copy">
          <p>
            Many organisations have seen the demos, read the articles, and
            bought a few subscriptions, but nothing meaningful has changed in
            how the company actually works.
          </p>
          <p>
            That gap is where we operate. We close it by rebuilding workflows
            from the inside and making AI useful in the day-to-day life of the
            business.
          </p>
        </div>
      </section>

      <section className="capability-section" id="capabilities">
        <div className="section-head">
          <div>
            <p className="section-kicker">What we actually do</p>
            <h2>We stay far past the kickoff meeting.</h2>
          </div>
          <div className="section-head-body">
            <p>
              We work until the transformation is real — not until the
              presentation looks good. Six capabilities, one standard: it either
              works inside the business or we are not finished.
            </p>
          </div>
        </div>

        <div className="capability-list">
          {capabilities.map((item, i) => (
            <article key={item.title} className="capability-item">
              <span className="cap-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-band">
        <div className="dark-band-copy">
          <p className="section-kicker">The simple version</p>
          <h2>We exist to make AI useful inside the organisation, not impressive in the boardroom.</h2>
        </div>
        <div className="dark-band-list">
          {outcomes.map((item) => (
            <div key={item} className="dark-band-item">
              <span />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="process-section" id="model">
        <div className="section-head">
          <div>
            <p className="section-kicker">How we work</p>
            <h2>We operate like a lab.</h2>
          </div>
          <div className="section-head-body">
            <p>
              Embedded, pragmatic, fast, and accountable. Three principles that
              separate a lab from a consultancy.
            </p>
          </div>
        </div>

        <div className="process-timeline">
          {operatingSystem.map((item) => (
            <article key={item.step} className="timeline-item">
              <span className="timeline-step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fit-section" id="fit">
        <div className="fit-copy">
          <p className="section-kicker">Who we serve</p>
          <h2>We work best with organisations ready to move.</h2>
          <p>
            We are focused on organisations ready to move: businesses with
            serious leadership intent, messy workflows, and a real need for
            efficiency gains that can be proven.
          </p>
        </div>
        <div className="pill-grid">
          {sectors.map((sector) => (
            <span key={sector} className="pill">
              {sector}
            </span>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <h2>Bring us in when you want the work to change, not just the presentation.</h2>
          <p>
            We partner with teams that are ready to move from AI interest to AI
            adoption. If your organisation wants an embedded lab, not an
            outside observer, we should talk.
          </p>
        </div>
        <div className="contact-actions">
          <a className="primary-link" href="mailto:d@torkura.com">
            d@torkura.com
          </a>
          <p className="contact-meta">
            Global, working with leadership teams ready to build.
          </p>
        </div>
      </section>

      <footer className="footer">
        <a href="#" className="brand">
          <span className="brand-mark" />
          <span>TDT Technologies</span>
        </a>
        <div className="footer-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
