import React from "react";

interface HeroBackgroundProps {
  children: React.ReactNode;
  colorClassName?: string; // Allows custom gradient per page
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ children, colorClassName }) => (
  <section className="relative min-h-[calc(630px-var(--header-height))] overflow-hidden pb-10">
    <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-border dark:border-dark-border">
      {/* Decorations */}
      <div className="col-span-1 flex h-full items-center justify-center" />
      <div className="col-span-1 flex h-full items-center justify-center border-x border-border dark:border-dark-border" />
      <div className="col-span-1 flex h-full items-center justify-center" />
    </div>
    {/* Enhanced Background Effects */}
    <figure className={`pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full blur-[200px] ${colorClassName || "bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-pink-500/20"}`} />
    <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full bg-gradient-to-br from-orange-400/20 to-red-400/10 blur-[100px] md:block" />
    <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/10 blur-[100px] md:block" />
    {/* Additional animated gradient elements */}
    <div className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl animate-pulse delay-1000" />
    </div>
    <div className="relative z-10">{children}</div>
  </section>
);

export default HeroBackground; 