"use client";

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { InfraSection } from "@/components/InfraSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { SecuritySection } from "@/components/SecuritySection";
import { SDKSection } from "@/components/SDKSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { OrganicDivider } from "@/components/OrganicDivider";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <OrganicDivider variant="ocean-hero" />
      <InfraSection />
      <IntegrationsSection />
      <SecuritySection />
      <OrganicDivider variant="ocean-garden" flip />
      <SDKSection />
      <TestimonialsSection />
      <OrganicDivider variant="ocean-hero" flip />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
