import React from 'react';

interface Props { onNavigate: (page: string) => void; }

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-black text-navy mb-4 border-r-4 border-gold pr-4">{title}</h2>
    <div className="text-navy/70 leading-relaxed space-y-3 text-lg font-medium">{children}</div>
  </div>
);

const TermsOfUse: React.FC<Props> = ({ onNavigate }) => (
  <div className="min-h-screen bg-offwhite">
    <div className="bg-navy py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-black text-white">תנאי שימוש</h1>
      <p className="text-white/50 mt-4 text-lg">עודכן לאחרונה: ינואר 2025</p>
    </div>
    <div className="container mx-auto px-6 max-w-4xl py-20 text-right">
      <Section title="כללי">
        <p>ברוכים הבאים לאתר ironteam.co.il של חברת צמד ברזל יזמות ונדל&quot;ן. השימוש באתר כפוף לתנאים המפורטים להלן.</p>
      </Section>
      <Section title="תיאור השירות">
        <p>האתר משמש כאתר תדמית ומידע עבור שירותי ייעוץ נדל&quot;ן, ליווי אישי וקבוצות רוכשים. המידע אינו מהווה ייעוץ משפטי, פיננסי או השקעתי.</p>
        <p>כל החלטת השקעה דורשת בחינה אישית מול אנשי מקצוע מוסמכים.</p>
      </Section>
      <Section title="קניין רוחני">
        <p>כל התכנים באתר מוגנים בזכויות יוצרים ורכוש החברה. אין לשכפל או להפיץ ללא אישור מראש ובכתב.</p>
      </Section>
      <Section title="הגבלת אחריות">
        <p>החברה אינה אחראית לנזק הנובע משימוש באתר. האתר מסופק כמות שהוא ללא אחריות מכל סוג.</p>
      </Section>
      <Section title="דין ושיפוט">
        <p>תנאים אלה כפופים לדיני מדינת ישראל. כל סכסוך יידון בבתי המשפט במחוז תל אביב-יפו.</p>
      </Section>
      <Section title="יצירת קשר">
        <p><a href="mailto:SNGinfodesk@gmail.com" className="text-gold font-bold hover:underline">SNGinfodesk@gmail.com</a></p>
      </Section>
      <div className="mt-16 text-center">
        <button onClick={() => onNavigate('home')} className="bg-navy text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-navy/80 transition-colors">חזרה לדף הבית</button>
      </div>
    </div>
  </div>
);

export default TermsOfUse;
