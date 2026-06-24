import { motion } from "framer-motion";
import { LuCheck } from "react-icons/lu";
import Container from "../ui/Container";
import SectionTag from "../ui/SectionTag";
import DuotonePhoto from "../ui/DuotonePhoto";

const points = [
  "Собственное производство полного цикла",
  "Доставка манипулятором по всей стране",
  "Качественный бетон классов B15–B25",
  "Индивидуальные размеры по чертежам",
];

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 md:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 aspect-[4/5] lg:order-1"
        >
          <DuotonePhoto
            seed="concrete-factory-floor"
            alt="Цех производства бетонных блоков"
            className="h-full w-full"
          />
          <div className="absolute -bottom-6 -right-6 hidden rounded-sm bg-orange px-6 py-5 font-mono shadow-xl sm:block">
            <div className="text-3xl font-bold text-graphite">15+</div>
            <div className="text-xs uppercase tracking-wide text-graphite/70">лет на рынке</div>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <h2 className="mt-5 text-balance font-display text-4xl font-black uppercase leading-[1.05] md:text-5xl">
            Производим то, на чём строят остальные
          </h2>
          <p className="mt-6 max-w-lg text-steel">
            Наша компания занимается производством и поставкой лего бетонных
            блоков для жилого, коммерческого и промышленного строительства —
            от фундамента до перегородок.
          </p>

          <ul className="mt-9 space-y-1">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="block-seam flex items-center gap-3.5 py-4"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-orange text-graphite">
                  <LuCheck size={15} strokeWidth={3} />
                </span>
                <span className="font-medium text-graphite">{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
