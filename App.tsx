
import React, { useEffect, useState, useCallback, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy load components not needed for initial paint
const Stats = lazy(() => import('./components/Stats'));
const Services = lazy(() => import('./components/Services'));
const Team = lazy(() => import('./components/Team'));
const MilitaryLectures = lazy(() => import('./components/MilitaryLectures'));
const MissionVision = lazy(() => import('./components/MissionVision'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const AccessibilityWidget = lazy(() => import('./components/AccessibilityWidget'));
const IsraeliMap = lazy(() => import('./components/IsraeliMap'));
const Timeline = lazy(() => import('./components/Timeline'));
const SubPageHero = lazy(() => import('./components/SubPageHero'));
const FAQ = lazy(() => import('./components/FAQ'));
const ROICalculator = lazy(() => import('./components/ROICalculator'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./components/TermsOfUse'));
const AccessibilityStatement = lazy(() => import('./components/AccessibilityStatement'));
const CircularGallery = lazy(() => import('./components/CircularGallery'));
const CountUp = lazy(() => import('./components/CountUp'));
import {
  FileText, Download, MessageCircle, Phone, Mail, Play,
  CheckCircle, Shield, Briefcase, Users, History, Gem, Handshake,
  ClipboardCheck, Search, Building, Key, Target, ArrowLeft, ShieldCheck
} from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Core effect to reset scroll position on every page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Unified navigation function to prevent environment redirect issues
  const navigateTo = useCallback((page: string) => {
    const cleanPage = page.replace('#', '');
    setCurrentPage(cleanPage);
    window.history.pushState(null, '', `#${cleanPage}`);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const AnimatedCounter: React.FC<{ value: number; suffix: string; label: string }> = ({ value, suffix, label }) => {
    const [count, setCount] = React.useState(0);
    const [hasAnimated, setHasAnimated] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (!ref.current || hasAnimated) return;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          const duration = 1800;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
          observer.disconnect();
        }
      }, { threshold: 0.3 });
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, [value, hasAnimated]);

    return (
      <div ref={ref} className="text-center">
        <div className="text-4xl md:text-5xl lg:text-6xl font-black text-gold mb-2">
          {count}{suffix}
        </div>
        <div className="text-navy/60 font-bold text-sm md:text-base">{label}</div>
      </div>
    );
  };

  const SuccessStories = ({ category: _category }: { category: string }) => {
    const items = [
      { src: '/assets/לקוחות מרוצים 1.webp', rotate: '-2deg' },
      { src: '/assets/לקוחות מרוצים 2.webp', rotate:  '1.5deg' },
      { src: '/assets/לקוחות מרוצים 3.webp', rotate:  '2deg' },
      { src: '/assets/לקוחות מרוצים 4.webp', rotate: '-1.5deg' },
      { src: '/assets/happy-customers-5.webp', rotate: '1deg' },
      { src: '/assets/happy-customers-6.webp', rotate: '-1.5deg' },
      { src: '/assets/happy-customers-7.webp', rotate: '2deg' },
    ];
    const stats = [
      { value: 75, suffix: '+', label: 'עסקאות מוצלחות' },
      { value: 75, suffix: '+', label: 'לקוחות מרוצים' },
      { value: 5, suffix: '+', label: 'שנות פעילות' },
    ];
    return (
      <>
      <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16 py-10 px-6 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 shadow-xl">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-gold mb-2 font-inter">
              <CountUp to={stat.value} duration={2.5} delay={i * 0.15} className="font-inter" />
              <span>{stat.suffix}</span>
            </div>
            <div className="text-white/70 font-bold text-sm md:text-base">{stat.label}</div>
          </div>
        ))}
      </div>
      <div style={{ height: '500px' }}>
        <CircularGallery
          items={items.map(item => ({ image: item.src }))}
          bend={3}
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>
      </>
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'personal':
        return (
          <motion.div key="personal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SubPageHero
              title="ליווי אישי"
              subtitle="ליווי מקצועי מבוסס נתונים, מותאם אישית לצרכים ולתקציב שלך. אנחנו לא רק מוצאים נכס - אנחנו מוודאים שתרכוש נכון, במחיר נכון, עם מינימום סיכון."
              badge="המסלול האישי"
            />

            <section className="py-24 bg-white">
              <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-black text-navy mb-4">התהליך שלנו - צעד אחרי צעד</h2>
                  <div className="w-24 h-1.5 bg-gold mx-auto rounded-full" />
                </div>

                <Timeline
                  steps={[
                    { title: 'אפיון אישי וניסוח תכנית עסקית', desc: 'מנתחים יחד את הצרכים, התקציב והיעדים כדי לבנות תכנית מותאמת אישית לרכישה חכמה.', icon: <Target size={32} />, image: '/assets/personal-service.webp', imageAspect: 'aspect-[9/16] !w-[56.25%] mx-auto' },
                    { title: 'חקר שוק', desc: 'מבצעים ניתוח אזורים, מחירים והשוואות כדי לזהות את ההזדמנויות המושלמות עבורכם.', icon: <Search size={32} />, image: '/assets/market-research.webp', imageAspect: 'aspect-[9/16] !w-[56.25%] mx-auto' },
                    { title: 'הצגת עסקה', desc: 'מציגים רק את הנכסים הרלוונטיים, עם נתונים ברורים ומדויקים ותמונה מלאה.', icon: <Building size={32} />, image: '/assets/deal-presentation.webp', imageAspect: 'aspect-[11/16] !w-[68%] mx-auto' },
                    { title: 'משא ומתן', desc: 'מנהלים עבורכם מו"מ מקצועי להשגת מחיר ותנאים מיטביים בעסקה.', icon: <Handshake size={32} />, image: '/assets/negotiation.webp' },
                    { title: 'מעורבות אנשי מקצוע ובדיקות חיוניות', desc: 'מכניסים לעבודה את כל אנשי המקצוע הרלוונטים בשביל לוודא שהנכס תקין בצורה מלאה.', icon: <ShieldCheck size={32} />, image: '/assets/אנשי מקצוע.webp', imageAspect: 'aspect-[7/10] !w-[70%] mx-auto' },
                    { title: 'הסכם מכר ורכישת הדירה', desc: 'מלווים אתכם בהסדרת ההיבטים המשפטיים והפיננסיים עד חתימה על הסכם המכר.', icon: <Key size={32} />, image: '/assets/purchase-agreement.webp', imageAspect: 'aspect-[11/16] !w-[68%] mx-auto' }
                  ]}
                />
              </div>
            </section>

            <section className="py-24 bg-offwhite">
              <div className="container mx-auto px-6 max-w-6xl text-right">
                <h2 className="text-4xl font-black text-navy mb-16 text-center">מה עוד מקבלים בליווי?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { icon: <Search size={32} />, title: 'ניתוח שוק מעמיק', desc: 'בחינת מגמות, מחירי עסקאות ופוטנציאל עליית ערך לפי אזור.' },
                    { icon: <Target size={32} />, title: 'חיפוש אקטיבי בשטח', desc: 'לא מחכים שנכסים יגיעו - יוצאים לאתר הזדמנויות לפני כולם.' },
                    { icon: <Handshake size={32} />, title: 'מו"מ מקצועי בשמך', desc: 'ניהול משא ומתן מול מוכרים ויזמים להשגת המחיר ותנאים הטובים ביותר.' },
                    { icon: <Briefcase size={32} />, title: 'ליווי פיננסי ומשפטי', desc: 'תיאום וליווי מול עו"ד, יועץ משכנתא ושמאי - הכל תחת קורת גג אחת.' },
                    { icon: <Shield size={32} />, title: 'שקיפות מלאה', desc: 'כל נכס שנבדק מגיע עם דו"ח: מה מצאנו, למה כן/לא, ומה ההמלצה.' },
                    { icon: <Gem size={32} />, title: 'מיקוד ברווח מיום הקנייה', desc: 'מחפשים עסקאות עם פוטנציאל רווח כבר ביום הרכישה - לא "קנייה ממוצעת".' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-navy/5 hover:shadow-xl transition-all duration-300 text-right">
                      <div className="text-gold mb-6">{item.icon}</div>
                      <h4 className="text-xl font-black text-navy mb-2">{item.title}</h4>
                      <p className="text-navy/60 font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-24 bg-navy relative overflow-hidden">
              <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/5 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[160px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />
              <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-gold font-black tracking-[0.4em] uppercase text-sm block mb-4"
                  >
                    הצלחות שמדברות בעד עצמן
                  </motion.span>
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6"
                  >
                    סיפורי הצלחה
                  </motion.h2>
                  <div className="w-24 h-2 bg-gold mx-auto rounded-full shadow-lg shadow-gold/20" />
                </div>
                <SuccessStories category="ליווי אישי" />
              </div>
            </section>

            <section className="py-24 bg-white">
              <div className="container mx-auto px-6 max-w-6xl">
                <ContactForm />
              </div>
            </section>
          </motion.div>
        );

      case 'group':
        return (
          <motion.div key="group" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SubPageHero
              title="קבוצות רוכשים בלעדיות"
              subtitle="הכוח שלכם נמצא ביחד. קונים בהנחות משמעותיות ממחירי השוק."
              badge="כוח הקבוצה"
            />
            <section className="py-24 bg-white">
              <div className="container mx-auto px-6 max-w-6xl text-right">
                <h2 className="text-4xl md:text-5xl font-black text-navy text-center mb-16">תהליך קבוצת הרוכשים</h2>
                <Timeline
                  steps={[
                    { title: 'גיבוש הקבוצה', desc: 'איחוד משקיעים עם הון עצמי דומה ויעדים משותפים.', icon: <Users size={32} />, image: '/assets/group-formation.webp' },
                    { title: 'איתור פרויקט פרי-סייל', desc: 'מציאת יזם המעוניין למכור כמות יחידות בהנחה.', icon: <Search size={32} />, image: '/assets/presale.webp' },
                    { title: 'מינוף כוח הקנייה', desc: 'ניהול מו״מ קבוצתי להשגת מחיר חסר תקדים.', icon: <Briefcase size={32} />, image: '/assets/buying-power.webp' },
                    { title: 'ליווי מלא עד קבלת מפתח', desc: 'פיקוח ובקרה לאורך כל חיי הפרויקט.', icon: <Building size={32} />, image: '/assets/key-handover.webp' }
                  ]}
                  priceLabel="דברו איתנו"
                />
              </div>
            </section>
            <section className="py-24 bg-white">
              <div className="container mx-auto px-6 max-w-6xl">
                <ContactForm />
              </div>
            </section>
          </motion.div>
        );

      case 'value':
        return (
          <motion.div key="value" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SubPageHero
              title="מרכז הידע והערך"
              subtitle="אנחנו מאמינים בשקיפות ושיתוף ידע. כאן תמצאו את הכלים להפוך למשקיעים טובים יותר."
              badge="ערך מוסף"
            />
            <section className="py-24 bg-offwhite">
              <div className="container mx-auto px-6 max-w-3xl text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-[3rem] border border-navy/8 shadow-xl shadow-navy/5 px-10 py-16"
                >
                  <div className="w-20 h-20 bg-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                    <FileText className="text-gold" size={36} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">העמוד בבנייה</h2>
                  <p className="text-xl text-navy/60 font-medium leading-relaxed mb-8">
                    אנחנו עובדים על תוכן איכותי עבורכם - מדריכים, כלים ומשאבים שיעזרו לכם להשקיע חכם יותר.
                    <br />
                    <span className="text-gold font-black">יהיה מוכן בקרוב!</span>
                  </p>
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gold/10 border border-gold/20 rounded-full">
                    <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                    <span className="text-navy font-black text-sm tracking-widest uppercase">בעבודה</span>
                  </div>
                </motion.div>
              </div>
            </section>
            <ROICalculator />
            <FAQ />
            <section className="py-24 bg-white">
              <div className="container mx-auto px-6 max-w-6xl">
                <ContactForm />
              </div>
            </section>
          </motion.div>
        );

      case 'about':
        return (
          <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SubPageHero
              title="מי אנחנו - צמד ברזל"
              subtitle="הערכים הצבאיים שלנו הם המצפן שמוביל אותנו בכל עסקה ועסקה."
              badge="הסיפור שלנו"
            />

            {/* Our Story Section */}
            <section className="py-24 bg-white overflow-hidden">
              <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-20 items-center text-right">
                  <div className="order-2 lg:order-1 relative">
                    <div className="absolute -right-8 -top-8 w-24 h-24 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
                    <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 border-r-8 border-gold pr-6 relative z-10">הסיפור שלנו</h2>
                    <div className="space-y-6 text-lg md:text-xl text-navy/80 leading-relaxed font-medium">
                      <p>
                        עמית ונעם, קצינים במילואים, הקימו את ״צמד ברזל״ מתוך הבנה ששוק הנדל״ן הישראלי צמא לאמינות, שקיפות ומקצועיות ללא פשרות.
                      </p>
                      <p>
                        לאחר שנים של פיקוד והובלת מערכות מורכבות, החלטנו לקחת את הערכים שעליהם גדלנו - דייקנות, אחריות, תכנון מקדים וחתירה למגע - וליישם אותם בעולם הנדל״ן. אנחנו מאמינים שקניית דירה היא לא רק עסקה כלכלית, אלא החלטה של פעם בחיים שדורשת שותפים לדרך שאפשר לסמוך עליהם בעיניים עצומות.
                      </p>
                      <p>
                        ״צמד ברזל״ נולד מתוך רצון לשנות את כללי המשחק. לתת ללקוחות שלנו את השקט הנפשי והביטחון שהם נמצאים בידיים הטובות ביותר, בדיוק כמו בשדה הקרב.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 relative">
                    <div className="relative h-[580px] md:h-[680px]">
                      <div className="absolute top-0 right-0 w-[432px] md:w-[504px] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
                        <img src="/assets/about1.webp" loading="lazy" alt="צמד ברזל" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-[432px] md:w-[504px] aspect-[5/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white rotate-[5deg] hover:rotate-0 transition-transform duration-500">
                        <img src="/assets/about2.webp" loading="lazy" alt="צמד ברזל" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/20 rounded-full blur-3xl -z-10 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 bg-offwhite">
              <div className="container mx-auto px-6 max-w-6xl text-right">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-black text-navy mb-4">ערכי הליבה שלנו</h2>
                  <div className="w-24 h-1.5 bg-gold mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { title: 'אמינות ללא פשרות', icon: <ShieldCheck size={40} />, desc: 'הבסיס לכל מערכת יחסים שלנו. אנחנו אומרים את האמת נטו, גם כשהיא פחות נוחה כי רק כך בונים אמון ארוך טווח.' },
                    { title: 'שקיפות מלאה', icon: <Search size={40} />, desc: 'אתם חשופים לכל הנתונים, המספרים והמשמעויות. אצלנו אין אותיות קטנות ואין הפתעות של הרגע האחרון.' },
                    { title: 'מקצוענות בשטח', icon: <Target size={40} />, desc: 'יורדים לפרטים הקטנים ביותר, מנתחים עסקאות לעומק רב ומביאים תוצאות מוכחות עם 0 מקום לטעויות.' }
                  ].map((val, idx) => (
                    <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-navy/5 border border-navy/5 hover:-translate-y-2 transition-transform duration-500">
                      <div className="w-20 h-20 bg-navy text-gold rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-navy/10">
                        {val.icon}
                      </div>
                      <h3 className="text-2xl font-black text-navy mb-4">{val.title}</h3>
                      <p className="text-lg text-navy/70 leading-relaxed font-medium">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <Team />

            <section className="py-24 bg-white border-t border-navy/5">
              <div className="container mx-auto px-6 max-w-6xl">
                <ContactForm />
              </div>
            </section>
          </motion.div>
        );

      case 'contact-page':
        return (
          <motion.div key="contact-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SubPageHero
              title="צרו קשר"
              subtitle="אנחנו כאן כדי לענות על כל שאלה ולתאם שיחת ייעוץ אישית."
              badge="נהיה בקשר"
            />
            <section className="py-24 bg-offwhite">
              <div className="container mx-auto px-6 max-w-6xl">
                <ContactForm />
              </div>
            </section>
          </motion.div>
        );

      case 'privacy':
        return (
          <motion.div key="privacy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <PrivacyPolicy onNavigate={navigateTo} />
          </motion.div>
        );

      case 'terms':
        return (
          <motion.div key="terms" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <TermsOfUse onNavigate={navigateTo} />
          </motion.div>
        );

      case 'accessibility':
        return (
          <motion.div key="accessibility" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AccessibilityStatement onNavigate={navigateTo} />
          </motion.div>
        );

      case 'home':
        return (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero navigateTo={navigateTo} />
            <MissionVision />
            <Team />
            <Services navigateTo={navigateTo} />
            <Stats />
            <MilitaryLectures />
            <Testimonials />
            <FAQ />
            <IsraeliMap />
            <section className="py-24 bg-white">
              <div className="container mx-auto px-6 max-w-6xl">
                <ContactForm />
              </div>
            </section>
          </motion.div>
        );

      default:
        return (
          <motion.div key="404" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="min-h-screen bg-offwhite flex flex-col items-center justify-center text-center px-6">
              <div className="text-9xl font-black text-navy/10 mb-4">404</div>
              <h1 className="text-4xl md:text-5xl font-black text-navy mb-4">הדף לא נמצא</h1>
              <p className="text-navy/60 text-xl mb-10">נראה שהכתובת שהזנת אינה קיימת. בואו נחזיר לבית.</p>
              <button
                onClick={() => navigateTo('home')}
                className="bg-gold text-navy px-10 py-4 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-xl shadow-gold/20 flex items-center gap-3"
              >
                <ArrowLeft size={24} />
                חזרה לבית
              </button>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="relative antialiased selection:bg-gold selection:text-navy">
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />

      <main>
        <Suspense fallback={<div className="min-h-screen bg-offwhite" />}>
          <AnimatePresence mode="wait">
            {renderPage()}
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer onNavigate={navigateTo} />
      <WhatsAppButton />
      <AccessibilityWidget />
      <CookieConsent onNavigate={navigateTo} />
    </div>
  );
};

export default App;
