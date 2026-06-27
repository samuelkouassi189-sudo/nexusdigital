import { motion } from 'framer-motion';
import { Gem, Tag, Flame, Truck } from 'lucide-react';
import { whyUs } from '../lib/data';
import { SectionHeading } from './Collection';
import SectionVideoBg from './SectionVideoBg';

const icons: Record<string, React.ReactNode> = {
  gem: <Gem size={24} />,
  tag: <Tag size={24} />,
  flame: <Flame size={24} />,
  truck: <Truck size={24} />,
};

export default function WhyUs() {
  return (
    <section id="pourquoi" className="relative py-24 md:py-32 overflow-hidden">
      <SectionVideoBg src="/videos/people-4.mp4" tone="light" veil={58} />
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          kicker="Pourquoi Maison Lumière"
          title={<>L’exigence, en héritage.</>}
          subtitle="Quatre engagements qui font la différence."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-3xl card-soft p-7 hover:-translate-y-1.5 transition-transform duration-400"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold p-3.5">
                {icons[w.icon]}
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">{w.title}</h3>
              <p className="mt-2 text-mocha/60 text-sm leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
