"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const professions = [
  {
    id: 'accountancy',
    name: 'Accountancy',
    functions: [
      'Client Communication Bots',
      'Automated Data Entry',
      'Fraud Detection',
      'Reconciliation Automation',
      'Expense Categorization',
    ],
    defaultTab: 'Expense Categorization',
  },
  {
    id: 'fast-food-shop',
    name: 'Fast Food Shop',
    functions: [
      '24/7 Customer Chatbot',
      'Customer Service',
      'Order Management',
      'Special Recommender',
      'Personalized Recommendations',
    ],
    defaultTab: '24/7 Customer Chatbot',
  },
  {
    id: 'dental-practice',
    name: 'Dental Practice',
    functions: [
      'Diagnostic Assistance',
      'Automated Appointment Scheduling',
      'Patient Communication Bots',
      'Predictive Maintenance for Equipment',
    ],
    defaultTab: 'Diagnostic Assistance',
  },
  {
    id: 'fitness-coach',
    name: 'Fitness Coach',
    functions: [
      'Client Engagement Bots',
      'Personalized Workout Plans',
      'Nutrition Guidance',
      'Form Correction',
    ],
    defaultTab: 'Client Engagement Bots',
  },
  {
    id: 'life-coach',
    name: 'Life Coach',
    functions: [
      'Personalized Goal Setting',
      'Progress Tracking & Visualization',
      'Habit Formation & Breaking',
      'Emotional Intelligence Development',
    ],
    defaultTab: 'Personalized Goal Setting',
  }
];

export function ToolsSection() {
  return (
    <div className="space-y-12">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {professions.map((prof) => (
          <Button key={prof.id} asChild variant="outline" className="px-3 py-1 h-auto">
            <a href={`#${prof.id}`}>{prof.name}</a>
          </Button>
        ))}
      </div>

      <div className="space-y-16">
        {professions.map((prof) => (
          <section key={prof.id} id={prof.id} className="scroll-mt-24">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-headline">{prof.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue={prof.defaultTab} className="w-full">
                  <TabsList className="h-auto flex-wrap justify-start">
                    {prof.functions.map((func) => (
                      <TabsTrigger key={func} value={func} className="text-left">{func}</TabsTrigger>
                    ))}
                  </TabsList>
                  {prof.functions.map((func) => (
                    <TabsContent key={func} value={func}>
                       <div className="p-4 border rounded-md bg-muted/20 min-h-[100px]">
                        <h4 className="text-lg font-semibold">{func}</h4>
                        <p className="text-muted-foreground mt-2">
                          Placeholder content for the "{func}" feature. Discover how this AI-powered tool can enhance your {prof.name.toLowerCase()} services, streamline workflows, and deliver exceptional value to your clients.
                        </p>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </section>
        ))}
      </div>
    </div>
  );
}
