// portfolio-sections.jsx
// Page sections — Nav, Hero, Strengths, Featured, Projects, Skills, Experience, Contact

function Nav({ dark, onToggleDark }) {
  return (
    <nav className="nav" data-screen-label="Nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand">
          <div className="nav-mark">SH</div>
          <span>Suheum&nbsp;Heo</span>
        </a>
        <div className="nav-links">
          <a className="nav-link" href="#work">Work</a>
          <a className="nav-link" href="#skills">Skills</a>
          <a className="nav-link" href="#education">Education</a>
          <a className="nav-link" href="#experience">Experience</a>
          <a className="nav-link" href="#contact">Contact</a>
          <button className="nav-link nav-cta btn btn-sm btn-ghost" onClick={onToggleDark}
                  aria-label="Toggle theme" title="Toggle theme">
            {dark ? <I.sun size={15} /> : <I.moon size={15} />}
          </button>
          <a className="btn btn-sm btn-primary nav-cta" href="#contact">
            <I.email size={14}/> Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="container hero" data-screen-label="Hero">
      <div className="hero-grid">
        <div>
          <div className="hero-status">
            <span className="ping"></span>
            <span>Open to SWE / Data internships · Summer 2026</span>
          </div>
          <h1 className="hero-title">
            I build <em>data-driven</em><br/>
            software products.
          </h1>
          <p className="hero-sub">
            Suheum Heo — Computer Science &amp; Data Science at the University of Wisconsin–Madison.
            I design and ship full-stack apps, data pipelines, and grounded LLM tools.
          </p>
          <div className="hero-cta">
            <a className="btn btn-lg btn-primary" href="#work">
              View featured work <I.arrow size={15} className="arrow"/>
            </a>
            <a className="btn btn-lg btn-secondary" href="Suheum_Heo_Resume.pdf" target="_blank" rel="noopener" download>
              <I.download size={15}/> Download résumé
            </a>
          </div>
          <div className="hero-meta">
            <span className="badge"><span style={{color:'var(--accent)'}}>●</span> Madison, WI</span>
            <span className="badge">EN / KR bilingual</span>
            <span className="badge">B.S. ’27 expected</span>
          </div>
        </div>

        <CodePanel />
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-n">8</div>
          <div className="hero-stat-l">Shipped projects</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-n">2</div>
          <div className="hero-stat-l">Majors · CS + DS</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-n">14</div>
          <div className="hero-stat-l">Languages &amp; tools</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-n">EN/KR</div>
          <div className="hero-stat-l">Bilingual delivery</div>
        </div>
      </div>
    </header>
  );
}

function CodePanel() {
  const lines = [
    { n: 1,  c: <><span className="kw">from</span> portfolio <span className="kw">import</span> Suheum</> },
    { n: 2,  c: <></> },
    { n: 3,  c: <>me = Suheum(</> },
    { n: 4,  c: <>{'  '}role=<span className="str">"SWE · Data · AI"</span>,</> },
    { n: 5,  c: <>{'  '}school=<span className="str">"UW–Madison"</span>,</> },
    { n: 6,  c: <>{'  '}majors=[<span className="str">"CS"</span>, <span className="str">"Data Science"</span>],</> },
    { n: 7,  c: <>{'  '}stack=[<span className="str">"Python"</span>, <span className="str">"TS"</span>, <span className="str">"SQL"</span>],</> },
    { n: 8,  c: <>{'  '}interests=[<span className="str">"LLM agents"</span>, <span className="str">"quant"</span>],</> },
    { n: 9,  c: <>)</> },
    { n: 10, c: <></> },
    { n: 11, c: <><span className="com"># 2026 — open to internships</span></> },
    { n: 12, c: <>me.available_from(<span className="num">2026</span>)</> },
  ];
  return (
    <div className="hero-panel" aria-hidden="true">
      <div className="hero-panel-hd">
        <div className="dots"><i/><i/><i/></div>
        <div className="file">about.py</div>
        <div style={{ color: 'var(--fg-faint)', fontSize: 10 }}>UTF-8 · py</div>
      </div>
      <div className="hero-panel-body">
        {lines.map((l) => (
          <div className="row" key={l.n}>
            <span className="gut">{l.n}</span>
            <span>{l.c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────

function CoreStrengths() {
  return (
    <section className="container section" data-screen-label="Core Strengths">
      <div className="section-hd">
        <div>
          <div className="eyebrow">What I build</div>
          <h2 className="section-title">Four areas I keep coming back to.</h2>
        </div>
        <p className="section-sub">
          Not a survey of every skill — a snapshot of the practice I'd bring to a team on day one.
        </p>
      </div>
      <div className="strengths">
        {STRENGTHS.map((s, i) => {
          const IconEl = I[s.icon];
          return (
            <div key={i} className="card card-hover strength">
              <div className="strength-icon"><IconEl size={18}/></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="tags">
                {s.tags.map((t) => <span key={t} className="badge">{t}</span>)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────

function FeaturedProject({ p }) {
  const Viz = p.Viz;
  return (
    <article className="card card-hover project-card featured-card">
      <div className="project-visual"><Viz /></div>
      <div className="project-body">
        <div className="project-head">
          <h3 className="project-title">{p.title}</h3>
          <span className="badge badge-status">
            <span className="dot"></span>{p.status}
          </span>
        </div>
        <div className="project-meta-row">
          <span className="badge badge-type badge-accent">{p.type}</span>
          <span className="sep">·</span>
          <span>{p.role}</span>
        </div>
        <p className="project-sum">{p.summary}</p>
        {p.award && (
          <div className="award-pill">
            <span className="award-icon" aria-hidden="true">★</span>
            {p.award}
          </div>
        )}
        <ul className="project-highlights">
          {p.highlights.map((h, i) => (
            <li key={i}><span className="pill">{h.metric}</span><span>{h.text}</span></li>
          ))}
        </ul>
        <div className="project-tags">
          {p.stack.map((s) => <span className="badge" key={s}>{s}</span>)}
        </div>
        <div className="project-foot">
          <div className="project-links">
            <a className="link-ext" href={p.repo} target="_blank" rel="noopener"><I.github size={14}/> Code <I.ext/></a>
            <a className="link-ext" href={p.demo} target="_blank" rel="noopener">Live demo <I.ext/></a>
          </div>
          <a className="btn btn-sm btn-ghost" href={p.demo} target="_blank" rel="noopener">
            Open <I.arrow size={13} className="arrow"/>
          </a>
        </div>
      </div>
    </article>
  );
}

function CompactProject({ p }) {
  const Viz = p.Viz;
  return (
    <article className="card card-hover project-card">
      <div className="project-visual" style={{ aspectRatio: '5 / 3' }}><Viz /></div>
      <div className="compact-card">
        <div className="project-meta-row">
          <span className="badge badge-type">{p.type}</span>
          {p.award && (
            <span className="award-pill award-pill-sm">
              <span className="award-icon" aria-hidden="true">★</span>
              {p.award}
            </span>
          )}
        </div>
        <h3 className="project-title" style={{ fontSize: 'var(--fs-lg)' }}>{p.title}</h3>
        <p className="project-sum">{p.summary}</p>
        <div className="project-tags">
          {p.stack.slice(0, 4).map((s) => <span className="badge" key={s}>{s}</span>)}
        </div>
        <div className="project-foot">
          <div className="project-links">
            <a className="link-ext" href={p.repo} target="_blank" rel="noopener"><I.github size={14}/> Code <I.ext/></a>
            <a className="link-ext" href={p.demo} target="_blank" rel="noopener">Demo <I.ext/></a>
          </div>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="work" className="container section" data-screen-label="Projects">
      <div className="section-hd">
        <div>
          <div className="eyebrow">Selected work</div>
          <h2 className="section-title">Eight projects, end to end.</h2>
        </div>
        <p className="section-sub">
          Each took a real problem, made decisions about scope, and shipped something I'd defend in a code review.
          The first two carry full case studies; the rest are equally real builds.
        </p>
      </div>

      <div className="featured">
        {FEATURED.map((p, i) => <FeaturedProject key={i} p={p} />)}
      </div>

      <div className="compact-grid" style={{ marginTop: 'var(--sp-5)' }}>
        {PROJECTS.map((p, i) => <CompactProject key={i} p={p} />)}
      </div>

      <div style={{ marginTop: 'var(--sp-6)', display: 'flex', justifyContent: 'flex-end' }}>
        <a className="link-ext" href="https://github.com/suheum-heo" target="_blank" rel="noopener">
          All projects on GitHub <I.ext/>
        </a>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section id="skills" className="container section" data-screen-label="Skills">
      <div className="section-hd">
        <div>
          <div className="eyebrow">Skills</div>
          <h2 className="section-title">The tools I reach for.</h2>
        </div>
        <p className="section-sub">
          Grouped by where they sit in the stack. Bold-faced items are what I've shipped to production-style projects.
        </p>
      </div>
      <div className="skills">
        {SKILLS.map((c) => {
          const IconEl = I[c.icon];
          return (
            <div key={c.key} className="card skill-cat">
              <div className="skill-cat-hd">
                <h3><span style={{ color: 'var(--accent)' }}><IconEl size={16}/></span> {c.title} <span className="num">·{c.tag}</span></h3>
                <span className="skill-cat-tag">{c.items.length} tools</span>
              </div>
              <div className="skill-list">
                {c.items.map((it) => <span key={it} className="badge">{it}</span>)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────

function Education() {
  return (
    <section id="education" className="container section" data-screen-label="Education">
      <div className="section-hd">
        <div>
          <div className="eyebrow">Education</div>
          <h2 className="section-title">University of Wisconsin–Madison.</h2>
        </div>
        <p className="section-sub">
          Double major in Computer Science and Data Science. Graduating May 2027.
        </p>
      </div>
      <div className="timeline">
        {EDUCATION.map((e, i) => (
          <div className="timeline-row" key={i}>
            <div className="timeline-when">
              <span className="yr">{e.when.yr}</span>
              <span>{e.when.loc}</span>
            </div>
            <div className="timeline-card">
              <h3 className="timeline-role">{e.role}</h3>
              <div className="timeline-place">{e.place}</div>
              <p className="timeline-desc">{e.desc}</p>
              <div className="timeline-tags">
                {e.tags.map((t) => <span key={t} className="badge">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="container section" data-screen-label="Experience">
      <div className="section-hd">
        <div>
          <div className="eyebrow">Experience</div>
          <h2 className="section-title">Work history.</h2>
        </div>
        <p className="section-sub">
          Non-technical roles held alongside coursework. Each taught me something about responsibility, communication, or operating under pressure.
        </p>
      </div>
      <div className="timeline">
        {EXPERIENCE.map((e, i) => (
          <div className="timeline-row timeline-row-compact" key={i}>
            <div className="timeline-when">
              <span className="yr">{e.when.yr}</span>
              <span>{e.when.loc}</span>
            </div>
            <div className="timeline-card">
              <h3 className="timeline-role" style={{ fontSize: 'var(--fs-body)' }}>{e.role}</h3>
              <div className="timeline-place">{e.place}</div>
              <p className="timeline-desc">{e.desc}</p>
              <div className="timeline-tags">
                {e.tags.map((t) => <span key={t} className="badge">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="container section" data-screen-label="Contact">
      <div className="contact">
        <div>
          <div className="eyebrow">Get in touch</div>
          <h2 className="contact-title">
            Recruiting for SWE, data, or AI? Let's talk.
          </h2>
          <p className="contact-sub">
            Open to summer 2026 internships and longer co-op programs. I respond within a day.
          </p>
          <div style={{ display: 'flex', gap: 'var(--sp-3)', marginTop: 'var(--sp-6)', flexWrap: 'wrap' }}>
            <a className="btn btn-lg btn-primary" href="mailto:sh02hur@gmail.com">
              <I.email size={15}/> sh02hur@gmail.com
            </a>
            <a className="btn btn-lg btn-secondary" href="Suheum_Heo_Resume.pdf" target="_blank" rel="noopener" download>
              <I.download size={15}/> Résumé (PDF)
            </a>
          </div>
          <div style={{ display: 'flex', gap: 'var(--sp-4)', marginTop: 'var(--sp-6)' }}>
            <a className="link-ext" href="https://github.com/suheum-heo" target="_blank" rel="noopener"><I.github size={14}/> github.com/suheum-heo <I.ext/></a>
            <a className="link-ext" href="https://www.linkedin.com/in/suheum-heo/" target="_blank" rel="noopener"><I.linkedin size={14}/> linkedin.com/in/suheum-heo <I.ext/></a>
          </div>
        </div>

        <form className="card contact-card" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <label>Name</label>
            <input type="text" placeholder="Jane Recruiter"/>
          </div>
          <div className="form-row">
            <label>Email</label>
            <input type="email" placeholder="jane@company.com"/>
          </div>
          <div className="form-row">
            <label>Message</label>
            <textarea placeholder="Hi Suheum — we're hiring SWE interns for Summer 2026…"/>
          </div>
          <button className="btn btn-accent" type="submit">
            Send message <I.arrow size={14} className="arrow"/>
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="container" data-screen-label="Footer">
      <div className="footer">
        <div>© 2026 Suheum Heo · Built with React, Next.js patterns, and care.</div>
        <div className="links">
          <a href="https://github.com/suheum-heo" target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/suheum-heo/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="Suheum_Heo_Resume.pdf" target="_blank" rel="noopener" download>Résumé</a>
          <a href="mailto:sh02hur@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Nav, Hero, CoreStrengths, Projects, Skills, Education, Experience, Contact, Footer,
});
