
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: 'שלום! אני העוזר החכם של צמד ברזל. איך אוכל לעזור לך לקבל החלטות נדל״ן בטוחות היום?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) throw new Error('API Key missing');

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: userMsg,
        config: {
          systemInstruction: `You are a real estate investment expert for the Israeli company "צמד ברזל" (Tzamad Barzel). 
          Your tone is trustworthy, professional, calm, and reassuring. 
          Help users understand the "צמד ברזל" method: focusing on transparency, security, and peace of mind (שקט נפשי). 
          Your experts are former military officers (Amit Gold and Noam Sadan). 
          Always answer in Hebrew. Be concise and prioritize building trust over aggressive sales.`,
        },
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || 'סליחה, אירעה שגיאה. נסה שנית.' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: 'מצטער, אני חווה קצת עומס כרגע. תוכל לנסות שוב בעוד דקה?' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[90] bg-navy text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-navy/90 transition-all border-2 border-gold/30"
      >
        <Sparkles size={32} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-24 right-8 w-[400px] max-w-[90vw] h-[600px] bg-white rounded-[2.5rem] shadow-3xl z-[100] border border-navy/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-navy p-6 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-navy font-bold">
                  <Bot size={24} />
                </div>
                <div>
                  <h4 className="font-black text-lg">עוזר צמד ברזל</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">Online Expert</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Chat Messages */}
            <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-4 bg-offwhite/50">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${m.role === 'user'
                        ? 'bg-navy text-white rounded-br-none'
                        : 'bg-white text-navy shadow-sm rounded-bl-none border border-navy/5'
                      }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-end">
                  <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-navy/5">
                    <Loader2 className="animate-spin text-gold" size={20} />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-navy/5">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="שאל אותי על ליווי השקעות..."
                  className="w-full bg-navy/5 border-2 border-transparent focus:border-gold rounded-2xl py-4 pl-14 pr-6 outline-none transition-all text-navy text-right"
                />
                <button
                  onClick={handleSend}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gold hover:scale-110 transition-transform"
                >
                  <Send size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GeminiAssistant;
