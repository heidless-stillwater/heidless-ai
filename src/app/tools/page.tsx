import { ToolsSection } from '@/components/sections/ToolsSection';

export const metadata = {
  title: 'AI Tools for Your Profession | heidless ai',
  description: 'Discover how our tailored AI solutions can revolutionize your industry, from web consultancy to life coaching.',
};

export default function ToolsPage() {
  return (
    <div className="w-full mx-auto md:max-w-[95%] px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
          AI Tools for Your Profession
        </h1>
        <p className="text-muted-foreground md:text-xl">
          Discover how our tailored AI solutions can revolutionize your industry. Select your profession below to see what we can do for you.
        </p>
      </div>
      <div className="mt-10">
        <ToolsSection />
      </div>
    </div>
  );
}
