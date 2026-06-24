import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuMenu, LuX, LuPhone } from "react-icons/lu";
import BlockMark from "../ui/BlockMark";
import Container from "../ui/Container";

const LINKS = [
  { href: "#products", label: "Продукция" },
  { href: "#contacts", label: "Контакты" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dark = scrolled || open || true;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        dark ? "bg-paper/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-block-dark)]" : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 z-10">
          <BlockMark className="h-9 w-9" tone={dark ? "graphite" : "orange"} />
          <span
            className={`font-display text-lg font-black tracking-tight ${
              dark ? "text-graphite" : "text-paper"
            }`}
          >
            БЛОКБАЗА
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-mono text-[13px] uppercase tracking-[0.1em] transition-colors hover:text-orange-deep ${
                dark ? "text-graphite" : "text-paper/90"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="tel:+380000000000"
            className={`flex items-center gap-2 rounded-sm border px-4 py-2.5 text-sm font-semibold transition-colors ${
              dark
                ? "border-graphite text-graphite hover:bg-graphite hover:text-paper"
                : "border-paper/40 text-paper hover:bg-paper hover:text-graphite"
            }`}
          >
            <LuPhone size={15} /> Позвонить
          </a>
        </div>

        <button
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
          className={`z-10 grid h-10 w-10 place-items-center lg:hidden ${dark ? "text-graphite" : "text-paper"}`}
        >
          {open ? <LuX size={26} /> : <LuMenu size={26} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-paper lg:hidden"
          >
            <Container className="flex flex-col gap-1 pb-8 pt-2">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block-seam py-4 font-display text-xl font-bold text-graphite"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="tel:+380000000000"
                className="mt-4 flex items-center justify-center gap-2 rounded-sm bg-orange py-3.5 font-semibold text-graphite"
              >
                <LuPhone size={16} /> +38 (000) 000-00-00
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
