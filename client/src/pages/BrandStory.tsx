/** Herbarium Dispatch: protected brand case-study page. The canonical logo is displayed, never redrawn. */
import { AssetStatus } from "@/components/AssetStatus";
import { brand, visuals } from "@/data/siteContent";
import { ArrowUpLeft, CircleDot, Image, Palette, ShieldCheck, Type } from "lucide-react";
import { Link } from "wouter";

const principles = [
  { number: "01", icon: ShieldCheck, title: "أصل ثابت", text: "الشعار الحالي هو نقطة البداية لكل تطبيق؛ يُستخدم كما هو، لا يُعاد رسمه ولا تُبدّل نسبه أو ألوانه." },
  { number: "02", icon: Palette, title: "ورق · غابة · ختم", text: "الكريمي يترك مساحة للتفصيلة، والأخضر يعطي الجذر، والذهبي يحدد لحظة الفعل كختم هدية." },
  { number: "03", icon: Type, title: "لغة تحتفل بهدوء", text: "العناوين تدعو إلى لحظة شخصية، ثم تترك المنتج والتخصيص يكمّلان القصة بدل الكلام التجاري العام." },
  { number: "04", icon: Image, title: "المنتج هو البطل", text: "التصوير يثبت حجم الهدية وتفاصيل خامتها وتخصيصها؛ لا نستبدل المنتج الحقيقي بمشهد نباتات عام." },
];

export default function BrandStory() {
  return <main className="brand-story">
    <section className="brand-story__hero section-shell"><div className="brand-story__hero-copy"><span className="section-kicker">ZMAN GREENS JO · BRAND FILE</span><h1>هوية تنمو<br /><em>مع كل هدية.</em></h1><p>هذا ملف قصير يشرح كيف تتحول علامة Zman إلى تجربة: من الشعار الحالي، إلى الورق واللون، إلى نبتة صغيرة أو تنسيق مزروع يُحمل إلى مناسبة.</p><Link href="/customize" className="primary-link">ابدئي من فكرتك <ArrowUpLeft size={18} /></Link></div><aside className="brand-story__hero-mark"><img src={brand.logoUrl} alt="الشعار المعتمد لـ Zman Greens JO" /><span>CANONICAL LOGO · READ ONLY</span></aside></section>

    <section className="brand-story__thesis"><div className="section-shell"><span className="section-kicker">الفكرة المؤسسة</span><h2>«هدية صغيرة، ذكرى تكبر.»</h2><p>هذه الجملة تحكم القرارات: القطعة أصغر من أن تكون ديكورًا عابرًا، وأصدق من أن تكون منتجًا عامًا. لذلك تتكرر لغة البطاقة، الختم، والخامة الطبيعية في الموقع والتغليف والتصوير.</p></div></section>

    <section className="brand-story__principles section-shell"><div className="section-topline"><div><span className="section-kicker">نظام العمل</span><h2>مفردات تتكرر،<br />لا قالب يتكرر.</h2></div><span className="collection-index">IDENTITY / 01</span></div><div className="brand-story__principles-grid">{principles.map(({ number, icon: Icon, title, text }) => <article key={number}><span>{number}</span><Icon size={22}/><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="brand-story__material"><div className="brand-story__material-image"><img src={visuals.plantedArrangement} alt="تنسيق مزروع مرجعي مؤقت ضمن حاوية خشبية" /><AssetStatus status="temporary-reference" /></div><div className="brand-story__material-copy"><span className="section-kicker">من الهوية إلى القطعة</span><h2>الخشب، الورق،<br /><em>والنبتة الحيّة.</em></h2><p>تترجم المفردات البصرية إلى قطع يمكن لمسها: توزيع صغير، شتلة زيتون، تنسيق مزروع متعدد العناصر، أو لاحقًا شمعة طبيعية. كل فئة لها مساحة، لكن جميعها تعود إلى نفس الهدوء المادي.</p><Link href="/#planted-story" className="quiet-link">شاهدي التنسيق وهو يتكوّن <ArrowUpLeft size={16} /></Link></div></section>

    <section className="brand-story__protection section-shell"><CircleDot size={27}/><div><span className="section-kicker">حماية الأصل</span><h2>الشعار الحالي هو النهاية الصحيحة لكل تطبيق.</h2><p>في الحركة والموقع والطباعة، لا يتحول الشعار إلى رمز بديل ولا يعاد رسمه. يمكن لاحقًا تحريك عناصره الأصلية فقط ضمن Motion معتمد ينتهي بالشعار نفسه 100%.</p></div></section>
  </main>;
}
