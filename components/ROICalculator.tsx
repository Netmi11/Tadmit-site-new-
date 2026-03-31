
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Building2, PiggyBank, Award } from 'lucide-react';

function formatCurrency(n: number): string {
  return '₪' + Math.round(n).toLocaleString('he-IL');
}

const ROICalculator: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState(1500000);
  const [monthlyRent, setMonthlyRent] = useState(5000);
  const [holdingYears, setHoldingYears] = useState(5);
  const [expenses, setExpenses] = useState(20);

  const results = useMemo(() => {
    const annualRent = monthlyRent * 12;
    const grossYield = propertyPrice > 0 ? (annualRent / propertyPrice) * 100 : 0;
    const netYield = grossYield * (1 - expenses / 100);
    const totalRentalIncome = annualRent * holdingYears * (1 - expenses / 100);
    const bankReturn = propertyPrice * 0.03 * holdingYears;
    const advantage = totalRentalIncome - bankReturn;
    return { grossYield, netYield, totalRentalIncome, bankReturn, advantage };
  }, [propertyPrice, monthlyRent, holdingYears, expenses]);

  return (
    <section className="py-16 md:py-28 overflow-hidden relative" dir="rtl"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d1b2a 50%, #071420 100%)' }}>

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px]"
          style={{ background: '#D4AF37' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-8 blur-[100px]"
          style={{ background: '#00b4d8' }} />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[#D4AF37] font-black tracking-[0.25em] uppercase text-xs mb-6"
            style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.25)' }}>
            <TrendingUp size={14} />
            כלי חישוב
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter mb-4">
            מחשבון{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#f0d060] bg-clip-text text-transparent">
              תשואת נדל"ן
            </span>
          </h2>
          <p className="text-white/50 font-medium text-lg max-w-xl mx-auto">
            הזינו את פרטי הנכס וגלו את פוטנציאל ההכנסה - לעומת פיקדון בנקאי
          </p>
          <div className="w-24 h-1.5 mx-auto mt-6 rounded-full"
            style={{ background: 'linear-gradient(90deg, #D4AF37, rgba(212,175,55,0.3))' }} />
        </motion.div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-3xl p-6 md:p-8 flex flex-col gap-7"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>

            <h3 className="text-xl font-black text-white text-right">פרטי הנכס</h3>

            {/* Property Price */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-[#D4AF37] font-black text-lg">{formatCurrency(propertyPrice)}</span>
                <label className="text-white/70 font-bold text-sm">מחיר הנכס</label>
              </div>
              <input
                type="range" min={500000} max={5000000} step={50000}
                value={propertyPrice}
                onChange={e => setPropertyPrice(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ accentColor: '#D4AF37', background: `linear-gradient(to left, #D4AF37 ${((propertyPrice - 500000) / 4500000) * 100}%, rgba(255,255,255,0.15) 0%)` }}
              />
              <div className="flex justify-between text-xs text-white/30 font-medium">
                <span>₪5,000,000</span>
                <span>₪500,000</span>
              </div>
            </div>

            {/* Monthly Rent */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-[#D4AF37] font-black text-lg">{formatCurrency(monthlyRent)} / חודש</span>
                <label className="text-white/70 font-bold text-sm">שכר דירה חודשי</label>
              </div>
              <input
                type="range" min={1000} max={20000} step={500}
                value={monthlyRent}
                onChange={e => setMonthlyRent(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ accentColor: '#D4AF37', background: `linear-gradient(to left, #D4AF37 ${((monthlyRent - 1000) / 19000) * 100}%, rgba(255,255,255,0.15) 0%)` }}
              />
              <div className="flex justify-between text-xs text-white/30 font-medium">
                <span>₪20,000</span>
                <span>₪1,000</span>
              </div>
            </div>

            {/* Holding Years */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-[#D4AF37] font-black text-lg">{holdingYears} שנים</span>
                <label className="text-white/70 font-bold text-sm">תקופת אחזקה</label>
              </div>
              <input
                type="range" min={1} max={20} step={1}
                value={holdingYears}
                onChange={e => setHoldingYears(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ accentColor: '#D4AF37', background: `linear-gradient(to left, #D4AF37 ${((holdingYears - 1) / 19) * 100}%, rgba(255,255,255,0.15) 0%)` }}
              />
              <div className="flex justify-between text-xs text-white/30 font-medium">
                <span>20 שנה</span>
                <span>שנה 1</span>
              </div>
            </div>

            {/* Expenses */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-[#D4AF37] font-black text-lg">{expenses}%</span>
                <label className="text-white/70 font-bold text-sm">הוצאות שנתיות (ניהול, תחזוקה, ריקון)</label>
              </div>
              <input
                type="range" min={5} max={40} step={5}
                value={expenses}
                onChange={e => setExpenses(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{ accentColor: '#D4AF37', background: `linear-gradient(to left, #D4AF37 ${((expenses - 5) / 35) * 100}%, rgba(255,255,255,0.15) 0%)` }}
              />
              <div className="flex justify-between text-xs text-white/30 font-medium">
                <span>40%</span>
                <span>5%</span>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4">

            {/* Yield cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div layout
                className="rounded-2xl p-6 text-center"
                style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))', border: '1px solid rgba(212,175,55,0.3)' }}>
                <p className="text-white/50 font-bold text-xs mb-2 tracking-wider">תשואה גולמית שנתית</p>
                <p className="text-4xl font-black" style={{ color: '#D4AF37' }}>
                  {results.grossYield.toFixed(1)}%
                </p>
              </motion.div>

              <motion.div layout
                className="rounded-2xl p-6 text-center"
                style={{ background: 'linear-gradient(135deg, rgba(0,180,216,0.12), rgba(0,180,216,0.04))', border: '1px solid rgba(0,180,216,0.25)' }}>
                <p className="text-white/50 font-bold text-xs mb-2 tracking-wider">תשואה נטו שנתית</p>
                <p className="text-4xl font-black" style={{ color: '#00b4d8' }}>
                  {results.netYield.toFixed(1)}%
                </p>
              </motion.div>
            </div>

            {/* Total income */}
            <motion.div layout
              className="rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-2xl font-black text-white self-end sm:self-auto">{formatCurrency(results.totalRentalIncome)}</p>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-end">
                    <p className="text-white/80 font-black text-sm">הכנסה כוללת מגרסה</p>
                    <p className="text-white/40 text-xs">נטו לאורך {holdingYears} שנים</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(212,175,55,0.15)' }}>
                    <Building2 size={20} style={{ color: '#D4AF37' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bank comparison */}
            <motion.div layout
              className="rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-2xl font-black text-white/60 self-end sm:self-auto">{formatCurrency(results.bankReturn)}</p>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-end">
                    <p className="text-white/50 font-black text-sm">פיקדון בנקאי (3% שנתי)</p>
                    <p className="text-white/30 text-xs">לאותו הון באותה תקופה</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <PiggyBank size={20} style={{ color: 'rgba(255,255,255,0.4)' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Advantage */}
            <motion.div layout
              className="rounded-2xl p-6"
              style={{
                background: results.advantage >= 0
                  ? 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05))'
                  : 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(239,68,68,0.05))',
                border: results.advantage >= 0 ? '1px solid rgba(16,185,129,0.3)' : '1px solid rgba(239,68,68,0.3)'
              }}>
              <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-2xl font-black self-end sm:self-auto"
                  style={{ color: results.advantage >= 0 ? '#10b981' : '#ef4444' }}>
                  {results.advantage >= 0 ? '+' : ''}{formatCurrency(results.advantage)}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-end">
                    <p className="font-black text-sm" style={{ color: results.advantage >= 0 ? '#10b981' : '#ef4444' }}>
                      יתרון נדל"ן על הבנק
                    </p>
                    <p className="text-white/40 text-xs">לאורך {holdingYears} שנים</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: results.advantage >= 0 ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)' }}>
                    <Award size={20} style={{ color: results.advantage >= 0 ? '#10b981' : '#ef4444' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            <p className="text-white/25 text-xs text-right leading-relaxed">
              * החישוב הוא הערכה לצרכי המחשה בלבד. התשואה בפועל תלויה בגורמים נוספים כגון עליית ערך הנכס, מינוף משכנתא, מיסוי ועוד. מומלץ לפנות לייעוץ מקצועי.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
