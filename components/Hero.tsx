
import React from 'react';
import { ChevronDown, Send, ShieldCheck } from 'lucide-react';
import TiltedCard from './TiltedCard';

interface HeroProps {
  navigateTo: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-offwhite">
      {/* Aurora background - temporarily disabled for performance testing */}

      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/5 -skew-x-12 transform translate-x-1/4" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-[120px] opacity-60" />
      <div className="absolute top-1/4 -right-24 w-[30rem] h-[30rem] bg-navy/5 rounded-full blur-[140px]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div
          className="order-2 lg:order-1 text-right animate-[fadeInUp_0.8s_ease-out_both]"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full mb-6">
            <ShieldCheck className="text-gold" size={16} />
            <span className="text-navy font-black tracking-widest text-xs uppercase">שקיפות, מקצוענות, רווחיות</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-navy leading-tight mb-6">
            <span className="text-gold">צמד ברזל</span> <br />
            מובילים מהפכה בעולם הנדל&quot;ן.
          </h1>
          <p className="text-xl md:text-2xl text-navy/70 leading-relaxed mb-10 max-w-xl">
            צמד ברזל מגדירים מחדש מהי יושרה, מקצועיות ונאמנות ללקוח,
            ומציבים סטנדרט חדש של ליווי אסטרטגי המבוסס על שקיפות מלאה וניתוח נתונים מדויק.
          </p>

          <div>
            <button
              onClick={() => navigateTo('contact-page')}
              className="bg-gold text-navy px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-gold/20"
            >
              לשיחת ייעוץ חינמית לחץ כאן
              <Send size={20} />
            </button>
          </div>
        </div>

        <div
          className="relative order-1 lg:order-2 flex items-center justify-center animate-[fadeIn_1s_ease-out_0.2s_both]"
        >
          <div
            className="relative z-10 max-w-[428px] sm:max-w-[524px] lg:max-w-[571px] mx-auto w-full translate-y-[30px] lg:translate-y-0 lg:translate-x-[30px]"
            style={{ aspectRatio: '4/3' }}
          >
            <TiltedCard
              imageSrc="/assets/hero.webp"
              altText="צמד ברזל - ליווי נדלן"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={8}
              scaleOnHover={1.04}
            />
          </div>
          <div className="absolute -top-12 -right-12 w-48 h-48 border border-gold/10 rounded-full -z-10 animate-[spin_20s_linear_infinite]" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold/10 rounded-full blur-[100px] -z-10 animate-pulse" />
        </div>
      </div>

      <div className="absolute bottom-10 left-[calc(50%-21px)] -translate-x-1/2 text-navy/30 hidden lg:block animate-bounce">
        <ChevronDown size={40} />
      </div>
    </section>
  );
};

export default Hero;
