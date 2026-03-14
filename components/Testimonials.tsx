
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-offwhite relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-navy mb-6 tracking-tighter">המלצות מלקוחות</h2>
          <div className="w-24 h-2 bg-gold mx-auto rounded-full shadow-lg shadow-gold/20" />
          <p className="mt-8 text-navy/70 font-bold text-xl md:text-2xl">לקוחות שקיבלו שקט נפשי והחלטות נכונות</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative mb-8 md:mb-12 h-[350px] md:h-[600px] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(27,58,92,0.25)] border-[8px] md:border-[10px] border-white bg-white/90 flex items-center justify-center group-hover:scale-[1.03] transition-all duration-700">
                {/* Placeholder for Video/Image */}
                <div className="w-full h-full relative bg-navy/5">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                    <div className="w-full h-px bg-navy rotate-[55deg] transform" />
                    <div className="w-full h-px bg-navy -rotate-[55deg] transform" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors flex items-center justify-center z-10">
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: '#D4AF37', color: '#1B3A5C' }}
                    whileTap={{ scale: 0.9 }}
                    className="w-28 h-28 bg-white/30 text-white rounded-full flex items-center justify-center shadow-3xl border border-white/30 transition-colors"
                  >
                    <Play fill="currentColor" size={36} className="ml-1" />
                  </motion.button>
                </div>
                <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 text-navy text-right z-20 px-6 py-4 md:px-8 md:py-5 bg-white/95 rounded-3xl shadow-2xl border border-white">
                  <h4 className="text-2xl md:text-3xl font-black mb-1">{t.name}</h4>
                  <p className="text-gold font-bold text-xs md:text-sm tracking-widest uppercase">{t.role}</p>
                </div>
              </div>

              <div className="relative px-6">
                <Quote className="text-gold/20 absolute -top-6 -right-2 rotate-180" size={60} />
                <p className="text-xl text-navy leading-relaxed font-black">
                  "{t.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
