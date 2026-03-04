
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Mic2 } from 'lucide-react';
import { MILITARY_LOGOS } from '../constants';

const MilitaryLectures: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let isInteracting = false;

    const setInteracting = () => { isInteracting = true; };
    const clearInteracting = () => { isInteracting = false; };

    // Mobile touch
    el.addEventListener('touchstart', setInteracting, { passive: true });
    el.addEventListener('touchend', clearInteracting);
    el.addEventListener('touchcancel', clearInteracting);

    // Desktop mouse drag
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent) => {
      isInteracting = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onMouseLeave = () => { isInteracting = false; };
    const onMouseUp = () => { isInteracting = false; };
    const onMouseMove = (e: MouseEvent) => {
      if (!isInteracting) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2; // Scroll-fast
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mouseleave', onMouseLeave);
    el.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mousemove', onMouseMove);

    const step = () => {
      // Run native scrolling loop on both mobile and desktop for consistency
      const setWidth = el.scrollWidth / 4;

      // Auto scroll if not dragging
      if (!isInteracting) {
        el.scrollLeft -= 0.5; // Slower, smoother scroll
      }

      // Seamless Looping:
      const currentAbs = Math.abs(el.scrollLeft);
      if (currentAbs >= setWidth * 2) {
        el.scrollLeft += setWidth;
      } else if (currentAbs < 5) {
        el.scrollLeft -= setWidth;
      }

      animationId = window.requestAnimationFrame(step);
    };

    animationId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationId);
      el.removeEventListener('touchstart', setInteracting);
      el.removeEventListener('touchend', clearInteracting);
      el.removeEventListener('touchcancel', clearInteracting);
    };
  }, []);

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
      <div className="relative flex overflow-hidden w-full mt-10" dir="rtl">
        <div
          ref={scrollRef}
          className="flex items-center gap-8 md:gap-20 py-4 overflow-x-auto pb-8 lg:pb-4 hide-scrollbar select-none w-max cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {[...MILITARY_LOGOS, ...MILITARY_LOGOS, ...MILITARY_LOGOS, ...MILITARY_LOGOS].map((unit, i) => (
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
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default MilitaryLectures;
