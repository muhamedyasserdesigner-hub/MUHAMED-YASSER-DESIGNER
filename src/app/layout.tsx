import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ClientTransition from "./ClientTransition";
import LogoButton from "./LogoButton";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Yasser | Premium Creative Portfolio",
  description:
    "A cinematic portfolio for Mohamed Yasser, blending luxury branding, identity design, and 3D visualization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* Client-side animated page transitions */}
        <ClientTransition>{children}</ClientTransition>
        {/* Persistent circular logo button (reload) */}
        <LogoButton />
      </body>
    </html>
  );
}
