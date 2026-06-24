import { motion } from "framer-motion";
import { LuArrowUpRight, LuBox } from "react-icons/lu";
import Container from "../ui/Container";
import SectionTag from "../ui/SectionTag";
import DuotonePhoto from "../ui/DuotonePhoto";
import { products } from "../data/products";

export default function Products() {
  return (
    <section id="products" className="bg-block py-24 md:py-36">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="mt-5 max-w-xl text-balance font-display text-4xl font-black uppercase leading-[1.05] md:text-5xl">
              Три формата —
              <br />
              один результат
            </h2>
          </div>
          <p className="max-w-sm text-steel">
            От компактного модуля до крупноформатного фундаментного блока.
            Под нестандартный проект изготовим размер индивидуально.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-7">
          {products.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col overflow-hidden rounded-md bg-paper shadow-[0_1px_3px_rgba(10,10,10,0.08)] transition-shadow duration-300 hover:shadow-[0_28px_50px_-16px_rgba(10,10,10,0.28)]"
            >
              {p.tag && (
                <span className="absolute right-5 top-5 z-10 rounded-full bg-orange px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wide text-paper shadow-md">
                  {p.tag}
                </span>
              )}

              <div className="relative aspect-[5/4] overflow-hidden">
                <DuotonePhoto
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-rebar/85 to-transparent p-5 pt-12">
                  <div className="flex items-center gap-2 font-mono text-sm font-semibold text-paper">
                    <LuBox size={15} className="text-orange" />
                    {p.dims} мм
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7 md:p-8">
                <h3 className="font-display text-2xl font-extrabold">{p.name}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-steel">{p.note}</p>

                <div className="mt-7 grid grid-cols-3 gap-3 border-t border-block-dark pt-6 font-mono">
                  <div>
                    <div className="text-[10px] uppercase tracking-wide text-steel-light">Объём</div>
                    <div className="mt-1.5 text-sm font-semibold text-graphite">{p.volume}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wide text-steel-light">Вес</div>
                    <div className="mt-1.5 text-sm font-semibold text-graphite">{p.weight}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wide text-steel-light">Бетон</div>
                    <div className="mt-1.5 text-sm font-semibold text-graphite">{p.strength}</div>
                  </div>
                </div>

                <a
                  href="#contacts"
                  className="mt-7 flex items-center gap-1.5 text-sm font-semibold text-graphite transition-colors group-hover:text-orange-deep"
                >
                  Заказать расчёт
                  <LuArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
