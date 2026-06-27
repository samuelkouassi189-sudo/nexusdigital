import { motion } from 'framer-motion';
import { Footprints, MessageCircle, BadgeCheck, Truck, Sparkles } from 'lucide-react';
import { processSteps } from '../lib/data';
import { SectionHeading } from './Collection';
import SectionVideoBg from './SectionVideoBg';

const icons: Record<string, React.ReactNode> = {
  shoe: <Footprints size={22} />,
  chat: <MessageCircle size={22} />,
  check: <BadgeCheck size={22} />,
  truck: <Truck size={22} />,
  sparkles: <Sparkles size={22} />,
};

export default function Process() {
  return (
    <section id="processus" className="relative py-24 md:py-32 overflow-hidden">
      <SectionVideoBg src="/videos/people-2.mp4" tone="light" veil={58} />
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          kicker="Le Processus"
          title={<>Commander, en 5 gestes.</>}
          subtitle="Simple, fluide et rassurant — du premier clic à la livraison."
        />
        <div className="mt-16 grid md:grid-cols-5 gap-4">
          {processSteps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="relative rounded-3xl card-soft p-6"
            >
              <span className="font-display text-5xl font-light text-sand">{s.n}</span>
              <div className="mt-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-ivory">
                {icons[s.icon]}
              </div>
              <h3 className="mt-4 font-display text-lg text-ink leading-snug">{s.title}</h3>
              <p className="mt-2 text-mocha/60 text-sm leading-relaxed">{s.desc}</p>
              {i < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 h-px w-4 bg-gold/40" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
