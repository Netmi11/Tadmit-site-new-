
import React from 'react';
import { NAV_LINKS } from '../constants';
import { Instagram } from 'lucide-react';
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
          <div className="space-y-6 order-last md:order-first">
            <p className="text-white/60 leading-relaxed text-base">
              מביאים שקיפות, אמינות וביטחון לשוק הנדל"ן הישראלי. ליווי מקצועי של קצינים לשעבר אל עבר ההצלחה הכלכלית שלכם.
            </p>
            <div className="flex gap-4 justify-end items-center">
              <Logo className="w-16 h-16 md:w-28 md:h-28" />
              <a href="https://www.instagram.com/ironteam_realestate/profilecard/?igsh=MThsYXVmMWluMWw5bA==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-navy hover:border-gold transition-all">
                <Instagram size={19} />
              </a>
              <a href="https://wa.me/972548654555" className="w-12 h-12 rounded-full bg-whatsapp flex items-center justify-center hover:scale-110 transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-label="WhatsApp">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
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
              <p>מנחם בגין 121, מתחם עזריאלי שרונה, תל אביב</p>
              <p>טלפון: 054-8654555</p>
              <p>מייל: SNGinfodesk@gmail.com</p>
              <p>שעות פעילות:</p>
              <p>א'-ה' 09:00-18:00 &nbsp;|&nbsp; ו' 09:00-13:00</p>
            </div>
          </div>

          {/* Column 4: Community */}
          <div className="space-y-6">
            <h4 className="text-xl font-black text-gold">הצטרפו לקהילה</h4>
            <p className="text-white/70 font-medium">קבלו עדכונים על עסקאות פרי-סייל חמות לפני כולם.</p>
            <div className="flex gap-2">
              <a
                href="https://chat.whatsapp.com/CZxdM5QHuOhI8iyQMgCEVn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-navy font-black px-8 py-3 rounded-xl w-full hover:scale-105 transition-transform text-center block"
              >
                להצטרפות לקהילת הווצאפ
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm font-medium">
          <p>© 2024 צמד ברזל - יזמות ונדל"ן. כל הזכויות שמורות.</p>
          <div className="flex gap-8">
            <button onClick={() => onNavigate('privacy')} className="hover:text-gold transition-colors">מדיניות פרטיות</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-gold transition-colors">תנאי שימוש</button>
            <button onClick={() => onNavigate('accessibility')} className="hover:text-gold transition-colors">הצהרת נגישות</button>
          </div>
        </div>

        <p className="text-white/20 text-[10px] text-left mt-4">© בניית אתר - נתנאל מילר</p>
      </div>
    </footer>
  );
};

export default Footer;
