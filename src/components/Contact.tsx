import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { waLink, DEFAULT_WA_MESSAGE } from '../lib/data';
import SectionVideoBg from './SectionVideoBg';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 text-ivory overflow-hidden">
      <SectionVideoBg src="/videos/people-4.mp4" tone="dark" veil={50} />
      <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-champagne/15 blur-[120px] z-[1]" />
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* photo collage */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4"
        >
          <img src="/images/sneaker-2.jpg" alt="New Balance 530" className="rounded-2xl object-cover h-56 w-full mt-8" loading="lazy" />
          <img src="/images/sneaker-4.jpg" alt="Adidas Campus" className="rounded-2xl object-cover h-56 w-full" loading="lazy" />
          <img src="/images/sneaker-3.jpg" alt="Nike Air Max DN" className="rounded-2xl object-cover h-56 w-full" loading="lazy" />
          <img src="/images/sneaker-1.jpg" alt="Asics Gel Kayano" className="rounded-2xl object-cover h-56 w-full -mt-8" loading="lazy" />
        </motion.div>

        {/* copy */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-gold tracking-[0.35em] text-[11px] uppercase">Contact</span>
          <h2 className="mt-3 font-display font-light text-4xl md:text-6xl leading-[1.02]">
            Prêt à commander votre<br />prochaine paire ?
          </h2>
          <p className="mt-5 text-ivory/65 text-lg max-w-md">
            Notre équipe vous répond en moins de 24h sur WhatsApp. Choisissez, confirmez,
            et offrez à vos pieds l’élégance qu’ils méritent.
          </p>
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full btn-gold px-8 py-4 text-lg font-medium"
          >
            <FaWhatsapp size={21} /> Commander sur WhatsApp
          </a>
          <div className="mt-10 grid sm:grid-cols-3 gap-4 text-sm">
            {[
              { icon: <Phone size={18} />, t: 'WhatsApp', v: '+225 05 02 35 41 76' },
              { icon: <Clock size={18} />, t: 'Réponse', v: 'Sous 24h' },
              { icon: <MapPin size={18} />, t: 'Livraison', v: 'Toute la Côte d’Ivoire' },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-ivory/10 bg-ivory/5 p-4">
                <span className="text-gold">{c.icon}</span>
                <div className="mt-2 text-[10px] uppercase tracking-widest text-ivory/45">{c.t}</div>
                <div className="mt-0.5 text-ivory">{c.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
