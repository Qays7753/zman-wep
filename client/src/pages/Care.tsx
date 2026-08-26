/** Herbarium Dispatch care: concise guidance, with special instructions delegated to the real product. */
import { brand, careNotes, visuals } from "@/data/siteContent";
import { ArrowRight, Droplets, MessageCircle, Sprout, SunMedium } from "lucide-react";
import { Link } from "wouter";

export default function Care() {
  const icons = [SunMedium, Droplets, Sprout];
  return <main className="care-page"><section className="care-hero section-shell"><div className="care-hero__copy"><Link href="/" className="back-link"><ArrowRight size={16} /> العودة إلى الرئيسية</Link><span className="section-kicker">مع الهدية تستمر الحكاية</span><h1>عناية هادئة للنبتة الصغيرة.</h1><p>دليل بسيط يساعد المستلم على فهم العناية الأساسية، بينما تبقى أي إرشادات خاصة مرتبطة بالنبتة التي استلمها فعلًا.</p></div><div className="care-hero__visual"><img src={visuals.customization} alt="صورة مرجعية مؤقتة لعناية العصاريات" /></div></section><section className="care-list section-shell">{careNotes.map((note, index) => { const Icon = icons[index]; return <article key={note} className="care-item"><Icon size={25} /><p>{note}</p></article>; })}</section><section className="care-contact section-shell"><span>تحتاجين مساعدة تخص توزيعتك؟</span><a href={brand.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> اسألي فريق زمن</a></section></main>;
}
