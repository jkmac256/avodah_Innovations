import React from "react";

export default function TermsConditions() {
  return (
    <section className="min-h-screen px-6 py-12 max-w-6xl mx-auto space-y-12">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Please read these terms carefully before using our website and services.
        </p>
      </div>

      <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
        <div>
          <h3 className="text-2xl font-bold mb-2">1. Acceptance of Terms</h3>
          <p>By using this website, you agree to comply with these terms.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">2. Use of Website</h3>
          <p>You must not misuse the website or its content. Content is for personal, non-commercial use only.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">3. Intellectual Property</h3>
          <p>All content, logos, and trademarks are property of Avodah Innovations.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">4. Liability</h3>
          <p>We are not liable for damages arising from use of the website or reliance on its content.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">5. Accounts (if applicable)</h3>
          <p>You are responsible for maintaining the confidentiality of your login details. Misuse may result in account suspension.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">6. Governing Law</h3>
          <p>These terms are governed by the laws of Uganda.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">7. Changes</h3>
          <p>We may revise these terms at any time. Continued use of the site indicates acceptance of the updated terms.</p>
        </div>
      </div>
    </section>
  );
}
