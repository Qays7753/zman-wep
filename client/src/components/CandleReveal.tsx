/** Herbarium Dispatch: scroll-led candle vignette; not a product safety demonstration. */
import { Flame, Sparkles } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { visuals } from "@/data/siteContent";

export function CandleReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [lit, setLit] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => setReducedMotion(query.matches);
    applyPreference();
    query.addEventListener("change", applyPreference);
    return () => query.removeEventListener("change", applyPreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) { setProgress(1); return; }
    let frame = 0;
    const update = () => {
      const element = sectionRef.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const visible = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height * 0.32)));
      setProgress(visible);
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [reducedMotion]);

  const sceneStyle = { "--reveal-progress": progress, "--flame-opacity": lit ? 1 : 0 } as CSSProperties;
  return <section ref={sectionRef} className="candle-reveal" style={sceneStyle} aria-label="لمحة عن فئة الشموع الطبيعية القادمة">
    <div className="candle-reveal__copy">
      <span className="section-kicker">امتداد طبيعي قريبًا</span>
      <h2>ضوء هادئ<br /><em>للهدية نفسها.</em></h2>
      <p>نجهّز مساحة مستقبلية لشموع طبيعية ضمن عالم Zman. الصورة والمشهد هنا مرجعان بصريان فقط إلى أن تعتمد الحاويات والمكونات والروائح الفعلية.</p>
      <button type="button" className="candle-toggle" aria-pressed={lit} onClick={() => setLit((value) => !value)}><Flame size={17} /> {lit ? "أطفئي الوهج البصري" : "أشعلي المشهد"}</button>
      <span className="candle-reveal__note"><Sparkles size={14} /> حركة حسية مرجعية، وليست إرشاد استخدام.</span>
    </div>
    <div className="candle-reveal__stage" aria-hidden="true">
      <div className="candle-reveal__halo" />
      <div className="candle-reveal__lid" />
      <div className="candle-reveal__flame"><i /><i /><i /></div>
      <img src={visuals.candleConcrete} alt="" className="candle-reveal__image" />
      <span className="asset-status">مرجع مؤقت</span>
    </div>
  </section>;
}
