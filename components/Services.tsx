
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const ServiceIcon: React.FC<{ type: string }> = ({ type }) => {
  const iconColor = "fill-navy lg:group-hover:fill-gold transition-colors duration-500";
  const strokeColor = "stroke-navy lg:group-hover:stroke-gold transition-colors duration-500";

  if (type === 'home') {
    return (
      <svg viewBox="0 0 100 80" className="w-16 h-16">
        <path d="M10 50 L50 15 L90 50" fill="none" strokeWidth="3" className={strokeColor} strokeLinecap="round" strokeLinejoin="round" />
        <rect x="35" y="45" width="30" height="30" fill="none" strokeWidth="3" className={strokeColor} />
        <rect x="42" y="52" width="6" height="6" className={iconColor} />
        <rect x="52" y="52" width="6" height="6" className={iconColor} />
        <rect x="42" y="62" width="6" height="6" className={iconColor} />
        <rect x="52" y="62" width="6" height="6" className={iconColor} />
        <path d="M75 35 V20 H82 V42" fill="none" strokeWidth="2.5" className={strokeColor} />
      </svg>
    );
  }
  if (type === 'building') {
    return (
      <svg viewBox="0 0 100 80" className="w-16 h-16">
        <path d="M20 70 V35 H45 V15 H75 V70 H20" fill="none" strokeWidth="3" className={strokeColor} />
        <rect x="25" y="45" width="4" height="4" className={iconColor} />
        <rect x="35" y="45" width="4" height="4" className={iconColor} />
        <rect x="25" y="55" width="4" height="4" className={iconColor} />
        <rect x="35" y="55" width="4" height="4" className={iconColor} />
        <rect x="55" y="25" width="4" height="4" className={iconColor} />
        <rect x="65" y="25" width="4" height="4" className={iconColor} />
        <rect x="55" y="40" width="4" height="4" className={iconColor} />
        <rect x="65" y="40" width="4" height="4" className={iconColor} />
        <rect x="55" y="55" width="4" height="4" className={iconColor} />
        <rect x="65" y="55" width="4" height="4" className={iconColor} />
        <path d="M15 70 H85" strokeWidth="2" className={strokeColor} />
      </svg>
    );
  }
  return null;
};

interface ServicesProps {
  navigateTo: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ navigateTo }) => {
  return (
    <section id="services" className="py-10 md:py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-black tracking-[0.4em] uppercase text-sm block mb-4"
          >
            איך אנחנו עובדים
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-navy tracking-tighter">המסלול שלכם לביטחון</h2>
          <div className="w-24 h-2 bg-gold mx-auto mt-8 rounded-full shadow-lg shadow-gold/20" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative bg-white/95 p-6 lg:p-10 rounded-[3rem] lg:rounded-[4rem] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:shadow-navy/10 transition-all duration-700 overflow-hidden"
            >
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-br from-navy to-[#0d1e31] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] z-0" />

              <div className="relative z-10 flex flex-col flex-1">
              <div className="w-20 h-20 bg-white lg:group-hover:bg-navy rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 transform lg:group-hover:scale-105 border border-navy/5 shadow-sm">
                <ServiceIcon type={service.iconType} />
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-navy lg:group-hover:text-gold mb-4 transition-colors duration-500 min-h-[1.5em] flex items-center">
                {service.title}
              </h3>

              <p className="text-lg text-navy/70 lg:group-hover:text-white/70 font-medium mb-6 leading-relaxed transition-colors duration-500">
                {service.description}
              </p>

              <div className="w-full space-y-3 text-right mb-6 flex-1">
                {service.bullets.map((bullet, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className={`items-center justify-start gap-5 border-b border-navy/5 lg:group-hover:border-white/10 pb-4 transition-colors duration-500 ${'flex'}`}
                  >
                    <div className="w-6 h-6 rounded-full bg-gold/10 lg:group-hover:bg-gold/20 flex items-center justify-center transition-colors shrink-0">
                      <CheckCircle2 className="text-gold" size={16} />
                    </div>
                    <span
                      className="font-bold text-navy lg:group-hover:text-white text-lg md:text-xl transition-colors duration-500"
                      dangerouslySetInnerHTML={{ __html: bullet }}
                    />
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto flex justify-end">
                <button
                  onClick={() => navigateTo(service.href)}
                  className="inline-flex items-center gap-4 text-gold font-black text-xl lg:text-2xl group/btn transition-all duration-300"
                >
                  גלו עוד על המסלול
                  <ArrowRight className="rotate-180 transform group-hover/btn:translate-x-[-8px] transition-transform" size={28} />
                </button>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
