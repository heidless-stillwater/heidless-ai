import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';

const pricingTiers = [
  {
    name: 'Brochure',
    price: '£399',
    priceDetail: 'one-time',
    description: 'Perfect for Small Businesses and Individuals.',
    features: [
      'Secure your foot-hold on the Web',
      'Excellent Foundation for your Web Presence',
      'Single Page Application',
      'Mobile-Responsive Design',
      'ChatBot + 1 AI Function tailored to your Profession',
      "First Year 'standard' Support Plan included",
    ],
    buttonText: 'Get Started',
  },
  {
    name: 'Pro',
    price: '£599',
    priceDetail: 'one-time',
    description: 'Optimal for Small Businesses and Individuals.',
    features: [
      'Everything in Brochure Plan',
      'Up to 5 pages allowing you to expand on your offering',
      '3 AI Functions tailored to your Profession/Service',
      "First Year 'standard' Support Plan included",
    ],
    buttonText: 'Choose Pro',
  },
  {
    name: 'Bespoke',
    price: 'Contact Us',
    priceDetail: 'for a competitive quote',
    description: 'For businesses ready to scale and sell online.',
    features: [
      'Everything in Pro Plan',
      'Up to 10 pages',
      'E-commerce Integration',
      '5 AI Functions',
      'Advanced SEO & Analytics',
      "First Year 'Bespoke' Support Plan included",
    ],
    buttonText: 'Contact Us',
  },
  {
    name: 'Support/After-care',
    price: 'From £49',
    priceDetail: '/month',
    description: 'Ongoing maintenance to keep your site running smoothly.',
    features: [
      'Ongoing Maintenance',
      'Security & Plugin Updates',
      'Monthly Performance Reports',
      'Pro-Active Support',
      'Priority Issue Support',
    ],
    buttonText: 'Find Out More',
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold font-headline sm:text-4xl">Choose a plan that fits your needs.</h2>
        <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
          We use AI to streamline our process. This saves us time & costs. We pass those savings on to you.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        {pricingTiers.map((tier) => (
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
                <Link href="/#contact">{tier.buttonText}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
