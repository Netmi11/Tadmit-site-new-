
import React, { useEffect, useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Team from './components/Team';
import MilitaryLectures from './components/MilitaryLectures';
import MissionVision from './components/MissionVision';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AccessibilityWidget from './components/AccessibilityWidget';
import IsraeliMap from './components/IsraeliMap';
import Timeline from './components/Timeline';
import SubPageHero from './components/SubPageHero';
import Logo from './components/Logo';
import FAQ from './components/FAQ';
import ROICalculator from './components/ROICalculator';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import AccessibilityStatement from './components/AccessibilityStatement';
import { motion, AnimatePresence } from 'framer-motion';
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

  const SuccessStories = ({ category }: { category: string }) => (
    <div className="grid md:grid-cols-2 gap-12 mt-16">
      {[1, 2].map((i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10 }}
          className="bg-white p-8 rounded-[3rem] shadow-xl border border-navy/5 overflow-hidden group text-right"
        >
          <div className="aspect-video bg-navy/10 rounded-[2rem] mb-8 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
              <div className="w-full h-px bg-navy rotate-45" />
              <div className="w-full h-px bg-navy -rotate-45" />
            </div>
            <div className="text-gold/20">
              <Users size={80} />
            </div>
          </div>
          <p className="text-xl text-navy leading-relaxed font-black mb-6">
            "[ציטוט מלקוח שעבר {category} — כאן יופיע סיפור הצלחה אמיתי של משקיע שקיבל שקט נפשי]"
          </p>
          <div className="flex flex-col items-end">
            <h4 className="text-2xl font-black text-navy">ישראל ישראלי</h4>
            <p className="text-gold font-bold text-sm tracking-widest uppercase">{category}, תל אביב</p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'personal':
        return (
          <motion.div key="personal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SubPageHero
              title="ליווי אישי"
              subtitle="תוכנית מותאמת בדיוק למידות הלקוח וליווי מא׳ ועד ת׳ בקניית הדירה. אנחנו לא רק מוצאים דירה — אנחנו בונים איתך את הדרך אליה."
              badge="המסלול האישי"
            />

            <section className="py-24 bg-offwhite">
              <div className="container mx-auto px-6 max-w-6xl text-center">
                <h2 className="text-4xl md:text-5xl font-black text-navy mb-12">איך זה עובד?</h2>
                <div className="aspect-video bg-navy rounded-[3rem] mb-8 overflow-hidden relative shadow-3xl flex items-center justify-center border-8 border-white group cursor-pointer">
                  <Play className="text-gold relative z-10 group-hover:scale-110 transition-transform" size={80} />
                  <div className="absolute inset-0 bg-navy/40" />
                  <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                </div>
                <p className="text-navy/60 font-bold text-xl">צפו בסרטון קצר שמסביר את תהליך הליווי שלנו</p>
                <div className="mt-8">
                  <button
                    onClick={() => navigateTo('contact-page')}
                    className="bg-gold text-navy px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform inline-block shadow-xl shadow-gold/20"
                  >
                    לייעוץ אובייקטיבי לחץ כאן
                  </button>
                </div>
              </div>
            </section>

            <section className="py-24 bg-white">
              <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-black text-navy mb-4">התהליך שלנו — צעד אחרי צעד</h2>
                  <div className="w-24 h-1.5 bg-gold mx-auto rounded-full" />
                </div>

                <Timeline
                  steps={[
                    { title: 'אפיון אישי וניסוח תכנית עסקית', desc: 'מנתחים יחד את הצרכים, התקציב והיעדים כדי לבנות תכנית מותאמת אישית לרכישה הכמה.', icon: <Target size={32} />, image: '/assets/personal-service.webp', imageAspect: 'aspect-[9/16] !w-[56.25%] mx-auto' },
                    { title: 'חקר שוק', desc: 'מבצעים ניתוח אזורים, מחירים והשוואות כדי לזהות את ההזדמנויות המדיניות עבורכם.', icon: <Search size={32} />, image: '/assets/market-research.webp', imageAspect: 'aspect-[9/16] !w-[56.25%] mx-auto' },
                    { title: 'הצגת עסקה', desc: 'מציגים רק את הנכסים הרלוונטיים ביותר לצד נתונים ברורים ומודקים מסב מלא.', icon: <Building size={32} />, image: '/assets/deal-presentation.webp', imageAspect: 'aspect-[11/16] !w-[68%] mx-auto' },
                    { title: 'משא ומתן', desc: 'מנהלים עבורכם מו"מ מקצועי להשגת מחיר ותנאים מיטביים בעסקה.', icon: <Handshake size={32} />, image: '/assets/negotiation.webp' },
                    { title: 'מעורבות אנשי מקצוע ובדיקות חיוניות', desc: 'מכניסים לעבודה שמאי, מהנדס, שמאי ומבדק, כדי לוודא שארכש תקין וללא הפתעות.', icon: <ShieldCheck size={32} /> },
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
                    { icon: <FileText size={32} />, title: 'דוחות שוטפות על הנכסים', desc: 'מידע מלא ומפורט על כל נכס שנבדק.' },
                    { icon: <Target size={32} />, title: 'ניתוח רווחיות', desc: 'חישוב מדויק של פוטנציאל הרווח.' },
                    { icon: <Briefcase size={32} />, title: 'התאמת משכנתא', desc: 'ייעוץ וליווי מול הבנקים לתנאים הכי טובים.' },
                    { icon: <CheckCircle size={32} />, title: 'ליווי בירוקרטיה', desc: 'אנחנו מטפלים בכל הטפסים בשבילכם.' },
                    { icon: <History size={32} />, title: 'זמינות 24/7', desc: 'אנחנו כאן לכל שאלה לאורך כל הדרך.' },
                    { icon: <Shield size={32} />, title: 'גישה למאגר נכסים בלעדי', desc: 'נכסים לפני שהם מגיעים לשוק החופשי.' }
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

            <section className="py-24 bg-white">
              <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-black text-navy text-center mb-16">סיפורי הצלחה</h2>
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
              title="קבוצות רכישה בלעדיות"
              subtitle="הכוח שלכם נמצא ביחד. קונים בהנחות משמעותיות ממחירי השוק."
              badge="כוח הקבוצה"
            />
            <section className="py-24 bg-white">
              <div className="container mx-auto px-6 max-w-6xl text-right">
                <h2 className="text-4xl md:text-5xl font-black text-navy text-center mb-16">תהליך קבוצת הרכישה</h2>
                <Timeline
                  steps={[
                    { title: 'גיבוש הקבוצה', desc: 'איחוד משקיעים עם הון עצמי דומה ויעדים משותפים.', icon: <Users size={32} /> },
                    { title: 'איתור פרויקט פרי-סייל', desc: 'מציאת יזם המעוניין למכור כמות יחידות בהנחה.', icon: <Search size={32} />, image: '/assets/presale.webp' },
                    { title: 'מינוף כוח הקנייה', desc: 'ניהול מו״מ קבוצתי להשגת מחיר חסר תקדים.', icon: <Briefcase size={32} />, image: '/assets/buying-power.webp' },
                    { title: 'ליווי מלא עד קבלת מפתח', desc: 'פיקוח ובקרה לאורך כל חיי הפרויקט.', icon: <Building size={32} /> }
                  ]}
                  priceLabel="עמלת הצטרפות מופחתת למשקיעים"
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
            <section className="py-24 bg-white">
              <div className="container mx-auto px-6 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { title: 'המדריך למשקיע המתחיל', size: 'PDF 4.2MB', date: '2024' },
                    { title: 'צק ליסט לבדיקת נכס', size: 'DOCX 1.1MB', date: '2023' },
                    { title: 'טבלת תשואות ארצית', size: 'Excel 500KB', date: '2024' },
                    { title: 'כתבת: איך למנף משכנתא', size: 'PDF 2.0MB', date: '2024' }
                  ].map((doc, idx) => (
                    <div key={idx} className="p-8 bg-offwhite rounded-[2rem] flex items-center justify-between border border-navy/5 group hover:bg-navy hover:text-white transition-all duration-500">
                      <div className="bg-navy group-hover:bg-gold p-4 rounded-xl text-white group-hover:text-navy transition-colors">
                        <Download size={24} />
                      </div>
                      <div className="text-right">
                        <h4 className="text-xl font-black mb-1">{doc.title}</h4>
                        <p className="text-sm opacity-50">{doc.size} • {doc.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
                        לאחר שנים של פיקוד והובלת מערכות מורכבות, החלטנו לקחת את הערכים שעליהם גדלנו – דייקנות, אחריות, תכנון מקדים וחתירה למגע – וליישם אותם בעולם הנדל״ן. אנחנו מאמינים שקניית דירה היא לא רק עסקה כלכלית, אלא החלטה של פעם בחיים שדורשת שותפים לדרך שאפשר לסמוך עליהם בעיניים עצומות.
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
            <IsraeliMap />
            <MilitaryLectures />
            <Testimonials />
            <FAQ />
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
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigateTo} />
      <WhatsAppButton />
      <AccessibilityWidget />
    </div>
  );
};

export default App;
