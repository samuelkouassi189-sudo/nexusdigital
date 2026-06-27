import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { waLink, DEFAULT_WA_MESSAGE } from '../lib/data';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Commander sur WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.4, type: 'spring' }}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:scale-110 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <FaWhatsapp size={28} className="relative text-white" />
    </motion.a>
  );
}
