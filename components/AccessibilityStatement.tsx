import React from 'react';

interface Props { onNavigate: (page: string) => void; }

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-black text-navy mb-4 border-r-4 border-gold pr-4">{title}</h2>
    <div className="text-navy/70 leading-relaxed space-y-3 text-lg font-medium">{children}</div>
  </div>
);

const AccessibilityStatement: React.FC<Props> = ({ onNavigate }) => (
  <div className="min-h-screen bg-offwhite">
    <div className="bg-navy py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-black text-white">הצהרת נגישות</h1>
      <p className="text-white/50 mt-4 text-lg">עודכן לאחרונה: ינואר 2025</p>
    </div>
    <div className="container mx-auto px-6 max-w-4xl py-20 text-right">
      <Section title="מחוייבות לנגישות">
        <p>חברת צמד ברזל יזמות ונדל&quot;ן פועלת לעמוד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות ובתקן WCAG 2.1 ברמה AA.</p>
      </Section>
      <Section title="מאפייני הנגישות באתר">
        <ul className="list-disc list-inside space-y-2 pr-4">
          <li>האתר מותאם לקריאה מימין לשמאל (RTL) בעברית</li>
          <li>ניתן לנווט באמצעות מקלדת בלבד</li>
          <li>ניגודיות צבע תואמת לתקן</li>
          <li>תמונות כוללות תיאורי alt לקוראי מסך</li>
          <li>גודל פונטים ניתן לשינוי דרך הדפדפן</li>
          <li>תמיכה בקוראי מסך: NVDA, JAWS, VoiceOver</li>
          <li>תואם לדפדפנים: Chrome, Firefox, Safari, Edge</li>
        </ul>
      </Section>
      <Section title="פנייה בנושא נגישות">
        <p>נתקלת בבעיית נגישות? נשמח לעזור ונגיב תוך 5 ימי עסקים:</p>
        <div className="bg-white rounded-2xl p-6 border border-navy/10 space-y-2">
          <p><strong>דוא&quot;ל:</strong> <a href="mailto:SNGinfodesk@gmail.com" className="text-gold font-bold hover:underline">SNGinfodesk@gmail.com</a></p>
        </div>
      </Section>
      <Section title="בסיס חוקי">
        <p>הצהרה זו ניתנת בהתאם לתיקון לחוק שוויון זכויות לאנשים עם מוגבלות ולתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע&quot;ג-2013.</p>
      </Section>
      <div className="mt-16 text-center">
        <button onClick={() => onNavigate('home')} className="bg-navy text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-navy/80 transition-colors">חזרה לדף הבית</button>
      </div>
    </div>
  </div>
);

export default AccessibilityStatement;
