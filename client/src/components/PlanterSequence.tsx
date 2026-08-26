/** Herbarium Dispatch: a scroll-controlled planter transformation, inspired by a motion principle—not copied artwork. */
import { AssetStatus } from "@/components/AssetStatus";
import { visuals } from "@/data/siteContent";
import { ArrowDown, MoveLeft, Play } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "wouter";

const chapters = [
  ["01", "البذرة", "بطاقة هدية تحمل بداية الفكرة."],
  ["02", "التكوّن", "طبقات الورق تتحول إلى حواف خشبية."],
  ["03", "النمو", "تنسيق مزروع يجمع أكثر من تفصيلة حيّة."],
  ["04", "الهدية", "قطعة واحدة، تبدأ منها تفاصيل المناسبة."],
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
      <div className="planter-sequence__stage" aria-label="مشهد مرجعي مؤقت لتنسيق مزروع"><div className="planter-sequence__paper"><span>زمن · بطاقة هدية</span></div><div className="planter-sequence__seedling" aria-hidden="true"><i /><i /><i /></div><span className="planter-sequence__material-label">ورق · خشب · نبات</span><div className="planter-sequence__wood planter-sequence__wood--back" /><div className="planter-sequence__foliage planter-sequence__foliage--one" /><div className="planter-sequence__foliage planter-sequence__foliage--two" /><img src={visuals.plantedArrangement} alt="تنسيق مزروع مرجعي مؤقت داخل حاوية خشبية" className="planter-sequence__image" /><div className="planter-sequence__wood planter-sequence__wood--front" /><AssetStatus status="temporary-reference" /></div>
      <div className="planter-sequence__action"><p>تنسيق حي متعدد العناصر، وتفاصيله تُراجع معك قبل أي تأكيد.</p><Link href="/customize?gift=planter" className="primary-link">ابدئي تنسيقًا مزروعًا <MoveLeft size={17} /></Link></div>
    </div>
  </section>;
}
