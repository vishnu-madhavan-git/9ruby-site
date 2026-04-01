"use client";

import { ScrollReveal } from "./ScrollReveal";

const INTEGRATIONS = [
  { name: "OpenAI", category: "AI" },
  { name: "Anthropic", category: "AI" },
  { name: "Slack", category: "Comms" },
  { name: "GitHub", category: "Code" },
  { name: "Jira", category: "PM" },
  { name: "AWS S3", category: "Storage" },
  { name: "Google Drive", category: "Docs" },
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot", category: "Marketing" },
  { name: "Zapier", category: "Auto" },
  { name: "Snowflake", category: "Data" },
  { name: "Stripe", category: "Payments" },
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Centered heading */}
        <ScrollReveal>
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-3 text-sm font-[family-name:var(--font-jetbrains-mono)] text-white/25 mb-8">
              <span className="w-12 h-px bg-white/20" />
              Integrations
              <span className="w-12 h-px bg-white/20" />
            </span>
            <h2 className="text-6xl md:text-7xl lg:text-[96px] font-[family-name:var(--font-instrument-serif)] tracking-tight leading-[0.9]">
              Connect
              <br />
              <span className="text-white/40">everything.</span>
            </h2>
            <p className="mt-6 text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
              Your agents connect to 100+ tools and services. They read, write,
              and act autonomously across your entire stack.
            </p>
          </div>
        </ScrollReveal>

        {/* Centerpiece — connection hands image */}
        <ScrollReveal>
          <div className="relative w-full h-[350px] lg:h-[500px] my-12 overflow-hidden">
            <img
              src="/images/original/connection-hands.png"
              alt="Connected organic network"
              className="w-full h-full object-contain object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
          </div>
        </ScrollReveal>

        {/* Integration grid — 2 rows of 6 */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {INTEGRATIONS.map((integration, i) => (
            <ScrollReveal key={integration.name} delay={i * 40}>
              <div className="p-5 border border-white/10 bg-white/[0.02] hover:border-[#C41A3B]/30 hover:bg-[#C41A3B]/5 transition-all duration-300 group text-center">
                <span className="text-xs text-white/25 font-[family-name:var(--font-jetbrains-mono)] block mb-2">
                  {integration.category}
                </span>
                <span className="text-sm font-medium group-hover:text-[#C41A3B] transition-colors">
                  {integration.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats row */}
        <ScrollReveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-[family-name:var(--font-instrument-serif)]">100+</span>
              <span className="text-xs text-white/25 font-[family-name:var(--font-jetbrains-mono)]">Integrations</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-[family-name:var(--font-instrument-serif)]">OAuth</span>
              <span className="text-xs text-white/25 font-[family-name:var(--font-jetbrains-mono)]">built-in</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-[family-name:var(--font-instrument-serif)]">Webhooks</span>
              <span className="text-xs text-white/25 font-[family-name:var(--font-jetbrains-mono)]">real-time sync</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
