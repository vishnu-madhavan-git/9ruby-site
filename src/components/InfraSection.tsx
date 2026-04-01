"use client";

import { ScrollReveal } from "./ScrollReveal";

const REGIONS = [
  { name: "North America", nodes: 12 },
  { name: "Europe", nodes: 8 },
  { name: "Asia Pacific", nodes: 6 },
  { name: "Middle East", nodes: 3 },
];

export function InfraSection() {
  return (
    <section id="infra" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <ScrollReveal>
            <span className="inline-flex items-center gap-4 text-sm font-[family-name:var(--font-jetbrains-mono)] text-white/40 mb-8">
              <span className="w-12 h-px bg-white/20" />
              Global infrastructure
            </span>
          </ScrollReveal>
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-stretch">
            <ScrollReveal>
              <div className="w-48 lg:w-72 xl:w-80 shrink-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/world-3i68QNWJwmO7W19ztZWbevAwJQHzYL.png"
                  alt="Global network sphere"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </ScrollReveal>
            <div className="flex flex-col justify-center">
              <ScrollReveal>
                <h2 className="text-6xl md:text-7xl lg:text-[128px] font-[family-name:var(--font-instrument-serif)] tracking-tight leading-[0.9]">
                  Global by
                  <br />
                  <span className="text-white/40">default.</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="mt-8 text-xl text-white/60 leading-relaxed max-w-lg">
                  Your campaigns run on distributed infrastructure across 29
                  regions. Sub-50ms ad delivery to 99% of the world.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Grid with regions and metrics */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map card - spans 2 cols */}
          <ScrollReveal className="lg:col-span-2">
            <div className="relative p-8 lg:p-12 border border-white/10 bg-white/[0.02] overflow-hidden h-full">
              {/* SVG connection lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ opacity: 0.3 }}
              >
                <defs>
                  <style>{`
                    .conn-line {
                      stroke: #C41A3B;
                      stroke-width: 1;
                      fill: none;
                      stroke-dasharray: 1000;
                      animation: drawLine 3s ease-in-out infinite;
                    }
                  `}</style>
                </defs>
                <path className="conn-line" d="M100,150 Q300,50 500,180" style={{ animationDelay: "0s" }} />
                <path className="conn-line" d="M200,250 Q400,100 600,200" style={{ animationDelay: "1s" }} />
                <path className="conn-line" d="M50,200 Q250,300 450,120" style={{ animationDelay: "2s" }} />
              </svg>

              <div className="relative z-10">
                <h3 className="text-2xl font-[family-name:var(--font-instrument-serif)] mb-8">
                  Active regions
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {REGIONS.map((region) => (
                    <div key={region.name} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#C41A3B] animate-pulse-glow" />
                      <div>
                        <span className="text-sm text-white/80">
                          {region.name}
                        </span>
                        <span className="block text-xs text-white/30 font-[family-name:var(--font-jetbrains-mono)]">
                          {region.nodes} nodes
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Metrics column */}
          <div className="flex flex-col gap-6">
            {[
              { value: "29", label: "regions" },
              { value: "99.99%", label: "Uptime SLA" },
              { value: "<50ms", label: "Global latency" },
            ].map((metric, i) => (
              <ScrollReveal key={metric.label} delay={i * 100}>
                <div className="p-8 border border-white/10 bg-white/[0.02]">
                  <span className="text-4xl font-[family-name:var(--font-instrument-serif)]">
                    {metric.value}
                  </span>
                  <span className="block text-sm text-white/40 font-[family-name:var(--font-jetbrains-mono)] mt-2">
                    {metric.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
