/** Herbarium Dispatch: a scroll-controlled planter transformation, inspired by a motion principle—not copied artwork. */
import { AssetStatus } from "@/components/AssetStatus";
import { visuals } from "@/data/siteContent";
import { ArrowDown, MessageCircle, Play } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "wouter";

const chapters = [
  ["01", "الفكرة", "تبدأ من مناسبة أو زاوية صغيرة في مكان تحبينه."],
  ["02", "الترتيب", "الخشب والتربة والنبتة تجد مكانها بهدوء."],
  ["03", "النمو", "عدة عناصر حية تصبح تنسيقًا واحدًا."],
  ["04", "الأثر", "قطعة تبقى لتذكّر بلحظة خاصة."],
] as const;

export function PlanterSequence() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [demoProgress, setDemoProgress] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const preference = () => setReduced(media.matches);
    preference(); media.addEventListener("change", preference);
    return () => media.removeEventListener("change", preference);
  }, []);
  useEffect(() => {
    if (reduced) { setProgress(1); return; }
    let frame = 0;
    const refresh = () => { const rect = ref.current?.getBoundingClientRect(); if (!rect) return; const distance = window.innerHeight * .55; setProgress(Math.min(1, Math.max(0, (distance - rect.top) / (rect.height - window.innerHeight + distance)))); };
    const scroll = () => { setDemoProgress(null); cancelAnimationFrame(frame); frame = requestAnimationFrame(refresh); };
    refresh(); window.addEventListener("scroll", scroll, { passive: true }); window.addEventListener("resize", scroll);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", scroll); window.removeEventListener("resize", scroll); };
  }, [reduced]);

  const visibleProgress = demoProgress ?? progress;
  const chapter = Math.min(3, Math.floor(visibleProgress * 4));
  const style = { "--sequence-progress": visibleProgress } as CSSProperties;
  const playSequence = () => {
    if (playing || reduced) return;
    setPlaying(true);
    const startedAt = performance.now();
    const animate = (now: number) => {
      const next = Math.min(1, (now - startedAt) / 1700);
      setDemoProgress(next);
      if (next < 1) requestAnimationFrame(animate); else setPlaying(false);
    };
    requestAnimationFrame(animate);
  };
  return <section id="planted-story" ref={ref} className="planter-sequence" style={style} aria-label="قصة تنسيق مزروع متحول مع التمرير">
    <div className="planter-sequence__sticky">
      <div className="planter-sequence__copy"><span className="section-kicker">تنسيقات مزروعة · قصة متحركة</span><div className="planter-sequence__chapter"><span>{chapters[chapter][0]}</span><h2>{chapters[chapter][1]}</h2><p>{chapters[chapter][2]}</p></div><div className="planter-sequence__progress" aria-hidden="true">{chapters.map(([id]) => <i className={Number(id) <= chapter + 1 ? "is-active" : ""} key={id} />)}</div>{!reduced && <button type="button" className="planter-sequence__play" onClick={playSequence} disabled={playing}><Play size={14} fill="currentColor" /> {playing ? "يتشكل الآن…" : "شاهدي التحوّل"}</button>}<span className="planter-sequence__hint"><ArrowDown size={15} /> مرّري لتشاهدي التكوّن</span></div>
      <div className="planter-sequence__stage" aria-label="مشهد مرجعي مؤقت ليد ترتب تنسيقًا مزروعًا"><div className="planter-sequence__paper"><span>زمن · لحظة تنمو</span></div><div className="planter-sequence__seedling" aria-hidden="true"><i /><i /><i /></div><span className="planter-sequence__material-label">يد · خشب · نبات</span><div className="planter-sequence__wood planter-sequence__wood--back" /><div className="planter-sequence__foliage planter-sequence__foliage--one" /><div className="planter-sequence__foliage planter-sequence__foliage--two" /><img src={visuals.handPlanter} alt="مشهد مرجعي مؤقت ليد تضع شتلات في صندوق خشبي" className="planter-sequence__image" /><div className="planter-sequence__wood planter-sequence__wood--front" /><AssetStatus status="temporary-reference" /></div>
      <div className="planter-sequence__action"><p>تفصيلة حية تبدأ من فكرتك، ونراجعها معك قبل أي تأكيد.</p><a href="https://wa.me/962781950968" target="_blank" rel="noreferrer" className="primary-link"><MessageCircle size={17} /> احكِ لنا عن فكرتك</a></div>
    </div>
  </section>;
}
