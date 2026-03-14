
import React from 'react';
import { motion } from 'framer-motion';
import { Mic2 } from 'lucide-react';
import { MILITARY_LOGOS } from '../constants';

const MilitaryLectures: React.FC = () => {
  return (
    <section className="bg-navy py-10 md:py-14 relative overflow-hidden border-y border-gold/20">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-8">
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

        {/* Lecture Photos */}
        <div className="flex gap-6 md:gap-10 justify-center items-center mt-6 mb-2 px-4">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/30 w-56 md:w-64 lg:w-72 aspect-[4/3] group rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
            <img
              src="/assets/amit-lecture.webp"
              loading="lazy"
              alt="עמית גולד מרצה ביחידות צבאיות"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy/80 to-transparent p-3 text-right">
              <p className="text-white font-black text-base">עמית גולד</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/30 w-56 md:w-64 lg:w-72 aspect-[4/3] group rotate-[3deg] hover:rotate-0 transition-transform duration-500">
            <img
              src="/assets/noam-lecture.webp"
              loading="lazy"
              alt="נועם סדן מרצה ביחידות צבאיות"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy/80 to-transparent p-3 text-right">
              <p className="text-white font-black text-base">נועם סדן</p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Units - CSS animation for cross-platform support */}
      <div className="overflow-x-auto md:overflow-hidden w-full mt-10" dir="ltr" style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}>
        <div
          className="marquee-inner flex items-center gap-8 md:gap-20 py-4"
          style={{
            width: 'max-content',
            animation: 'marquee-scroll 35s linear infinite',
            willChange: 'transform',
          }}
        >
          {[...MILITARY_LOGOS, ...MILITARY_LOGOS].map((unit, i) => (
            <div
              key={i}
              className="text-white/20 text-3xl md:text-5xl lg:text-5xl font-black tracking-widest hover:text-gold transition-colors duration-500 uppercase whitespace-nowrap shrink-0 px-2"
            >
              {unit}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default MilitaryLectures;
