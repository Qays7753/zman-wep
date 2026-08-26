/** Herbarium Dispatch: protected brand case-study page. The canonical logo is displayed, never redrawn. */
import { AssetStatus } from "@/components/AssetStatus";
import { CandleReveal } from "@/components/CandleReveal";
import { PlanterSequence } from "@/components/PlanterSequence";
import { RosettePrologue } from "@/components/RosettePrologue";
import { brand, visuals } from "@/data/siteContent";
import { ArrowUpLeft, CircleDot, Heart, Instagram, Leaf, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "wouter";

const values = [
  { icon: Heart, title: "المعنى قبل الشكل", text: "نبدأ من اللحظة التي تريدين الاحتفال بها، ثم نرتب التفصيل الذي يبقى في الذاكرة." },
  { icon: Leaf, title: "هدية حية", text: "نختار النبات لأن الهدية لا تنتهي عند لحظة تقديمها؛ تكبر بهدوء بعد ذلك." },
  { icon: Sparkles, title: "تفاصيل تشبهكم", text: "اسم، بطاقة، تغليف أو لون: الفكرة الخاصة هي التي تجعل كل قطعة قريبة من مناسبتها." },
];

export default function BrandStory() {
  return <main className="brand-story">
    <RosettePrologue />
    <section className="brand-story__hero section-shell"><div className="brand-story__hero-copy"><span className="section-kicker">ZMAN GREENS JO · قصتنا</span><h1>هوية تنمو<br /><em>مع كل هدية.</em></h1><p>زمن هي طريقة هادئة للاحتفال: نأخذ فكرة صغيرة، ونحولها إلى هدية نباتية تحمل معنى وتبقى بعد انتهاء المناسبة.</p><a href={brand.whatsappUrl} target="_blank" rel="noreferrer" className="primary-link"><MessageCircle size={18} /> احكِ لنا عن فكرتك <ArrowUpLeft size={18} /></a></div><aside className="brand-story__hero-mark"><img src={brand.logoUrl} alt="شعار Zman Greens JO الحالي" /><span>الشعار الذي رافقنا من البداية</span></aside></section>

    <section className="brand-story__thesis"><div className="section-shell"><span className="section-kicker">رسالتنا</span><h2>«هدية صغيرة، ذكرى تكبر.»</h2><p>رسالتنا أن نجعل المناسبة أقرب إلى أصحابها عبر هدية حية ومخصصة. لا نبحث عن قطعة عابرة، بل عن تفصيلة تقول: هذه اللحظة لكم.</p></div></section>

    <section className="brand-story__values section-shell"><div className="section-topline"><div><span className="section-kicker">ما يقودنا</span><h2>قيم بسيطة،<br />لكنها تظهر في كل تفصيل.</h2></div><span className="collection-index">ZMAN / VALUES</span></div><div className="brand-story__values-grid">{values.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={22}/><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="brand-story__colour-story"><div className="section-shell brand-story__colour-story-grid"><div><span className="section-kicker">ألوان لها قصة</span><h2>أخضر للحياة.<br /><em>كريمي للمساحة.</em><br />ذهب للهدية.</h2></div><p>الأخضر يربطنا بعالم النبات، والكريمي يترك للنبتة والاسم أن يتنفّسا، أما اللمسة الذهبية فتظهر كإشارة احتفال صغيرة لا تأخذ المكان من الفكرة نفسها.</p><div className="brand-story__colour-stamps" aria-label="ألوان Zman"><i /><i /><i /></div></div></section>

    <section className="brand-story__material"><div className="brand-story__material-image"><img src={visuals.plantedArrangement} alt="تنسيق مزروع مرجعي مؤقت ضمن حاوية خشبية" /><AssetStatus status="temporary-reference" /></div><div className="brand-story__material-copy"><span className="section-kicker">من القصة إلى الهدية</span><h2>الخشب، الورق،<br /><em>والنبتة الحيّة.</em></h2><p>تظهر القصة في ملمس الخشب، مساحة البطاقة، والنبتة التي تبقى في المكان. من توزيع صغير إلى تنسيق مزروع، تبقى الفكرة واحدة: هدية لها حياة بعدها.</p><Link href="/catalogue" className="quiet-link">شاهدي عالم الهدايا <ArrowUpLeft size={16} /></Link></div></section>

    <PlanterSequence />
    <CandleReveal />

    <section className="brand-story__protection section-shell"><CircleDot size={27}/><div><span className="section-kicker">علامة نعرفها</span><h2>حافظنا على الشعار لأنه جزء من ذاكرة زمن.</h2><p>هذا الرمز واسم Zman ظهرا مع أعمالنا من البداية. لذلك نحافظ عليهما ونضعهما في سياق جديد، من دون أن نفقد ما تعرّف عليه الناس سابقًا.</p><a href={brand.instagramUrl} target="_blank" rel="noreferrer" className="quiet-link"><Instagram size={16} /> شاهدي الأعمال المنشورة على Instagram</a></div></section>
  </main>;
}
