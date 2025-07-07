
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata = {
  title: 'AI Functions for Web Development | heidless ai',
  description: 'A comprehensive list of AI-powered capabilities to enhance web development consultancy services.',
};

const webConsultancyAiFunctions = [
    { name: 'Automated Code Generation', description: "Generates boilerplate code, components, or entire sections based on specifications", benefit: "Accelerates development and reduces manual coding" },
    { name: 'Bug Detection & Fixing', description: "Identifies potential bugs, suggests fixes, and can even auto-correct common errors", benefit: "Improves code quality and reduces debugging time" },
    { name: 'Code Review Assistance', description: "Analyzes code for best practices, style consistency, and potential vulnerabilities", benefit: "Enhances code maintainability and security" },
    { name: 'Automated Testing', description: "Generates test cases and executes automated tests to ensure functionality and performance", benefit: "Improves software reliability and reduces manual testing effort" },
    { name: 'Project Scoping & Estimation', description: "Analyzes project requirements to provide accurate time and resource estimates", benefit: "Enhances project planning and client quoting" },
    { name: 'Technical Documentation Generation', description: "Creates comprehensive documentation from code comments, designs, and project specifications", benefit: "Improves knowledge transfer and onboarding" },
    { name: 'Client Communication Bots', description: "Handles routine client inquiries, provides project updates, and gathers feedback", benefit: "Enhances client satisfaction and streamlines communication" },
    { name: 'SEO Optimization Analysis', description: "Analyzes website content and structure for search engine optimization opportunities", benefit: "Improves website visibility and organic traffic" },
    { name: 'Performance Optimization Suggestions', description: "Identifies bottlenecks in website performance and suggests improvements for speed and efficiency", benefit: "Enhances user experience and search rankings" },
    { name: 'Security Vulnerability Scanning', description: "Scans web applications for common security vulnerabilities and recommends remediation", benefit: "Strengthens application security and protects data" },
];

export default function WebConsultancyAIFunctionsPage() {
  return (
    <div className="w-full bg-gradient-to-br from-background to-muted/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                Comprehensive AI Functions for Web Development
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
                                {webConsultancyAiFunctions.map((func) => (
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
