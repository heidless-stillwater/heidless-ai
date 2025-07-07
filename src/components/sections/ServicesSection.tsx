import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeXml, Palette, Figma } from 'lucide-react';

const services = [
  {
    icon: <CodeXml className="h-10 w-10 text-primary" />,
    title: 'Web Design',
    description: 'Creating stunning, responsive, and user-friendly websites that perform flawlessly across all devices.'
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: 'Branding',
    description: 'Building strong, memorable brand identities that resonate with your target audience and stand out from the competition.'
  },
  {
    icon: <Figma className="h-10 w-10 text-primary" />,
    title: 'UI/UX Strategy',
    description: 'Designing intuitive and engaging user interfaces based on in-depth research and a human-centered approach.'
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold font-headline sm:text-4xl">What We Do</h2>
        <p className="text-muted-foreground md:text-lg">We offer a range of services to bring your digital vision to life.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col items-center text-center p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader>
              {service.icon}
              <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
