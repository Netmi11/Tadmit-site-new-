
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Quote } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <section id="vision" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
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

            <div className="relative px-4 md:px-12">
              <Quote
                size={56}
                className="text-gold/30 absolute -top-4 right-0 md:-right-8 rotate-180"
                strokeWidth={1.5}
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
                size={56}
                className="text-gold/30 absolute -bottom-4 left-0 md:-left-8"
                strokeWidth={1.5}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
