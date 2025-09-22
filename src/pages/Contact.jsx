import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    setLoading(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: form.name,
          from_email: form.email, // ✅ this will appear in your inbox
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setSubmitted(true);
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("❌ EmailJS error:", error);
          alert("Failed to send message. Try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen px-6 py-12 max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">Contact & Get Involved</h3>
      <p className="text-gray-700 mb-6">
        Interested in partnership, media, training or investment? Reach out to us.
      </p>

      {submitted && (
        <p className="mb-4 text-green-700 font-semibold">
          ✅ Thank you! Your message has been sent.
        </p>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Office Info */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h4 className="font-semibold text-lg">Head Office</h4>
          <p className="text-sm text-gray-700">Avodah Innovations Ltd</p>
          <p className="text-sm text-gray-700">P.O Box 651, Mbarara, Uganda</p>
          <p className="mt-2 text-sm">📧 Email: avodahug@gmail.com</p>
          <p className="text-sm">📞 Tel: +256 785 189634</p>
        </div>

        {/* Contact Form */}
        <form
          className="p-6 bg-white rounded-lg shadow-md flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <label className="block text-sm font-medium">Name</label>
          <input
            className="mt-1 p-2 border rounded w-full"
            placeholder="Your name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <label className="block text-sm font-medium">Email</label>
          <input
            className="mt-1 p-2 border rounded w-full"
            placeholder="you@example.com"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />

          <label className="block text-sm font-medium">Message</label>
          <textarea
            className="mt-1 p-2 border rounded w-full"
            rows={4}
            placeholder="How would you like to collaborate?"
            name="message"
            value={form.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition-colors"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
