
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Mic2 } from 'lucide-react';
import { MILITARY_LOGOS } from '../constants';

const MilitaryLectures: React.FC = () => {
  return (
    <section className="bg-navy py-16 md:py-24 relative overflow-hidden border-y border-gold/20">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full mb-6">
            <Mic2 className="text-gold" size={16} />
            <span className="text-gold font-black tracking-widest text-xs uppercase">מרצים בשטח</span>
          </div>
          <h3 className="text-white font-black tracking-tight text-3xl md:text-4xl lg:text-6xl mb-6 leading-tight">
            גאים להרצות ולהוביל ערכים <br />
            <span className="text-gold">ביחידות המובחרות של צה"ל</span>
          </h3>
          <div className="w-24 h-1 bg-gold/40 rounded-full" />
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20 relative group"
        >
          <div className="aspect-video bg-white/5 rounded-[2.5rem] border-4 border-white/10 overflow-hidden relative shadow-3xl">
            {/* Video Placeholder Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="w-full h-px bg-gold/20 rotate-[30deg] absolute top-1/2" />
                <div className="w-full h-px bg-gold/20 -rotate-[30deg] absolute top-1/2" />
              </div>

              <button className="w-24 h-24 bg-gold text-navy rounded-full flex items-center justify-center shadow-2xl shadow-gold/40 transform group-hover:scale-110 transition-all duration-500 z-20">
                <Play fill="currentColor" size={32} className="ml-1" />
              </button>
            </div>

            {/* Overlay Text */}
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-right z-10">
              <p className="text-gold font-black text-xs md:text-sm uppercase tracking-widest mb-1">צפו בהרצאה</p>
              <h4 className="text-white text-xl md:text-2xl font-black">חינוך פיננסי ללוחמים</h4>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />
          </div>

          {/* Decorative frame elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-gold/30 rounded-tl-[2.5rem] -z-10" />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-gold/30 rounded-br-[2.5rem] -z-10" />
        </motion.div>
      </div>

      {/* Marquee Units */}
      <div className="relative flex overflow-hidden mt-10">
        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap py-4">
          {[...MILITARY_LOGOS, ...MILITARY_LOGOS, ...MILITARY_LOGOS].map((unit, i) => (
            <div
              key={i}
              className="text-white/20 text-2xl md:text-3xl lg:text-4xl font-black tracking-widest hover:text-gold transition-colors duration-500 cursor-default uppercase"
            >
              {unit}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilitaryLectures;
