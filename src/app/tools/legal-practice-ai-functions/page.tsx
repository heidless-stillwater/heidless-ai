
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata = {
  title: 'AI Functions for Legal Practices | heidless ai',
  description: 'A comprehensive list of AI-powered capabilities to enhance legal practice efficiency, research, and client services.',
};

const legalPracticeAiFunctions = [
    { name: 'Automated Legal Research', description: "Searches and synthesizes information from vast legal databases, statutes, case precedents, and scholarly articles to find relevant legal arguments and insights", benefit: "Accelerates research, improves accuracy, and uncovers obscure precedents" },
    { name: 'Document Review & Analysis', description: "Analyzes large volumes of legal documents (contracts, discovery materials, briefs) for key clauses, inconsistencies, risks, and compliance issues", benefit: "Reduces manual review time, minimizes human error, and identifies critical information efficiently" },
    { name: 'Contract Generation & Review', description: "Automates the drafting of standard legal documents (e.g., NDAs, wills, simple contracts) and reviews existing contracts for compliance, risks, and specific clauses", benefit: "Increases efficiency, ensures legal accuracy, and reduces drafting costs" },
    { name: 'Predictive Analytics for Case Outcomes', description: "Analyzes historical case data, judge tendencies, and legal arguments to predict potential litigation outcomes, settlement ranges, and success probabilities", benefit: "Supports better strategic decision-making, informs negotiation tactics, and manages client expectations" },
    { name: 'Client Communication Bots & Virtual Assistants', description: "Handles routine client inquiries, provides case status updates, schedules consultations, and collects preliminary intake information", benefit: "Enhances client satisfaction, offers 24/7 support, and frees up legal staff time" },
    { name: 'E-Discovery Optimization', description: "Facilitates the identification, collection, processing, and production of electronic data (emails, documents) for legal cases, reducing irrelevant data", benefit: "Improves efficiency of e-discovery, reduces costs, and ensures compliance with legal holds" },
    { name: 'Compliance Monitoring & Regulatory Intelligence', description: "Continuously monitors legal and regulatory changes across various jurisdictions and practice areas, alerting lawyers to new requirements or risks", benefit: "Ensures adherence to evolving legal standards, mitigates compliance risks, and avoids penalties" },
    { name: 'Legal Billing & Invoice Automation', description: "Automates the tracking of billable hours, expense logging, and generation of detailed invoices, integrating with time tracking systems", benefit: "Streamlines billing processes, reduces administrative overhead, and improves cash flow" },
    { name: 'Intellectual Property Analysis', description: "Analyzes patents, trademarks, and copyrights for potential infringement, novelty, and registrability, and identifies new IP protection opportunities", benefit: "Protects client assets, informs IP strategy, and identifies new revenue streams" },
    { name: 'Legal Document Summarization', description: "Generates concise summaries of lengthy legal texts, case briefs, depositions, or expert testimonies", benefit: "Saves time for lawyers, enabling quicker comprehension of complex information" },
    { name: 'Litigation Strategy Support', description: "Analyzes opposing counsel's past cases, arguments, and success rates to help develop more effective litigation strategies", benefit: "Provides a competitive edge and strengthens legal arguments" },
    { name: 'Due Diligence Automation', description: "Assists in reviewing large volumes of corporate documents, financial records, and legal agreements for mergers, acquisitions, or investments", benefit: "Speeds up complex legal processes and enhances accuracy in due diligence" },
    { name: 'Legal Translation & Localization', description: "Provides accurate and contextually appropriate translations of legal documents across multiple languages", benefit: "Ensures clear communication in international legal matters and broadens client reach" },
    { name: 'Risk Scoring for Legal Cases', description: "Assigns a risk score to individual cases based on various factors, helping firms prioritize resources and allocate attention", benefit: "Optimizes resource allocation and focuses on high-risk/high-reward cases" },
    { name: 'Automated Legal Research Memo Generation', description: "Drafts initial versions of legal research memos based on a query and relevant findings, requiring attorney review and refinement", benefit: "Accelerates legal writing and provides a strong starting point for analysis" },
];

export default function LegalPracticeAIFunctionsPage() {
  return (
    <div className="w-full bg-gradient-to-br from-background to-muted/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                Comprehensive AI Functions for Legal Practices
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
                                {legalPracticeAiFunctions.map((func) => (
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
