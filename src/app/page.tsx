"use client";

import { motion } from "framer-motion";
import Lenis from "lenis";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const navItems = ["Portfolio", "Services", "About", "Experience", "Contact"];

const services = [
  "Brand Identity",
  "Logo Design",
  "Packaging",
  "Social Media",
  "3D Visualization",
  "Advertising Design",
  "Creative Direction",
  "AI Design Solutions",
];

const projects = [
  {
    title: "Aurelia Maison",
    category: "Brand Identity",
    blurb: "Luxury positioning with a cinematic visual system.",
    accent: "from-[#ff6a00]/40 to-[#c1121f]/20",
  },
  {
    title: "Solstice Packaging",
    category: "Packaging",
    blurb: "Elegant tactile systems for a premium product launch.",
    accent: "from-[#ff8b3d]/35 to-[#ff6a00]/20",
  },
  {
    title: "Velora 3D Launch",
    category: "3D",
    blurb: "Immersive product storytelling with realistic renders.",
    accent: "from-[#c1121f]/30 to-[#ff6a00]/20",
  },
  {
    title: "North House Campaign",
    category: "Advertising",
    blurb: "Editorial social campaigns tuned for conversion.",
    accent: "from-[#ff6a00]/25 to-[#ffffff]/10",
  },
];

const filters = ["All", "Brand Identity", "Packaging", "3D", "Advertising"] as const;
type Filter = (typeof filters)[number];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const frame = requestAnimationFrame(raf);

    const handlePointerMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handlePointerMove);

    gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 48, filter: "blur(16px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      window.removeEventListener("mousemove", handlePointerMove);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#060606] text-white">
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(255,106,0,0.16), transparent 36%), radial-gradient(circle at 80% 20%, rgba(193,18,31,0.14), transparent 30%)",
            "radial-gradient(circle at 75% 30%, rgba(255,106,0,0.18), transparent 34%), radial-gradient(circle at 20% 80%, rgba(193,18,31,0.16), transparent 28%)",
            "radial-gradient(circle at 20% 20%, rgba(255,106,0,0.16), transparent 36%), radial-gradient(circle at 80% 20%, rgba(193,18,31,0.14), transparent 30%)",
          ],
        }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none fixed inset-0 z-0 opacity-75"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 10%, rgba(255,106,0,0.28), transparent 18%), radial-gradient(circle at 90% 90%, rgba(193,18,31,0.34), transparent 24%)",
          filter: "blur(60px)",
        }}
      />

      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(6,6,6,0.7)_72%,#060606_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Right-side sections list (large screens only) */}
      <nav className="pointer-events-auto fixed right-6 bottom-24 z-20 hidden lg:flex flex-col items-end gap-4">
        {navItems.map((item) => {
          const route = `/${item.toLowerCase().replace(/\s+/g, '')}`;
          return (
            <a
              key={item}
              href={route}
              className="group flex items-center gap-3 px-2 py-1"
            >
              <span className="text-sm tracking-wider text-[#bebebe] group-hover:text-[#ff8b3d] transition-colors">
                {item}
              </span>
              <span className="h-[2px] w-8 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#ff8b3d] group-hover:to-[#c1121f] transition-all" />
            </a>
          );
        })}
      </nav>

      <main className="relative z-10">
        <section id="home" className="relative min-h-screen overflow-hidden px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1540px] items-center justify-center rounded-[2.5rem] border border-white/10 bg-[#070707]/90 px-8 py-8 shadow-[0_0_180px_rgba(255,106,0,0.14)] backdrop-blur-2xl sm:px-10 lg:px-12">
            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_right,rgba(255,106,0,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(193,18,31,0.10),transparent_28%)] pointer-events-none" />
            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="flex flex-col justify-center items-start text-left">
                <p className="mb-5 text-[0.72rem] uppercase tracking-[0.45em] text-[#ff8b3d]">
                  Graphic Designer · Brand Identity · 3D Visualizer
                </p>
                <h1 className="max-w-2xl text-5xl font-semibold leading-[0.9] tracking-[-0.03em] text-white sm:text-6xl lg:text-[5.6rem]">
                  Designing brands that people remember.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-8 text-[#bebebe] sm:text-lg">
                  I create premium visual identities, social campaigns, logo systems, packaging, cinematic 3D renders, and AI-assisted creative experiences that help brands grow with depth and distinction.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a href="/portfolio" className="cursor-pointer rounded-full border border-[#ff6a00]/70 bg-[#ff6a00] px-7 py-3 text-sm font-semibold text-black transition">
                    View Portfolio
                  </a>
                  <a href="/start" className="cursor-pointer rounded-full border border-white/15 bg-black/40 px-7 py-3 text-sm font-semibold text-white backdrop-blur">
                    Start a Project
                  </a>
                </div>

                <div className="mt-12 flex flex-wrap gap-8 text-sm text-[#bebebe]">
                  <div>
                    <div className="text-3xl font-semibold text-white">200+</div>
                    <div>Designs Created</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold text-white">30+</div>
                    <div>Clients Served</div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-end">
                <div className="relative h-[92vh] w-full max-w-[58vw] overflow-visible">
                  <div
                    className="absolute right-[-12%] top-[-8%] z-20 pointer-events-none"
                    style={{
                      width: '52rem',
                      height: '52rem',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle at 28% 28%, rgba(255, 134, 28, 0.64) 0%, rgba(255, 77, 0, 0.38) 30%, transparent 60%)',
                      filter: 'blur(18px)',
                    }}
                  />

                  <div
                    className="absolute right-[-6%] top-[6%] z-20 pointer-events-none"
                    style={{
                      width: '38rem',
                      height: '38rem',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle at 40% 40%, rgba(255, 183, 0, 0.6) 0%, rgba(255, 174, 24, 0.3) 40%, transparent 70%)',
                      filter: 'blur(12px)',
                    }}
                  />

                  <div
                    className="absolute inset-x-0 bottom-0 z-20 pointer-events-none"
                    style={{
                      height: '40rem',
                      background: 'radial-gradient(ellipse at 60% 100%, rgba(6,6,6,0.95) 0%, rgba(6,6,6,0.7) 22%, rgba(6,6,6,0.45) 42%, rgba(6,6,6,0.22) 62%, transparent 90%)',
                      filter: 'blur(24px)',
                    }}
                  />

                  <motion.div
                    className="absolute top-16 right-[-4] z-10 flex flex-col items-end gap-6 pointer-events-none"
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <motion.div
                      className="rounded-3xl border border-[#ff6a00]/20 bg-[#0b0b0b]/80 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl transform-gpu"
                      animate={{ rotate: [-2, 0, -2] }}
                      transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      style={{ transformOrigin: 'right top' }}
                    >
                      <p className="text-[0.65rem] uppercase tracking-[0.32em] text-[#ff8b3d]">Logo Systems</p>
                      <p className="mt-1 text-sm font-medium text-white">Identity architecture</p>
                    </motion.div>

                    <motion.div
                      className="rounded-3xl border border-[#ff6a00]/20 bg-[#0b0b0b]/80 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl transform-gpu"
                      animate={{ rotate: [2, 0, 2] }}
                      transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      style={{ transformOrigin: 'right top' }}
                    >
                      <p className="text-[0.65rem] uppercase tracking-[0.32em] text-[#ff8b3d]">Brand Identity</p>
                      <p className="mt-1 text-sm font-medium text-white">Visual systems</p>
                    </motion.div>

                    <motion.div
                      className="rounded-3xl border border-[#ff6a00]/20 bg-[#0b0b0b]/80 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl transform-gpu"
                      animate={{ y: [0, 6, 0], rotate: [4, 1, 4] }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      style={{ transformOrigin: 'right top' }}
                    >
                      <p className="text-[0.65rem] uppercase tracking-[0.32em] text-[#ff8b3d]">3D Render</p>
                      <p className="mt-1 text-sm font-medium text-white">Cinematic product visuals</p>
                    </motion.div>
                  </motion.div>

                  <motion.img
                    src="/portrait.png"
                    alt="Mohamed Yasser"
                    className="absolute z-30 h-[105vh] w-[220%] max-w-none object-contain pointer-events-none"
                    style={{
                      top: "-8%",
                      right: "-14%",
                      WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 18%, rgba(0,0,0,1) 28%, rgba(0,0,0,1) 100%)',
                      maskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 18%, rgba(0,0,0,1) 28%, rgba(0,0,0,1) 100%)',
                      WebkitMaskSize: '100% 100%',
                      maskSize: '100% 100%',
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                    }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* homepage kept minimal: hero only (section links removed) */}
      </main>
    </div>
  );
}
