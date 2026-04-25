import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📚</span>
              <span className="text-white font-bold text-lg">EduForEveryone</span>
            </div>
            <p className="text-sm leading-relaxed">
              Free, high-quality education for every student. No fees. No barriers.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses" className="hover:text-teal-400 transition-colors">Courses</Link></li>
              <li><Link href="/notes" className="hover:text-teal-400 transition-colors">Study Notes</Link></li>
              <li><Link href="/quiz" className="hover:text-teal-400 transition-colors">Quizzes</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Subjects</h3>
            <ul className="space-y-2 text-sm">
              <li>Mathematics</li>
              <li>Science</li>
              <li>English</li>
              <li>History</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} EduForEveryone. All rights reserved. Unauthorized use, copying or distribution is strictly prohibited.</p>
        </div>
      </div>
    </footer>
  );
}
