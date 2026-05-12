import { useRef, useState } from "react";
import before from "@/assets/brand/cayyolu.jpg";
import after from "@/assets/brand/restaurant.jpg";
import { SectionHeader } from "./Services";

export function BeforeAfter() {
  const [pct, setPct] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const drag = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPct(Math.max(2, Math.min(98, p)));
  };
  return (
    <section id="once-sonra" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Önce / Sonra"
          title="Sonucu kendi gözünüzle görün"
          desc="Sürgüyü kaydırın; restorasyon öncesi ve sonrası farkı net hissedin."
        />
        <div className="mx-auto mt-12 max-w-5xl">
          <div
            ref={ref}
            className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-3xl shadow-premium"
            onMouseMove={(e) => e.buttons === 1 && drag(e.clientX)}
            onTouchMove={(e) => drag(e.touches[0].clientX)}
            onClick={(e) => drag(e.clientX)}
          >
            <img src={after} alt="Restorasyon sonrası" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pct}%` }}>
              <img src={before} alt="Restorasyon öncesi" className="absolute inset-0 h-full w-full object-cover" style={{ width: `${(100 / pct) * 100}%`, maxWidth: "none" }} />
            </div>
            <div className="absolute inset-y-0" style={{ left: `${pct}%` }}>
              <div className="absolute inset-y-0 -translate-x-1/2 border-l-2 border-[color:var(--champagne)]" />
              <button
                aria-label="Sürükle"
                onMouseDown={(e) => {
                  const move = (ev: MouseEvent) => drag(ev.clientX);
                  const up = () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
                  window.addEventListener("mousemove", move); window.addEventListener("mouseup", up);
                  e.preventDefault();
                }}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-12 w-12 cursor-ew-resize place-items-center rounded-full bg-[color:var(--champagne)] text-[color:var(--deep)] shadow-glow"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M8 5l-5 7 5 7V5zm8 0v14l5-7-5-7z"/></svg>
              </button>
            </div>
            <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">Önce</span>
            <span className="absolute right-4 top-4 rounded-full bg-aqua-grad px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">Sonra</span>
          </div>
        </div>
      </div>
    </section>
  );
}
