
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata = {
  title: 'AI Functions for Fast Food & Delivery | heidless ai',
  description: 'A comprehensive list of AI-powered capabilities to enhance fast food restaurant and delivery service efficiency, sales, and customer satisfaction.',
};

const fastFoodAiFunctions = [
    { name: 'Personalized Menu Recommendations', description: "Suggests menu items and combos to individual customers based on past orders, dietary preferences, and real-time popularity", benefit: "Increases average order value and enhances customer satisfaction" },
    { name: 'Order Prediction & Inventory Optimization', description: "Forecasts peak demand for specific menu items and ingredients to optimize inventory levels and preparation", benefit: "Reduces food waste, ensures ingredient availability, and improves efficiency" },
    { name: 'Customer Sentiment Analysis', description: "Analyzes customer feedback from online reviews, social media, and direct surveys to identify areas for improvement", benefit: "Enhances customer satisfaction, identifies service gaps, and improves brand perception" },
    { name: 'Drive-Thru & Kitchen Flow Optimization', description: "Manages drive-thru queueing, predicts wait times, and optimizes kitchen workflows for faster order fulfillment", benefit: "Speeds up service, reduces customer wait times, and improves operational throughput" },
    { name: 'Voice Order Taking & Chatbots', description: "Automates order taking at drive-thrus, kiosks, or through messaging apps using natural language processing", benefit: "Reduces labor costs, improves order accuracy, and provides a faster, hands-free experience" },
    { name: 'Predictive Equipment Maintenance', description: "Forecasts potential failures for kitchen equipment (fryers, grills, ovens) and delivery vehicles based on usage data", benefit: "Minimizes downtime, extends equipment lifespan, and reduces repair costs" },
    { name: 'Dynamic Pricing & Promotions', description: "Adjusts menu prices and offers real-time promotions based on demand, inventory levels, time of day, and competitor pricing", benefit: "Maximizes revenue, optimizes sales, and manages demand fluctuations" },
    { name: 'Delivery Route Optimization', description: "Calculates the most efficient delivery routes for multiple orders, considering traffic, delivery time windows, and driver availability", benefit: "Reduces fuel costs, improves delivery speed, and enhances customer satisfaction" },
    { name: 'Waste Reduction Management', description: "Identifies patterns in food waste at various stages (preparation, consumption) to suggest portion adjustments, inventory changes, and donation opportunities", benefit: "Lowers operational costs, promotes sustainability, and reduces environmental impact" },
    { name: 'Employee Scheduling Optimization', description: "Creates optimal staff schedules for both restaurant and delivery personnel based on predicted demand, employee availability, and skill sets", benefit: "Improves labor efficiency, reduces overtime, and ensures adequate staffing" },
    { name: 'Food Safety & Quality Monitoring', description: "Monitors food preparation conditions, temperature logs, and ingredient freshness using sensors and image analysis", benefit: "Ensures consistent product quality, enhances food safety, and reduces health risks" },
    { name: 'Customer Loyalty & Retention Programs', description: "Analyzes customer purchase history and behavior to personalize loyalty rewards, special offers, and re-engagement campaigns", benefit: "Increases customer lifetime value and fosters repeat business" },
    { name: 'Supply Chain & Supplier Management', description: "Optimizes ordering from suppliers, tracks delivery times, and assesses supplier performance based on quality and reliability", benefit: "Ensures consistent ingredient supply, reduces costs, and improves supply chain resilience" },
    { name: 'Fraud Detection (Orders & Payments)', description: "Identifies suspicious order patterns, payment anomalies, or delivery discrepancies that may indicate fraudulent activity", benefit: "Enhances financial security and prevents losses from fraud" },
    { name: 'Automated Customer Support', description: "Provides instant answers to common delivery or order-related questions, handles order modifications, and resolves simple issues", benefit: "Improves customer service efficiency and reduces manual support workload" },
];

export default function FastFoodAIFunctionsPage() {
  return (
    <div className="w-full bg-gradient-to-br from-background to-muted/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                Comprehensive AI Functions for Fast Food & Delivery Services
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
                                {fastFoodAiFunctions.map((func) => (
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
