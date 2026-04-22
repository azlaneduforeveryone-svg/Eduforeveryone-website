import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl mb-6">📚</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-500 mb-8 max-w-md">
        The page you're looking for doesn't exist. Let's get you back to learning!
      </p>
      <Link href="/" className="bg-teal-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-teal-700 transition-colors">
        Back to Home
      </Link>
    </div>
  );
}
