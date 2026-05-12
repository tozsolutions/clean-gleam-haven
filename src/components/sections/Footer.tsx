import logo from "@/assets/brand/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="PergoClean" className="h-10 w-10 object-contain" />
            <div>
              <div className="font-display font-bold">PergoClean</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Bakım • Temizlik • Restorasyon</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            19+ yıllık üretim ve montaj tecrübesinden gelen profesyonel pergola bakım ve restorasyon markası.
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Hizmetler</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Pergola Kumaş Temizliği</li>
            <li>BioClimatic / RollingRoof</li>
            <li>Wintent — Zip Perde</li>
            <li>Güneş Panel Temizliği</li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Hizmet Bölgeleri</div>
          <div className="mt-4 space-y-4 text-sm">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[color:var(--aqua)]">Ankara</div>
              <p className="mt-1.5 leading-relaxed text-muted-foreground">
                Çankaya · Çayyolu · Ümitköy · Yaşamkent · Beysukent · Konutkent · Mutlukent · İncek · Gölbaşı · Oran ·
                Or-An · Kavaklıdere · Gaziosmanpaşa · Bahçelievler · Yenimahalle · Keçiören · Etimesgut · Eryaman ·
                Pursaklar · Mamak · Sincan · Altındağ · Polatlı · Beypazarı
              </p>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[color:var(--aqua)]">Antalya</div>
              <p className="mt-1.5 leading-relaxed text-muted-foreground">
                Konyaaltı · Lara · Muratpaşa · Kepez · Döşemealtı · Aksu · Belek · Kundu · Kemer · Göynük · Tekirova ·
                Beldibi · Side · Manavgat · Alanya · Kaş · Kalkan · Demre · Finike · Kumluca · Serik
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">İletişim</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>+90 536 773 14 04</li>
            <li>+90 530 955 00 28</li>
            <li>pergoclean@tozyapi.com.tr</li>
            <li>www.pergoclean.com.tr</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} PergoClean. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
