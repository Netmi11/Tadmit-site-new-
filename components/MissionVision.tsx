
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <section id="vision" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-gold/10 text-gold rounded-full flex items-center justify-center mb-8">
              <ShieldCheck size={48} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 leading-tight">החזון והמשימה שלנו</h2>
            <div className="w-24 h-2 bg-gold mb-12 rounded-full" />
            
            <p className="text-2xl md:text-4xl font-black text-navy leading-relaxed italic px-4">
              "לאפשר לכל אדם לקבל החלטות נדל"ן גדולות ולצמוח פיננסית — מתוך ביטחון, וודאות ושקט נפשי."
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 text-right">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-offwhite p-10 rounded-[2.5rem] border border-navy/5 shadow-sm"
            >
              <h3 className="text-2xl font-black text-gold mb-4">המשימה</h3>
              <p className="text-lg text-navy/70 leading-relaxed font-medium">
                להנגיש את התחום בשקיפות מלאה, בטחון ובסטנדרטים גבוהים של אמינות לכל מי שמעוניין לבנות עתיד כלכלי יציב.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-navy p-10 rounded-[2.5rem] text-white shadow-xl"
            >
              <h3 className="text-2xl font-black text-gold mb-4">השקט שלכם</h3>
              <p className="text-lg text-white/70 leading-relaxed font-medium">
                אנחנו לא רק קונים דירות, אנחנו בונים לכם חופש כלכלי עם שותפים שאפשר לסמוך עליהם בעיניים עצומות.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
