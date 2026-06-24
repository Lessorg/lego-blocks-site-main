import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionTag from "../ui/SectionTag";
import { processSteps } from "../data/gallery";

export default function Process() {
  return (
    <section className="bg-block py-24 md:py-32">
      <Container>
        <div className="flex justify-center">
          <SectionTag index="04">Как мы работаем</SectionTag>
        </div>
        <h2 className="mx-auto mt-5 max-w-lg text-balance text-center font-display text-4xl font-black uppercase leading-[1.05] md:text-5xl">
          Путь от заявки до монтажа
        </h2>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-block-dark lg:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-7 hidden h-px bg-orange-deep lg:block"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-graphite font-mono text-base font-bold text-paper">
                  {s.num}
                </div>
                <h3 className="mt-5 font-display text-lg font-extrabold">{s.title}</h3>
                <p className="mt-2 max-w-[220px] text-sm text-steel">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
