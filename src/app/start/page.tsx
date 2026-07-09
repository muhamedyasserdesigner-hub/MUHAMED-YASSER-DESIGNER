"use client";

import { useState } from "react";
import Link from "next/link";

export default function StartProjectPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [budget, setBudget] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#060606] text-white px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[2.5rem] border border-white/10 bg-[#070707]/90 p-8 shadow-[0_0_180px_rgba(255,106,0,0.14)] backdrop-blur-2xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.45em] text-[#ff8b3d]">Start a Project</p>
            <h1 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              Send your brief and budget in one elegant form.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#bebebe] sm:text-lg">
              Share project details, your vision, and the budget line. This page is built with the same premium portfolio aesthetic and invites clients to start professionally.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-[#ff6a00]/30 bg-black/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#ff6a00]/60"
          >
            Back Home
          </Link>
        </div>

        {submitted ? (
          <div className="rounded-[2rem] border border-[#ff8b3d]/20 bg-[#0b0b0b]/75 p-10 text-center shadow-[0_25px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.45em] text-[#ff8b3d]">Brief submitted</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Thanks for sharing your project details.</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-8 text-[#bebebe]">
              I’ll review your brief and reach out within one business day. If you want, you can also email hello@mohamedyasser.com directly.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center rounded-full border border-[#ff6a00]/30 bg-[#101010]/90 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#ff6a00]/60"
              >
                Back to Home
              </Link>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#ff6a00]/60"
              >
                Edit Submission
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-[#0b0b0b]/75 p-6 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-[#ff8b3d]">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-[#101010] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ff8b3d] focus:ring-2 focus:ring-[#ff8b3d]/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-[#ff8b3d]">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-[#101010] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ff8b3d] focus:ring-2 focus:ring-[#ff8b3d]/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-[#ff8b3d]">Project Title</label>
                <input
                  type="text"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  required
                  placeholder="Brand identity for new launch"
                  className="w-full rounded-2xl border border-white/10 bg-[#101010] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ff8b3d] focus:ring-2 focus:ring-[#ff8b3d]/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-[#ff8b3d]">Budget</label>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  required
                  placeholder="e.g. $4,500"
                  className="w-full rounded-2xl border border-white/10 bg-[#101010] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ff8b3d] focus:ring-2 focus:ring-[#ff8b3d]/20"
                />
              </div>
            </div>

            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-[#0b0b0b]/75 p-6 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-[#ff8b3d]">Project Brief</label>
                <textarea
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  required
                  rows={10}
                  placeholder="Describe your vision, goals, assets, and desired tone..."
                  className="h-full w-full resize-none rounded-2xl border border-white/10 bg-[#101010] px-4 py-4 text-sm text-white outline-none transition focus:border-[#ff8b3d] focus:ring-2 focus:ring-[#ff8b3d]/20"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#ff6a00] to-[#c1121f] px-6 py-4 text-sm font-semibold text-black transition hover:brightness-110"
              >
                Send Project Brief
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
