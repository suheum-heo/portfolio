// portfolio-app.jsx
// Main app — composes sections, hosts Tweaks panel.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "dark": false,
  "accent": "#2563EB",
  "density": "regular"
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = [
  { hex: '#2563EB', name: 'Electric Blue', soft: 'rgba(37,99,235,0.10)', line: 'rgba(37,99,235,0.25)' },
  { hex: '#38BDF8', name: 'Cyan',          soft: 'rgba(56,189,248,0.12)', line: 'rgba(56,189,248,0.28)' },
  { hex: '#10B981', name: 'Emerald',       soft: 'rgba(16,185,129,0.12)', line: 'rgba(16,185,129,0.28)' },
  { hex: '#8B5CF6', name: 'Violet',        soft: 'rgba(139,92,246,0.12)', line: 'rgba(139,92,246,0.30)' },
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply dark class to <body> so backdrop-filter on nav reads bg correctly
  React.useEffect(() => {
    document.body.classList.toggle('theme-dark', !!t.dark);
  }, [t.dark]);

  // Apply accent variables
  React.useEffect(() => {
    const a = ACCENT_OPTIONS.find((o) => o.hex.toLowerCase() === (t.accent || '').toLowerCase()) || ACCENT_OPTIONS[0];
    const root = document.documentElement;
    root.style.setProperty('--accent', a.hex);
    root.style.setProperty('--accent-soft', a.soft);
    root.style.setProperty('--accent-line', a.line);
  }, [t.accent]);

  // Density scaler
  React.useEffect(() => {
    const root = document.documentElement;
    if (t.density === 'compact') {
      root.style.setProperty('--sp-9', '72px');
      root.style.setProperty('--sp-8', '48px');
    } else if (t.density === 'comfy') {
      root.style.setProperty('--sp-9', '128px');
      root.style.setProperty('--sp-8', '80px');
    } else {
      root.style.setProperty('--sp-9', '96px');
      root.style.setProperty('--sp-8', '64px');
    }
  }, [t.density]);

  return (
    <>
      <Nav dark={t.dark} onToggleDark={() => setTweak('dark', !t.dark)} />
      <Hero />
      <CoreStrengths />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Contact />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakToggle label="Dark mode" value={t.dark}
                     onChange={(v) => setTweak('dark', v)} />
        <TweakColor label="Accent"
                    value={t.accent}
                    options={ACCENT_OPTIONS.map((o) => o.hex)}
                    onChange={(v) => setTweak('accent', v)} />
        <TweakSection label="Layout" />
        <TweakRadio label="Density"
                    value={t.density}
                    options={['compact', 'regular', 'comfy']}
                    onChange={(v) => setTweak('density', v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
