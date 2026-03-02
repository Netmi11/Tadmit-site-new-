
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
import IsraeliMap from './components/IsraeliMap';
import Timeline from './components/Timeline';
import SubPageHero from './components/SubPageHero';
import GeminiAssistant from './components/GeminiAssistant';
import Logo from './components/Logo';
import FAQ from './components/FAQ';
import ROICalculator from './components/ROICalculator';
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

            <div className="bg-white py-12 border-b border-navy/5 text-center">
              <button
                onClick={() => navigateTo('contact-page')}
                className="bg-gold text-navy px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform inline-block shadow-xl shadow-gold/20"
              >
                לקביעת שיחת ייעוץ
              </button>
            </div>

            <section className="py-24 bg-offwhite">
              <div className="container mx-auto px-6 max-w-6xl text-center">
                <h2 className="text-4xl md:text-5xl font-black text-navy mb-12">איך זה עובד?</h2>
                <div className="aspect-video bg-navy rounded-[3rem] mb-8 overflow-hidden relative shadow-3xl flex items-center justify-center border-8 border-white group cursor-pointer">
                  <Play className="text-gold relative z-10 group-hover:scale-110 transition-transform" size={80} />
                  <div className="absolute inset-0 bg-navy/40" />
                  <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                </div>
                <p className="text-navy/60 font-bold text-xl">צפו בסרטון קצר שמסביר את תהליך הליווי שלנו</p>
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
                    { title: 'אפיון אישי וניסוח תכנית עסקית', desc: 'מנתחים יחד את הצרכים, התקציב והיעדים כדי לבנות תכנית מותאמת אישית לרכישה הכמה.', icon: <Target size={32} /> },
                    { title: 'חקר שוק', desc: 'מבצעים ניתוח אזורים, מחירים והשוואות כדי לזהות את ההזדמנויות המדיניות עבורכם.', icon: <Search size={32} /> },
                    { title: 'הצגת עסקה', desc: 'מציגים רק את הנכסים הרלוונטיים ביותר לצד נתונים ברורים ומודקים מסב מלא.', icon: <Building size={32} /> },
                    { title: 'משא ומתן', desc: 'מנהלים עבורכם מו"מ מקצועי להשגת מחיר ותנאים מיטביים בעסקה.', icon: <Handshake size={32} /> },
                    { title: 'מעורבות אנשי מקצוע ובדיקות חיוניות', desc: 'מכניסים לעבודה שמאי, מהנדס, שמאי ומבדק, כדי לוודא שארכש תקין וללא הפתעות.', icon: <ShieldCheck size={32} /> },
                    { title: 'הסכם מכר ורכישת הדירה', desc: 'מלווים אתכם בהסדרת ההיבטים המשפטיים והפיננסיים עד חתימה על הסכם המכר.', icon: <Key size={32} /> }
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

            <section className="py-24 bg-navy text-white relative overflow-hidden">
              <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-gold">מוכנים להתחיל?</h2>
                <p className="text-white/60 text-xl mb-12 font-medium">השאירו פרטים ונחזור אליכם לשיחת ייעוץ ללא עלות וללא התחייבות</p>
                <div className="bg-white/5 p-8 md:p-12 rounded-[3.5rem] border border-white/10">
                  <ContactForm />
                </div>
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
                    { title: 'איתור פרויקט פרי-סייל', desc: 'מציאת יזם המעוניין למכור כמות יחידות בהנחה.', icon: <Search size={32} /> },
                    { title: 'מינוף כוח הקנייה', desc: 'ניהול מו״מ קבוצתי להשגת מחיר חסר תקדים.', icon: <Briefcase size={32} /> },
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
            <section className="py-24 bg-white">
              <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-32 text-right">
                  <div className="order-2 lg:order-1">
                    <h2 className="text-4xl font-black text-navy mb-8 border-r-8 border-gold pr-6">מהשטח לנדל״ן</h2>
                    <p className="text-xl text-navy/70 leading-relaxed mb-6">
                      עמית ונעם, קצינים במילואים, הקימו את ״צמד ברזל״ מתוך הבנה ששוק הנדל״ן הישראלי צמא לאמינות, שקיפות ומקצועיות ללא פשרות.
                    </p>
                  </div>
                  <div className="order-1 lg:order-2 bg-navy/5 aspect-square rounded-[3rem] flex items-center justify-center relative overflow-hidden">
                    <Logo className="w-32 h-32" />
                  </div>
                </div>
                <IsraeliMap />
              </div>
            </section>
            <section className="py-24 bg-white">
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

      default:
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
      <GeminiAssistant />


    </div>
  );
};

export default App;
