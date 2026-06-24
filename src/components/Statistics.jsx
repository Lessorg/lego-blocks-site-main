import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../ui/Container";
import useCountUp from "../hooks/useCountUp";
import { stats } from "../data/gallery";

function Stat({ value, suffix, label, index, start }) {
  const count = useCountUp(value, start, 1500 + index * 150);
  return (
    <div className="relative px-2 py-10 text-center first:pl-0 last:pr-0 md:py-0">
      <div className="font-mono text-5xl font-bold text-orange md:text-6xl">
        {count.toLocaleString("ru-RU")}
        <span>{suffix}</span>
      </div>
      <div className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-paper/60">
        {label}
      </div>
    </div>
  );
}

export default function Statistics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-rebar py-24 md:py-28">
      <div className="stud-grid-lg absolute inset-0 text-paper/[0.04]" />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 divide-y divide-paper/10 md:grid-cols-4 md:divide-x md:divide-y-0"
        >
          {stats.map((s, i) => (
            <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} index={i} start={inView} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
