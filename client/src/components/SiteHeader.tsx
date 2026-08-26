/** Herbarium Dispatch: compact mobile-first navigation with protected brand assets. */
import { Link, useLocation } from "wouter";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { brand } from "@/data/siteContent";

const navItems = [
  { href: "/", label: "الرئيسية" },
  { href: "/brand", label: "ملف الهوية" },
  { href: "/how-to-order", label: "طريقة الطلب" },
  { href: "/care", label: "العناية" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand-lockup" aria-label="العودة إلى الرئيسية">
          <img src={brand.logoUrl} alt="Zman Greens JO" className="brand-lockup__logo" />
        </Link>
        <nav className="site-nav" aria-label="التنقل الرئيسي">
          {navItems.map((item) => <Link key={item.href} href={item.href} className={location === item.href ? "site-nav__link site-nav__link--active" : "site-nav__link"}>{item.label}</Link>)}
        </nav>
        <a className="header-whatsapp" href={brand.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} /><span>واتساب</span></a>
        <button className="menu-toggle" type="button" aria-label={open ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? <X size={22} /> : <Menu size={23} />}</button>
      </div>
      {open && <div className="mobile-menu" aria-label="روابط التنقل">
        {navItems.map((item) => <Link key={item.href} href={item.href} className="mobile-menu__link" onClick={() => setOpen(false)}>{item.label}</Link>)}
        <Link href="/customize" className="mobile-menu__cta" onClick={() => setOpen(false)}>ابدئي طلبك</Link>
      </div>}
    </header>
  );
}
