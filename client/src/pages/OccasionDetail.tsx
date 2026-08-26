/** Herbarium Dispatch detail: story and customization invitation without invented commercial facts. */
import { AssetStatus } from "@/components/AssetStatus";
import { brand, occasions } from "@/data/siteContent";
import { ArrowRight, MessageCircle, MoveLeft, Sparkles } from "lucide-react";
import { Link, useRoute } from "wouter";

export default function OccasionDetail() {
  const [, params] = useRoute("/occasions/:id");
  const occasion = occasions.find((item) => item.id === params?.id) ?? occasions[0];
  return <main className="detail-page">
    <section className="detail-hero"><div className="detail-hero__copy reveal-up"><Link href="/" className="back-link"><ArrowRight size={16} /> العودة إلى المناسبات</Link><span className="section-kicker">{occasion.eyebrow}</span><h1>{occasion.title}</h1><p>{occasion.description}</p><div className="detail-hero__actions"><Link href={`/customize?occasion=${occasion.id}`} className="primary-link">خصّصي هذه الفكرة <MoveLeft size={18} /></Link><a href={brand.whatsappUrl} target="_blank" rel="noreferrer" className="quiet-link"><MessageCircle size={17} /> نسّقوا معي عبر واتساب</a></div></div><div className="detail-hero__visual reveal-up reveal-up--late"><div className="image-frame image-frame--tall"><img src={occasion.image} alt={`صورة مرجعية مؤقتة لتوزيعات ${occasion.title}`} /><AssetStatus status={occasion.status} /></div><div className="detail-hero__note"><Sparkles size={16} /><span>{occasion.detail}</span></div></div></section>
    <section className="detail-intent section-shell"><div className="section-heading"><span className="section-kicker">من الفكرة إلى التوزيعة</span><h2>التفصيل الذي يخص مناسبتك.</h2></div><div className="intent-grid"><article><span>01</span><h3>المناسبة</h3><p>نبدأ من سبب الهدية ومن يشاركك اللحظة.</p></article><article><span>02</span><h3>التخصيص</h3><p>أضيفي الاسم أو العبارة أو الألوان التي تحبينها.</p></article><article><span>03</span><h3>التنسيق</h3><p>يراجع فريق زمن الخيارات المتاحة معك قبل التأكيد.</p></article></div></section>
  </main>;
}
