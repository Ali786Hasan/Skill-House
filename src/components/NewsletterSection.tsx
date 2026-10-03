import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface NewsletterSectionProps {
  lang: 'bn' | 'en';
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ lang }) => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-950/50 via-slate-900 to-slate-950 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>নিউজলেটার ও ডিসকাউন্ট অ্যালার্ট</span>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight font-serif">
            সাপ্তাহিক ডিজিটাল মার্কেটিং ট্রিপস ও কোর্স ডিসকাউন্ট পেতে সাবস্ক্রাইব করুন
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            প্রতি সপ্তাহে গুগল অ্যাডস টিপস, লোকাল এসইও অ্যালগরিদম আপডেট এবং এক্সক্লুসিভ স্কলারশিপ অফার সরাসরি আপনার ইনবক্সে পৌঁছে যাবে। কোনো স্প্যাম নয়!
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {isSubscribed ? (
            <div className="p-4 bg-emerald-950/80 border border-emerald-600/80 rounded-2xl text-emerald-200 text-xs sm:text-sm flex items-center justify-center gap-2 animate-bounce">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>ধন্যবাদ! আপনার ইমেইল সফলভাবে নিবন্ধিত হয়েছে।</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2.5">
              <div className="relative w-full">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="আপনার সঠিক ইমেইল ঠিকানা লিখুন..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/90 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <span>সাবস্ক্রাইব</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
