
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata = {
  title: 'AI Functions for Accountants | heidless ai',
  description: 'A comprehensive list of AI-powered capabilities to enhance accountancy firm efficiency, accuracy, and client services.',
};

const accountancyAiFunctions = [
    { name: 'Automated Data Extraction & Categorization', description: "Extracts and intelligently categorizes financial data from various sources like invoices, receipts, bank statements, and payroll records", benefit: "Reduces manual data entry, minimizes errors, and saves significant time" },
    { name: 'Fraud Detection & Anomaly Identification', description: "Identifies unusual patterns, suspicious transactions, or anomalies in financial data that may indicate fraudulent activities or errors", benefit: "Enhances security, prevents financial losses, and improves audit efficiency" },
    { name: 'Automated Reconciliation', description: "Automatically matches and reconciles transactions across bank accounts, ledgers, and other financial records with high accuracy", benefit: "Speeds up the reconciliation process, reduces discrepancies, and improves data integrity" },
    { name: 'Predictive Analytics for Financial Forecasting', description: "Analyzes historical financial data and market trends to forecast future financial performance, cash flow, and revenue", benefit: "Supports strategic financial planning, budgeting, and risk management" },
    { name: 'Tax Compliance & Optimization', description: "Assists in preparing tax returns, identifies eligible deductions and credits, and ensures adherence to complex tax laws and regulations", benefit: "Reduces tax preparation time, minimizes audit risk, and optimizes tax liabilities" },
    { name: 'Audit Automation & Support', description: "Automates routine audit tasks, analyzes large datasets for discrepancies, compliance issues, and generates detailed audit reports", benefit: "Increases audit efficiency, improves thoroughness, and provides deeper insights" },
    { name: 'Expense Management & Categorization', description: "Automatically categorizes business expenses, flags out-of-policy spending, and generates expense reports", benefit: "Simplifies expense tracking, improves budget adherence, and streamlines reimbursement processes" },
    { name: 'Financial Report Generation & Customization', description: "Generates various standard and custom financial reports (e.g., balance sheets, income statements, cash flow statements, departmental reports) instantly", benefit: "Provides timely, accurate insights into financial health and supports informed decision-making" },
    { name: 'Client Communication & Advisory Bots', description: "Handles common client inquiries about billing, statements, tax deadlines, and provides personalized financial advice or updates", benefit: "Improves client satisfaction, offers 24/7 support, and frees up accountant time for complex tasks" },
    { name: 'Compliance Monitoring & Alerts', description: "Continuously monitors financial activities against regulatory requirements (e.g., GAAP, IFRS) and internal policies, providing real-time alerts on potential non-compliance", benefit: "Ensures adherence to legal and ethical standards, and mitigates regulatory risks" },
    { name: 'Budgeting & Variance Analysis', description: "Assists in creating detailed budgets and performs real-time variance analysis, highlighting deviations from planned expenditures or revenues", benefit: "Improves financial control and allows for proactive adjustments" },
    { name: 'Invoice Processing & Accounts Payable Automation', description: "Automates the processing of incoming invoices, validates details, and streamlines the accounts payable workflow from approval to payment", benefit: "Reduces processing time, improves vendor relationships, and optimizes cash flow" },
    { name: 'Revenue Recognition Automation', description: "Automates the complex process of recognizing revenue according to accounting standards, especially for subscription or project-based businesses", benefit: "Ensures accurate financial reporting and compliance with revenue recognition principles" },
    { name: 'Investment Performance Analysis', description: "Analyzes investment portfolios, tracks performance against benchmarks, and provides insights for optimizing investment strategies for clients", benefit: "Supports informed investment decisions and client wealth management" },
    { name: 'Payroll Processing & Compliance', description: "Automates payroll calculations, tax withholdings, and ensures compliance with labor laws and payroll regulations", benefit: "Reduces payroll errors, ensures timely payments, and simplifies compliance" },
];

export default function AccountancyAIFunctionsPage() {
  return (
    <div className="w-full bg-gradient-to-br from-background to-muted/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                Comprehensive AI Functions for Accountants
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
                                {accountancyAiFunctions.map((func) => (
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
