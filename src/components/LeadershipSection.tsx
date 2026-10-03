import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface LeadershipSectionProps {
  lang: 'bn' | 'en';
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ lang }) => {
  const leaders = [
    {
      name: 'মি: রাসেল চৌধুরী',
      title: 'প্রতিষ্ঠাতা ও সিইও (Founder & CEO)',
      credentials: 'Upwork & Google Ads (AdSense) No.1 Top Class Review of Bangladesh',
      image: '/src/assets/images/mr_rasell_choudhury_official_1790996328737.jpg',
      bio: 'গুগল অ্যাডস ও আপওয়ার্কে বাংলাদেশের শীর্ষস্থানীয় এক্সপার্ট। শিক্ষার্থীদের সফল ফ্রিল্যান্সার ও রিমোট জব প্রফেশনাল হিসেবে গড়ে তুলতে দীর্ঘ অভিজ্ঞতা নিয়ে নেতৃত্ব দিচ্ছেন।',
      expertise: ['Google Ads', 'Google AdSense', 'Upwork Mastery', 'Performance Max', 'Client Acquisition']
    },
    {
      name: 'Mr. A H Rupom',
      title: 'কো-অ্যাডমিন ও মেন্টর (Co-Admin & Mentor)',
      credentials: 'AI, Cybersecurity, Google Maps, Local Keyword Research & SEO Expert',
      image: '/src/assets/images/mr_ah_rupom_1790996100220.jpg',
      bio: 'কৃত্রিম বুদ্ধিমত্তা (AI), সাইবার সিকিউরিটি অ্যানালাইসিস এবং লোকাল এসইও-র অত্যন্ত দক্ষ মেন্টর। গুগল ম্যাপস অপ্টিমাইজেশন ও নিখুঁত কিওয়ার্ড রিসার্চে স্পেশালিস্ট।',
      expertise: [
        'Artificial Intelligent & Cybersecurity analysis',
        'Google Maps Optimization',
        'Local Keyword Research',
        'Professional SEO'
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-950/40 via-slate-900 to-slate-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>একাডেমি লিডারশিপ ও মেন্টরিং প্যানেল</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-serif">
            স্কিল হাউসের শীর্ষ নেতৃত্ব ও দক্ষ মেন্টরবৃন্দ
          </h2>
          <p className="mt-3 text-base text-slate-300">
            যাঁদের নিরলস দিকনির্দেশনা ও রিয়েল-ওয়ার্ল্ড অভিজ্ঞতায় স্কিল হাউসের শিক্ষার্থীরা আন্তর্জাতিক মার্কেটপ্লেসে শীর্ষে অবস্থান করছে।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:border-emerald-500/50 transition-all group"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-emerald-400/80 shrink-0 shadow-lg relative">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-900" />
              </div>

              <div className="flex-1 text-center sm:text-left space-y-3">
                <div>
                  <div className="inline-block text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 mb-1">
                    {leader.title}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                    {leader.name}
                  </h3>
                  <div className="text-xs font-medium text-emerald-400 mt-0.5">
                    {leader.credentials}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {leader.bio}
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5 justify-center sm:justify-start">
                  {leader.expertise.map((exp, eIdx) => (
                    <span
                      key={eIdx}
                      className="px-2.5 py-1 bg-slate-800 text-slate-200 text-[11px] rounded-lg border border-slate-700 font-medium flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{exp}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
