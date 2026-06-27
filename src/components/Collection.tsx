import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { products, waLink } from '../lib/data';
import SectionVideoBg from './SectionVideoBg';

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'center',
}: {
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'}
      style={{ textShadow: '0 1px 18px rgba(247,243,236,0.85)' }}
    >
      <span className="inline-flex rounded-full bg-ivory/70 backdrop-blur-sm px-3 py-1 text-gold tracking-[0.35em] text-[11px] uppercase">{kicker}</span>
      <h2 className="mt-4 font-display font-light text-4xl md:text-6xl text-ink leading-[1.02]">{title}</h2>
      {subtitle && <p className="mt-4 text-mocha/80 text-lg leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}

function ProductCard({ p, index }: { p: (typeof products)[number]; index: number }) {
  const msg = `Bonjour Maison Lumière, je souhaite commander : ${p.name} (${p.price}).`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 46 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      className="group relative rounded-3xl card-soft overflow-hidden"
    >
      <div className="relative overflow-hidden" style={{ backgroundColor: p.tone + '22' }}>
        <span className="absolute top-4 left-4 z-10 rounded-full bg-ivory/90 backdrop-blur px-3 py-1 text-[11px] font-medium text-ink tracking-wide">
          {p.tag}
        </span>
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-72 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl text-ink leading-snug">{p.name}</h3>
          <span className="shrink-0 font-display text-lg text-gold">{p.price}</span>
        </div>
        <p className="mt-2 text-mocha/60 text-sm leading-relaxed">{p.desc}</p>
        <a
          href={waLink(msg)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full btn-ink px-6 py-3 text-sm font-medium"
        >
          <FaWhatsapp size={16} /> Commander
          <ArrowRight size={15} className="opacity-70" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Collection() {
  return (
    <section id="collection" className="relative py-24 md:py-32 overflow-hidden">
      <SectionVideoBg src="/videos/people-1.mp4" tone="light" veil={58} />
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            align="left"
            kicker="La Collection"
            title={<>Quatre pièces,<br />une signature.</>}
            subtitle="Sélectionnées à la main pour leur style, leur confort et leur authenticité."
          />
          <p className="text-sm text-stone md:max-w-[14rem] md:text-right">
            Chaque modèle est neuf, livré dans sa boîte d’origine.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
