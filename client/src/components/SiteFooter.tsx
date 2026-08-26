/** Herbarium Dispatch footer: presents the canonical full logo unmodified on its intended light field. */
import { brand } from "@/data/siteContent";
import { Instagram, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="site-footer__inner">
      <div className="site-footer__logo-wrap"><img src={brand.logoUrl} alt="Zman Greens JO" className="site-footer__logo" /></div>
      <div className="site-footer__copy"><span>توزيعات عصاريات · هدايا مناسبات</span><p>هذا الموقع نسخة أولية. تفاصيل كل طلب تُراجع مع فريق زمن قبل التأكيد.</p></div>
      <div className="site-footer__links"><a href="https://www.instagram.com/zmanstore/" target="_blank" rel="noreferrer"><Instagram size={17} /> {brand.instagram}</a><a href={brand.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} /> تواصلي عبر واتساب</a></div>
    </div>
  </footer>;
}
