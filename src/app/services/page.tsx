"use client";

import Link from "next/link";

const services = [
  {
    name: "Brand Identity",
    description: "From logo systems to full visual language — I craft premium brands that feel cinematic, confident, and built to last.",
    price: "Starts at $2,500 - $6,500",
    badge: "Luxury systems",
  },
  {
    name: "Packaging Design",
    description: "Tactile packaging, structural concepts, and premium finishes that make products feel irresistible on shelf and online.",
    price: "Starts at $1,800 - $5,000",
    badge: "Premium unboxing",
  },
  {
    name: "Social Media Campaigns",
    description: "Strategic visual content, motion assets, and campaign direction for brands that grow faster with higher engagement.",
    price: "Starts at $1,200 - $4,000",
    badge: "Scroll-stopping",
  },
  {
    name: "Web Design",
    description: "High-end website concepts with modern interactions, polished layouts, and a strong brand-first experience.",
    price: "Starts at $2,800 - $7,500",
    badge: "Digital presence",
  },
  {
    name: "UI/UX Design",
    description: "User-first interfaces, intuitive journeys, and beautiful digital products designed to convert and delight.",
    price: "Starts at $2,200 - $6,200",
    badge: "Experience-led",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-12 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,106,0,0.14),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(193,18,31,0.12),transparent_22%)] pointer-events-none" />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.87fr_0.98fr] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-[#ff6a00]/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-[#ffb37a] shadow-[0_0_50px_rgba(255,106,0,0.1)]">
              Services · Pricing · Creative Direction
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.3rem]">
                Services built to make brands feel modern, magnetic and unforgettable.
              </h1>
              <p className="max-w-xl text-base leading-8 text-[#c6c6c6] sm:text-lg">
                Choose the service that best fits your brand. Prices show a range depending on project scope, market, and delivery timeline.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-[#0f0f0f]/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
                <p className="text-sm uppercase tracking-[0.28em] text-[#ff8b3d]">Why work with me?</p>
                <p className="mt-4 text-sm leading-7 text-[#d1d1d1]">
                  Integrated visual thinking, clear creative direction, and premium deliverables that make your brand stand out.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-[#0f0f0f]/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
                <p className="text-sm uppercase tracking-[0.28em] text-[#ff8b3d]">The result</p>
                <p className="mt-4 text-sm leading-7 text-[#d1d1d1]">
                  Bold visual systems, social media content that converts, and digital experiences made for premium brands.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {services.map((service) => (
              <article
                key={service.name}
                className="group rounded-[2rem] border border-white/10 bg-[#080808]/95 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-[#ff6a00]/30"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-[#ff8b3d]">{service.badge}</p>
                    <h2 className="mt-4 text-2xl font-semibold text-white">{service.name}</h2>
                  </div>
                  <div className="rounded-3xl bg-white/5 px-4 py-2 text-sm font-semibold text-[#ffcc9f]">
                    {service.price}
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-[#c6c6c6]">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#bdbdbd]">
                    premium
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#bdbdbd]">
                    rapid delivery
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-[#090909]/80 p-6 text-[#d1d1d1] shadow-[0_40px_90px_rgba(255,106,0,0.08)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#ff8b3d]">Ready to work together?</p>
            <p className="mt-2 text-base leading-7">Share your project now and I’ll send back a premium design plan matched to your market needs.</p>
          </div>
          <Link
            href="/start"
            className="inline-flex items-center justify-center rounded-full bg-[#ff6a00] px-6 py-3 text-sm font-semibold text-black shadow-[0_14px_40px_rgba(255,106,0,0.35)] transition hover:bg-[#ff812b]"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}
