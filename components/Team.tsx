
import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 md:py-32 bg-offwhite/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy mb-6">מי אנחנו</h2>
          <div className="w-24 h-2 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {TEAM.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-10 group">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[40px] group-hover:bg-blue-500/20 transition-colors duration-700" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white ring-8 ring-gold/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: member.name === 'עמית גולד' ? 'center 0%' : '44% 15%',
                      transform: member.name === 'עמית גולד' ? 'scale(1.25) translateY(5%)' : 'scale(1.08)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/5 to-transparent pointer-events-none" />
                </div>
              </div>

              <h3 className="text-4xl font-black text-navy mb-2">{member.name}</h3>
              <p className="text-xl font-bold text-gold mb-8 uppercase tracking-wide">{member.role}</p>

              <div className="max-w-lg text-navy/80 text-lg leading-relaxed font-medium space-y-6">
                {member.bio.split('\n').map((para, pIdx) => (
                  <p key={pIdx} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
