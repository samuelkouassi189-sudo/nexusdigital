import { motion } from 'framer-motion';
import { stats } from '../lib/data';

export default function Stats() {
  return (
    <section id="stats" className="relative py-16 bg-ink text-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-ivory/10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="text-center px-2"
          >
            <div className="font-display text-4xl md:text-6xl font-light text-gold-grad">{s.value}</div>
            <div className="mt-2 text-ivory/55 text-[11px] md:text-xs uppercase tracking-[0.2em]">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
