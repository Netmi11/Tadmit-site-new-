
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const N8N_WEBHOOK_URL = 'https://n8n.srv1270696.hstgr.cloud/webhook/594e4a2d-bc43-4f4d-9f5a-02f28afc9754';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', interest: 'ליווי אישי' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          interest: formData.interest,
          timestamp: new Date().toISOString(),
          source: 'ironteam.co.il',
        }),
      });
      setStatus('success');
      setFormData({ name: '', phone: '', interest: 'ליווי אישי' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="rounded-[2.5rem] md:rounded-[4rem] overflow-hidden flex flex-col lg:flex-row-reverse shadow-3xl w-full max-w-6xl mx-auto bg-navy text-white">
      {/* Info Side (Gold - Right side in RTL) */}
      <div className="lg:w-1/3 p-8 md:p-12 lg:p-16 bg-gold flex flex-col justify-center text-right text-navy">
        <h2 className="text-3xl lg:text-5xl font-black mb-8 lg:mb-10 leading-tight">בואו נבנה <br />עתיד יחד.</h2>
        <div className="space-y-8 lg:space-y-12">
          <a
            href="https://wa.me/972548654555"
            className="flex items-center gap-5 justify-start hover:scale-105 transition-transform group"
          >
            <div className="text-right">
              <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">וואטסאפ</p>
              <p className="font-black text-2xl group-hover:text-navy/80 transition-colors">דברו איתנו ישירות</p>
            </div>
            <div className="w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#25D366]/20">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{width:'2rem',height:'2rem'}}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.544 5.876L0 24l6.29-1.516A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.5-5.19-1.37l-.37-.22-3.73.9.94-3.63-.24-.38A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
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
                  className="w-full border-2 border-white/10 rounded-2xl py-5 px-8 text-white focus:border-gold outline-none transition-all text-right text-lg appearance-none cursor-pointer"
                  style={{ backgroundColor: '#1B3A5C' }}
                >
                  <option value="ליווי אישי" style={{ backgroundColor: '#1B3A5C', color: 'white' }}>ליווי אישי לקניית דירה</option>
                  <option value="קבוצת רכישה" style={{ backgroundColor: '#1B3A5C', color: 'white' }}>הצטרפות לקבוצת רכישה</option>
                  <option value="שיתוף פעולה" style={{ backgroundColor: '#1B3A5C', color: 'white' }}>שיתוף פעולה עסקי</option>
                </select>
                <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                  <Send size={20} className="rotate-180" />
                </div>
              </div>
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">שגיאה בשליחה. אנא נסה שוב או צור קשר בטלפון.</p>
            )}

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
