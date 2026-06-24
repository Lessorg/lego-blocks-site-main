import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { LuExpand } from "react-icons/lu";
import Container from "../ui/Container";
import SectionTag from "../ui/SectionTag";
import DuotonePhoto from "../ui/DuotonePhoto";
import { galleryItems } from "../data/gallery";

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  const slides = galleryItems.map((g) => ({
    src: `https://picsum.photos/seed/${g.seed}/1600/1100`,
    alt: g.caption,
  }));

  return (
    <section id="gallery" className="bg-paper py-24 md:py-32">
      <Container>
        <div className="flex justify-center">
          <SectionTag index="05">Галерея</SectionTag>
        </div>
        <h2 className="mx-auto mt-5 max-w-lg text-balance text-center font-display text-4xl font-black uppercase leading-[1.05] md:text-5xl">
          Объекты и производство
        </h2>

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {galleryItems.map((g, i) => (
            <motion.button
              key={g.id}
              type="button"
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`group relative block w-full overflow-hidden rounded-sm text-left ${
                g.tall ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <DuotonePhoto
                seed={g.seed}
                alt={g.caption}
                className="h-full w-full"
                imgClassName="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-rebar/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex items-center gap-2 font-medium text-paper">
                  <LuExpand size={16} className="text-orange" />
                  {g.caption}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </Container>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        styles={{ container: { backgroundColor: "rgba(17, 21, 28, 0.95)" } }}
      />
    </section>
  );
}
