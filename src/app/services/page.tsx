import { ServicesSection } from '@/components/sections/ServicesSection';

export default function ServicesPage() {
  return (
    <div className="w-full mx-auto md:max-w-[95%] px-4 sm:px-6 lg:px-8 py-12 md:py-20">
       <div className="text-center space-y-2 mb-12">
        <h2 className="text-3xl font-bold font-headline sm:text-4xl">What We Do</h2>
        <p className="text-muted-foreground md:text-lg">We offer a range of services to bring your digital vision to life.</p>
      </div>
      <ServicesSection />
    </div>
  );
}
