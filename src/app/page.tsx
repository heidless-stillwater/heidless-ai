import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { CTASection } from '@/components/sections/CTASection';
import { ContactSection } from '@/components/sections/ContactSection';
import { PricingSection } from '@/components/sections/PricingSection';

export default function Home() {
  return (
    <div className="w-full mx-auto md:max-w-[95%] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-16 md:gap-32 py-8 md:py-16">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <CTASection />
        <PricingSection />
        <ContactSection />
      </div>
    </div>
  );
}
