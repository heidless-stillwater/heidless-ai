import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    imageUrl: 'https://placehold.co/600x400.png',
    hint: 'online store'
  },
  {
    title: 'Mobile Banking App',
    category: 'UI/UX Design',
    imageUrl: 'https://placehold.co/600x400.png',
    hint: 'finance app'
  },
  {
    title: 'Corporate Rebranding',
    category: 'Branding',
    imageUrl: 'https://placehold.co/600x400.png',
    hint: 'brand identity'
  },
    {
    title: 'SaaS Dashboard',
    category: 'Web App',
    imageUrl: 'https://placehold.co/600x400.png',
    hint: 'analytics dashboard'
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold font-headline sm:text-4xl">Our Recent <span className="text-accent">Work</span></h2>
        <p className="text-muted-foreground md:text-lg">A glimpse into the successful projects we've delivered.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden group">
            <div className="overflow-hidden">
               <Image
                src={project.imageUrl}
                alt={`Portfolio item: ${project.title}`}
                width={600}
                height={400}
                data-ai-hint={project.hint}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold font-headline">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.category}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
