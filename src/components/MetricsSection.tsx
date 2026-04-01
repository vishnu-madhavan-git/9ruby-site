"use client";

import { useEffect, useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span
      ref={(el) => {
        if (!el || started) return;
        const obs = new IntersectionObserver(([e]) => {
          if (e.isIntersecting) { setStarted(true); obs.disconnect(); }
        }, { threshold: 0.3 });
        obs.observe(el);
      }}
    >
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function MetricsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#C41A3B] animate-pulse" />
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-white/25">
              LIVE &nbsp; 23:46:31 UTC
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl lg:text-[96px] font-[family-name:var(--font-instrument-serif)] tracking-tight leading-[0.9] mb-16">
            Real-time
            <br />
            <span className="text-white/40">agent</span>
            <br />
            <span className="text-white/25">metrics.</span>
          </h2>
        </ScrollReveal>

        {/* Bioluminescent plant graph image */}
        <ScrollReveal>
          <div className="relative w-full h-[300px] lg:h-[400px] mb-12 overflow-hidden">
            <img
              src="/images/original/realtime-graph.png"
              alt="Real-time metrics visualization"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
          </div>
        </ScrollReveal>

        {/* Metrics row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <ScrollReveal>
            <div>
              <span className="text-4xl lg:text-5xl font-[family-name:var(--font-instrument-serif)]">
                <AnimatedCounter target={12847392} />
              </span>
              <span className="block text-sm text-white/25 font-[family-name:var(--font-jetbrains-mono)] mt-2">
                Tasks completed today
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div>
              <span className="text-4xl lg:text-5xl font-[family-name:var(--font-instrument-serif)]">
                23,847
              </span>
              <span className="block text-sm text-white/25 font-[family-name:var(--font-jetbrains-mono)] mt-2">
                active agents across all regions
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div>
              <span className="text-4xl lg:text-5xl font-[family-name:var(--font-instrument-serif)]">
                99.99%
              </span>
              <span className="block text-sm text-white/25 font-[family-name:var(--font-jetbrains-mono)] mt-2">
                Availability
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div>
              <span className="text-4xl lg:text-5xl font-[family-name:var(--font-instrument-serif)]">
                &lt;340ms
              </span>
              <span className="block text-sm text-white/25 font-[family-name:var(--font-jetbrains-mono)] mt-2">
                p99 latency
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Model support row */}
        <ScrollReveal delay={200}>
          <div className="mt-16 flex flex-wrap items-center gap-4">
            {["OpenAI GPT-4 Turbo", "Anthropic Claude 3", "Mistral Large", "Llama 3"].map((m) => (
              <span
                key={m}
                className="px-4 py-2 text-xs font-[family-name:var(--font-jetbrains-mono)] border border-white/10 text-white/50"
              >
                {m}
              </span>
            ))}
            <span className="text-xs text-white/25 font-[family-name:var(--font-jetbrains-mono)]">
              +12 more models
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
