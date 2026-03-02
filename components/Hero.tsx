
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Send, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

interface HeroProps {
  navigateTo: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-offwhite">
      {/* Background elements - Israeli architectural vibe */}
      {/* Background elements - Israeli architectural vibe */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/5 -skew-x-12 transform translate-x-1/4" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-[120px] opacity-60" />
      <div className="absolute top-1/4 -right-24 w-[30rem] h-[30rem] bg-navy/5 rounded-full blur-[140px]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-right"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full mb-6">
            <ShieldCheck className="text-gold" size={16} />
            <span className="text-navy font-black tracking-widest text-xs uppercase">שקיפות. אמינות. ליווי צמוד.</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-navy leading-tight mb-6">
            צמד ברזל עושים שינוי <br />
            <span className="text-gold">בעולם התיווך וליווי המשקיעים</span>
          </h1>
          <p className="text-xl md:text-2xl text-navy/70 leading-relaxed mb-10 max-w-xl">
            אנחנו כאן כדי להעניק לכם שקיפות מלאה, אמינות ללא פשרות וביטחון מוחלט לכל אורך הדרך - מהצעד הראשון ועד לקבלת המפתח.
          </p>

          <div className="flex flex-col sm:flex-row-reverse gap-4">
            <button
              onClick={() => navigateTo('contact-page')}
              className="bg-gold text-navy px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-gold/20"
            >
              לשיחת ייעוץ חינם
              <Send size={20} />
            </button>
            <button
              onClick={() => navigateTo('personal')}
              className="bg-white text-navy border-2 border-navy/10 px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all hover:bg-navy/5"
            >
              המסלול לליווי אישי
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-8 md:border-[12px] border-white bg-white/40 backdrop-blur-xl aspect-[1/1] flex items-center justify-center p-8 md:p-12 group max-w-[280px] sm:max-w-[400px] lg:max-w-none mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Logo className="w-full h-full scale-110 drop-shadow-2xl transition-transform duration-700 group-hover:scale-125" />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-12 -right-12 w-48 h-48 border border-gold/10 rounded-full -z-10"
          />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold/10 rounded-full blur-[100px] -z-10 animate-pulse" />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-navy/30 hidden lg:block"
      >
        <ChevronDown size={40} />
      </motion.div>
    </section>
  );
};

export default Hero;
