
import React from 'react';
import { NAV_LINKS } from '../constants';
import { Facebook, Instagram, Youtube, Linkedin, MessageCircle } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-navy pt-16 md:pt-24 pb-8 md:pb-12 text-white border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-12 md:mb-20 text-right">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center justify-end">
              <Logo className="w-36 h-36" />
            </div>
            <p className="text-white/60 leading-relaxed text-lg">
              מביאים שקיפות, אמינות וביטחון לשוק הנדל"ן הישראלי. ליווי מקצועי של קצינים לשעבר אל עבר ההצלחה הכלכלית שלכם.
            </p>
            <div className="flex gap-4 justify-end">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all">
                  <Icon size={18} />
                </a>
              ))}
              <a href="https://wa.me/972521234567" className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center hover:scale-110 transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-black text-gold">ניווט מהיר</h4>
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map(link => (
                <button
                  key={link.href}
                  onClick={() => onNavigate(link.href)}
                  className="text-right text-white/70 hover:text-gold transition-colors font-bold"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-black text-gold">צור קשר</h4>
            <div className="space-y-4 text-white/70 font-bold">
              <p>תל אביב, ישראל</p>
              <p>טלפון: 052-123-4567</p>
              <p>מייל: office@tzamadbarzel.co.il</p>
              <p>שעות פעילות: א'-ה' 09:00-18:00</p>
            </div>
          </div>

          {/* Column 4: Community */}
          <div className="space-y-6">
            <h4 className="text-xl font-black text-gold">הצטרפו לקהילה</h4>
            <p className="text-white/70 font-medium">קבלו עדכונים על עסקאות פרי-סייל חמות לפני כולם.</p>
            <div className="flex gap-2">
              <button
                onClick={() => onNavigate('contact-page')}
                className="bg-gold text-navy font-black px-8 py-3 rounded-xl w-full hover:scale-105 transition-transform"
              >
                להצטרפות לקבוצת השקט
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm font-medium">
          <p>© 2024 צמד ברזל - יזמות ונדל"ן. כל הזכויות שמורות.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold">מדיניות פרטיות</a>
            <a href="#" className="hover:text-gold">תנאי שימוש</a>
            <a href="#" className="hover:text-gold">הצהרת נגישות</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
