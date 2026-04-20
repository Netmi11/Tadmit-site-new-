
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Quote } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <section id="vision" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-gold/10 text-gold rounded-full flex items-center justify-center mb-8">
              <ShieldCheck size={48} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 leading-tight">החזון שלנו</h2>
            <div className="w-24 h-2 bg-gold mb-12 rounded-full" />

            <div className="relative px-8 md:px-16 py-12 bg-offwhite/60 rounded-[2.5rem] border border-navy/5">
              <Quote
                size={72}
                className="text-gold/20 absolute -top-5 right-4 md:right-6 rotate-180"
                strokeWidth={1}
              />
              <div className="text-xl md:text-2xl text-navy leading-loose font-medium italic space-y-6">
                <p>
                  החזון שלנו הוא להוביל מהפכה של <strong className="text-gold font-semibold not-italic">יושרה</strong> בשוק הנדל"ן הישראלי ולהגדיר מחדש את משמעות <strong className="text-gold font-semibold not-italic">הנאמנות ללקוח</strong>.
                </p>
                <p>
                  אנו מחויבים להעניק ליווי אסטרטגי <strong className="text-gold font-semibold not-italic">אובייקטיבי, שקוף ומבוסס נתונים</strong>, המהווה מגן מקצועי עבור המשקיע ומציב את <strong className="text-gold font-semibold not-italic">האינטרס שלו מעל הכל</strong>.
                </p>
                <p>
                  אנחנו כאן כדי להפוך את הדרך ל<strong className="text-gold font-semibold not-italic">חופש כלכלי</strong> לתהליך בטוח ומשנה חיים, המאפשר לכל לקוח לצמוח בראש שקט לעבר העתיד שתמיד שאף אליו.
                </p>
              </div>
              <Quote
                size={72}
                className="text-gold/20 absolute -bottom-5 left-4 md:left-6"
                strokeWidth={1}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
