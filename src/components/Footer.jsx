import { LuPhone, LuMail, LuMapPin, LuArrowUpRight } from "react-icons/lu";
import { FaTelegram, FaViber, FaFacebook } from "react-icons/fa6";
import BlockMark from "../ui/BlockMark";
import Container from "../ui/Container";

const NAV_LINKS = [
  { href: "#products", label: "Продукция" },
  { href: "#about", label: "О компании" },
  { href: "#contacts", label: "Контакты" },
];

const CONTACT_LINKS = [
  { icon: LuPhone, label: "+38 (000) 000-00-00", href: "tel:+380000000000" },
  { icon: LuMail, label: "mail@blokbaza.ua", href: "mailto:mail@blokbaza.ua" },
  { icon: LuMapPin, label: "г. Сумы, ул. Промышленная, 12", href: "#contacts" },
];

const SOCIALS = [
  { icon: FaTelegram, label: "Telegram", href: "#" },
  { icon: FaViber, label: "Viber", href: "#" },
  { icon: FaFacebook, label: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-rebar text-paper/65">
      <Container className="py-20">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_0.9fr]">
          <div>
            <a href="#hero" className="flex items-center gap-2.5">
              <BlockMark className="h-9 w-9" tone="orange" />
              <span className="font-display text-lg font-black text-paper">БЛОКБАЗА</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/50">
              Производство и поставка лего бетонных блоков для жилого,
              коммерческого и промышленного строительства по всей стране.
            </p>
            <a
              href="#contacts"
              className="mt-6 inline-flex items-center gap-2 rounded-sm border border-paper/15 px-5 py-3 text-sm font-semibold text-paper transition-colors hover:border-orange hover:text-orange"
            >
              Оставить заявку
              <LuArrowUpRight size={15} />
            </a>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/35">
              Навигация
            </div>
            <nav className="mt-5 flex flex-col gap-3.5">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="text-sm transition-colors hover:text-orange w-fit">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <div className="mt-5 flex flex-col gap-3.5">
              {CONTACT_LINKS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-start gap-2.5 text-sm transition-colors hover:text-orange"
                >
                  <c.icon size={16} className="mt-0.5 shrink-0 text-paper/40" />
                  <span>{c.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/35">
              Соцсети
            </div>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-paper/8 transition-colors hover:bg-orange hover:text-rebar"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
            <div className="mt-7 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/35">
              Режим работы
            </div>
            <div className="mt-2 text-sm text-paper/60">Пн–Сб, 8:00–18:00</div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-paper/10 pt-7 text-xs text-paper/35 sm:flex-row sm:justify-between">
          <span>© 2026 БЛОКБАЗА. Все права защищены.</span>
          <span className="font-mono uppercase tracking-wide">Лего бетонные блоки · Производство · Доставка</span>
        </div>
      </Container>
    </footer>
  );
}
