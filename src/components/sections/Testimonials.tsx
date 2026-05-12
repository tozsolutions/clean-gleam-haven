import { SectionHeader } from "./Services";

const items = [
  { name: "Ahmet K.", role: "Restaurant Sahibi, Çankaya", text: "Pergola kumaşımız sararmıştı; değiştirmeden yeniden ilk günkü görünüme döndü. Müşterilerimiz fark etti." },
  { name: "Selin Y.", role: "Villa Sahibi, İncek", text: "BioClimatic sistemimizin kanat içleri ve mekanik aksamı dahil baştan ayağa bakım yaptılar. Çok profesyonel ekip." },
  { name: "Murat B.", role: "Otel İşletmecisi, Antalya", text: "Sezon öncesi tüm pergolalarımızı gece çalışmasıyla teslim ettiler. İşletmemiz hiç aksamadı." },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Müşteri Yorumları" title="Premium markaların tercihi" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <article key={t.name} className="rounded-3xl border border-border bg-card p-7 shadow-premium">
              <div className="flex gap-1 text-[color:var(--champagne)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">“{t.text}”</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-3xl bg-aqua-grad p-1 shadow-premium">
          <a
            href="https://www.google.com/search?q=PergoClean+Ankara"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-[22px] bg-card px-6 py-5"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Bizi Google üzerinden puanlandırın</div>
              <div className="mt-1 flex items-center gap-3">
                <span className="font-display text-xl font-bold">Google</span>
                <div className="flex gap-0.5 text-[color:var(--champagne)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>
                  ))}
                </div>
              </div>
            </div>
            <span className="rounded-full bg-aqua-grad px-5 py-2 text-sm font-semibold text-white">Yorum Yaz</span>
          </a>
        </div>
      </div>
    </section>
  );
}
