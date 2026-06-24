import { motion } from "framer-motion";
import { LuPhone, LuMail, LuMapPin, LuClock3 } from "react-icons/lu";
import { FaTelegram, FaViber, FaFacebook } from "react-icons/fa6";
import Container from "../ui/Container";
import SectionTag from "../ui/SectionTag";

const info = [
  { icon: LuPhone, label: "+38 (000) 000-00-00", href: "tel:+380000000000" },
  { icon: LuMail, label: "mail@blokbaza.ua", href: "mailto:mail@blokbaza.ua" },
  { icon: LuMapPin, label: "г. Сумы, ул. Промышленная, 12", href: "#" },
  { icon: LuClock3, label: "Пн–Сб, 8:00–18:00", href: "#" },
];

const socials = [
  { icon: FaTelegram, label: "Telegram", href: "#" },
  { icon: FaViber, label: "Viber", href: "#" },
  { icon: FaFacebook, label: "Facebook", href: "#" },
];

export default function Contacts() {
  return (
    <section id="contacts" className="bg-graphite py-24 text-paper md:py-32">
      <Container className="grid gap-14 lg:grid-cols-2 lg:gap-10">
        <div>
          <h2 className="mt-5 text-balance font-display text-4xl font-black uppercase leading-[1.05] md:text-5xl">
            Обсудим ваш объект
          </h2>
          <p className="mt-5 max-w-md text-paper/65">
            Оставьте заявку или свяжитесь напрямую — рассчитаем количество
            блоков и сроки поставки в течение дня.
          </p>

          <div className="mt-10 space-y-1">
            {info.map((it, i) => (
              <motion.a
                key={it.label}
                href={it.href}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="flex items-center gap-4 border-t border-paper/10 py-4 transition-colors hover:text-orange last:border-b"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper/10">
                  <it.icon size={17} />
                </span>
                <span className="font-medium">{it.label}</span>
              </motion.a>
            ))}
          </div>

          <div className="mt-9">
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-paper/50">
              Социальные сети
            </div>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full bg-paper/10 transition-colors hover:bg-orange hover:text-graphite"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="min-h-[360px] overflow-hidden rounded-sm ring-1 ring-paper/10 grayscale invert-[0.92] contrast-[0.9]"
        >
          <iframe
            title="Карта"
            src="https://maps.google.com/maps?q=Sumy%2C%20Ukraine&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-full min-h-[360px] w-full border-0"
            loading="lazy"
          />
        </motion.div>
      </Container>
    </section>
  );
}
