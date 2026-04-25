import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | EduForEveryone",
  description: "Privacy Policy for EduForEveryone — learn how we collect, use, and protect your information.",
  alternates: { canonical: "https://eduforeveryone.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "April 25, 2026";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
        <p className="text-gray-500 text-sm">Last updated: {lastUpdated}</p>
      </div>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-600 text-sm leading-relaxed">

        {/* Introduction */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
          <p>
            Welcome to <strong>EduForEveryone</strong> ("we", "our", or "us"). We are committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, and safeguard your information
            when you visit our website at{" "}
            <a href="https://eduforeveryone.com" className="text-teal-600 hover:underline">
              eduforeveryone.com
            </a>
            .
          </p>
          <p className="mt-3">
            By using our website, you agree to the terms of this Privacy Policy. If you do not agree,
            please do not use our website.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Usage Data:</strong> Information about how you use our website, including pages visited,
              time spent, and links clicked.
            </li>
            <li>
              <strong>Device Information:</strong> Browser type, operating system, screen resolution, and
              IP address.
            </li>
            <li>
              <strong>Cookies:</strong> Small data files stored on your device to improve your experience.
              See Section 5 for more details.
            </li>
          </ul>
          <p className="mt-3">
            We do <strong>not</strong> collect your name, email address, or any personal information unless
            you voluntarily contact us.
          </p>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Operate and improve our website and educational content</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Display relevant advertisements through Google AdSense</li>
            <li>Ensure the security and performance of our website</li>
          </ul>
        </section>

        {/* Google AdSense */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Google AdSense & Advertising</h2>
          <p>
            We use <strong>Google AdSense</strong> to display advertisements on our website. Google AdSense
            uses cookies to serve ads based on your prior visits to our website or other websites on the internet.
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Google may use your data to show you personalized ads</li>
            <li>You can opt out of personalized advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Google Ads Settings
              </a>
            </li>
            <li>For more information, visit{" "}
              <a href="https://policies.google.com/technologies/ads" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Google's Advertising Policies
              </a>
            </li>
          </ul>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. Cookies are small text files stored
            on your device. We use the following types of cookies:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
            <li><strong>Advertising Cookies:</strong> Used by Google AdSense to show relevant ads</li>
          </ul>
          <p className="mt-3">
            You can control cookies through your browser settings. Disabling cookies may affect some
            features of our website.
          </p>
        </section>

        {/* Third Party Links */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy
            practices of these websites. We encourage you to review the privacy policies of any third-party
            sites you visit.
          </p>
        </section>

        {/* Children's Privacy */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Children's Privacy</h2>
          <p>
            Our website is designed to be accessible to students of all ages. We do <strong>not</strong> knowingly
            collect personal information from children under the age of 13. If you believe your child has
            provided personal information on our website, please contact us immediately so we can remove it.
          </p>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">8. Data Security</h2>
          <p>
            We take reasonable measures to protect your information from unauthorized access, loss, or misuse.
            However, no internet transmission is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">9. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction or deletion of your personal information</li>
            <li>Opt out of personalized advertising</li>
            <li>Lodge a complaint with your local data protection authority</li>
          </ul>
        </section>

        {/* Changes to Policy */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page
            with an updated date. We encourage you to review this policy periodically.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
            <p><strong>EduForEveryone</strong></p>
            <p>Website: <a href="https://eduforeveryone.com" className="text-teal-600 hover:underline">eduforeveryone.com</a></p>
          </div>
        </section>

      </div>
    </div>
  );
}
