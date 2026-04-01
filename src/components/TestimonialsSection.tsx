"use client";

import { ScrollReveal } from "./ScrollReveal";

const TESTIMONIALS = [
  {
    quote:
      "Ruby's agents handle 80% of our content pipeline autonomously. The ROI was immediate — we scaled output 10x in the first month.",
    name: "Sarah Chen",
    role: "CMO, Meridian Labs",
    metric: "80%",
    metricLabel: "Autonomous content",
  },
  {
    quote:
      "We replaced three separate tools with Ruby. One platform, one invoice, 10x the capability. Our team focuses on strategy now, not execution.",
    name: "Marcus Rivera",
    role: "VP Growth, Flux Systems",
    metric: "3x",
    metricLabel: "Tool consolidation",
  },
  {
    quote:
      "The AI agents optimized our ad spend overnight. We woke up to a 4.2x ROAS that our human team never achieved in six months.",
    name: "Priya Sharma",
    role: "Head of Digital, Beacon AI",
    metric: "4.2x",
    metricLabel: "ROAS improvement",
  },
];

const COMPANIES = ["Meridian Labs", "Flux Systems", "Beacon AI", "Prism Analytics"];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <span className="inline-flex items-center gap-3 text-sm font-[family-name:var(--font-jetbrains-mono)] text-white/25 mb-8">
            <span className="w-12 h-px bg-white/20" />
            Trusted by teams worldwide
          </span>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="p-8 lg:p-10 border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                <p className="text-lg text-white/70 leading-relaxed mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div>
                    <span className="text-sm font-medium block">{t.name}</span>
                    <span className="text-xs text-white/25">{t.role}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-[family-name:var(--font-instrument-serif)] text-[#C41A3B]">
                      {t.metric}
                    </span>
                    <span className="block text-xs text-white/25 font-[family-name:var(--font-jetbrains-mono)]">
                      {t.metricLabel}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Company logos */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-12 lg:gap-20">
            {COMPANIES.map((company) => (
              <span
                key={company}
                className="text-sm font-[family-name:var(--font-jetbrains-mono)] text-white/25 hover:text-white/50 transition-colors"
              >
                {company}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
