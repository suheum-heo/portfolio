// portfolio-data.jsx
// Content + icons for Suheum Heo's portfolio.

// ─────────────────────────────────────────────────────────────
// Icons (line, 1.5 stroke, minimal)
// ─────────────────────────────────────────────────────────────

const Icon = ({ d, size = 18, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
       {...rest}>
    {d}
  </svg>
);

const I = {
  arrow: (p) => <Icon {...p} d={<><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></>} />,
  ext:   (p) => <Icon {...p} size={p?.size ?? 13} d={<><path d="M7 17 17 7"/><path d="M8 7h9v9"/></>} />,
  github:(p) => <Icon {...p} d={<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 6.77 5.07 5.07 0 0 0 19.91 3S18.73 2.65 16 4.55a13.38 13.38 0 0 0-7 0C6.27 2.65 5.09 3 5.09 3A5.07 5.07 0 0 0 5 6.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 20.13V24"/>} />,
  linkedin:(p)=> <Icon {...p} d={<><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M8 10v8M8 6v.01M12 18v-5a3 3 0 0 1 6 0v5M12 10v8"/></>} />,
  email: (p) => <Icon {...p} d={<><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 6 9-6"/></>} />,
  download:(p)=> <Icon {...p} d={<><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>} />,
  // strengths
  code:  (p) => <Icon {...p} d={<><path d="m9 7-5 5 5 5"/><path d="m15 7 5 5-5 5"/></>} />,
  data:  (p) => <Icon {...p} d={<><path d="M3 3v18h18"/><path d="m7 15 4-5 3 3 5-7"/></>} />,
  ai:    (p) => <Icon {...p} d={<><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="m7 7 3 3M17 7l-3 3M7 17l3-3M17 17l-3-3"/></>} />,
  product:(p)=> <Icon {...p} d={<><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 4v5"/></>} />,
  // skills
  lang:  (p) => <Icon {...p} d={<><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h12"/></>} />,
  front: (p) => <Icon {...p} d={<><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><circle cx="6.5" cy="6.5" r=".5" fill="currentColor"/></>} />,
  back:  (p) => <Icon {...p} d={<><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></>} />,
  tool:  (p) => <Icon {...p} d={<><path d="M14.7 6.3a4 4 0 0 1 5 5l-9.3 9.3-5-5z"/><path d="m17 13 4 4"/></>} />,
  sun:   (p) => <Icon {...p} d={<><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></>} />,
  moon:  (p) => <Icon {...p} d={<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>} />,
};

// ─────────────────────────────────────────────────────────────
// Visualizations — light SVG previews for project cards
// ─────────────────────────────────────────────────────────────

function VizGrid({ label }) {
  return (
    <div className="viz">
      <div className="viz-hd"><span>{label}</span><span>v1.0</span></div>
      <svg viewBox="0 0 320 140" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="320" height="140" fill="url(#grid)"/>
      </svg>
    </div>
  );
}

function VizMoneyMap() {
  // Sankey-ish budget flow
  return (
    <div className="viz">
      <div className="viz-hd"><span>MoneyMap / monthly flow</span><span>USD</span></div>
      <svg viewBox="0 0 320 150" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="mm1" x1="0" x2="1"><stop offset="0" stopColor="var(--accent)" stopOpacity=".6"/><stop offset="1" stopColor="var(--accent)" stopOpacity=".15"/></linearGradient>
        </defs>
        <rect x="10" y="20" width="6" height="110" fill="var(--accent)"/>
        <path d="M16 22 C 120 24, 180 24, 305 22 L 305 50 C 180 50, 120 50, 16 56 Z" fill="url(#mm1)"/>
        <path d="M16 58 C 120 58, 180 70, 305 70 L 305 95 C 180 95, 120 85, 16 80 Z" fill="url(#mm1)" opacity=".7"/>
        <path d="M16 82 C 120 88, 180 110, 305 110 L 305 130 C 180 130, 120 120, 16 122 Z" fill="url(#mm1)" opacity=".45"/>
        <g fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-muted)">
          <text x="305" y="42" textAnchor="end">Rent · 42%</text>
          <text x="305" y="86" textAnchor="end">Food · 28%</text>
          <text x="305" y="124" textAnchor="end">Save · 18%</text>
        </g>
      </svg>
    </div>
  );
}

function VizStock() {
  // Candle + line
  const candles = Array.from({ length: 28 }).map((_, i) => {
    const x = 20 + i * 10;
    const h = 30 + Math.sin(i * 0.6) * 14 + (i % 3) * 4;
    const o = 60 + Math.sin(i * 0.4) * 18;
    const c = o + (Math.sin(i * 0.9) > 0 ? 10 : -10);
    const up = c > o;
    return { x, h, o: Math.min(o, c), c: Math.max(o, c), up };
  });
  return (
    <div className="viz">
      <div className="viz-hd"><span>SPY · 5d intraday</span><span>+1.84%</span></div>
      <svg viewBox="0 0 320 150">
        {[40, 70, 100, 130].map((y, i) => (
          <line key={i} x1="10" x2="310" y1={y} y2={y} stroke="currentColor" strokeOpacity=".1"/>
        ))}
        {candles.map((c, i) => (
          <g key={i}>
            <line x1={c.x} x2={c.x} y1={c.o - 8} y2={c.c + 8}
                  stroke={c.up ? 'var(--semantic-success)' : 'var(--semantic-danger)'} strokeWidth="1"/>
            <rect x={c.x - 3} y={c.o} width="6" height={Math.max(c.c - c.o, 2)}
                  fill={c.up ? 'var(--semantic-success)' : 'var(--semantic-danger)'} opacity=".85"/>
          </g>
        ))}
      </svg>
    </div>
  );
}

function VizCourse() {
  // Calendar / planner grid
  return (
    <div className="viz">
      <div className="viz-hd"><span>Plan · Fall 2025</span><span>15 cr</span></div>
      <svg viewBox="0 0 320 150">
        {Array.from({ length: 5 }).map((_, c) =>
          Array.from({ length: 8 }).map((_, r) => {
            const x = 20 + c * 58, y = 14 + r * 16;
            const isCourse = (c + r) % 3 === 0 && r > 0 && r < 7;
            const isProf = (c === 1 && r === 2) || (c === 3 && r === 4);
            return (
              <rect key={`${c}-${r}`} x={x} y={y} width="54" height="12"
                    fill={isCourse ? (isProf ? 'var(--accent)' : 'var(--accent-soft)') : 'transparent'}
                    stroke="currentColor" strokeOpacity=".12" rx="2"/>
            );
          })
        )}
        <g fontFamily="var(--font-mono)" fontSize="8" fill="var(--fg-subtle)">
          {['M','T','W','R','F'].map((d, i) => (
            <text key={d} x={47 + i * 58} y={10} textAnchor="middle">{d}</text>
          ))}
        </g>
      </svg>
    </div>
  );
}

function VizWeather() {
  // Temperature line + humidity bars
  return (
    <div className="viz">
      <div className="viz-hd"><span>Madison, WI · 24h</span><span>52°F</span></div>
      <svg viewBox="0 0 320 150">
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={i} x={20 + i * 24} y={100 - (i % 4) * 8} width="14" height={(i % 4) * 8 + 14}
                fill="var(--accent-soft)" stroke="var(--accent-line)"/>
        ))}
        <path d="M 22 50 Q 60 30, 100 45 T 180 35 T 260 55 T 320 40"
              stroke="var(--accent)" strokeWidth="2" fill="none"/>
        {Array.from({ length: 6 }).map((_, i) => (
          <circle key={i} cx={22 + i * 60} cy={50 + (i % 2) * 6} r="2.5" fill="var(--accent)"/>
        ))}
      </svg>
    </div>
  );
}

function VizCommonGround() {
  // Network graph
  const nodes = [
    [50, 70, 8, true], [100, 40, 5], [160, 75, 6], [220, 45, 5],
    [270, 90, 6], [120, 110, 5], [200, 115, 4], [80, 30, 4],
  ];
  const edges = [[0,1],[0,2],[0,5],[1,7],[2,3],[2,4],[2,6],[3,4],[5,6]];
  return (
    <div className="viz">
      <div className="viz-hd"><span>Common Ground · debate map</span><span>LLM</span></div>
      <svg viewBox="0 0 320 150">
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
                stroke="var(--accent)" strokeOpacity=".35" strokeWidth="1"/>
        ))}
        {nodes.map(([x, y, r, hub], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={r + 4} fill="var(--accent-soft)" opacity={hub ? 1 : 0}/>
            <circle cx={x} cy={y} r={r} fill={hub ? 'var(--accent)' : 'var(--surface)'}
                    stroke="var(--accent)" strokeWidth="1.2"/>
          </g>
        ))}
      </svg>
    </div>
  );
}

function VizLingo() {
  // Spaced-repetition forgetting curve
  return (
    <div className="viz">
      <div className="viz-hd"><span>LingoLoop · KR ↔ EN</span><span>142 cards</span></div>
      <svg viewBox="0 0 320 150">
        {[40, 70, 100, 130].map((y, i) => (
          <line key={i} x1="20" x2="310" y1={y} y2={y} stroke="currentColor" strokeOpacity=".08"/>
        ))}
        {/* forgetting curves, reviews resetting it */}
        <path d="M 20 30 Q 60 80, 110 105 L 110 60 Q 150 90, 200 115 L 200 70 Q 240 95, 310 120"
              stroke="var(--accent)" strokeOpacity=".25" strokeWidth="1" fill="none"/>
        <path d="M 20 30 Q 60 80, 110 105" stroke="var(--accent)" strokeWidth="2" fill="none"/>
        <path d="M 110 60 Q 150 90, 200 115" stroke="var(--accent)" strokeWidth="2" fill="none"/>
        <path d="M 200 70 Q 240 95, 310 120" stroke="var(--accent)" strokeWidth="2" fill="none"/>
        {/* review pings */}
        {[[110, 60], [200, 70]].map(([x, y], i) => (
          <g key={i}>
            <line x1={x} y1={y} x2={x} y2={y + 50} stroke="var(--accent)" strokeDasharray="2 3" strokeOpacity=".5"/>
            <circle cx={x} cy={y} r="3.5" fill="var(--accent)"/>
          </g>
        ))}
        <g fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-muted)">
          <text x="22" y="22">100%</text>
          <text x="22" y="143">recall</text>
          <text x="305" y="143" textAnchor="end">7d</text>
        </g>
      </svg>
    </div>
  );
}

function VizInsights() {
  // Madison Insights — Madison MSA building permits, 1988–2024 (FRED MADI555BP1FH)
  // Stylized to reflect the README: 2010–12 post-recession floor, 5× rise to 2021 peak (7,334 units).
  const data = [
    21, 26, 19, 20, 24, 27, 30, 26, 29, 32,
    35, 34, 31, 29, 33, 37, 41, 36, 30, 24,
    18, 14, 14, 15, 16, 23, 32, 38, 45, 51,
    58, 62, 65, 73, 61, 54, 50,
  ]; // hundreds of units
  const max = 73;
  const peakIdx = data.indexOf(max);
  const barW = 6;
  const gap = 1.6;
  const x0 = 22;
  return (
    <div className="viz">
      <div className="viz-hd"><span>Madison Insights · permits authorized</span><span>1988–’24</span></div>
      <svg viewBox="0 0 320 150">
        {[40, 70, 100, 130].map((y, i) => (
          <line key={i} x1="20" x2="310" y1={y} y2={y} stroke="currentColor" strokeOpacity=".08"/>
        ))}
        {data.map((v, i) => {
          const x = x0 + i * (barW + gap);
          const h = (v / max) * 100;
          const isPeak = i === peakIdx;
          return (
            <rect key={i} x={x} y={130 - h} width={barW} height={h}
                  fill="var(--accent)"
                  opacity={isPeak ? 1 : 0.32 + (i / data.length) * 0.32}/>
          );
        })}
        <line x1={x0 + peakIdx * (barW + gap) + barW / 2} y1={28}
              x2={x0 + peakIdx * (barW + gap) + barW / 2} y2={130 - 100 - 4}
              stroke="var(--accent)" strokeDasharray="2 3" strokeOpacity=".55"/>
        <g fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-muted)">
          <text x="22" y="144">'88</text>
          <text x="305" y="144" textAnchor="end">'24</text>
          <text x={x0 + peakIdx * (barW + gap) + barW + 4} y="22" fill="var(--accent)">2021 · 7,334 units</text>
        </g>
      </svg>
    </div>
  );
}

function VizFootyLens() {
  // FootyLens — xG pitch heatmap
  return (
    <div className="viz">
      <div className="viz-hd"><span>FootyLens · xG by shot</span><span>PL · MD38</span></div>
      <svg viewBox="0 0 320 150">
        <rect x="20" y="14" width="280" height="122" fill="none" stroke="currentColor" strokeOpacity=".25"/>
        <line x1="160" y1="14" x2="160" y2="136" stroke="currentColor" strokeOpacity=".2"/>
        <circle cx="160" cy="75" r="22" fill="none" stroke="currentColor" strokeOpacity=".2"/>
        <rect x="20" y="44" width="40" height="62" fill="none" stroke="currentColor" strokeOpacity=".2"/>
        <rect x="260" y="44" width="40" height="62" fill="none" stroke="currentColor" strokeOpacity=".2"/>
        {[[240,60,18],[260,80,12],[230,90,9],[270,55,15],[210,75,8],[245,45,7]].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="var(--accent)" opacity={0.12 + i * 0.04}/>
        ))}
        <circle cx="245" cy="62" r="3" fill="var(--accent)"/>
      </svg>
    </div>
  );
}

function VizScout() {
  // ScoutEdge — transfer-target cards with system-fit bars
  const rows = [
    { name: 'M. Olise',   pos: 'RW', fit: 92, val: '€85m' },
    { name: 'B. Gilmour', pos: 'CM', fit: 78, val: '€28m' },
    { name: 'A. Doku',    pos: 'LW', fit: 71, val: '€60m' },
    { name: 'J. Stones',  pos: 'CB', fit: 64, val: '€50m' },
  ];
  return (
    <div className="viz">
      <div className="viz-hd"><span>ScoutEdge · transfer targets</span><span>system fit</span></div>
      <svg viewBox="0 0 320 150">
        {rows.map((r, i) => {
          const y = 24 + i * 28;
          return (
            <g key={i} fontFamily="var(--font-mono)" fontSize="9">
              <text x={22} y={y + 4} fill="currentColor">{r.name}</text>
              <text x={102} y={y + 4} fill="var(--fg-muted)">{r.pos}</text>
              <rect x={130} y={y - 5} width={140} height={10} rx={2}
                    fill="var(--accent-soft)" stroke="var(--accent-line)"/>
              <rect x={130} y={y - 5} width={140 * (r.fit / 100)} height={10} rx={2}
                    fill="var(--accent)" opacity={0.85}/>
              <text x={278} y={y + 4} fill="var(--fg-muted)">{r.fit}%</text>
              <text x={315} y={y + 4} textAnchor="end" fill="var(--fg-muted)">{r.val}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Content
// ─────────────────────────────────────────────────────────────

const STRENGTHS = [
  {
    icon: 'product',
    title: 'Full-stack product',
    desc: 'Ship end-to-end apps with React, Next.js, Node, and Postgres — from auth to deploy.',
    tags: ['Next.js', 'React', 'Postgres'],
  },
  {
    icon: 'data',
    title: 'Data engineering',
    desc: 'Build resilient pipelines, schedule ingest jobs, and surface insight through dashboards.',
    tags: ['Python', 'Pandas', 'SQL'],
  },
  {
    icon: 'ai',
    title: 'AI / LLM systems',
    desc: 'Design grounded LLM agents — retrieval, structured output, evals, and guardrails.',
    tags: ['Claude API', 'RAG', 'Evals'],
  },
  {
    icon: 'code',
    title: 'Analytics & finance',
    desc: 'Quantitative thinking applied to markets and sport — backtests, signals, scouting.',
    tags: ['NumPy', 'Plotly', 'Backtest'],
  },
];

const FEATURED = [
  {
    title: 'MoneyMap',
    role: 'Solo · Full-stack PWA',
    type: 'Full-Stack',
    status: 'Live',
    summary: 'Full-stack personal-finance PWA with Google OAuth, real-time sync, and a multi-dimensional model across categories, currencies, locations, and time. Installable on iPhone with 7-language support.',
    Viz: VizMoneyMap,
    highlights: [
      { metric: '500+', text: 'real expense entries tracked with per-category budgets and progress alerts.' },
      { metric: 'RLS', text: 'Supabase row-level security + Google OAuth across signed-in devices.' },
      { metric: '7 langs', text: 'multilingual UI with locale-aware date and number formatting.' },
    ],
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'PWA'],
    repo: 'https://github.com/suheum-heo/moneymap',
    demo: 'https://moneymap-io.vercel.app/',
  },
  {
    title: 'FootyLens',
    role: 'Solo · Multi-service platform',
    type: 'Full-Stack',
    status: 'Live',
    summary: 'Football match-analysis platform that pulls live Premier League data, computes xG / form / top-scorer analytics, and serves a Next.js dashboard. Five services orchestrated through Docker Compose.',
    Viz: VizFootyLens,
    highlights: [
      { metric: '5 svcs', text: 'Next.js + FastAPI + Django + Postgres + Redis, health-checked under Docker Compose.' },
      { metric: 'xG model', text: 'Poisson attack × defence strength model with split-bar match visualisations.' },
      { metric: '10/min', text: 'rate-limited Football-Data.org client with Redis TTL cache (1h / 24h tiers).' },
    ],
    stack: ['Next.js 16', 'FastAPI', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
    repo: 'https://github.com/suheum-heo/footylens',
    demo: 'https://github.com/suheum-heo/footylens',
  },
];

const PROJECTS = [
  {
    title: 'ScoutEdge',
    type: 'AI',
    summary: 'Tactical football transfer-intelligence platform: AI-assisted squad analysis, player-system fit scoring, and manager-specific team-building recommendations with hallucination guardrails.',
    Viz: VizScout,
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Claude API'],
    repo: 'https://github.com/suheum-heo/scout-edge', demo: 'https://scout-edge.vercel.app/',
  },
  {
    title: 'Common Ground',
    type: 'AI',
    summary: 'Real-time classroom discussion tool that uses Claude to surface shared values and genuine tensions across student perspectives on contested topics. QR-code joining, live result broadcasting.',
    Viz: VizCommonGround,
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Claude API'],
    award: 'Anthropic × CDIS Speed-Hackathon · Finalist',
    repo: 'https://github.com/suheum-heo/common-ground', demo: 'https://common-ground-aezv.onrender.com/',
  },
  {
    title: 'Stock Data Pipeline',
    type: 'Data',
    summary: 'Modular ETL pipeline ingesting 6 years of daily OHLCV across 8 tickers — SMA, Bollinger, RSI, MACD, rolling 30-day correlations, and an interactive Streamlit dashboard with Slack alerts.',
    Viz: VizStock,
    stack: ['Python', 'PostgreSQL', 'SQLAlchemy', 'Neon', 'Streamlit'],
    repo: 'https://github.com/suheum-heo/stock-data-pipeline', demo: 'https://stock-data-pipeline.streamlit.app/',
  },
  {
    title: 'Madison Insights',
    type: 'Data',
    summary: 'End-to-end data project on Madison, WI traffic safety + housing growth. Ingests 73k crash records and 38 years of FRED permit data, severity-weighted hotspot ranking, and a Streamlit dashboard with Folium heatmaps.',
    Viz: VizInsights,
    stack: ['Python', 'PostgreSQL', 'DuckDB', 'Streamlit', 'Plotly', 'Folium'],
    repo: 'https://github.com/suheum-heo/madison-insights',
    demo: 'https://madison-insights.streamlit.app/',
  },
  {
    title: 'Course Planner',
    type: 'Full-Stack',
    summary: 'Drag-and-drop semester planner for UW–Madison CS/DS majors with prerequisite checking and credit-load warnings.',
    Viz: VizCourse,
    stack: ['React', 'Express', 'Postgres', 'Prisma'],
    repo: 'https://github.com/suheum-heo/course-planner', demo: 'https://course-planner-k7rm.vercel.app/',
  },
  {
    title: 'Weather & Location Dashboard',
    type: 'Product',
    summary: 'Realtime weather + Mapbox dashboard with bookmark sync and a Flask backend that caches third-party API calls.',
    Viz: VizWeather,
    stack: ['React', 'Flask', 'Mapbox', 'Redis'],
    repo: 'https://github.com/suheum-heo/weather-location-dashboard', demo: 'https://weather-location-dashboard.vercel.app/',
  },
];

const SKILLS = [
  {
    key: 'lang',
    title: 'Languages',
    icon: 'lang',
    tag: '06',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'R'],
  },
  {
    key: 'front',
    title: 'Frontend',
    icon: 'front',
    tag: '04',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Streamlit'],
  },
  {
    key: 'back',
    title: 'Backend & Data',
    icon: 'back',
    tag: '11',
    items: ['Node.js', 'Express', 'Flask', 'FastAPI', 'Django', 'PostgreSQL', 'SQLite', 'Prisma', 'SQLAlchemy', 'Supabase', 'Redis'],
  },
  {
    key: 'ai',
    title: 'Data Science / AI',
    icon: 'ai',
    tag: '07',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Claude API', 'REST APIs', 'Slack Webhooks'],
  },
];

const EDUCATION = [
  {
    when: { yr: '2021 — May 2027', loc: 'Madison, WI' },
    role: 'B.S. Computer Science + Data Science',
    place: 'University of Wisconsin–Madison',
    desc: 'Double major. Coursework across systems, algorithms, machine learning, statistical modeling, and database systems.',
    tags: [
      'CS 200 · Programming I',
      'CS 300 · Programming II',
      'CS 400 · Programming III',
      'CS 220 · Data Sci Programming I',
      'CS 320 · Data Sci Programming II',
      'CS 240 · Discrete Math',
      'CS 252 · Intro Computer Engineering',
      'CS 354 · Machine Org & Programming',
      'CS 540 · Artificial Intelligence',
      'CS 541 · Theory & Algo for Data Sci',
      'CS 564 · Database Mgmt Systems',
      'CS 577 · Intro to Algorithms',
      'STAT 240 · Data Science Modeling I',
      'STAT 340 · Data Science Modeling II',
      'STAT 324 · Stat for Science & EGR',
    ],
  },
];

const EXPERIENCE = [
  {
    when: { yr: 'Dec 2025 — Present', loc: 'Madison, WI' },
    role: 'Cashier',
    place: 'Four Lakes Market · Dejope Hall, UW–Madison',
    desc: 'Handle 200+ daily cash and card transactions in a fast-paced university dining environment while maintaining a full CS + DS course load.',
    tags: ['Customer service', 'Bilingual delivery'],
  },
  {
    when: { yr: 'Nov 2024 — Jul 2025', loc: 'Madison, WI' },
    role: 'Culinary Assistant & Shift Lead',
    place: 'Liz\u2019s Market · Waters Hall, UW–Madison',
    desc: 'Supervised a team of 5–8 kitchen staff in a high-volume dining facility serving 500+ meals daily. Trained 10+ new employees on safety protocols and workflow optimization.',
    tags: ['Team lead', 'Operations'],
  },
  {
    when: { yr: 'Oct 2022 — Jul 2024', loc: 'Ulsan, South Korea' },
    role: 'Social Service Agent · Mandatory Military Service',
    place: 'Republic of Korea Army',
    desc: 'Completed basic training, then served as a Social Service Agent providing care and support for elderly residents with dementia. Collaborated across diverse age groups in a mission-critical care facility.',
    tags: ['Discipline', 'Communication', 'KR / EN'],
  },
];

// Expose to other Babel scopes
Object.assign(window, {
  I, Icon,
  STRENGTHS, FEATURED, PROJECTS, SKILLS, EDUCATION, EXPERIENCE,
});
