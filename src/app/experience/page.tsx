"use client";

import Link from "next/link";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#060606] text-white">
      <div className="max-w-4xl p-8">
        <h1 className="text-4xl font-bold mb-4">Experience</h1>
        <p className="text-[#bebebe]">Highlights of past projects, collaborations, and roles in creating premium visual systems.</p>
        <div className="mt-8">
          <Link href="/" className="text-sm text-[#ff6a00]">← Back Home</Link>
        </div>
      </div>
    </main>
  );
}
