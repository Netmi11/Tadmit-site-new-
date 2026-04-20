
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <section id="vision" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
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

            <p className="text-xl md:text-3xl text-navy leading-relaxed font-bold px-4">
              החזון שלנו הוא להוביל מהפכה של <strong className="text-gold font-semibold">יושרה</strong> בשוק הנדל"ן הישראלי ולהגדיר מחדש את משמעות <strong className="text-gold font-semibold">הנאמנות ללקוח</strong>.
              אנו מחויבים להעניק ליווי אסטרטגי <strong className="text-gold font-semibold">אובייקטיבי, שקוף ומבוסס נתונים</strong>, המהווה מגן מקצועי עבור המשקיע ומציב את <strong className="text-gold font-semibold">האינטרס שלו מעל הכל</strong>.
              אנחנו כאן כדי להפוך את הדרך ל<strong className="text-gold font-semibold">חופש כלכלי</strong> לתהליך בטוח ומשנה חיים, המאפשר לכל לקוח לצמוח בראש שקט לעבר העתיד שתמיד שאף אליו.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
