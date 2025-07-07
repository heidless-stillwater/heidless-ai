import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="home" className="text-center">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Unleashing Digital Creativity
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          We are a modern design agency specializing in crafting unique and powerful digital experiences that captivate and convert.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/#portfolio">View Our Work</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/brief-analyzer">Analyze a Brief</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
