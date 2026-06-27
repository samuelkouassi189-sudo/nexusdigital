import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Play, X } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import { youtubeShorts, type ShortVideo } from '../lib/data';
import { SectionHeading } from './Collection';
import SectionVideoBg from './SectionVideoBg';

export default function Videos() {
  const [playing, setPlaying] = useState<ShortVideo | null>(null);

  return (
    <section id="videos" className="relative py-24 md:py-32 overflow-hidden">
      <SectionVideoBg src="/videos/people-1.mp4" tone="light" veil={56} />
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          kicker="Vidéos"
          title={<>Découvrez nos modèles en vidéo.</>}
          subtitle="Chaque aperçu correspond exactement à sa vidéo. Cliquez pour lancer la lecture."
        />

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 video-swiper"
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            navigation
            breakpoints={{ 640: { slidesPerView: 2.2 }, 900: { slidesPerView: 3.2 }, 1200: { slidesPerView: 4 } }}
          >
            {youtubeShorts.map((v) => (
              <SwiperSlide key={v.id}>
                <button
                  onClick={() => setPlaying(v)}
                  className="group relative w-full aspect-[9/16] rounded-3xl overflow-hidden card-soft block"
                  aria-label={`Lire la vidéo : ${v.title}`}
                >
                  <img
                    src={v.thumb}
                    alt={`Aperçu vidéo ${v.title}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-ink/25 group-hover:from-ink/55 transition-colors duration-500" />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-ivory text-ink p-4 transition-transform duration-300 group-hover:scale-110">
                      <Play size={24} className="ml-0.5 fill-ink" />
                    </span>
                  </span>
                  <span className="absolute top-3 left-3 text-[10px] tracking-[0.25em] uppercase text-ivory bg-ink/40 rounded-full px-3 py-1">Short</span>
                  <span className="absolute bottom-4 left-4 right-4 text-left font-display text-lg text-ivory">{v.title}</span>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/92 backdrop-blur-md flex flex-col items-center justify-center p-4"
            onClick={() => setPlaying(null)}
          >
            <button className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-ivory text-ink hover:bg-gold hover:text-white transition-colors" onClick={() => setPlaying(null)} aria-label="Fermer la vidéo">
              <X size={22} />
            </button>
            <motion.div
              key={playing.id}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="w-full max-w-[380px] aspect-[9/16] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${playing.id}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
                title={`Vidéo ${playing.title} — Maison Lumière`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
            <p className="mt-4 font-display text-ivory text-lg">{playing.title}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .video-swiper .swiper-button-next,
        .video-swiper .swiper-button-prev { color: #1c1a17; }
        .video-swiper .swiper-button-next::after,
        .video-swiper .swiper-button-prev::after { font-size: 20px; font-weight: 700; }
      `}</style>
    </section>
  );
}
