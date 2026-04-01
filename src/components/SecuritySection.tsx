"use client";

import { Shield, Lock, FileSearch, KeyRound } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const FEATURES = [
  {
    icon: Shield,
    title: "Isolated execution",
    desc: "Each agent runs in a secure sandbox with zero cross-contamination.",
  },
  {
    icon: Lock,
    title: "Encrypted memory",
    desc: "All data encrypted at rest and in transit. Zero-knowledge architecture.",
  },
  {
    icon: FileSearch,
    title: "Full audit trails",
    desc: "Every agent action logged and inspectable. Complete transparency.",
  },
  {
    icon: KeyRound,
    title: "Permission boundaries",
    desc: "Principle of least privilege by design. Agents only access what they need.",
  },
];

const COMPLIANCE = ["SOC 2", "ISO 27001", "HIPAA", "GDPR"];

export function SecuritySection() {
  return (
    <section
      id="security"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "oklch(0.09 0.01 260)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-3 text-sm font-[family-name:var(--font-jetbrains-mono)] text-white/40 mb-8">
                <span className="w-12 h-px bg-white/20" />
                Security
              </span>
              <h2 className="text-6xl md:text-7xl lg:text-[96px] font-[family-name:var(--font-instrument-serif)] tracking-tight leading-[0.9]">
                Autonomous,
                <br />
                <span className="text-white/30">not uncontrolled.</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="flex flex-col justify-end">
            <ScrollReveal delay={100}>
              <p className="text-xl text-white/60 leading-relaxed">
                Ruby agents are powerful but constrained. Enterprise-grade
                security ensures every agent operates within strict permission
                boundaries.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Security features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 100}>
              <div className="p-8 border border-white/10 bg-black hover:border-[#C41A3B]/30 transition-all duration-500 group h-full">
                <feature.icon className="w-8 h-8 text-white/30 group-hover:text-[#C41A3B] transition-colors duration-500 mb-6" />
                <h3 className="text-xl font-[family-name:var(--font-instrument-serif)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Compliance badges */}
        <ScrollReveal delay={200}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <span className="text-sm text-white/40 font-[family-name:var(--font-jetbrains-mono)]">
              Compliance:
            </span>
            {COMPLIANCE.map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 text-xs font-[family-name:var(--font-jetbrains-mono)] border border-white/10 text-white/60"
              >
                {badge}
              </span>
            ))}
            <div className="ml-auto flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-white/40">
                0 Security incidents this year
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
