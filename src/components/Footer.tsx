import { Instagram, Facebook, Phone } from 'lucide-react';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { waLink, DEFAULT_WA_MESSAGE } from '../lib/data';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Collection', href: '#collection' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Vidéos', href: '#videos' },
  { label: 'Processus', href: '#processus' },
  { label: 'Avis', href: '#avis' },
  { label: 'FAQ', href: '#faq' },
];

const socials = [
  { icon: <FaWhatsapp size={17} />, href: waLink(DEFAULT_WA_MESSAGE) },
  { icon: <Facebook size={17} />, href: waLink(DEFAULT_WA_MESSAGE) },
  { icon: <Instagram size={17} />, href: waLink(DEFAULT_WA_MESSAGE) },
  { icon: <FaTiktok size={17} />, href: waLink(DEFAULT_WA_MESSAGE) },
];

export default function Footer() {
  return (
    <footer className="bg-ivory border-t border-ink/8">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src="/images/logo-ml.png" alt="Logo Maison Lumière" className="h-12 w-12 object-contain" />
            <div>
              <div className="font-display text-lg text-ink">Maison Lumière</div>
              <div className="text-[9px] tracking-[0.4em] text-gold uppercase">Sneakers · Abidjan</div>
            </div>
          </div>
          <p className="mt-4 text-mocha/60 text-sm max-w-xs">L’élégance à vos pieds. Sneakers premium et authentiques au meilleur rapport qualité-prix.</p>
          <a href="tel:+2250502354176" className="mt-5 inline-flex items-center gap-2 text-sm text-mocha hover:text-gold transition-colors">
            <Phone size={15} className="text-gold" /> 225 / 0502354176
          </a>
        </div>
        <div>
          <h4 className="text-gold uppercase text-[11px] tracking-[0.25em] mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-mocha/65">
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-ink transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-gold uppercase text-[11px] tracking-[0.25em] mb-4">Suivez-nous</h4>
          <div className="flex gap-2.5">
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-ink/10 flex items-center justify-center text-ink hover:bg-ink hover:text-ivory transition-all duration-300">{s.icon}</a>
            ))}
          </div>
          <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full btn-gold px-5 py-2.5 text-sm font-medium">
            <FaWhatsapp size={15} /> Commander
          </a>
        </div>
      </div>
      <div className="border-t border-ink/8 py-6 text-center text-xs text-stone">
        © {new Date().getFullYear()} Maison Lumière. Tous droits réservés.
      </div>
    </footer>
  );
}
