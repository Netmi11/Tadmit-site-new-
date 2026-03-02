
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MessageCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', interest: 'ליווי אישי' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', interest: 'ליווי אישי' });
    }, 1500);
  };

  return (
    <div className="rounded-[2.5rem] md:rounded-[4rem] overflow-hidden flex flex-col lg:flex-row-reverse shadow-3xl w-full max-w-6xl mx-auto bg-navy text-white">
      {/* Info Side (Gold - Right side in RTL) */}
      <div className="lg:w-1/3 p-8 md:p-12 lg:p-16 bg-gold flex flex-col justify-center text-right text-navy">
        <h2 className="text-3xl lg:text-5xl font-black mb-8 lg:mb-10 leading-tight">בואו נבנה <br />עתיד יחד.</h2>
        <div className="space-y-8 lg:space-y-12">
          <div className="flex items-center gap-5 justify-end">
            <div className="text-right">
              <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">טלפון</p>
              <p className="font-black text-2xl">052-123-4567</p>
            </div>
            <div className="w-16 h-16 bg-navy/10 rounded-2xl flex items-center justify-center">
              <Phone size={32} />
            </div>
          </div>

          <a
            href="https://wa.me/972521234567"
            className="flex items-center gap-5 justify-end hover:scale-105 transition-transform group"
          >
            <div className="text-right">
              <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">וואטסאפ</p>
              <p className="font-black text-2xl group-hover:text-navy/80 transition-colors">דברו איתנו ישירות</p>
            </div>
            <div className="w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#25D366]/20">
              <MessageCircle size={32} />
            </div>
          </a>
        </div>
      </div>

      {/* Form Side (Navy - Left side in RTL) */}
      <div className="lg:w-2/3 p-8 md:p-12 lg:p-20 flex flex-col justify-center">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-full flex flex-col items-center justify-center text-center space-y-6"
          >
            <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center text-gold">
              <Send size={48} />
            </div>
            <h3 className="text-3xl font-black text-white">הפרטים נשלחו בהצלחה!</h3>
            <p className="text-white/60 text-lg">נציג מצמד ברזל יחזור אליך בהקדם.</p>
            <button
              onClick={() => setStatus('idle')}
              className="text-gold font-black underline underline-offset-8"
            >
              שליחת פנייה נוספת
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10 text-right">
            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              <div className="space-y-4">
                <label className="text-white font-black text-sm uppercase tracking-wider block">שם מלא</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-5 px-8 text-white focus:border-gold outline-none transition-all text-right text-lg"
                  placeholder="הכנס שם מלא"
                />
              </div>
              <div className="space-y-4">
                <label className="text-white font-black text-sm uppercase tracking-wider block">טלפון</label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-5 px-8 text-white focus:border-gold outline-none transition-all text-right text-lg"
                  placeholder="050-0000000"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-white font-black text-sm uppercase tracking-wider block">מה מעניין אותך?</label>
              <div className="relative">
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-5 px-8 text-white focus:border-gold outline-none transition-all text-right text-lg appearance-none cursor-pointer"
                >
                  <option value="ליווי אישי">ליווי אישי לקניית דירה</option>
                  <option value="קבוצת רכישה">הצטרפות לקבוצת רכישה</option>
                  <option value="שיתוף פעולה">שיתוף פעולה עסקי</option>
                </select>
                <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                  <Send size={20} className="rotate-180" />
                </div>
              </div>
            </div>

            <button
              disabled={status === 'loading'}
              className="w-full bg-gold text-navy py-4 md:py-6 rounded-2xl font-black text-xl md:text-2xl flex items-center justify-center gap-4 hover:brightness-105 active:scale-[0.98] transition-all disabled:opacity-50 shadow-xl shadow-gold/10 mt-6 md:mt-10"
            >
              {status === 'loading' ? 'שולח...' : 'שילחו לי פרטים עכשיו'}
              <Send size={26} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
