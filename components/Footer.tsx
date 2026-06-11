import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src="/Main_Logo.jpg" alt="EduForEveryone Logo" className="h-8 w-8 object-contain" />
              <span className="text-white font-bold text-lg">EduForEveryone</span>
            </div>
            <p className="text-sm leading-relaxed">
              Free, high-quality education for every student. No fees. No barriers.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">IELTS</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ielts/reading" className="hover:text-teal-400 transition-colors">Reading</Link></li>
              <li><Link href="/ielts/writing" className="hover:text-teal-400 transition-colors">Writing</Link></li>
              <li><Link href="/ielts/listening" className="hover:text-teal-400 transition-colors">Listening</Link></li>
              <li><Link href="/ielts/speaking" className="hover:text-teal-400 transition-colors">Speaking</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Islamic Studies</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/quran" className="hover:text-teal-400 transition-colors">Quran</Link></li>
              <li><Link href="/quran/tajweed" className="hover:text-teal-400 transition-colors">Tajweed Quran</Link></li>
              <li><Link href="/quran/pdf/15line" className="hover:text-teal-400 transition-colors">15-Line PDF</Link></li>
              <li><Link href="/quiz/islamic-quiz" className="hover:text-teal-400 transition-colors">Islamic Quiz</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses" className="hover:text-teal-400 transition-colors">Courses</Link></li>
              <li><Link href="/notes" className="hover:text-teal-400 transition-colors">Notes</Link></li>
              <li><Link href="/quiz" className="hover:text-teal-400 transition-colors">Quizzes</Link></li>
              <li><Link href="/tools" className="hover:text-teal-400 transition-colors">Tools</Link></li>
              <li><Link href="/games" className="hover:text-teal-400 transition-colors">Games</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-teal-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} EduForEveryone. Free for personal and educational use.</p>
        </div>
      </div>
    </footer>
  );
}