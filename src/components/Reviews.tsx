import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import { reviews } from '../lib/data';
import { SectionHeading } from './Collection';
import SectionVideoBg from './SectionVideoBg';

export default function Reviews() {
  return (
    <section id="avis" className="relative py-24 md:py-32 overflow-hidden">
      <SectionVideoBg src="/videos/people-5.mp4" tone="light" veil={58} />
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          kicker="Avis Clients"
          title={<>Ils nous font confiance.</>}
          subtitle="Plus de 500 clients satisfaits à travers la Côte d’Ivoire."
        />
        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3800, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
            className="!pb-14 reviews-swiper"
          >
            {reviews.map((r, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="h-full rounded-3xl card-soft p-7 flex flex-col">
                  <Quote className="text-gold/40" size={30} />
                  <div className="mt-3 flex gap-1">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <Star key={k} size={15} className="fill-champagne text-champagne" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-mocha/80 text-[15px] leading-relaxed">« {r.text} »</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img src={r.photo} alt={`Photo de ${r.name}`} loading="lazy" className="h-11 w-11 rounded-full object-cover ring-2 ring-gold/30" />
                    <div>
                      <div className="font-medium text-ink text-sm">{r.name}</div>
                      <div className="text-stone text-xs">{r.city}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style>{`.reviews-swiper .swiper-pagination-bullet{background:#b6863c;opacity:.3}.reviews-swiper .swiper-pagination-bullet-active{opacity:1}`}</style>
    </section>
  );
}
