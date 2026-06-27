import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { waLink, DEFAULT_WA_MESSAGE } from '../lib/data';

const links = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Collection', href: '#collection' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Vidéos', href: '#videos' },
  { label: 'Pourquoi nous', href: '#pourquoi' },
  { label: 'Processus', href: '#processus' },
  { label: 'Avis', href: '#avis' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory/85 backdrop-blur-xl border-b border-ink/8 shadow-[0_10px_30px_-20px_rgba(28,26,23,0.4)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <a href="#accueil" className="flex items-center gap-3 group" aria-label="Maison Lumière accueil">
          <img src="/images/logo-ml.png" alt="Logo Maison Lumière" className="h-11 w-11 object-contain" />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-tight text-ink">Maison Lumière</span>
            <span className="block text-[9px] tracking-[0.4em] text-gold uppercase">Sneakers · Abidjan</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[13px] font-medium text-mocha/80 hover:text-ink transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={waLink(DEFAULT_WA_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 rounded-full btn-ink px-5 py-2.5 text-sm font-medium"
        >
          <FaWhatsapp size={15} /> Commander
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-ink p-2"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden overflow-hidden bg-ivory/97 backdrop-blur-xl border-t border-ink/8"
          >
            <ul className="flex flex-col px-6 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base text-mocha hover:text-gold border-b border-ink/5 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href={waLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full btn-ink px-5 py-3 font-medium"
                >
                  <FaWhatsapp size={16} /> Commander sur WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
