"use client";

import { useRouter } from "next/navigation";

export default function LogoButton() {
  const router = useRouter();

  const handleClick = () => {
    if (typeof window === "undefined") return;
    if (window.location.pathname === "/") {
      router.refresh();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleClick();
      }}
      aria-label="Reload site"
      className="pointer-events-auto fixed left-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black/85 ring-1 ring-white/8 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur hover:scale-105 transition-transform overflow-hidden"
      title="Reload"
    >
      <img
        src="/LOGO.png"
        alt="Logo"
        className="h-8 w-8 object-contain"
      />
    </button>
  );
}
