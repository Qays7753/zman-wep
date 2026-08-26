/** Herbarium Dispatch ordering: a transparent WhatsApp-first process and no false confirmation. */
import { brand, orderSteps } from "@/data/siteContent";
import { ArrowRight, MessageCircle, MoveLeft } from "lucide-react";
import { Link } from "wouter";

export default function HowToOrder() {
  return <main className="order-page"><section className="order-hero section-shell"><Link href="/" className="back-link"><ArrowRight size={16} /> العودة إلى الرئيسية</Link><span className="section-kicker">خطوات واضحة، قبل أي تأكيد</span><h1>كيف تطلبين من زمن؟</h1><p>الموقع يساعدك في ترتيب الفكرة، ثم ينتقل بك إلى فريق زمن لتأكيد التفاصيل المتاحة فعليًا.</p></section><section className="order-timeline section-shell">{orderSteps.map((step) => <article key={step.number} className="timeline-step"><span>{step.number}</span><h2>{step.title}</h2><p>{step.text}</p></article>)}</section><section className="order-cta section-shell"><div><span className="section-kicker">جاهزة للفكرة؟</span><h2>ابدئي برسالة قصيرة، ثم نكمل التفاصيل معًا.</h2></div><Link href="/customize" className="primary-link"><MessageCircle size={19} /> ابدئي طلبك <MoveLeft size={18} /></Link></section><p className="order-note section-shell">لا يُعتبر الطلب مؤكدًا قبل مراجعة فريق زمن للكمية والتفاصيل والتوفر.</p></main>;
}
