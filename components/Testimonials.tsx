
import React from 'react';
import { motion } from 'framer-motion';
import CircularGallery from './CircularGallery';

const TESTIMONIAL_IMAGES = [
  { image: '/assets/testimonial-1.webp' },
  { image: '/assets/testimonial-2.webp' },
  { image: '/assets/testimonial-3.webp' },
  { image: '/assets/testimonial-4.webp' },
  { image: '/assets/testimonial-5.webp' },
  { image: '/assets/testimonial-6.webp' },
  { image: '/assets/testimonial-7.webp' },
  { image: '/assets/testimonial-8.webp' },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[140px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 blur-[160px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold font-black tracking-[0.4em] uppercase text-sm block mb-4"
          >
            מה הלקוחות אומרים
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter"
          >
            המלצות מלקוחות
          </motion.h2>
          <div className="w-24 h-2 bg-gold mx-auto rounded-full shadow-lg shadow-gold/20" />
          <p className="mt-8 text-white/70 font-bold text-xl md:text-2xl">
            לקוחות שקיבלו שקט נפשי והחלטות נכונות
          </p>
        </div>
      </div>

      <div style={{ height: '600px' }}>
        <CircularGallery
          items={TESTIMONIAL_IMAGES}
          bend={3}
          borderRadius={0.06}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>
    </section>
  );
};

export default Testimonials;
