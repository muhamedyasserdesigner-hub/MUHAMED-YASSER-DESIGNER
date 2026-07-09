"use client";

import Link from "next/link";
import { portfolioCategories, portfolioItems } from "../../lib/portfolioData";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-[#0b0b0b]/80 p-8 shadow-[0_40px_120px_rgba(255,106,0,0.1)] backdrop-blur-xl sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.45em] text-[#ff8b3d]">Portfolio Categories</p>
            <h1 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">Projects by category, ready for your next case study.</h1>
            <p className="mt-5 text-base leading-8 text-[#bebebe] sm:text-lg">
              Click any category to jump to the section where you can replace the sample projects with your own work. The portfolio is structured so you can edit titles, descriptions, images, and tags easily.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[#ff6a00]/30 bg-black/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#ff6a00]/60"
          >
            Back Home
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {portfolioCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="group rounded-[1.8rem] border border-white/10 bg-[#121212]/90 p-6 transition hover:border-[#ff6a00]/40 hover:bg-[#1a1a1a]"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[#ff6a00]/20 to-[#c1121f]/15 text-[#ff8b3d]">
                <span className="text-lg font-semibold">{category.label.split(' ')[0][0]}</span>
              </div>
              <h2 className="text-xl font-semibold text-white">{category.label}</h2>
              <p className="mt-3 text-sm leading-6 text-[#b9b9b9]">Jump straight to the {category.label} projects section.</p>
            </a>
          ))}
        </div>

        <div className="mt-12 space-y-12">
          {portfolioCategories.map((category) => {
            const items = portfolioItems.filter((item) => item.category === category.label);
            return (
              <section key={category.id} id={category.id} className="scroll-mt-24">
                <div className="mb-8 flex flex-col gap-3 rounded-[1.8rem] border border-white/10 bg-[#0f0f0f]/90 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.45em] text-[#ff8b3d]">{category.label}</p>
                    <h2 className="mt-3 text-3xl font-semibold text-white">{category.label} Projects</h2>
                    <p className="mt-2 text-sm leading-6 text-[#bebebe]">{items.length} sample project{items.length === 1 ? "" : "s"} ready to swap with your own work.</p>
                  </div>
                  <a
                    href="#top"
                    className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#ff6a00]/40"
                  >
                    Back to categories
                  </a>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  {items.map((item) => (
                    <article key={item.slug} className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#121212]/95 transition hover:-translate-y-1 hover:border-[#ff8b3d]/30">
                      <div className="h-64 overflow-hidden bg-[#0a0a0a]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-xs uppercase tracking-[0.45em] text-[#ff8b3d]">{item.category}</p>
                        <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-[#c3c3c3]">{item.description}</p>
                        <div className="mt-5 flex flex-wrap gap-2 text-[0.72rem] text-[#bebebe]">
                          {item.tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-white/10 px-3 py-1">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
