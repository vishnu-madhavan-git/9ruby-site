"use client";

import { ScrollReveal } from "./ScrollReveal";

const CODE_SAMPLE = `import { Ruby } from '@9ruby/sdk'

const agent = new Ruby.Agent({
  name: 'campaign-optimizer',
  model: 'ruby-9-turbo',
  tools: ['google-ads', 'meta-ads', 'analytics'],
})

const result = await agent.run({
  task: 'Optimize Q2 campaign for 3.5x ROAS',
  budget: 50_000,
  channels: ['search', 'social', 'display'],
})

console.log(result.summary)
// → "Reallocated 40% budget to top performers..."`;

export function SDKSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-3 text-sm font-[family-name:var(--font-jetbrains-mono)] text-white/25 mb-8">
                <span className="w-12 h-px bg-white/20" />
                Developer SDK
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-instrument-serif)] tracking-tight leading-[0.9] mb-8">
                Code your agents.
                <br />
                <span className="text-white/40">Or let them code.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="space-y-4">
                {[
                  "TypeScript native with full type safety",
                  "Streaming results for real-time observation",
                  "Multi-model support — OpenAI, Anthropic, Gemini, custom",
                  "Local debugging before cloud deployment",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C41A3B] mt-2 shrink-0" />
                    <span className="text-white/50">{feature}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Code block */}
          <ScrollReveal delay={200}>
            <div className="relative border border-white/10 bg-black overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <span className="ml-3 text-xs text-white/25 font-[family-name:var(--font-jetbrains-mono)]">
                  campaign.ts
                </span>
              </div>
              <pre className="p-6 overflow-x-auto text-sm leading-relaxed">
                <code className="font-[family-name:var(--font-jetbrains-mono)] text-white/70">
                  {CODE_SAMPLE}
                </code>
              </pre>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
