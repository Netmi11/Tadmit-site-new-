
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
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 leading-tight">המשימה</h2>
            <div className="w-24 h-2 bg-gold mb-12 rounded-full" />
            
            <p className="text-2xl md:text-4xl font-black text-navy leading-relaxed italic px-4">
              "להנגיש את תחום הנדל"ן בשקיפות מלאה, בסטנדרטים גבוהים ומקצועיים לכל מי שמעוניין לבנות עתיד כלכלי יציב."
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 text-right">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-offwhite p-10 rounded-[2.5rem] border border-navy/5 shadow-sm"
            >
              <h3 className="text-2xl font-black text-gold mb-4">החזון והמשימה שלנו</h3>
              <p className="text-lg text-navy/70 leading-relaxed font-medium">
                החזון שלנו הוא לשנות את <strong className="text-gold font-semibold">מאזן הכוחות</strong> בעולם הנדל"ן הישראלי, ולהפוך את <strong className="text-gold font-semibold">נאמנות השירות</strong> לערך עליון. אנחנו שואפים לעולם שבו כל משקיע זוכה ל<strong className="text-gold font-semibold">ייצוג אוביקטיבי ונקי</strong>, <strong className="text-gold font-semibold">ללא ניגוד עניינים</strong>, כך שהאינטרס שלו יהיה <strong className="text-gold font-semibold">הדבר היחיד</strong> שקובע את תוצאות העסקה.
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
                אתם יכולים להיות <strong className="text-gold font-semibold">בראש שקט</strong> כשיש מישהו שדואג לאינטרסים שלכם <strong className="text-gold font-semibold">ב-100%</strong> ומחפש את העסקאות שהכי מתאימות לכם - ולא מתנגשות עם אינטרסים של מוכרים, יזמים או <strong className="text-gold font-semibold">עמלות תיווך חבויות</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
