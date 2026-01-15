"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    setLoading(false);
    setSuccess(res.ok);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10 text-sm">
      {/* TOP SELECT */}
      <div>
        <select
          name="topic"
          required
          className="w-full border-b border-white bg-transparent pb-3 text-white outline-none"
        >
          <option value="">I'd like to chat about...</option>
          <option>SEO</option>
          <option>Paid Ads</option>
          <option>Consulting</option>
          <option>Speaking</option>
        </select>
      </div>

      {/* NAME ROW */}
      <div className="grid gap-10 md:grid-cols-2">
        <input
          name="firstName"
          required
          placeholder="First Name"
          className="input"
        />
        <input
          name="lastName"
          required
          placeholder="Last Name"
          className="input"
        />
      </div>

      {/* EMAIL */}
      <input
        name="email"
        type="email"
        required
        placeholder="Email Address"
        className="input"
      />

      {/* MESSAGE */}
      <textarea
        name="message"
        rows={4}
        placeholder="Message (remember, short & sweet please!)"
        className="w-full resize-none rounded bg-white/20 p-4 text-white placeholder-white/70 outline-none"
      />

      {/* LEGAL */}
      <p className="text-xs opacity-80">
        By clicking the button below, you consent for NP Digital and partners to
        contact you via automated technology.
      </p>

      {/* ACTION ROW */}
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
        <div className="rounded bg-white p-3 text-xs text-black">
          ⬜ Verify you are human (Cloudflare)
        </div>

        <button
          disabled={loading}
          className="rounded bg-white px-8 py-3 font-semibold text-[#f2672f] transition hover:opacity-90"
        >
          {loading ? "Submitting..." : "SUBMIT"}
        </button>
      </div>

      {success && (
        <p className="pt-4 text-green-200">
          Thanks! We’ll be in touch shortly.
        </p>
      )}
    </form>
  );
}
