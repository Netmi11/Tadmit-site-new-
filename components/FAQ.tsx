
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: 'למה בכלל צריך ליווי בקניית דירה?',
    a: 'קניית דירה היא אחת העסקאות הכי גדולות ומשמעותיות שתעשו. יש המון פרטים שצריך לשים לב אליהם - מניתוח השוק, דרך מו"מ ועד חוזה ומשכנתא. הליווי חוסך זמן, כסף וטעויות.'
  },
  {
    q: 'באיזה שלב כדאי לפנות אליכם?',
    a: 'כמה שיותר מוקדם. גם אם אתם רק מתחילים לחשוב על רכישה - נוכל לעזור לכם לבנות כיוון נכון, תקציב וחשיבה אסטרטגית מההתחלה.'
  },
  {
    q: 'האם אתם עובדים בכל הארץ?',
    a: 'אנחנו מתמקדים באזורים בעלי פוטנציאל גבוה להשבחה ולתשואה, בהתאם לאופי ההשקעה ולמטרות של כל לקוח.'
  },
  {
    q: 'כמה זמן נמשך הליווי?',
    a: 'עד שלושה חודשים, אבל בלי לחץ אנחנו איתכם עד לסיום העסקה.'
  },
  {
    q: 'מה אם אין לי הון עצמי גבוה?',
    a: 'אפשר להתחיל להשקיע כבר עם הון עצמי של 250,000 ש"ח.'
  },
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-offwhite" dir="rtl">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-navy font-black tracking-[0.2em] uppercase text-xs mb-6"
            style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.3)' }}>
            <HelpCircle size={14} />
            שאלות נפוצות
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy leading-tight tracking-tighter mb-4">
            יש לך שאלות?{' '}
            <span className="text-gold">יש לנו תשובות</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-l from-gold to-navy/40 mx-auto rounded-full" />
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, layout: { duration: 0.25, ease: 'easeOut' } }}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: isOpen ? '#1B3A5C' : 'white',
                  border: isOpen ? '1px solid rgba(212,175,55,0.35)' : '1px solid rgba(27,58,92,0.1)',
                  boxShadow: isOpen ? '0 8px 32px rgba(27,58,92,0.18)' : '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
                }}>
                {/* Question row */}
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-right"
                  style={{ cursor: 'pointer' }}>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}>
                    <ChevronDown
                      size={22}
                      style={{ color: isOpen ? '#D4AF37' : '#1B3A5C', flexShrink: 0 }}
                    />
                  </motion.div>
                  <span
                    className="font-black text-base md:text-lg leading-snug flex-1"
                    style={{ color: isOpen ? 'white' : '#1B3A5C' }}>
                    {item.q}
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      style={{ overflow: 'hidden' }}>
                      <p className="px-7 pb-6 pt-1 font-medium text-base leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.72)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
