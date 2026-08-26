/** Zman Brand Story prologue: canonical rosette moves as a complete, unedited asset with scroll. */
import { brand } from "@/data/siteContent";
import { useEffect, useRef, useState, type CSSProperties } from "react";

export function RosettePrologue() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduced(media.matches);
    updatePreference(); media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);
  useEffect(() => {
    if (reduced) { setProgress(1); return; }
    let frame = 0;
    const update = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      setProgress(Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height - window.innerHeight))));
    };
    const scroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update(); window.addEventListener("scroll", scroll, { passive: true }); window.addEventListener("resize", scroll);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", scroll); window.removeEventListener("resize", scroll); };
  }, [reduced]);

  return <section ref={ref} className="rosette-prologue" style={{ "--rosette-progress": progress } as CSSProperties} aria-label="بداية قصة هوية Zman">
    <div className="rosette-prologue__sticky"><div className="rosette-prologue__paper" /><img src={brand.rosetteUrl} alt="رمز Zman المعتمد" className="rosette-prologue__mark" /><div className="rosette-prologue__copy"><span>ZMAN GREENS JO · BRAND STORY</span><h1>هذه بداية<br /><em>زمن.</em></h1><p>مرّري للدخول إلى القصة البصرية للعلامة.</p></div><i className="rosette-prologue__line" /></div>
  </section>;
}
