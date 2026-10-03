import React, { useState } from 'react';
import { Sparkles, Calendar, User, ArrowRight, X, Bell, Newspaper, Trophy, Video } from 'lucide-react';
import { ACADEMY_UPDATES, AcademyUpdateItem } from '../data/updates';

interface AcademyUpdatesSectionProps {
  lang: 'bn' | 'en';
}

export const AcademyUpdatesSection: React.FC<AcademyUpdatesSectionProps> = ({ lang }) => {
  const [selectedUpdate, setSelectedUpdate] = useState<AcademyUpdateItem | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>একাডেমি আপডেট ও ব্লগ</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">LATEST NEWS & WORKSHOPS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 font-serif">
              সর্বশেষ ইন্ডাস্ট্রি নিউজ, সাকসেস স্টোরি ও ঘোষণা
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              স্কিল হাউসের সাম্প্রতিক অর্জন, স্টুডেন্টদের ফ্রিল্যান্সিং সাফল্য এবং পরবর্তী ফ্রি ওয়ার্কশপের আপডেট জানুন।
            </p>
          </div>

          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2.5 rounded-2xl text-emerald-800 text-xs font-semibold shrink-0">
            <Bell className="w-4 h-4 text-emerald-600 animate-bounce" />
            <span>অক্টোবর ২০২৬ নতুন ব্যাচ আপডেট</span>
          </div>
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACADEMY_UPDATES.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono flex items-center gap-1.5 ${
                    item.categoryBn === 'সাকসেস স্টোরি' ? 'bg-emerald-100 text-emerald-800' :
                    item.categoryBn === 'ফ্রি ওয়ার্কশপ' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {item.categoryBn === 'সাকসেস স্টোরি' && <Trophy className="w-3.5 h-3.5" />}
                    {item.categoryBn === 'ফ্রি ওয়ার্কশপ' && <Video className="w-3.5 h-3.5" />}
                    {item.categoryBn === 'ইন্ডাস্ট্রি নিউজ' && <Newspaper className="w-3.5 h-3.5" />}
                    <span>{item.categoryBn}</span>
                  </span>

                  <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.dateBn}</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif mb-2.5 group-hover:text-emerald-700 transition-colors line-clamp-2">
                  {item.titleBn}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {item.summaryBn}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <User className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-medium text-slate-700">{item.authorBn}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedUpdate(item)}
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>বিস্তারিত পড়ুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Details */}
        {selectedUpdate && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-mono bg-emerald-100 text-emerald-800 mb-2">
                    {selectedUpdate.categoryBn}
                  </span>
                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    <span>{selectedUpdate.dateBn}</span>
                    <span>·</span>
                    <span>লিখেছেন: {selectedUpdate.authorBn}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedUpdate(null)}
                  className="p-2 text-slate-400 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-serif leading-snug">
                  {selectedUpdate.titleBn}
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed font-medium bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {selectedUpdate.summaryBn}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                  {selectedUpdate.contentBn}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedUpdate(null)}
                  className="px-6 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  বন্ধ করুন
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
