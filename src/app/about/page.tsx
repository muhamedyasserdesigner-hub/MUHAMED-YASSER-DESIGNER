"use client";

import Link from "next/link";

const services = [
  {
    title: "Brand Identity",
    items: ["Logo Design", "Visual Identity Systems", "Brand Guidelines"],
  },
  {
    title: "Graphic Design",
    items: ["Social Media Campaigns", "Advertising Creatives", "Marketing Materials"],
  },
  {
    title: "3D Visualization",
    items: ["Product Rendering", "Packaging Visualization", "Commercial Mockups"],
  },
  {
    title: "Creative Direction",
    items: ["Concept Development", "Visual Strategy", "AI-Assisted Design Workflows"],
  },
];

const processSteps = [
  {
    title: "Discover",
    text: "Understanding the brand, audience, and project goals.",
  },
  {
    title: "Strategy",
    text: "Building a visual direction that aligns with business objectives.",
  },
  {
    title: "Design",
    text: "Crafting premium visuals with attention to every detail.",
  },
  {
    title: "Deliver",
    text: "Providing polished, production-ready assets with consistency across every touchpoint.",
  },
];

const tools = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe After Effects",
  "Blender",
  "Cinema 4D",
  "Figma",
  "Spline",
  "ChatGPT",
  "Midjourney",
  "AI Creative Tools",
];

const reasons = [
  "Strategic Brand Thinking",
  "Premium Modern Design",
  "Fast Communication",
  "Detail-Oriented Workflow",
  "High-Quality Deliverables",
  "Creative Problem Solving",
  "AI-Enhanced Efficiency",
  "Consistent Visual Systems",
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060606] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,106,0,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(193,18,31,0.14),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />

      <section className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col gap-12 px-6 py-10 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 self-start rounded-full border border-[#ff6a00]/25 bg-[#ff6a00]/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-[#ffb37a]">
              About Me · Philosophy · Process
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-[#ff8b3d]">01 — About Me</p>
                <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Turning ideas into memorable brands.</h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#c7c7c7] sm:text-lg">
                  I'm Mohamed Yasser, a Graphic Designer specializing in Brand Identity, Visual Communication, and 3D Product Visualization. I help businesses transform ideas into premium visual experiences through strategic branding, modern design systems, and high-quality creative solutions. Every project is built with a focus on clarity, consistency, and measurable impact.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-[#0f0f0f]/95 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
                <p className="text-sm uppercase tracking-[0.32em] text-[#ff8b3d]">02 — My Philosophy</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Design with purpose, not decoration.</h2>
                <p className="mt-4 text-base leading-8 text-[#c7c7c7]">
                  I believe great design is more than aesthetics. Every color, shape, and visual decision should communicate a clear message and strengthen the brand's identity. My goal is to create work that is visually striking while solving real business problems.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_20%_20%,rgba(255,106,0,0.24),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(193,18,31,0.22),transparent_30%)] blur-3xl" />
            <div className="absolute left-10 top-16 h-40 w-40 rounded-full bg-[#ff6a00]/20 blur-3xl" />
            <div className="absolute right-12 top-10 h-28 w-28 rounded-full bg-[#ff8270]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_35px_140px_rgba(0,0,0,0.35)] lg:h-[70vh] xl:h-[75vh]">
              <img
                src="/about-me.png"
                alt="Mohamed Yasser"
                className="h-full w-full object-cover"
              />
              <div className="absolute -right-10 top-10 h-28 w-28 rounded-full bg-[#ff9d4a]/30 blur-3xl" />
              <div className="absolute left-8 bottom-16 h-20 w-20 rounded-full bg-white/10 blur-xl" />
              <div className="absolute left-6 top-14 h-5 w-5 rounded-full bg-white/70 shadow-[0_0_30px_rgba(255,255,255,0.55)]" />
              <div className="absolute right-16 top-24 h-4 w-24 rounded-full bg-white/10 blur-xl" />
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-[#0f0f0f]/95 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <p className="text-sm uppercase tracking-[0.32em] text-[#ff8b3d]">03 — What I Do</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {services.map((service) => (
                  <div key={service.title} className="rounded-[1.75rem] border border-white/10 bg-[#101010]/95 p-6">
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <ul className="mt-4 space-y-3 text-sm text-[#c7c7c7]">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[#ff7a2b]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#0f0f0f]/95 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <p className="text-sm uppercase tracking-[0.32em] text-[#ff8b3d]">04 — My Process</p>
              <div className="mt-8 space-y-6">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6a00]/15 text-sm font-semibold text-[#ffb37a]">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-[#c7c7c7]">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-[#0f0f0f]/95 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <p className="text-sm uppercase tracking-[0.32em] text-[#ff8b3d]">05 — Tools I Use</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {tools.map((tool) => (
                  <span key={tool} className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#d0d0d0] backdrop-blur">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#0f0f0f]/95 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <p className="text-sm uppercase tracking-[0.32em] text-[#ff8b3d]">06 — Why Work With Me?</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <div key={reason} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-[#101010]/95 px-4 py-3 text-sm text-[#d0d0d0]">
                    <span className="text-[#ffb679]">✔</span>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#090909]/90 p-8 text-[#c7c7c7] shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <p className="text-sm uppercase tracking-[0.32em] text-[#ff8b3d]">Ready to begin?</p>
              <p className="mt-4 text-base leading-7">
                If you want a brand that looks premium, communicates clearly, and grows with your business, let’s build it together.
              </p>
              <div className="mt-6">
                <Link href="/start" className="inline-flex rounded-full bg-[#ff6a00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ff812b]">
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
