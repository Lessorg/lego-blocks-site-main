import { motion } from "framer-motion";
import { LuFactory, LuTruck, LuShieldCheck, LuTimer, LuRuler, LuBadgePercent } from "react-icons/lu";
import Container from "../ui/Container";
import SectionTag from "../ui/SectionTag";
import { advantages } from "../data/gallery";

const ICONS = {
  factory: LuFactory,
  truck: LuTruck,
  strength: LuShieldCheck,
  clock: LuTimer,
  ruler: LuRuler,
  price: LuBadgePercent,
};

export default function Advantages() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <div className="flex justify-center">
            <SectionTag index="03">Преимущества</SectionTag>
          </div>
          <h2 className="mx-auto mt-5 text-balance font-display text-4xl font-black uppercase leading-[1.05] md:text-5xl">
            Почему выбирают нас
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-block-dark sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a, i) => {
            const Icon = ICONS[a.icon];
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ backgroundColor: "#161616" }}
                className="group relative bg-paper p-8 transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ rotate: -6, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="grid h-14 w-14 place-items-center rounded-sm bg-block text-graphite group-hover:bg-orange"
                >
                  <Icon size={24} />
                </motion.div>
                <h3 className="mt-6 font-display text-lg font-extrabold group-hover:text-paper">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-steel group-hover:text-paper/70">{a.text}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
