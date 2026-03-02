
import React from 'react';
import { motion } from 'framer-motion';

interface SubPageHeroProps {
  title: string;
  subtitle: string;
  badge: string;
}

const SubPageHero: React.FC<SubPageHeroProps> = ({ title, subtitle, badge }) => {
  return (
    <section className="pt-32 md:pt-48 pb-16 md:pb-24 bg-navy relative overflow-hidden text-right">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 translate-x-1/2" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-gold font-black tracking-[0.4em] uppercase text-sm mb-6 border-b border-gold/30 pb-2">
            {badge}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-8 leading-none">
            {title}
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-white/70 max-w-3xl ml-auto leading-relaxed font-medium">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SubPageHero;
