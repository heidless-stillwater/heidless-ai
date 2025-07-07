
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata = {
  title: 'AI Functions for Business Consultancies | heidless ai',
  description: 'A comprehensive list of AI-powered capabilities to enhance business consultancy efficiency, strategy, and client outcomes.',
};

const businessConsultancyAiFunctions = [
    { name: 'Market Research & Trend Analysis', description: "Analyzes vast datasets of market trends, competitor activities, and consumer behavior to identify opportunities and threats", benefit: "Provides data-driven insights for strategic planning and competitive advantage" },
    { name: 'Strategic Planning & Scenario Modeling', description: "Assists in developing robust business strategies, including financial projections and operational plans, and models various future scenarios", benefit: "Enhances decision-making, mitigates risks, and supports long-term growth" },
    { name: 'Performance Monitoring & Predictive Analytics', description: "Tracks key business metrics in real-time, identifies performance gaps, and predicts future outcomes (e.g., sales, churn)", benefit: "Improves operational efficiency, enables proactive adjustments, and optimizes resource allocation" },
    { name: 'Risk Assessment & Mitigation Strategies', description: "Identifies potential business risks (financial, operational, market, regulatory) through data analysis and proposes comprehensive mitigation strategies", benefit: "Minimizes potential losses, ensures business continuity, and builds resilience" },
    { name: 'Customer Segmentation & Personalization', description: "Segments customer bases based on behavior, demographics, and preferences to enable highly targeted marketing and service delivery", benefit: "Optimizes marketing ROI, improves customer engagement, and increases conversion rates" },
    { name: 'Supply Chain Optimization & Resilience', description: "Analyzes supply chain data to identify inefficiencies, predict disruptions, and recommend improvements for cost, speed, and resilience", benefit: "Reduces operational costs, enhances delivery reliability, and strengthens supply chain robustness" },
    { name: 'Financial Modeling & Valuation', description: "Builds complex financial models, performs valuation analysis, and forecasts various financial scenarios for investment or strategic decisions", benefit: "Supports robust financial planning, investor relations, and M&A activities" },
    { name: 'Client Communication & Engagement Bots', description: "Handles routine client inquiries, provides project updates, schedules meetings, and gathers feedback automatically", benefit: "Enhances client satisfaction, streamlines communication, and frees up consultant time" },
    { name: 'Talent Management & Workforce Optimization', description: "Analyzes HR data to optimize talent acquisition, retention, performance management, and employee engagement strategies", benefit: "Improves workforce productivity, reduces turnover, and fosters a positive work environment" },
    { name: 'Compliance & Regulatory Intelligence', description: "Monitors legal and regulatory changes across relevant industries, alerting consultants and clients to new requirements or risks", benefit: "Ensures adherence to evolving legal standards, mitigates compliance risks, and avoids penalties" },
    { name: 'Operational Efficiency Improvement', description: "Identifies bottlenecks and inefficiencies in business processes through process mining and suggests automation or re-engineering solutions", benefit: "Streamlines operations, reduces costs, and improves productivity" },
    { name: 'New Product/Service Ideation', description: "Generates innovative product or service ideas based on market gaps, consumer needs, and emerging technologies", benefit: "Fosters innovation and helps businesses stay competitive" },
    { name: 'Pricing Strategy Optimization', description: "Analyzes market demand, competitor pricing, and cost structures to recommend optimal pricing strategies for products or services", benefit: "Maximizes revenue and market share" },
    { name: 'Competitive Intelligence Gathering', description: "Collects and analyzes data on competitors' strategies, products, pricing, and market share to provide actionable insights", benefit: "Informs competitive positioning and strategic responses" },
    { name: 'Post-Merger Integration Support', description: "Assists in planning and executing post-merger integration by identifying synergies, managing timelines, and tracking progress", benefit: "Ensures smoother transitions and maximizes value realization from M&A activities" },
];

export default function BusinessConsultancyAIFunctionsPage() {
  return (
    <div className="w-full bg-gradient-to-br from-background to-muted/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                Comprehensive AI Functions for Business Consultancies
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
                                {businessConsultancyAiFunctions.map((func) => (
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
