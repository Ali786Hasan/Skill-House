import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoursesSection } from './components/CoursesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AdmissionSteps } from './components/AdmissionSteps';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';
import { CourseModal } from './components/CourseModal';
import { StudentPortalModal } from './components/StudentPortalModal';
import { AdminPanelModal } from './components/AdminPanelModal';
import { Course, CourseDuration, StudentEnrollment } from './types';
import { MessageSquare, Phone, Sparkles } from 'lucide-react';
import { ACADEMY_INFO } from './data/courses';
import confetti from 'canvas-confetti';

export default function App() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');

  // Modal states
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [targetCourseId, setTargetCourseId] = useState<string | undefined>(undefined);
  const [targetDuration, setTargetDuration] = useState<CourseDuration | undefined>(undefined);

  const [selectedCourseForDetails, setSelectedCourseForDetails] = useState<Course | null>(null);
  const [portalOpen, setPortalOpen] = useState(false);
  const [adminPanelOpen, setAdminPanelOpen] = useState(false);

  // Quick toast on successful admission
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenEnrollment = (courseId?: string, duration?: CourseDuration) => {
    setTargetCourseId(courseId);
    setTargetDuration(duration);
    setEnrollmentOpen(true);
  };

  const handleToggleLang = () => {
    setLang(prev => (prev === 'bn' ? 'en' : 'bn'));
  };

  const handleEnrollmentComplete = (enrollment: StudentEnrollment) => {
    setToastMessage(`ভর্তি সফল! আপনার স্টুডেন্ট আইডি: ${enrollment.studentId}`);
    try {
      confetti({
        particleCount: 160,
        spread: 90,
        origin: { y: 0.4 },
        colors: ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#ec4899']
      });
    } catch (e) {
      console.error(e);
    }
    setTimeout(() => setToastMessage(null), 6500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Banner Notice */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 text-center border-b border-slate-800 no-print">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden sm:inline text-slate-400">
            {lang === 'bn' ? 'অক্টোবর ২০২৬ নতুন ব্যাচ ভর্তি চলছে' : 'October 2026 Batch Admissions Open'}
          </span>
          <span className="mx-auto sm:mx-0 font-medium text-emerald-400">
            {lang === 'bn' ? 'সীমিত আসনে দ্রুত ভর্তি চলছে — সরাসরি লাইভ প্রজেক্ট সাপোর্ট' : 'Limited Seats Available — Hands-on Live Project Training'}
          </span>
          <a
            href={`tel:${ACADEMY_INFO.phone}`}
            className="hidden md:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-emerald-400" />
            <span>হেল্পলাইন: {ACADEMY_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <Navbar
        onOpenEnrollment={() => handleOpenEnrollment()}
        onOpenPortal={() => setPortalOpen(true)}
        onOpenAdmin={() => setAdminPanelOpen(true)}
        lang={lang}
        onToggleLang={handleToggleLang}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero
          onOpenEnrollment={() => handleOpenEnrollment()}
          lang={lang}
        />

        <CoursesSection
          onOpenEnrollment={(cId, dur) => handleOpenEnrollment(cId, dur)}
          onSelectCourseDetails={course => setSelectedCourseForDetails(course)}
          lang={lang}
        />

        <WhyChooseUs lang={lang} />

        <AdmissionSteps
          onStartAdmission={() => handleOpenEnrollment()}
          lang={lang}
        />

        <FaqSection lang={lang} />

        <ContactSection
          onOpenEnrollment={() => handleOpenEnrollment()}
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenEnrollment={() => handleOpenEnrollment()}
        onOpenPortal={() => setPortalOpen(true)}
        onOpenAdmin={() => setAdminPanelOpen(true)}
        lang={lang}
      />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 no-print flex flex-col gap-2.5 items-end">
        <a
          href={ACADEMY_INFO.whatsappGroupLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          title="Support Skill Group (WhatsApp)"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span className="text-xs font-semibold hidden group-hover:inline transition-all whitespace-nowrap">
            Support Group
          </span>
        </a>
      </div>

      {/* Global Success Notification Toast */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950 text-white px-5 py-3.5 rounded-2xl shadow-2xl border-2 border-emerald-500/60 text-xs sm:text-sm font-medium flex items-center gap-3 animate-bounce">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/40">
            <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">অভিনন্দন! (Congratulations)</div>
            <div className="text-white font-medium">{toastMessage}</div>
          </div>
        </div>
      )}

      {/* 4-Step Interactive Admission Modal */}
      <EnrollmentModal
        isOpen={enrollmentOpen}
        onClose={() => setEnrollmentOpen(false)}
        initialCourseId={targetCourseId}
        initialDuration={targetDuration}
        onEnrollmentComplete={handleEnrollmentComplete}
        lang={lang}
      />

      {/* Detailed Syllabus Modal */}
      <CourseModal
        course={selectedCourseForDetails}
        onClose={() => setSelectedCourseForDetails(null)}
        onEnroll={(cId, dur) => {
          setSelectedCourseForDetails(null);
          handleOpenEnrollment(cId, dur);
        }}
        lang={lang}
      />

      {/* Student Portal Modal */}
      <StudentPortalModal
        isOpen={portalOpen}
        onClose={() => setPortalOpen(false)}
        onOpenEnrollment={() => {
          setPortalOpen(false);
          handleOpenEnrollment();
        }}
        lang={lang}
      />

      {/* Admin & Sub Admin Control Panel Modal */}
      <AdminPanelModal
        isOpen={adminPanelOpen}
        onClose={() => setAdminPanelOpen(false)}
        lang={lang}
      />
    </div>
  );
}
