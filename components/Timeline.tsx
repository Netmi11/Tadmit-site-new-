
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TimelineStep {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface TimelineProps {
  steps: TimelineStep[];
  priceLabel?: string;
}

const Timeline: React.FC<TimelineProps> = ({ steps, priceLabel }) => {
  return (
    <div className="relative py-20 px-4 max-w-6xl mx-auto">
      {/* Background Decorative Grid for Architectural Feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#1B3A5C 1px, transparent 1px), linear-gradient(90deg, #1B3A5C 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Central Line with Gradient */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold/30 to-transparent -translate-x-1/2 hidden md:block" />
      
      <div className="space-y-32 relative">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className={`flex flex-col md:flex-row items-center gap-16 lg:gap-24 ${
              idx % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Step Content Card */}
            <div className={`md:w-1/2 w-full group`}>
              <div className="relative p-10 lg:p-14 bg-white/40 backdrop-blur-xl rounded-[4rem] border border-navy/5 shadow-[0_20px_50px_rgba(27,58,92,0.05)] group-hover:shadow-[0_40px_80px_rgba(212,175,55,0.15)] transition-all duration-700 text-right overflow-hidden">
                {/* Large Background Number */}
                <span className="absolute -top-10 -left-10 text-[12rem] font-black text-navy/[0.03] select-none italic">
                  0{idx + 1}
                </span>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-navy text-gold rounded-3xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform duration-500 shadow-xl shadow-navy/20">
                    {step.icon}
                  </div>
                  
                  <h4 className="text-3xl lg:text-4xl font-black text-navy mb-6 leading-tight group-hover:text-gold transition-colors duration-500">
                    {step.title}
                  </h4>
                  
                  <p className="text-xl text-navy/70 font-medium leading-relaxed max-w-md mr-0 ml-auto">
                    {step.desc}
                  </p>
                </div>

                {/* Decorative Accent */}
                <div className="absolute bottom-0 right-0 w-32 h-1 bg-gradient-to-l from-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>

            {/* Step Central Marker */}
            <div className="relative z-20 flex-shrink-0">
              <div className="w-20 h-20 bg-white rounded-full border-2 border-navy/5 shadow-2xl flex items-center justify-center p-2">
                <div className="w-full h-full bg-navy rounded-full border-4 border-gold/20 flex items-center justify-center text-gold font-black text-2xl relative overflow-hidden group-hover:border-gold transition-colors duration-500">
                  {idx + 1}
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-gold rounded-full"
                  />
                </div>
              </div>
              
              {/* Connector Path for Mobile (Vertical) */}
              {idx !== steps.length - 1 && (
                <div className="absolute top-full left-1/2 w-0.5 h-32 bg-gold/20 -translate-x-1/2 md:hidden" />
              )}
            </div>

            {/* Spacer for desktop */}
            <div className="md:w-1/2 hidden md:block" />
          </motion.div>
        ))}
      </div>

      {priceLabel && (
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="mt-40 text-center"
        >
          <div className="inline-block relative p-1">
            <div className="absolute inset-0 bg-gold rounded-[4rem] blur-2xl opacity-20 animate-pulse" />
            <div className="relative bg-navy text-white px-20 py-12 rounded-[3.5rem] border-2 border-gold/30 shadow-3xl overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <p className="text-gold font-black uppercase tracking-[0.5em] text-xs mb-4">השקעה בביטחון שלכם</p>
              <p className="text-4xl md:text-6xl font-black tracking-tight">{priceLabel}</p>
              <div className="mt-8 flex items-center justify-center gap-2 text-white/40">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-sm font-bold">ליווי מקצועי ללא פשרות</span>
                <div className="w-2 h-2 rounded-full bg-gold" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Timeline;
