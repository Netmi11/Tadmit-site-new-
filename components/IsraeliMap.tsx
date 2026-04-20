import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, Building2 } from 'lucide-react';

const LeafletMap = lazy(() => import('./LeafletMap'));

export interface CityData {
  id: string;
  name: string;
  lng: number;
  lat: number;
  deals: number;
  desc: string;
  highlights: string[];
  color: string;
}

export const CITIES: CityData[] = [
  {
    id: 'telaviv', name: 'תל אביב', lng: 34.781, lat: 32.085, deals: 25,
    desc: 'פרי-סייל וליווי אישי',
    highlights: ['לקוחות חוץ', 'נכסי יוקרה', 'השקעות פרימיום'], color: '#0077b6'
  },
  {
    id: 'ramatgan', name: 'רמת גן', lng: 34.820, lat: 32.082, deals: 18,
    desc: 'קו שני לתל אביב, אוכלוסייה מצוינת',
    highlights: ['בקרבה לתל אביב', 'בורסה ועסקים', 'פרויקטים חדשים'], color: '#48cae4'
  },
  {
    id: 'givataim', name: 'גבעתיים', lng: 34.812, lat: 32.066, deals: 14,
    desc: 'חיי לילה והתחדשות עירונית',
    highlights: ['שכונות יוקרתיות', 'שדרות פופולריים', 'ביקוש גבוה'], color: '#023e8a'
  },
  {
    id: 'holon', name: 'חולון', lng: 34.779, lat: 31.997, deals: 16,
    desc: 'עיר צמיחה עם תשואה אטרקטיבית',
    highlights: ['מחיר נגיש', 'פרויקטי התחדשות', 'התפתחות תחבורתית'], color: '#4cc9f0'
  },
  {
    id: 'batayam', name: 'בת ים', lng: 34.749, lat: 31.999, deals: 12,
    desc: 'קו ראשון לים במחיר נגיש',
    highlights: ['קו ראשון לים', 'שכונות מתחדשות', 'הטבות מס'], color: '#90e0ef'
  },
  {
    id: 'petahtikva', name: 'פתח תקווה', lng: 34.888, lat: 32.086, deals: 8,
    desc: 'עיר ביקוש עם עתיד מבטיח',
    highlights: ['שכונות חדשות', 'מרכז הייטק'], color: '#0096c7'
  },
  {
    id: 'herzliya', name: 'הרצליה', lng: 34.845, lat: 32.163, deals: 17,
    desc: 'יוקרה והייטק לאורך החוף',
    highlights: ['נכסי יוקרה', 'הייטק', 'קו ראשון לים'], color: '#1e6091'
  },
  {
    id: 'beersheva', name: 'באר שבע', lng: 34.791, lat: 31.252, deals: 35,
    desc: 'השקעות סטודנטים ואקדמאים',
    highlights: ['קרבה לאוניברסיטה', 'ביקוש שכירות גבוה'], color: '#caf0f8'
  },
  {
    id: 'netivot', name: 'נתיבות', lng: 34.589, lat: 31.418, deals: 10,
    desc: 'הזדמנות בעיר המתפתחת',
    highlights: ['מחיר נגיש מאוד', 'צמיחה מערכתית', 'הטבות מס'], color: '#2980b9'
  },
];

const STAT_ITEMS = [
  { value: '75+', label: 'עסקאות', icon: <Home size={18} /> },
  { value: '9', label: 'ערים', icon: <MapPin size={18} /> },
  { value: '5+', label: 'שנות ניסיון', icon: <Building2 size={18} /> },
];

const IsraeliMap: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-16 md:py-28 bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] overflow-hidden relative">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-[#00b4d8]/8 blur-[160px]" />
        <div className="absolute -bottom-40 left-0 w-[600px] h-[600px] rounded-full bg-gold/8 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#023e8a]/10 blur-[200px]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[#00b4d8] font-black tracking-[0.3em] uppercase text-xs mb-6"
            style={{ background: 'linear-gradient(135deg, rgba(0,180,216,0.15), rgba(212,175,55,0.1))', border: '1px solid rgba(0,180,216,0.2)' }}>
            <MapPin size={14} />
            נוכחות בשטח
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
            הפריסה שלנו{' '}
            <span className="bg-gradient-to-r from-[#00b4d8] via-[#48cae4] to-gold bg-clip-text text-transparent">
              מדרום ועד צפון
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 mx-auto mt-6 rounded-full w-32"
            style={{ background: 'linear-gradient(90deg, #00b4d8, #D4AF37)' }}
          />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12 md:mb-16">
          {STAT_ITEMS.map((s) => (
            <motion.div key={s.label}
              whileHover={{ scale: 1.05, y: -4 }}
              className="rounded-2xl px-4 md:px-8 py-3 md:py-5 text-center min-w-[100px] md:min-w-[110px] cursor-default flex-1 max-w-[150px]"
              style={{
                background: 'linear-gradient(135deg, rgba(0,180,216,0.1), rgba(255,255,255,0.03))',
                border: '1px solid rgba(0,180,216,0.15)',
                backdropFilter: 'blur(12px)'
              }}>
              <div className="text-[#00b4d8] mb-2 flex justify-center">{s.icon}</div>
              <p className="text-2xl md:text-4xl font-black text-white leading-none">{s.value}</p>
              <p className="text-white/40 font-bold text-sm mt-2">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Grid: Map + Cards */}
        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-7xl mx-auto">

          {/* MAP - lazy loaded to save mobile bundle size */}
          {!isMobile && (
            <Suspense fallback={
              <div className="hidden lg:flex flex-1 justify-center items-center w-full min-h-[650px]">
                <div className="w-12 h-12 border-4 border-[#00b4d8] border-t-transparent rounded-full animate-spin"></div>
              </div>
            }>
              <LeafletMap cities={CITIES} active={active} setActive={setActive} />
            </Suspense>
          )}
          {isMobile && <div className="hidden lg:block"></div>}

          {/* CITY CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.15 }}
            className={`flex flex-col gap-4 ${isMobile ? 'col-span-full' : ''}`}>

            {/* Mobile: clean list / Desktop: cards */}
            {isMobile ? (
              <div className="flex flex-col">
                {CITIES.map((city, i) => (
                  <motion.div
                    key={city.id}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                    className="flex items-center gap-4 py-3.5 px-1"
                    style={{ borderBottom: i < CITIES.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
                  >
                    <div className="w-1 self-stretch rounded-full flex-shrink-0 min-h-[44px]"
                      style={{ background: city.color }} />
                    <div className="flex-1 text-right min-w-0">
                      <p className="font-black text-lg text-white/90 leading-tight">{city.name}</p>
                      <p className="text-sm text-white/40 mt-0.5 truncate">{city.desc}</p>
                    </div>
                    <span className="text-xs font-black px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{ background: `${city.color}22`, color: city.color }}>
                      {city.deals} עסקאות
                    </span>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div
                onMouseLeave={() => setActive(null)}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                {CITIES.map((city, i) => {
                  const isActive = active === city.id;
                  return (
                    <motion.div
                      key={city.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.07 }}
                      onClick={() => setActive(active === city.id ? null : city.id)}
                      className="flex flex-col rounded-[1.4rem] cursor-pointer relative overflow-hidden"
                      style={{
                        background: isActive
                          ? `linear-gradient(135deg, ${city.color}25, rgba(13,27,42,0.98))`
                          : 'rgba(255,255,255,0.03)',
                        border: isActive ? `2px solid ${city.color}50` : '1px solid rgba(255,255,255,0.06)',
                        boxShadow: isActive ? `0 8px 24px ${city.color}20` : 'none',
                        backdropFilter: 'blur(8px)',
                        alignSelf: 'stretch',
                        willChange: 'transform',
                        transition: 'background 0.2s ease, border 0.2s ease, box-shadow 0.2s ease'
                      }}>

                      {/* Always visible: dot + name + desc */}
                      <div className="flex items-center gap-3 px-4 py-3">
                        <div className="relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                          style={{
                            background: isActive ? `${city.color}20` : 'rgba(255,255,255,0.05)',
                            border: `1.5px solid ${isActive ? city.color : 'rgba(255,255,255,0.08)'}`
                          }}>
                          <div className="w-3 h-3 rounded-full transition-all duration-300"
                            style={{ background: isActive ? city.color : 'rgba(255,255,255,0.2)' }} />
                          {isActive && (
                            <motion.div
                              animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                              transition={{ repeat: Infinity, duration: 1 }}
                              className="absolute inset-0 rounded-full"
                              style={{ background: `${city.color}30` }}
                            />
                          )}
                        </div>
                        <div className="text-right flex-1 min-w-0">
                          <p className="font-black text-xl leading-tight transition-colors duration-250"
                            style={{ color: isActive ? city.color : 'rgba(255,255,255,0.9)' }}>
                            {city.name}
                          </p>
                          <p className="text-sm mt-1 truncate transition-colors duration-250"
                            style={{ color: isActive ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.28)' }}>
                            {city.desc}
                          </p>
                        </div>
                      </div>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? 'auto' : 0,
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? 12 : 0
                        }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pt-3 text-right" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                          <div className="flex flex-wrap gap-1.5 justify-end mb-2">
                            <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                              style={{ background: `${city.color}22`, color: city.color, border: `1px solid ${city.color}30` }}>
                              {city.deals} עסקאות מוצלחות
                            </span>

                          </div>
                          <div className="flex flex-wrap gap-1 justify-end">
                            {city.highlights.map((h, idx) => (
                              <span key={idx} className="text-xs font-bold px-2 py-1 rounded-full bg-white/5 text-white/65 border border-white/10">
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            <p className="text-white/40 font-medium text-base text-right mt-3 leading-relaxed">
              כל נקודה מייצגת עסקה מוצלחת וחקר שוק מעמיק. אנחנו בוחרים את המיקומים בפינצטה לפי פוטנציאל עליית ערך ותשואה.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IsraeliMap;
