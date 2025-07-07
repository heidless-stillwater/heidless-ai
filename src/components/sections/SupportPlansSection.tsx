import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';

const supportTiers = [
  {
    name: 'Standard Support',
    price: '£49',
    priceDetail: '/month',
    description: 'Basic maintenance and support to keep your site secure and up-to-date.',
    features: [
      'Weekly Plugin & Theme Updates',
      'Daily Backups',
      'Security Monitoring',
      'Email Support (48hr response)',
    ],
    buttonText: 'Select Plan',
    buttonLink: '/#contact',
  },
  {
    name: 'Pro Support',
    price: '£99',
    priceDetail: '/month',
    description: 'For businesses that need faster support and performance optimization.',
    features: [
      'Everything in Standard',
      'Performance Optimization',
      'Priority Email & Chat Support (24hr response)',
      'Monthly Health Report',
    ],
    buttonText: 'Select Plan',
    buttonLink: '/#contact',
  },
  {
    name: 'Business Support',
    price: '£199',
    priceDetail: '/month',
    description: 'Comprehensive support with content updates and strategic advice.',
    features: [
      'Everything in Pro',
      '2 Hours of Content Updates per Month',
      'SEO Monitoring',
      'Phone Support (Business Hours)',
    ],
    buttonText: 'Select Plan',
    buttonLink: '/#contact',
  },
  {
    name: 'Enterprise Support',
    price: 'Contact Us',
    priceDetail: 'for a custom plan',
    description: 'Dedicated support for large-scale applications and e-commerce stores.',
    features: [
      'Everything in Business',
      'Custom Feature Development Hours',
      '24/7 Emergency Support',
      'Dedicated Account Manager',
    ],
    buttonText: 'Contact Us',
    buttonLink: '/#contact',
  }
];

export function SupportPlansSection() {
  return (
    <section id="support-plans" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold font-headline sm:text-4xl">Support & After-care Plans</h2>
        <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
          Keep your investment protected and performing at its best with our comprehensive support packages.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        {supportTiers.map((tier) => (
          <Card key={tier.name} className="flex flex-col shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
              <div className="pt-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.priceDetail && <span className="text-sm font-normal text-muted-foreground ml-1">{tier.priceDetail}</span>}
              </div>
              <CardDescription className="pt-2 !mt-2">{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3 text-sm">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto pt-6">
              <Button asChild className="w-full">
                <Link href={tier.buttonLink}>{tier.buttonText}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
