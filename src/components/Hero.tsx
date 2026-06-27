import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowDownRight, Star } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { waLink, DEFAULT_WA_MESSAGE, marqueeWords } from '../lib/data';
import SectionVideoBg from './SectionVideoBg';

export default function Hero() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="accueil" className="relative min-h-screen w-full overflow-hidden pt-28 md:pt-24">
      <SectionVideoBg src="/videos/people-1.mp4" tone="light" veil={48} />
      {/* warm ambient blobs */}
      <div className="absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-champagne/20 blur-[120px] z-[1]" />
      <div className="absolute top-1/3 -left-24 h-[24rem] w-[24rem] rounded-full bg-sand/40 blur-[120px] z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-6 items-center min-h-[calc(100vh-7rem)]">
        {/* Left — editorial copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-1.5 text-xs tracking-wide text-mocha"
          >
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className="fill-champagne text-champagne" />
              ))}
            </span>
            Plus de 500 clients satisfaits
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="mt-6 font-display font-light text-ink leading-[0.95] text-[3.4rem] sm:text-7xl xl:text-8xl tracking-tight"
          >
            L<span className="text-gold-grad">’élégance</span>
            <br />
            à vos pieds.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9 }}
            className="mt-6 max-w-md text-mocha/75 text-lg leading-relaxed"
          >
            Maison Lumière sélectionne pour vous des sneakers premium, authentiques,
            au meilleur rapport qualité-prix. Livrées partout en Côte d’Ivoire.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full btn-gold px-7 py-4 font-medium"
            >
              <FaWhatsapp size={19} /> Commander maintenant
            </a>
            <a
              href="#collection"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/50 px-7 py-4 font-medium text-ink hover:bg-white transition-colors"
            >
              Découvrir la collection
              <ArrowDownRight size={18} className="text-gold group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="mt-10 flex items-center gap-6 text-sm text-stone"
          >
            <div>
              <span className="font-display text-2xl text-ink">18–20K</span>
              <span className="block text-xs uppercase tracking-wider">FCFA la paire</span>
            </div>
            <div className="h-8 w-px bg-ink/10" />
            <div>
              <span className="font-display text-2xl text-ink">24h</span>
              <span className="block text-xs uppercase tracking-wider">Réponse WhatsApp</span>
            </div>
            <div className="h-8 w-px bg-ink/10" />
            <div>
              <span className="font-display text-2xl text-ink">100%</span>
              <span className="block text-xs uppercase tracking-wider">Authentique</span>
            </div>
          </motion.div>
        </div>

        {/* Right — real product photo, editorial framing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
          style={{ transform: `translateY(${offset * -0.06}px)` }}
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-champagne/30 to-transparent blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] card-soft">
              <img
                src="/images/sneaker-1.jpg"
                alt="Asics Gel Kayano 14 — Maison Lumière"
                className="w-full h-[30rem] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-ivory/85 backdrop-blur px-4 py-3">
                <div>
                  <p className="font-display text-ink leading-tight">Asics Gel Kayano 14</p>
                  <p className="text-xs text-stone">Best-seller</p>
                </div>
                <span className="font-display text-gold text-lg">20 000 F</span>
              </div>
            </div>
            {/* floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 rounded-2xl card-soft px-4 py-3 hidden sm:block"
            >
              <p className="text-[10px] uppercase tracking-widest text-stone">Livraison</p>
              <p className="font-display text-ink">Abidjan & CI</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* gold marquee strip */}
      <div className="relative z-10 border-y border-ink/8 bg-ink text-ivory overflow-hidden py-3">
        <div className="marquee-track">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="mx-7 flex items-center gap-7 text-sm tracking-[0.2em] uppercase text-ivory/80">
              {w}
              <span className="text-champagne">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
