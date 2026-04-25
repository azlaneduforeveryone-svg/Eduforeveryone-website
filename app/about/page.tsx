import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | EduForEveryone",
  description: "Learn about EduForEveryone — our mission to provide free, high-quality education to every student, from elementary to working professionals. No fees. No barriers.",
  alternates: { canonical: "https://eduforeveryone.com/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* Hero */}
      <div className="text-center mb-16">
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Born from the Heart of <br />
          <span className="text-teal-600">Students Who Love to Learn</span>
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
          We believe that quality education is a right, not a privilege. 
          EduForEveryone was built so that no student is ever held back by 
          the price of knowledge.
        </p>
      </div>

      {/* Mission */}
      <div className="bg-teal-50 border border-teal-100 rounded-2xl p-8 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🎯</span>
          <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed">
          To provide <strong>free, high-quality education</strong> to every student — from elementary 
          school children taking their first steps in learning, to working professionals looking 
          to grow their skills and pursue a better life. We remove every barrier between a student 
          and their education. No fees. No subscriptions. No barriers. Ever.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
        {[
          { emoji: "📚", value: "100%", label: "Free Forever" },
          { emoji: "🌍", value: "4+", label: "Subjects" },
          { emoji: "🔧", value: "Growing", label: "Tools & Resources" },
          { emoji: "❤️", value: "∞", label: "Students Supported" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm">
            <span className="text-3xl">{stat.emoji}</span>
            <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
            <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Who We Serve */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Who We Serve</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              emoji: "🧒",
              title: "Elementary Students",
              description: "Building strong foundations in Mathematics, Science, English, and History through simple and engaging content.",
            },
            {
              emoji: "🎓",
              title: "High School & University",
              description: "Helping students master complex topics, prepare for exams, and develop skills that last a lifetime.",
            },
            {
              emoji: "💼",
              title: "Working Professionals",
              description: "Supporting adults who want to upskill, change careers, or simply keep learning and growing every day.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <span className="text-4xl">{item.emoji}</span>
              <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision */}
      <div className="bg-gray-900 text-white rounded-2xl p-8 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🚀</span>
          <h2 className="text-2xl font-bold">Our Vision for the Future</h2>
        </div>
        <p className="text-gray-300 text-base leading-relaxed mb-6">
          We are just getting started. Our vision is to build the most comprehensive 
          free learning platform in the world — one that serves every student, 
          in every language, at every stage of life.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { emoji: "🌐", text: "More languages to reach every corner of the world" },
            { emoji: "🔧", text: "More tools to help students build real-world skills" },
            { emoji: "📱", text: "Mobile app so learning happens anywhere, anytime" },
          ].map((item) => (
            <div key={item.text} className="bg-gray-800 rounded-xl p-4">
              <span className="text-2xl">{item.emoji}</span>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What We Stand For</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { emoji: "🆓", title: "Always Free", description: "Education should never have a price tag. Every resource on EduForEveryone is and will always be completely free." },
            { emoji: "🌍", title: "For Everyone", description: "From a child in elementary school to a working adult — we build for every learner, everywhere." },
            { emoji: "📖", title: "Quality First", description: "We are committed to providing accurate, well-structured, and meaningful educational content." },
            { emoji: "💡", title: "Knowledge is Power", description: "We believe that access to knowledge is the most powerful tool to build a better life and a better world." },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <span className="text-3xl">{item.emoji}</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-teal-50 border border-teal-100 rounded-2xl p-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Join Thousands of Learners</h2>
        <p className="text-gray-500 mb-6">Start learning today — completely free, no sign-up required.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="/courses" className="bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 transition-colors">
            Browse Courses
          </a>
          <a href="/contact" className="bg-white text-teal-600 border border-teal-200 px-6 py-3 rounded-xl font-semibold hover:bg-teal-50 transition-colors">
            Contact Us
          </a>
        </div>
      </div>

    </div>
  );
}
