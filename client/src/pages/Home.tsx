/** Zman company homepage: concise services and occasions; Brand Story and catalogue are separate journeys. */
import { AssetStatus } from "@/components/AssetStatus";
import { brand, orderSteps, visuals } from "@/data/siteContent";
import { ArrowUpLeft, ChevronLeft, Instagram, MessageCircle, MoveLeft, Sparkles } from "lucide-react";
import { Link } from "wouter";

const offerings = [
  { number: "01", title: "توزيعات مناسبات", text: "عصاريات صغيرة وتفاصيل تغليف تُرتب حول لحظتك، لا حول قالب جاهز.", image: visuals.hero },
  { number: "02", title: "تنسيقات مزروعة", text: "أصيص أو صندوق مزروع متعدد العناصر لفكرة تريد أن تبقى حية في المكان.", image: visuals.plantedArrangementDetail },
  { number: "03", title: "هدايا وتفاصيل", text: "بطاقات، أسماء، ألوان، وتغليف يساعد الهدية أن تحمل أثر المناسبة.", image: visuals.giftBox },
];

const moments = ["تخرج", "استقبال مولود", "حنّة ومناسبات خاصة", "هدية شخصية", "بيت ومكتب"];

export default function Home() {
  return <main className="company-home">
    <section className="company-hero"><div className="section-shell company-hero__grid"><div className="company-hero__copy"><span className="section-kicker">ZMAN GREENS JO · AMMAN</span><h1>هدايا صغيرة<br /><em>تترك أثرًا.</em></h1><p>زمن للنباتات الخضراء تصنع توزيعات وتنسيقات وهدايا مناسبات تبدأ من فكرتك وتصل بتفاصيل تشبهها.</p><div className="company-hero__actions"><a href={brand.whatsappUrl} target="_blank" rel="noreferrer" className="primary-link"><MessageCircle size={18} /> احكِ لنا عن مناسبتك <MoveLeft size={17} /></a><a href={brand.instagramUrl} target="_blank" rel="noreferrer" className="quiet-link"><Instagram size={17} /> شاهدي أعمالنا على Instagram</a></div><div className="company-hero__facts"><span>توزيعات مناسبات</span><span>تنسيقات مزروعة</span><span>هدايا مخصّصة</span></div></div><div className="company-hero__visual"><img src={visuals.hero} alt="توزيعة عصاري صغيرة مرجعية مؤقتة من Zman" /><AssetStatus status="temporary-reference" /><span className="company-hero__caption">تفصيلة صغيرة، معنى أكبر</span></div></div></section>

    <section className="company-intro section-shell"><span className="company-intro__index">01</span><div><span className="section-kicker">ما الذي تقدمه زمن؟</span><h2>نباتات وهدايا<br /><em>تُبنى حول المناسبة.</em></h2></div><p>لا نعامل الهدية كمنتج ثابت؛ نبدأ بالمناسبة والفكرة، ثم ننسق النبات والتغليف والبطاقة لتصبح القطعة جزءًا من اللحظة.</p><Link href="/brand" className="company-intro__link">تعرّفي إلى قصتنا وهويتنا <ArrowUpLeft size={16} /></Link></section>

    <section className="company-offerings section-shell"><div className="section-topline"><div><span className="section-kicker">ما نعمل عليه</span><h2>ثلاث طرق<br />لتصبح الفكرة هدية.</h2></div><Link href="/catalogue" className="section-link">استكشفي Concept الكتالوج <ArrowUpLeft size={16} /></Link></div><div className="company-offerings__grid">{offerings.map((item) => <article key={item.number}><div className="company-offerings__image"><img src={item.image} alt={`صورة مرجعية مؤقتة لـ${item.title}`} /><AssetStatus status="temporary-reference" /></div><div className="company-offerings__copy"><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></section>

    <section className="company-moments"><div className="section-shell company-moments__grid"><div><span className="section-kicker">لأي لحظة؟</span><h2>لكل مناسبة<br /><em>لغة خاصة.</em></h2><p>التفاصيل المناسبة تبدأ من سؤال بسيط: ما الذي تريدين من الضيوف أن يتذكروه؟</p></div><div className="company-moments__list">{moments.map((moment, index) => <span key={moment}><b>0{index + 1}</b>{moment}</span>)}</div></div></section>

    <section className="company-process section-shell"><div><span className="section-kicker">كيف نبدأ؟</span><h2>نتواصل قبل أن<br />نرتب أي تفصيل.</h2></div><div className="company-process__steps">{orderSteps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>

    <section className="company-instagram"><div className="section-shell company-instagram__grid"><div className="company-instagram__images"><img src={visuals.graduation} alt="عمل مرجعي مؤقت لمناسبة تخرج" /><img src={visuals.customization} alt="تفصيل مرجعي مؤقت للتخصيص" /><img src={visuals.plantedArrangement} alt="تنسيق مزروع مرجعي مؤقت" /></div><div><Instagram size={24} /><span className="section-kicker">من أعمالنا الحالية</span><h2>شاهدي زمن<br /><em>كما تظهر في الواقع.</em></h2><p>صفحتنا على Instagram هي المكان الأنسب لرؤية الأعمال والتنسيقات المنشورة حديثًا.</p><a href={brand.instagramUrl} target="_blank" rel="noreferrer" className="primary-link">راجعي صفحتنا على Instagram <ArrowUpLeft size={17} /></a></div></div></section>

    <section className="company-contact section-shell"><Sparkles size={20} /><div><span className="section-kicker">لديك فكرة؟</span><h2>أرسليها لنا،<br /><em>ونبدأ منها.</em></h2><p>للاستفسار أو بدء تنسيق مناسبتك، راسلينا مباشرة عبر WhatsApp.</p></div><a href={brand.whatsappUrl} target="_blank" rel="noreferrer" className="primary-link primary-link--gold"><MessageCircle size={19} /> تواصلي عبر WhatsApp <MoveLeft size={18} /></a></section>
  </main>;
}
