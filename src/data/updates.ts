export interface AcademyUpdateItem {
  id: string;
  categoryBn: string;
  categoryEn: string;
  titleBn: string;
  titleEn: string;
  dateBn: string;
  dateEn: string;
  authorBn: string;
  authorEn: string;
  summaryBn: string;
  summaryEn: string;
  contentBn: string;
  contentEn: string;
  badgeColor: string;
}

export const ACADEMY_UPDATES: AcademyUpdateItem[] = [
  {
    id: 'update-1',
    categoryBn: 'সাকসেস স্টোরি',
    categoryEn: 'Success Story',
    titleBn: 'আপওয়ার্কে গুগল অ্যাডস ক্যাম্পেইনে নতুন মাইলফলক অর্জন করলেন আমাদের শিক্ষার্থী তানভীর',
    titleEn: 'Student Tanveer Achieves Major Milestone in Upwork Google Ads',
    dateBn: '২ অক্টোবর, ২০২৬',
    dateEn: 'October 2, 2026',
    authorBn: 'মি: রাসেল চৌধুরী (সিইও)',
    authorEn: 'Mr. Russell Chowdhury (CEO)',
    summaryBn: 'স্কিল হাউসের গ্র্যাজুয়েট তানভীর হাসান সফলভাবে প্রথম মাসে ইউএস ক্লায়েন্টের $১,২০০ মূল্যের Google Ads ক্যাম্পেইন প্রজেক্ট কমপ্লিট করেছেন।',
    summaryEn: 'Skill House graduate Tanveer Hasan successfully completed his first $1,200 US client Google Ads campaign project in month one.',
    contentBn: 'স্কিল হাউসের প্রফেশনাল গুগল অ্যাডস ও ট্র্যাকিং ট্রেনিং সম্পন্ন করার পর তানভীর হাসান আপওয়ার্কে তার প্রথম বড় ইন্টারন্যাশনাল ক্লায়েন্টের প্রজেক্ট সফলভাবে ডেলিভারি দিয়েছেন। সিইও মি: রাসেল চৌধুরীর সরাসরি মেন্টরিং ও লাইভ প্রজেক্ট প্র্যাকটিসের ফলে এই সফলতা অর্জন সম্ভব হয়েছে বলে তিনি জানান।',
    contentEn: 'After completing the Professional Google Ads and Tracking training at Skill House, Tanveer Hasan successfully delivered his first major international client project on Upwork.',
    badgeColor: 'emerald'
  },
  {
    id: 'update-2',
    categoryBn: 'ইন্ডাস্ট্রি নিউজ',
    categoryEn: 'Industry News',
    titleBn: 'গুগল ম্যাপস ও লোকাল এসইও আপডেট ২০২৬: কিভাবে লোকাল বিজনেসে প্রথম ৩-প্যাকে র‍্যাংক করবেন',
    titleEn: 'Google Maps & Local SEO Updates 2026: Ranking in 3-Pack',
    dateBn: '১ অক্টোবর, ২০২৬',
    dateEn: 'October 1, 2026',
    authorBn: 'Mr. A H Rupom (কো-অ্যাডমিন ও মেন্টর)',
    authorEn: 'Mr. A H Rupom (Co-Admin)',
    summaryBn: 'গুগল বিজনেস প্রফাইল এবং লোকাল ম্যাপস অ্যালগরিদমে নতুন এআই সিগন্যাল যুক্ত হয়েছে। জানুন কিভাবে কো-অ্যাডমিন Mr. A H Rupom-এর নির্দেশনায় দ্রুত র‍্যাংক করবেন।',
    summaryEn: 'New AI signals added to Google Business Profile and local maps algorithm. Learn how to rank fast under Mr. A H Rupom guidance.',
    contentBn: 'কো-অ্যাডমিন ও মেন্টর Mr. A H Rupom তার সাম্প্রতিক লোকাল এসইও ও সাইবার সিকিউরিটি রিসার্চে দেখিয়েছেন কিভাবে জিও-ট্যাগিং এবং নেটিভ সাইটেশন ব্যবহার করে গুগল ম্যাপসের ৩-প্যাকে শীর্ষে অবস্থান ধরে রাখা যায়।',
    contentEn: 'Co-admin and mentor Mr. A H Rupom demonstrated advanced geo-tagging and native citation techniques in his recent research.',
    badgeColor: 'blue'
  },
  {
    id: 'update-3',
    categoryBn: 'ফ্রি ওয়ার্কশপ',
    categoryEn: 'Free Workshop',
    titleBn: 'ফ্রি লাইভ মাস্টারক্লাস: এআই, সাইবার সিকিউরিটি ও ফ্রিল্যান্সিং ক্যারিয়ার গাইডলাইন',
    titleEn: 'Free Live Masterclass: AI, Cybersecurity & Freelancing Career Guide',
    dateBn: '৫ অক্টোবর, ২০২৬',
    dateEn: 'October 5, 2026',
    authorBn: 'মি: রাসেল চৌধুরী ও Mr. A H Rupom',
    authorEn: 'Mr. Russell Chowdhury & Mr. A H Rupom',
    summaryBn: 'আগামী শুক্রবার রাত ৮:০০ টায় স্কিল হাউস অফিসিয়াল ফেসবুক পেজ ও জুম লাইভে অনুষ্ঠিত হবে ফ্রি মাস্টারক্লাস। এখনই রেজিস্ট্রেশন করুন।',
    summaryEn: 'Upcoming free masterclass this Friday at 8:00 PM on official Facebook page and Zoom live. Register now.',
    contentBn: 'এআই এবং সাইবার সিকিউরিটির যুগে ডিজিটাল মার্কেটিং ও ফ্রিল্যান্সিংয়ে কীভাবে সুরক্ষিত থেকে লাখ টাকা আয় করবেন, সে বিষয়ে বিশেষ ফ্রি লাইভ ওয়ার্কশপ পরিচালনা করবেন সিইও মি: রাসেল চৌধুরী এবং কো-অ্যাডমিন Mr. A H Rupom।',
    contentEn: 'CEO Mr. Russell Chowdhury and Co-Admin Mr. A H Rupom will host a special free live workshop on cybersecurity and freelancing success.',
    badgeColor: 'amber'
  }
];
