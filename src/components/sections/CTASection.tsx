import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CTASection() {
  return (
    <section id="cta" className="text-center bg-card p-8 md:p-12 rounded-lg shadow-lg">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold font-headline tracking-tight">Ready to Start a <span className="text-accent">Project?</span></h2>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          Let's collaborate to create something amazing. Get in touch with us today to discuss your ideas.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/#contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
}
