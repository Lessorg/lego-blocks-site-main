import { motion } from "framer-motion";
import { LuArrowDown, LuPhone } from "react-icons/lu";
import Container from "../ui/Container";
import DuotonePhoto from "../ui/DuotonePhoto";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden bg-rebar">
      <div className="absolute inset-0">
        <DuotonePhoto
          seed="concrete-hero-yard"
          alt="Производство лего бетонных блоков"
          className="h-full w-full"
          imgClassName="scale-105"
          width={1800}
          height={1200}
          priority
        />
        <div className="absolute inset-0 bg-rebar/55" />
        <div className="stud-grid-lg absolute inset-0 text-paper/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-rebar via-transparent to-rebar/40" />
      </div>

      <Container className="relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-orange"
        >
          <span className="h-px w-10 bg-orange" />
          Производство · Доставка · Монтаж
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-6 max-w-3xl text-balance font-display text-5xl font-black uppercase leading-[0.95] text-paper xs:text-6xl md:text-7xl lg:text-8xl"
        >
          Лего бетонные
          <br />
          <span className="text-orange">блоки</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="mt-7 max-w-md text-lg text-paper/80"
        >
          Быстрое строительство. Высокая прочность. Доставка по всей стране —
          от завода прямо на ваш объект.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#products"
            className="group relative overflow-hidden rounded-sm bg-orange px-7 py-4 font-semibold text-graphite"
          >
            <span className="relative z-10">Каталог блоков</span>
            <span className="absolute inset-0 -translate-x-full bg-paper transition-transform duration-300 group-hover:translate-x-0" />
          </a>
          <a
            href="tel:+380000000000"
            className="flex items-center gap-2 rounded-sm border border-paper/40 px-7 py-4 font-semibold text-paper transition-colors hover:border-paper hover:bg-paper/10"
          >
            <LuPhone size={17} /> Позвонить
          </a>
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-paper/70"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Листать</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <LuArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
