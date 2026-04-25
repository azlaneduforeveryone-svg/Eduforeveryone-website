import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | EduForEveryone",
  description: "Get in touch with EduForEveryone. We'd love to hear from you — whether you have a question, suggestion, or just want to say hello.",
  alternates: { canonical: "https://eduforeveryone.com/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">Get In Touch</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-500 text-base leading-relaxed">
          Have a question, suggestion, or feedback? We'd love to hear from you. 
          We read every message and will get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        {/* Email */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center">
          <span className="text-5xl">✉️</span>
          <h2 className="text-lg font-bold text-gray-900 mt-4 mb-2">Email Us</h2>
          <p className="text-gray-500 text-sm mb-4">
            Send us an email and we'll respond within 1-2 business days.
          </p>
          <a
            href="mailto:azlaneduforeveryone@gmail.com"
            className="inline-block bg-teal-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-teal-700 transition-colors"
          >
            azlaneduforeveryone@gmail.com
          </a>
        </div>

        {/* Response Time */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center">
          <span className="text-5xl">⏱️</span>
          <h2 className="text-lg font-bold text-gray-900 mt-4 mb-2">Response Time</h2>
          <p className="text-gray-500 text-sm mb-4">
            We typically respond to all messages within 1-2 business days.
          </p>
          <span className="inline-block bg-teal-50 text-teal-700 border border-teal-100 px-5 py-2.5 rounded-xl text-sm font-semibold">
            1-2 Business Days
          </span>
        </div>
      </div>

      {/* What to contact about */}
      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">What Can You Contact Us About?</h2>
        <div className="space-y-4">
          {[
            { emoji: "💡", title: "Suggestions", description: "Have an idea for a new course, topic, or feature? We'd love to hear it!" },
            { emoji: "🐛", title: "Report an Issue", description: "Found a bug or something not working correctly? Let us know and we'll fix it." },
            { emoji: "📚", title: "Content Requests", description: "Need content on a specific subject or topic? Send us your request." },
            { emoji: "🤝", title: "Collaboration", description: "Want to contribute content or partner with EduForEveryone? Get in touch!" },
            { emoji: "❓", title: "General Questions", description: "Have any other questions? We're always happy to help." },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 items-start">
              <span className="text-2xl">{item.emoji}</span>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Email CTA */}
      <div className="bg-teal-600 text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Reach Out?</h2>
        <p className="text-teal-100 mb-6 text-sm">
          Click the button below to send us an email. We read every message!
        </p>
        <a
          href="mailto:azlaneduforeveryone@gmail.com"
          className="inline-block bg-white text-teal-600 px-8 py-3 rounded-xl font-bold hover:bg-teal-50 transition-colors"
        >
          Send Us an Email ✉️
        </a>
      </div>

    </div>
  );
}