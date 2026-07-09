"use client";

import Link from "next/link";

const contacts = [
  { label: "Email", value: "hello@mohamedyasser.com", href: "mailto:hello@mohamedyasser.com" },
  { label: "WhatsApp", value: "+20 100 123 4567", href: "https://wa.me/201001234567" },
  { label: "Instagram", value: "@mohamedyasser.design", href: "https://instagram.com/mohamedyasser.design" },
  { label: "LinkedIn", value: "Mohamed Yasser", href: "https://linkedin.com/in/mohamedyasser" },
  { label: "Behance", value: "behance.net/mohamedyasser", href: "https://www.behance.net/mohamedyasser" },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060606] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,106,0,0.15),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(193,18,31,0.12),transparent_24%)]" />
      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-12 px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-[#ff6a00]/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-[#ffb37a]">
              Contact · Connect · Start Project
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">Let’s build something premium.</h1>
              <p className="max-w-2xl text-base leading-8 text-[#c7c7c7] sm:text-lg">
                Reach out across any channel below — email, WhatsApp, socials, or LinkedIn. I’m ready to discuss your next brand, packaging, campaign, or 3D visualization project.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.75rem] border border-white/10 bg-[#0f0f0f]/95 p-6 transition hover:border-[#ff6a00]/30 hover:bg-[#111111]"
                >
                  <p className="text-sm uppercase tracking-[0.28em] text-[#ff8b3d]">{contact.label}</p>
                  <p className="mt-3 text-lg font-semibold text-white">{contact.value}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0f0f0f]/95 p-8 shadow-[0_35px_110px_rgba(0,0,0,0.22)]">
            <p className="text-sm uppercase tracking-[0.32em] text-[#ff8b3d]">Start a Project</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Share your brief and I’ll reply with a premium plan.</h2>
            <p className="mt-5 text-base leading-8 text-[#c7c7c7]">
              Use the form below to describe your project, timeline, and vision. I’ll respond quickly with strategy, creative direction, and a tailor-made quote.
            </p>
            <div className="mt-8 space-y-5 rounded-[1.75rem] border border-white/10 bg-[#101010]/95 p-6">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.28em] text-[#d0d0d0]">Project Type</p>
                <p className="text-sm text-[#c7c7c7]">Brand Identity, Packaging, Social Media, 3D Visuals, Web Design, UI/UX, Creative Direction.</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.28em] text-[#d0d0d0]">What I need</p>
                <p className="text-sm text-[#c7c7c7]">Brief, goals, style references, deadline, and budget range.</p>
              </div>
              <Link
                href="/start"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#ff6a00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ff812b]"
              >
                Start your project
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-6 rounded-[2rem] border border-white/10 bg-[#090909]/80 p-8 text-[#c7c7c7] shadow-[0_30px_90px_rgba(255,106,0,0.08)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#ff8b3d]">Need help deciding?</p>
            <p className="mt-3 text-base leading-7">
              I’ll help you choose the right creative path, whether you need a full brand system, a product launch campaign, or a visual story that sells.
            </p>
          </div>
          <Link
            href="/start"
            className="inline-flex items-center justify-center rounded-full border border-[#ff6a00] bg-[#ff6a00]/10 px-6 py-3 text-sm font-semibold text-[#ffdfc8] transition hover:bg-[#ff6a00]/20"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}
