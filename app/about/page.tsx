import type { Metadata } from "next";
import JsonLd, { faqLd } from "@/components/JsonLd";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About EduForEveryone — Free Education, No Barriers",
  description: "Why EduForEveryone exists: free IELTS practice, the Quran with 40+ translations, and free courses, tools and quizzes — built so no student is held back by cost.",
  alternates: { canonical: "https://eduforeveryone.com/about" },
};

const faqs = [
  { q: "Is the IELTS practice really free?", a: "Yes. All Reading, Writing, Listening and Speaking practice is free with no sign-up. AI writing feedback is also free." },
  { q: "Can I read the Quran with Urdu translation?", a: "Yes — the Quran reader includes 40+ translations including English, Urdu and Hindi, with audio recitation and a color-coded Tajweed mode." },
  { q: "Is the GMAT practice really free?", a: "Yes. Every GMAT Focus Edition section — Quantitative Reasoning, Verbal Reasoning and Data Insights — plus the full timed mock test is free with no sign-up. Scores shown are estimates, not official GMAT scores." },
  { q: "Is EduForEveryone really free?", a: "Yes — 100% free forever. No subscriptions, no hidden fees, no sign-up required. Every practice test, quiz, calculator and game on this website is completely free." },
  { q: "Who is EduForEveryone for?", a: "Everyone — from students preparing for IELTS or the GMAT to anyone reading the Quran or brushing up with our quizzes and tools. Our content is designed to be accessible at every level of learning." },
  { q: "What can I study here?", a: "Our main areas are IELTS preparation, GMAT Focus Edition practice, and a full Quran reader with translations and Tajweed. We also offer free calculators, quizzes and learning games." },
  { q: "What games are available?", a: "We have three free games — Math Puzzle (arithmetic and algebra challenges), WordWise (guess hidden education words), and Quiz Battle (answer questions across all subjects with lives and powerups). All completely free!" },
  { q: "Can I use the calculators for free?", a: "Yes! Our scientific calculator, financial calculator (TVM, NPV, IRR, Bond Pricing), simple calculator and number to words converter are all completely free to use." },
  { q: "Do I need to create an account?", a: "No account needed. Just visit the website and start learning immediately." },
  { q: "Will more content be added?", a: "Yes! We are constantly adding new practice tests, quizzes, tools and games. More languages and subjects are coming soon." },
];

export default function AboutPage() {
  return (
    <div className="efe-page">
      <PageHeader
        eyebrow="Our Story"
        title={<>Free Education, <span>No Barriers</span></>}
        description="We believe quality education is a right, not a privilege. EduForEveryone was built so that no student is ever held back by the price of knowledge."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Mission / Why it's free */}
        <div className="bg-efe-accent-soft border border-efe-line rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🎯</span>
            <h2 className="text-2xl font-bold text-efe-fg font-display">Why It&apos;s Free</h2>
          </div>
          <p className="text-efe-muted text-base leading-relaxed">
            Everything on EduForEveryone is <strong>completely free</strong>, with no sign-up
            required to practise. There are no subscriptions and no paywalls. The site is
            supported by non-intrusive advertising so that students — especially those in
            developing countries learning on a mobile phone — can access high-quality
            preparation without ever paying a fee.
          </p>
        </div>

        {/* About / founder bio */}
        <Card className="p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">👤</span>
            <h2 className="text-2xl font-bold text-efe-fg font-display">About EduForEveryone</h2>
          </div>
          <div className="space-y-4 text-efe-muted text-base leading-relaxed">
            <p>
              EduForEveryone was founded and built by <strong className="text-efe-fg">Azlan Mahmood</strong>, a member of
              the Association of Chartered Certified Accountants (ACCA). It is an independent
              project, developed and maintained by one person rather than a company or institution.
            </p>
            <p>
              The platform exists to address a single problem: access. Quality courses, study
              materials, and practice platforms are often priced beyond the reach of the students
              who would benefit from them most. EduForEveryone aims to remove that barrier by
              providing free, openly accessible learning resources — including standardised-test
              practice, the Holy Quran with translations, study notes, quizzes, and academic tools
              — with no sign-up required.
            </p>
            <p>
              This is not a test-preparation company or an accredited educational institution, and
              it does not claim to be. It is a practical resource designed to give students a place
              to study, assess their current level, and improve — regardless of their ability to pay.
            </p>
            <p>
              The project is run by a Kashmiri–Pakistani national working in Saudi Arabia, built in
              personal time out of a belief that access to education should not depend on what a
              student can afford. Its purpose is straightforward: to make meaningful educational
              practice available to anyone who needs it.
            </p>
          </div>
        </Card>

        {/* What's on the site */}
        <div className="mb-12">
          <SectionHeader
            eyebrow="Platform Overview"
            title="What's on EduForEveryone"
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { emoji: "📚", title: "IELTS Preparation", description: "Free practice for all four skills — Reading, Writing, Listening and Speaking — with instant scoring and AI writing feedback.", href: "/ielts" },
              { emoji: "📖", title: "The Holy Quran", description: "Read the Quran with 40+ translations, audio recitation, colour-coded Tajweed and downloadable PDFs — ad-free.", href: "/quran" },
              { emoji: "🧮", title: "Courses & Tools", description: "A 20-topic Mathematics curriculum plus Science, English and History, with free calculators and study notes.", href: "/courses" },
              { emoji: "🎮", title: "Quizzes & Games", description: "Trilingual Islamic Quiz, subject quizzes, and learning games like Math Puzzle, WordWise and Quiz Battle.", href: "/games" },
            ].map((item) => (
              <Card key={item.title} href={item.href} className="p-6">
                <span className="w-12 h-12 rounded-[14px] bg-efe-accent-soft text-efe-accent-ink inline-flex items-center justify-center text-2xl group-hover:bg-efe-accent group-hover:text-white transition-colors">
                  {item.emoji}
                </span>
                <h3 className="text-lg font-bold text-efe-fg mt-4 mb-2 group-hover:text-efe-accent transition-colors">{item.title}</h3>
                <p className="text-efe-muted text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Verifiable stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { emoji: "🎧", value: "4", label: "IELTS Skills Covered" },
            { emoji: "📖", value: "114", label: "Quran Surahs" },
            { emoji: "🧮", value: "20", label: "Maths Topics" },
            { emoji: "🆓", value: "100%", label: "Free — No Sign-up" },
          ].map((stat) => (
            <Card key={stat.label} className="p-5 text-center">
              <span className="text-3xl">{stat.emoji}</span>
              <p className="text-2xl font-bold text-efe-accent-ink mt-2">{stat.value}</p>
              <p className="text-efe-muted text-sm mt-1">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* What's coming */}
        <div className="efe-banner p-8 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🚀</span>
            <h2 className="text-2xl font-bold text-white font-display">What&apos;s Coming Next</h2>
          </div>
          <p className="text-white/85 text-base leading-relaxed mb-6">
            We are just getting started. The goal is to keep expanding free, high-quality
            preparation for every learner, in more languages, at every stage of life.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { emoji: "🌐", text: "More languages to reach every corner of the world" },
              { emoji: "✍️", text: "More IELTS practice tests and writing prompt pages" },
              { emoji: "📱", text: "A mobile app so learning happens anywhere, anytime" },
            ].map((item) => (
              <div key={item.text} className="bg-white/10 border border-white/20 rounded-xl p-4">
                <span className="text-2xl">{item.emoji}</span>
                <p className="text-white/90 text-sm mt-2 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-center bg-efe-accent-soft border border-efe-line rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-efe-fg font-display mb-3">Contact</h2>
          <p className="text-efe-muted mb-6 max-w-2xl mx-auto leading-relaxed">
            For enquiries, feedback, or to discuss placing educational resources on the platform,
            email{" "}
            <a href="mailto:azlaneduforeveryone@gmail.com" className="text-efe-accent-ink font-semibold hover:underline">
              azlaneduforeveryone@gmail.com
            </a>{" "}
            or visit our{" "}
            <a href="https://www.facebook.com/profile.php?id=61577745517090" target="_blank" rel="noopener noreferrer" className="text-efe-accent-ink font-semibold hover:underline">
              Facebook page
            </a>.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button href="/ielts" variant="primary">
              Start IELTS Practice
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
          <p className="mt-6 text-sm text-efe-muted italic">
            EduForEveryone is committed to keeping all Quran and Islamic Studies content completely free and ad-free, always.
          </p>
        </div>

        {/* Frequently Asked Questions */}
        <section className="mt-16">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
          />
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <Card key={i} className="p-6">
                <h3 className="font-semibold text-efe-fg text-base">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-efe-muted">{f.a}</p>
              </Card>
            ))}
          </div>
        </section>

        <JsonLd data={faqLd(faqs)} />
      </div>
    </div>
  );
}
