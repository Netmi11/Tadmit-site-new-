import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const GA_ID = 'G-61T9GERXEF';

function loadGA() {
  if (document.getElementById('ga-script')) return;
  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', GA_ID);
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

interface CookieConsentProps {
  onNavigate: (page: string) => void;
}

export default function CookieConsent({ onNavigate }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'accepted') {
      loadGA();
    } else if (consent !== 'declined') {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    loadGA();
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[9999] bg-white rounded-2xl shadow-2xl shadow-navy/15 border border-navy/10 p-4 md:p-6"
          dir="rtl"
        >
          <button
            onClick={decline}
            className="absolute top-3 left-3 text-navy/30 hover:text-navy/60 transition-colors"
            aria-label="סגור"
          >
            <X size={18} />
          </button>

          <div className="flex items-start gap-3 md:gap-4">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
              <Cookie className="text-gold" size={20} />
            </div>
            <div>
              <h3 className="text-navy font-black text-base mb-1">האתר משתמש בעוגיות</h3>
              <p className="text-navy/60 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                אנו משתמשים בעוגיות לצורך ניתוח תנועה ושיפור חוויית הגלישה.{' '}
                <button
                  onClick={() => { onNavigate('privacy'); setVisible(false); }}
                  className="text-gold font-bold underline underline-offset-2 hover:text-gold/80"
                >
                  מדיניות פרטיות
                </button>
              </p>
              <div className="flex gap-3">
                <button
                  onClick={accept}
                  className="bg-gold text-navy px-5 py-2 rounded-xl font-black text-sm hover:scale-[1.02] transition-transform"
                >
                  אישור
                </button>
                <button
                  onClick={decline}
                  className="bg-navy/5 text-navy px-5 py-2 rounded-xl font-bold text-sm hover:bg-navy/10 transition-colors"
                >
                  דחייה
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
