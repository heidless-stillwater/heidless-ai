
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata = {
  title: 'AI Functions for Cleaning & Property Services | heidless ai',
  description: 'A comprehensive list of AI-powered capabilities to enhance cleaning and property maintenance services.',
};

const cleaningPropertyAiFunctions = [
    { name: 'Automated Scheduling & Dispatch', description: "Optimizes cleaner/technician routes and schedules based on job type, location, and availability", benefit: "Improves operational efficiency and reduces travel time" },
    { name: 'Predictive Maintenance Scheduling', description: "Analyzes property data (e.g., sensor data, historical repair logs) to forecast maintenance needs and schedule preventative work", benefit: "Minimizes costly breakdowns, extends asset lifespan, and ensures continuous operation" },
    { name: 'Automated Quote Generation', description: "Provides instant, accurate service quotes based on property size, service type, specific requirements, and real-time pricing data", benefit: "Enhances customer experience, accelerates sales conversion, and ensures competitive pricing" },
    { name: 'Inventory Management & Optimization', description: "Tracks cleaning supplies and maintenance materials, automates reorder points, and suggests optimal stock levels", benefit: "Reduces waste, ensures timely stock replenishment, and lowers carrying costs" },
    { name: 'Quality Control Inspection', description: "Analyzes images/videos of completed work to identify missed spots, inconsistencies, or areas needing attention post-service", benefit: "Ensures consistent service quality, reduces re-work, and improves client satisfaction" },
    { name: 'Customer Communication Bots', description: "Handles common customer inquiries, provides real-time job status updates, schedules appointments, and collects feedback", benefit: "Improves customer satisfaction, reduces call volume, and provides 24/7 support" },
    { name: 'Staffing Optimization & Allocation', description: "Forecasts labor needs based on job volume, complexity, and staff skills/certifications to optimize crew allocation", benefit: "Improves labor efficiency, reduces overtime, and ensures the right skills for the job" },
    { name: 'Damage Assessment & Reporting', description: "Analyzes images/videos of property damage to estimate repair costs, recommend solutions, and generate detailed reports", benefit: "Speeds up claims processing, ensures accurate billing, and provides clear documentation" },
    { name: 'Feedback Analysis & Sentiment Monitoring', description: "Analyzes customer reviews, social media mentions, and survey responses to identify areas for service improvement and staff training", benefit: "Enhances service quality, boosts reputation, and provides actionable insights" },
    { name: 'Energy Efficiency Recommendations', description: "Identifies opportunities for energy savings within properties (e.g., smart lighting, insulation, HVAC adjustments) based on usage patterns", benefit: "Provides added value to clients, promotes sustainability, and helps reduce utility costs" },
    { name: 'Resource Allocation for Emergency Services', description: "Optimizes dispatch of emergency cleaning or repair crews based on real-time incident data, team availability, and proximity", benefit: "Ensures rapid response times during critical situations and enhances safety" },
    { name: 'Smart Equipment Monitoring', description: "Integrates with smart cleaning equipment (e.g., robotic vacuums, floor scrubbers) to monitor performance, battery life, and maintenance needs", benefit: "Maximizes equipment uptime and optimizes usage" },
    { name: 'Client Relationship Management (CRM) Insights', description: "Analyzes client history, preferences, and communication patterns to personalize service and identify upsell opportunities", benefit: "Strengthens client loyalty and increases revenue per client" },
    { name: 'Compliance & Regulatory Monitoring', description: "Tracks changes in health, safety, and environmental regulations relevant to property services and alerts management", benefit: "Ensures legal adherence and avoids penalties" },
    { name: 'Waste Management Optimization', description: "Identifies patterns in waste generation and suggests optimal disposal methods or recycling strategies for properties", benefit: "Reduces environmental impact and potentially lowers waste disposal costs" },
];

export default function CleaningPropertyAIFunctionsPage() {
  return (
    <div className="w-full bg-gradient-to-br from-background to-muted/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                Comprehensive AI Functions for Cleaning & Property Services
            </h1>
        </div>

        <section className="mt-12 w-full">
            <Card className="rounded-lg shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-headline">Available AI Capabilities</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[20%]">AI Function</TableHead>
                                    <TableHead className="w-[50%]">Description</TableHead>
                                    <TableHead className="w-[30%]">Primary Benefit</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {cleaningPropertyAiFunctions.map((func) => (
                                    <TableRow key={func.name}>
                                        <TableCell className="font-medium">{func.name}</TableCell>
                                        <TableCell>{func.description}</TableCell>
                                        <TableCell>{func.benefit}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </section>
      </div>
      <footer className="text-center py-4">
        <p className="text-sm text-muted-foreground">Powered by Firebase & AI</p>
      </footer>
    </div>
  );
}
