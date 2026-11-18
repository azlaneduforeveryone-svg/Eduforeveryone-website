import type { Metadata } from "next";
import JsonLd, { faqLd } from "@/components/JsonLd";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SURAH_META } from "@/lib/quranSurahMeta";
import { PASSAGES } from "@/lib/ielts/readingData";
import { QUANT_BANK } from "@/lib/gmat/quant";
import { VERBAL_BANK } from "@/lib/gmat/verbal";
import { DATA_INSIGHTS_BANK } from "@/lib/gmat/data-insights";

export const metadata: Metadata = {
  title: "About EduForEveryone: Free Education, No Barriers",
  description: "Why EduForEveryone exists: the Quran with 40+ translations, free Cambridge O Level and IGCSE courses, IELTS and GMAT practice, games and tools. Built so no student is held back by cost.",
  alternates: { canonical: "https://eduforeveryone.com/about" },
};

const faqs = [
  { q: "Is EduForEveryone really free?", a: "Yes. There are no subscriptions, hidden fees or paywalls. Every course, practice test, quiz, calculator and game is free to use. The site is supported by non-intrusive ads, and the Quran and Islamic Studies pages have no ads." },
  { q: "Do I need to create an account?", a: "No. You can use everything without an account. Without one, your progress is saved on your own device. If you sign in, your course progress is saved to your account so you can carry on from another phone or computer." },
  { q: "Are the Cambridge O Level and IGCSE courses free?", a: "Yes. O Level Accounting (7707), O Level Biology (5090) and one Mathematics course for O Level 4024 and IGCSE 0580 (Core and Extended) are all free, with plain-English notes, diagrams, mind maps, flashcards and practice questions. The Maths course is being added section by section. EduForEveryone is not affiliated with Cambridge University Press & Assessment." },
  { q: "Can I read the Quran with Urdu translation?", a: "Yes. The Quran reader has 40+ translations including English, Urdu and Hindi, with audio recitation and a colour-coded Tajweed mode. You can also read the 13-line and 15-line Mushaf as PDFs." },
  { q: "Is the IELTS practice really free?", a: "Yes. All Reading, Writing, Listening and Speaking practice and the full mock test are free with no sign-up. AI writing feedback is also free." },
  { q: "Is the GMAT practice really free?", a: "Yes. Every GMAT Focus Edition section (Quantitative Reasoning, Verbal Reasoning and Data Insights) and the full timed mock test is free with no sign-up. Scores shown are estimates, not official GMAT scores." },
  { q: "Who is EduForEveryone for?", a: "Anyone who wants to learn: O Level and IGCSE students, IELTS and GMAT candidates, people reading the Quran, and anyone who enjoys quizzes, games and useful tools." },
  { q: "What games are available?", a: "Three free games: Math Puzzle (arithmetic, algebra and sequences against the clock), Word Puzzle (guess hidden education words) and Quiz Battle (questions across all subjects with lives and power-ups). There is also a trilingual Islamic Quiz." },
  { q: "What tools can I use?", a: "A scientific calculator, a simple calculator, a financial calculator (TVM, NPV, IRR and bond pricing), a number to words converter, and bank, supplier, customer and intercompany reconciliation tools. All free." },
  { q: "Will more content be added?", a: "Yes. The rest of the Mathematics course and its practice questions are being added now, and more practice tests, quizzes and tools will follow." },
];

export default function AboutPage() {
  const surahCount = SURAH_META.length;
  const passageCount = PASSAGES.length;
  const rawGmatCount = QUANT_BANK.items.length + VERBAL_BANK.items.length + DATA_INSIGHTS_BANK.items.length;
  const gmatDisplay = `${Math.floor(rawGmatCount / 100) * 100}+`;
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
            supported by non-intrusive advertising so that students, especially those in
            developing countries learning on a mobile phone, can access high-quality
            learning without ever paying a fee.
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
              providing free, openly accessible learning resources: Cambridge O Level and IGCSE
              courses, IELTS and GMAT practice, the Holy Quran with translations, quizzes, games
              and academic tools, with no sign-up required.
            </p>
            <p>
              This is not a test-preparation company or an accredited educational institution, and
              it does not claim to be. It is a practical resource designed to give students a place
              to study, assess their current level, and improve, regardless of their ability to pay.
              EduForEveryone is not affiliated with Cambridge University Press &amp; Assessment, the
              IELTS partners or GMAC. Practice scores are estimates, not official results.
            </p>
            <p>
              The project is run by a Kashmiri Pakistani national working in Saudi Arabia, built in
              personal time out of a belief that access to education should not depend on what a
              student can afford. Its purpose is straightforward: to make meaningful educational
              practice available to anyone who needs it.
            </p>
          </div>
        </Card>

        {/* What's on the site */}
        <div className="mb-12">
          <SectionHeader
            title="What's on EduForEveryone"
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { emoji: "📖", title: "Islamic Studies", description: "Read the Quran with 40+ translations, audio recitation, colour-coded Tajweed and 13-line and 15-line Mushaf PDFs. Also Quran word meanings, duas and tasbeeh, and an Islamic quiz. All ad-free.", href: "/islamic-studies" },
              { emoji: "🧮", title: "Cambridge Courses", description: "O Level Accounting (7707), O Level Biology (5090), and one Mathematics course for O Level 4024 and IGCSE 0580. Plain-English notes, diagrams, mind maps, flashcards and exam-style questions.", href: "/courses" },
              { emoji: "📚", title: "IELTS Preparation", description: "Practice for Reading, Writing, Listening and Speaking, a full mock test, instant scoring, AI writing feedback, and Word and Phrase Upgrade to improve your vocabulary.", href: "/ielts" },
              { emoji: "📈", title: "GMAT Focus Edition", description: "Practice for Quantitative Reasoning, Verbal Reasoning and Data Insights, plus a full timed mock test with estimated scores.", href: "/gmat" },
              { emoji: "🎮", title: "Games", description: "Learning games: Math Puzzle, Word Puzzle and Quiz Battle.", href: "/games" },
              { emoji: "🛠️", title: "Tools", description: "Scientific, simple and financial calculators, a number to words converter, and free reconciliation tools for accountants.", href: "/tools" },
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
            { emoji: "📖", value: String(surahCount), label: "Quran Surahs" },
            { emoji: "🧮", value: "3", label: "Cambridge Courses" },
            { emoji: "📚", value: String(passageCount), label: "IELTS Reading Passages" },
            { emoji: "📈", value: gmatDisplay, label: "GMAT Questions" },
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
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { emoji: "🧮", text: "The rest of the Mathematics course, from coordinate geometry to statistics, with practice questions" },
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
