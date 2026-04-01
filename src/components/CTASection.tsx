"use client";

import { ScrollReveal } from "./ScrollReveal";

export function CTASection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Bioluminescent landscape background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2810%29-UnDKstODkIENp5xqTYUEpt0Sm8tNOw.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl lg:text-[96px] font-[family-name:var(--font-instrument-serif)] tracking-tight leading-[0.9] mb-8">
            Ready to delegate
            <br />
            <span className="text-white/40">to AI agents?</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-12">
            Join teams automating complex marketing workflows with Ruby agents.
            Deploy your first agent in minutes.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all text-base">
              Deploy your first agent
            </button>
            <button className="px-8 py-4 border border-white/20 font-medium rounded-full hover:border-white/40 transition-all text-base">
              Book a demo
            </button>
          </div>
          <p className="text-sm text-white/30 font-[family-name:var(--font-jetbrains-mono)]">
            1,000 free tasks with 9Ruby
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
