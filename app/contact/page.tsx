import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Contact Us | EduForEveryone",
  description: "Get in touch with EduForEveryone. We'd love to hear from you — whether you have a question, suggestion, or just want to say hello.",
  alternates: { canonical: "https://eduforeveryone.com/contact" },
};

export default function ContactPage() {
  return (
    <div className="efe-page">
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Have a question, suggestion, or feedback? We'd love to hear from you. We read every message and will get back to you as soon as possible."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <Card className="p-6 text-center">
            <span className="w-14 h-14 rounded-2xl bg-efe-accent-soft text-efe-accent-ink inline-flex items-center justify-center text-3xl mx-auto">
              ✉️
            </span>
            <h2 className="text-lg font-bold text-efe-fg mt-4 mb-2">Email Us</h2>
            <p className="text-efe-muted text-sm mb-5">
              Send us an email and we&apos;ll respond within 1-2 business days.
            </p>
            <a
              href="mailto:azlaneduforeveryone@gmail.com"
              className="efe-btn efe-btn-primary text-sm"
            >
              azlaneduforeveryone@gmail.com
            </a>
          </Card>

          {/* Response Time */}
          <Card className="p-6 text-center">
            <span className="w-14 h-14 rounded-2xl bg-efe-accent-soft text-efe-accent-ink inline-flex items-center justify-center text-3xl mx-auto">
              ⏱️
            </span>
            <h2 className="text-lg font-bold text-efe-fg mt-4 mb-2">Response Time</h2>
            <p className="text-efe-muted text-sm mb-5">
              We typically respond to all messages within 1-2 business days.
            </p>
            <span className="inline-block bg-efe-accent-soft text-efe-accent-ink border border-efe-line px-5 py-2.5 rounded-[10px] text-sm font-semibold">
              1-2 Business Days
            </span>
          </Card>
        </div>

        {/* What to contact about */}
        <Card className="p-8 mb-12">
          <SectionHeader
            title="What Can You Contact Us About?"
          />
          <div className="space-y-4">
            {[
              { emoji: "💡", title: "Suggestions", description: "Have an idea for a new course, topic, or feature? We'd love to hear it!" },
              { emoji: "🐛", title: "Report an Issue", description: "Found a bug or something not working correctly? Let us know and we'll fix it." },
              { emoji: "📚", title: "Content Requests", description: "Need content on a specific subject or topic? Send us your request." },
              { emoji: "🤝", title: "Collaboration", description: "Want to contribute content or partner with EduForEveryone? Get in touch!" },
              { emoji: "❓", title: "General Questions", description: "Have any other questions? We're always happy to help." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <span className="w-10 h-10 rounded-xl bg-efe-accent-soft text-efe-accent-ink inline-flex items-center justify-center text-xl shrink-0">
                  {item.emoji}
                </span>
                <div>
                  <h3 className="font-semibold text-efe-fg text-sm">{item.title}</h3>
                  <p className="text-efe-muted text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Email CTA */}
        <div className="efe-banner p-8 text-center">
          <h2 className="text-2xl font-bold text-white font-display mb-3">Ready to Reach Out?</h2>
          <p className="text-white/85 mb-6 text-sm">
            Click the button below to send us an email. We read every message!
          </p>
          <a
            href="mailto:azlaneduforeveryone@gmail.com"
            className="efe-btn efe-btn-on-hero"
          >
            Send Us an Email ✉️
          </a>
        </div>
      </div>
    </div>
  );
}
