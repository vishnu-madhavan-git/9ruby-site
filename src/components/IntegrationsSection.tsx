"use client";

import { ScrollReveal } from "./ScrollReveal";

const INTEGRATIONS = [
  { name: "OpenAI", category: "LLM" },
  { name: "Anthropic", category: "LLM" },
  { name: "Google Ads", category: "Ads" },
  { name: "Meta Ads", category: "Ads" },
  { name: "Slack", category: "Comms" },
  { name: "GitHub", category: "Code" },
  { name: "Google Drive", category: "Docs" },
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot", category: "Marketing" },
  { name: "Stripe", category: "Payments" },
  { name: "Zapier", category: "Auto" },
  { name: "Notion", category: "PM" },
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Bioluminescent connection image */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-30">
        <img
          src="/images/ocean/ocean-network.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain object-right-top"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-3 text-sm font-[family-name:var(--font-jetbrains-mono)] text-white/40 mb-8">
                <span className="w-12 h-px bg-white/20" />
                Integrations
              </span>
              <h2 className="text-6xl md:text-7xl lg:text-[96px] font-[family-name:var(--font-instrument-serif)] tracking-tight leading-[0.9] mb-8">
                Connect
                <br />
                <span className="text-white/40">everything.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl text-white/60 leading-relaxed mb-8">
                Ruby agents connect to 100+ tools — reading, writing, and
                acting autonomously across your entire marketing stack.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex gap-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-[family-name:var(--font-instrument-serif)]">
                    100+
                  </span>
                  <span className="text-xs text-white/40 font-[family-name:var(--font-jetbrains-mono)]">
                    Integrations
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-[family-name:var(--font-instrument-serif)]">
                    OAuth
                  </span>
                  <span className="text-xs text-white/40 font-[family-name:var(--font-jetbrains-mono)]">
                    built-in
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-[family-name:var(--font-instrument-serif)]">
                    Webhooks
                  </span>
                  <span className="text-xs text-white/40 font-[family-name:var(--font-jetbrains-mono)]">
                    real-time sync
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Integration grid */}
          <div className="grid grid-cols-3 gap-3">
            {INTEGRATIONS.map((integration, i) => (
              <ScrollReveal key={integration.name} delay={i * 50}>
                <div className="p-5 border border-white/10 bg-white/[0.02] hover:border-[#C41A3B]/30 hover:bg-[#C41A3B]/5 transition-all duration-300 group">
                  <span className="text-xs text-white/30 font-[family-name:var(--font-jetbrains-mono)] block mb-2">
                    {integration.category}
                  </span>
                  <span className="text-sm font-medium group-hover:text-[#C41A3B] transition-colors">
                    {integration.name}
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
