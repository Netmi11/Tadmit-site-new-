
import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';
import CountUp from './CountUp';

const Stats: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 lg:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-black tracking-[0.2em] uppercase text-sm"
          >
            הצלחה מוכחת בשטח
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-navy mt-4"
          >
            המספרים שמאחורי הקרקע
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`text-center relative ${idx !== STATS.length - 1 ? 'lg:border-l border-gold/20' : ''}`}
            >
              <div className="text-5xl md:text-7xl lg:text-8xl font-black text-navy mb-4 tracking-tighter font-inter">
                <CountUp
                  to={parseInt(stat.value)}
                  duration={2.5}
                  delay={idx * 0.15}
                  className="font-inter"
                />
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <p className="text-gold font-black text-lg md:text-xl leading-tight max-w-[150px] mx-auto">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
