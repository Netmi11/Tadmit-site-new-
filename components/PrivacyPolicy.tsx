import React from 'react';

interface Props { onNavigate: (page: string) => void; }

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-black text-navy mb-4 border-r-4 border-gold pr-4">{title}</h2>
    <div className="text-navy/70 leading-relaxed space-y-3 text-lg font-medium">{children}</div>
  </div>
);

const PrivacyPolicy: React.FC<Props> = ({ onNavigate }) => (
  <div className="min-h-screen bg-offwhite">
    <div className="bg-navy py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-black text-white">מדיניות פרטיות</h1>
      <p className="text-white/50 mt-4 text-lg">עודכן לאחרונה: ינואר 2025</p>
    </div>
    <div className="container mx-auto px-6 max-w-4xl py-20 text-right">
      <Section title="מבוא">
        <p>חברת צמד ברזל יזמות ונדל&quot;ן מחוייבת להגן על פרטיות המשתמשים באתר ironteam.co.il. מדיניות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלך.</p>
        <p>השימוש באתר מהווה הסכמה למדיניות זו.</p>
      </Section>
      <Section title="מידע שאנו אוספים">
        <p><strong>מידע שאתה מספק:</strong> שם מלא, דוא&quot;ל, מספר טלפון ותוכן הודעות שנשלחות דרך טפסי יצירת הקשר.</p>
        <p><strong>מידע אוטומטי:</strong> כתובת IP, סוג דפדפן, דפים שנצפו - באמצעות Google Analytics לצורכי ניתוח תנועה בלבד.</p>
        <p><strong>עוגיות:</strong> אנו משתמשים בעוגיות חיוניות לתפקוד האתר. ניתן לבטלן בהגדרות הדפדפן.</p>
      </Section>
      <Section title="שימוש במידע">
        <p>אנו משתמשים במידע למטרות הבאות בלבד:</p>
        <ul className="list-disc list-inside space-y-1 pr-4">
          <li>מענה לפניות ותיאום פגישות ייעוץ</li>
          <li>שיפור השירות וחוויית המשתמש</li>
          <li>עמידה בדרישות חוקיות</li>
        </ul>
        <p>אנו <strong>לא מוכרים ולא מעבירים</strong> מידע אישי לצדדים שלישיים לצורכי שיווק.</p>
      </Section>
      <Section title="אבטחת מידע">
        <p>אנו נוקטים באמצעי אבטחה סבירים - הצפנת SSL וגישה מוגבלת - כדי להגן על המידע שברשותנו.</p>
      </Section>
      <Section title="זכויות המשתמש">
        <p>בהתאם לחוק הגנת הפרטיות, יש לך זכות לעיין, לתקן או למחוק את המידע האישי שלך. לפניות:</p>
        <p><a href="mailto:SNGinfodesk@gmail.com" className="text-gold font-bold hover:underline">SNGinfodesk@gmail.com</a></p>
      </Section>
      <Section title="שינויים במדיניות">
        <p>אנו שומרים לעצמנו את הזכות לעדכן מדיניות זו. שינויים מהותיים יפורסמו בעמוד זה.</p>
      </Section>
      <div className="mt-16 text-center">
        <button onClick={() => onNavigate('home')} className="bg-navy text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-navy/80 transition-colors">חזרה לדף הבית</button>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
