/** Herbarium Dispatch home: product-led editorial storytelling with replaceable reference media. */
import { AssetStatus } from "@/components/AssetStatus";
import { BrandCaseStudy } from "@/components/BrandCaseStudy";
import { CandleReveal } from "@/components/CandleReveal";
import { PlanterSequence } from "@/components/PlanterSequence";
import { brand, giftFamilies, occasions, orderSteps, temporaryAssetNotice, visuals } from "@/data/siteContent";
import { ArrowUpLeft, ChevronLeft, Leaf, MessageCircle, MoveLeft, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return <main className="home-page">
    <section className="hero">
      <img src={brand.rosetteUrl} alt="" aria-hidden="true" className="hero__rosette" />
      <div className="hero__copy reveal-up">
        <div className="hero__eyebrow"><span /> ZMAN GREENS JO · AMMAN</div>
        <h1>هدية صغيرة.<br /><em>ذكرى</em> تكبر.</h1>
        <p>توزيعات عصاريات وهدايا مناسبات تُصمَّم حول فكرتك، وتبقى مع من يحبّها بعد انتهاء اللحظة.</p>
        <div className="hero__actions"><Link href="/customize" className="primary-link">ابدئي فكرتك <MoveLeft size={18} /></Link><a href="#occasions" className="text-link">استكشفي المناسبات <ChevronLeft size={16} /></a></div>
        <div className="hero__meta"><span>توزيعات · ديكور بيت ومكتب</span><span>تصميم حسب المناسبة</span></div>
      </div>
      <div className="hero__visual reveal-up reveal-up--late"><div className="hero__image-shell"><img src={visuals.hero} alt="توزيعة عصاري بيضاء مرجعية مؤقتة" /><AssetStatus status="temporary-reference" /></div><div className="hero__caption"><Leaf size={15} /> <span>قطعة صغيرة، معنى أكبر</span></div></div>
      <div className="hero__scroll"><span>مرّري لاكتشاف التفاصيل</span><i /></div>
    </section>

    <BrandCaseStudy />

    <section className="gift-families section-shell"><div className="section-topline"><div><span className="section-kicker">عالم الهدايا الطبيعية</span><h2>نباتات اليوم، وضوء دافئ قريبًا.</h2></div><span className="collection-index">02 / COLLECTION</span></div><div className="gift-families__grid">{giftFamilies.map((family) => <article key={family.id} className={`gift-family gift-family--${family.id}`}><div className="gift-family__image"><img src={family.image} alt={`صورة مرجعية مؤقتة لفئة ${family.title}`} /><AssetStatus status={family.status} /></div><div className="gift-family__copy"><span>{family.eyebrow}</span><h3>{family.title}</h3><p>{family.description}</p>{family.availability === "future" ? <b>قيد التحضير</b> : <Link href={`/customize?gift=${family.id}`} className="quiet-link">ابدئي الفكرة <MoveLeft size={16} /></Link>}</div></article>)}</div></section>

    <section id="occasions" className="occasions section-shell">
      <div className="section-topline"><div><span className="section-kicker">اختاري اللحظة</span><h2>كل مناسبة لها طريقتها.</h2></div><Link href="/how-to-order" className="section-link">طريقة الطلب <ArrowUpLeft size={16} /></Link></div>
      <div className="occasion-grid">{occasions.map((occasion, index) => <Link href={`/occasions/${occasion.id}`} key={occasion.id} className={`occasion-card occasion-card--${index + 1}`}><div className="occasion-card__image"><img src={occasion.image} alt={`صورة مرجعية مؤقتة لتوزيعات ${occasion.title}`} /><AssetStatus status={occasion.status} /></div><div className="occasion-card__copy"><span>{occasion.eyebrow}</span><h3>{occasion.title}</h3><p>{occasion.description}</p><i><MoveLeft size={17} /></i></div></Link>)}</div>
      <p className="asset-disclaimer">{temporaryAssetNotice}</p>
    </section>

    <section className="customization-band"><div className="customization-band__texture" style={{ backgroundImage: `url(${visuals.texture})` }} /><div className="section-shell customization-band__content"><div className="customization-band__image"><img src={visuals.customization} alt="تفصيل مرجعي مؤقت للتخصيص" /><AssetStatus status="temporary-reference" /></div><div className="customization-band__copy"><span className="section-kicker">التخصيص يبدأ منكم</span><h2>فكرتك أولًا.<br /><em>ثم التفاصيل.</em></h2><p>اكتبي المناسبة والكمية والاسم أو العبارة وأي ملاحظة تحبينها. سنجهّز رسالة مرتبة لتبدئي التنسيق عبر واتساب.</p><Link href="/customize" className="primary-link">خصّصي طلبك <MoveLeft size={18} /></Link></div></div></section>
    <PlanterSequence />
    <CandleReveal />

    <section className="process section-shell"><div className="process__intro"><span className="section-kicker">بلا تعقيد</span><h2>ثلاث خطوات، ثم نتواصل معك.</h2></div><div className="process__steps">{orderSteps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>
    <section className="care-prompt section-shell"><div><Sparkles size={18} /><span className="section-kicker">العناية بعد المناسبة</span><h2>النبتة الصغيرة تحتاج وقتًا بسيطًا لتكبر بهدوء.</h2></div><Link href="/care" className="quiet-link">اقرئي دليل العناية <ChevronLeft size={17} /></Link></section>
    <section className="final-cta section-shell"><img src={brand.rosetteUrl} alt="" aria-hidden="true" /><span className="section-kicker">ابدئي من مناسبة واحدة</span><h2>قولي لنا ما الذي تحتفلين به.</h2><p>نرتّب البداية معك، ثم نراجع كل تفصيل قبل التأكيد.</p><Link href="/customize" className="primary-link primary-link--gold"><MessageCircle size={19} /> ابدئي عبر واتساب <MoveLeft size={18} /></Link></section>
    <a href={brand.whatsappUrl} target="_blank" rel="noreferrer" className="mobile-order-dock"><MessageCircle size={20} /> ابدئي طلبك عبر واتساب</a>
  </main>;
}
