const bubbles = Array.from({ length: 14 }).map((_, i) => ({
  x: 2 + Math.random() * 18,
  s: 10 + Math.random() * 26,
  d: 9 + Math.random() * 10,
  delay: Math.random() * 8,
  key: i,
}));

export function Bubbles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {bubbles.map((b) => (
        <span
          key={b.key}
          className="bubble"
          style={
            {
              ["--x" as string]: `${b.x}%`,
              ["--s" as string]: `${b.s}px`,
              ["--d" as string]: `${b.d}s`,
              ["--delay" as string]: `${b.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
