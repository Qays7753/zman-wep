/** Herbarium Dispatch: a protected-identity case-study section, not a logo redesign. */
import { brand } from "@/data/siteContent";
import { ArrowUpLeft, CircleDot, Leaf, Type } from "lucide-react";

const applications = [
  { index: "01", title: "الأصل المحمي", detail: "يظهر الشعار الحالي كما هو، من دون إعادة رسم أو تبديل للرمز أو النسب.", icon: CircleDot },
  { index: "02", title: "ورق ونبات", detail: "سطح كريمي، أخضر عميق، وذهب يستخدم كختم إجرائي لا كلون واجهة صاخب.", icon: Leaf },
  { index: "03", title: "لغة هادئة", detail: "عناوين تحكي لحظة الهدية، وتفاصيل قصيرة تساعد الزائر أن يبدأ فكرته بثقة.", icon: Type },
];

export function BrandCaseStudy() {
  return <section className="brand-case" aria-labelledby="brand-case-title">
    <div className="section-shell brand-case__intro"><div><span className="section-kicker">ملف الهوية · ZMAN GREENS JO</span><h2 id="brand-case-title">علامة حيّة.<br /><em>وليست زينة فوق المنتج.</em></h2></div><p>نبني كل نقطة اتصال كأنها امتداد لبطاقة هدية نباتية: من الورق واللون إلى صورة المنتج وطريقة طلبه.</p></div>
    <div className="brand-case__canvas">
      <div className="brand-case__anchor"><img src={brand.logoUrl} alt="الشعار المعتمد لـ Zman Greens JO" /><span>النسخة المعتمدة · تُعرض دون تعديل</span></div>
      <div className="brand-case__colour-notes" aria-label="ألوان الهوية"><i /><i /><i /><small>FOREST · CREAM · GOLD</small></div>
      <div className="brand-case__folio"><span className="brand-case__folio-index">BRAND / 01</span><p>«هدية صغيرة، ذكرى تكبر» ليست جملة دعائية منفصلة؛ إنها المعيار الذي يحكم شكل الهدية، خامتها، وطريقة وصولها.</p><a href="#planted-story">شاهدي القصة وهي تتشكل <ArrowUpLeft size={16} /></a></div>
      <img className="brand-case__rosette" src={brand.rosetteUrl} alt="" aria-hidden="true" />
    </div>
    <div className="section-shell brand-case__applications">{applications.map(({ index, title, detail, icon: Icon }) => <article key={index}><span>{index}</span><Icon size={19} /><h3>{title}</h3><p>{detail}</p></article>)}</div>
  </section>;
}
