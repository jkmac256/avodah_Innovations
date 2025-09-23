import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen px-6 py-12 max-w-6xl mx-auto space-y-12">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Learn how we handle your personal information and protect your privacy.
        </p>
      </div>

      <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
        <div>
          <h3 className="text-2xl font-bold mb-2">1. Introduction</h3>
          <p>We respect your privacy. This policy explains what personal data we collect, how we use it, and your rights regarding your data.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">2. Data We Collect</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name, email, and contact info</li>
            <li>Usage data (pages visited, interactions)</li>
            <li>Cookies and analytics data</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">3. How We Use Data</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide services, respond to inquiries</li>
            <li>Improve website and user experience</li>
            <li>Marketing and newsletters (with consent)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">4. Sharing Data</h3>
          <p>We do not sell your personal data. We may share data with trusted service providers to deliver services.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">5. Your Rights</h3>
          <p>Access, correct, or delete your personal data. Withdraw consent for marketing communications at any time.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">6. Security</h3>
          <p>We implement industry-standard security measures to protect your data.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">7. Updates</h3>
          <p>This policy may be updated. The latest version will always be available on this page.</p>
        </div>
      </div>
    </section>
  );
}
