import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { SectionHeading } from './Collection';
import SectionVideoBg from './SectionVideoBg';

const imgs = [
  { src: '/images/sneaker-1.jpg', alt: 'Asics Gel Kayano 14 — gris perle', h: 'h-[440px]' },
  { src: '/images/sneaker-4.jpg', alt: 'Adidas Campus 00s — daim noir', h: 'h-[320px]' },
  { src: '/images/sneaker-2.jpg', alt: 'New Balance 530 — blanc argenté', h: 'h-[360px]' },
  { src: '/images/sneaker-3.jpg', alt: 'Nike Air Max DN — noir total', h: 'h-[440px]' },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') setActive((p) => (p === null ? p : (p + 1) % imgs.length));
      if (e.key === 'ArrowLeft') setActive((p) => (p === null ? p : (p - 1 + imgs.length) % imgs.length));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <section id="galerie" className="relative py-24 md:py-32 overflow-hidden">
      <SectionVideoBg src="/videos/people-2.mp4" tone="light" veil={55} />
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          kicker="Galerie"
          title={<>Vues d’atelier</>}
          subtitle="Nos paires telles que vous les recevrez : authentiques, soignées, prêtes à porter."
        />
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          {imgs.map((im, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className={`group relative w-full ${im.h} overflow-hidden rounded-3xl card-soft ${i % 2 === 1 ? 'lg:mt-10' : ''}`}
              aria-label={`Agrandir : ${im.alt}`}
            >
              <img
                src={im.src}
                alt={im.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1100ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute right-3 bottom-3 grid h-9 w-9 place-items-center rounded-full bg-ivory/90 text-ink opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                <Plus size={16} />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/92 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <button className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-ivory text-ink hover:bg-gold hover:text-white transition-colors" onClick={() => setActive(null)} aria-label="Fermer">
              <X size={22} />
            </button>
            <button
              className="absolute left-3 md:left-8 grid h-12 w-12 place-items-center rounded-full bg-ivory/90 text-ink hover:bg-gold hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); setActive((p) => (p === null ? p : (p - 1 + imgs.length) % imgs.length)); }}
              aria-label="Précédent"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-3 md:right-8 grid h-12 w-12 place-items-center rounded-full bg-ivory/90 text-ink hover:bg-gold hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); setActive((p) => (p === null ? p : (p + 1) % imgs.length)); }}
              aria-label="Suivant"
            >
              <ChevronRight size={24} />
            </button>
            <motion.figure
              key={active}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={imgs[active].src} alt={imgs[active].alt} className="w-full max-h-[80vh] object-contain rounded-2xl" />
              <figcaption className="mt-4 text-center text-ivory/80 text-sm tracking-wide">{imgs[active].alt}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
