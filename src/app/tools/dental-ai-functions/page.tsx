
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata = {
  title: 'AI Tools for a Dental Practice | heidless ai',
  description: 'A comprehensive list of AI-powered capabilities to enhance dental practice efficiency, diagnostics, and patient care.',
};

const dentalAiFunctions = [
    { name: 'Automated Appointment Scheduling', description: "Manages patient bookings, sends automated reminders via SMS/email, and optimizes dentist and hygienist schedules based on availability and procedure length.", benefit: "Reduces no-shows, streamlines front office operations, and maximizes clinic efficiency." },
    { name: 'Diagnostic Assistance & Image Analysis', description: "Analyzes X-rays, intraoral scans, and 3D imaging (e.g., CBCT) to identify potential issues like cavities, gum disease, bone loss, and orthodontic anomalies.", benefit: "Improves diagnostic accuracy, enables earlier detection, and supports treatment planning." },
    { name: 'Personalized Treatment Plan Generation', description: "Generates customized treatment options and sequences based on patient history, oral health data, preferences, and budget considerations.", benefit: "Enhances patient engagement, improves treatment adherence, and facilitates shared decision-making." },
    { name: 'Patient Communication Bots & Virtual Assistants', description: "Handles common patient queries (e.g., opening hours, services, pre/post-procedure instructions), provides appointment confirmations, and collects preliminary intake information.", benefit: "Improves patient satisfaction, offers 24/7 support, and reduces staff workload." },
    { name: 'Predictive Maintenance for Dental Equipment', description: "Forecasts potential malfunctions in dental chairs, drills, X-ray machines, and sterilization equipment based on usage patterns and sensor data.", benefit: "Minimizes costly downtime, extends equipment lifespan, and ensures uninterrupted service." },
    { name: 'Insurance Claim Processing & Optimization', description: "Automates the submission, tracking, and verification of insurance claims, identifying potential discrepancies or missing information.", benefit: "Speeds up billing cycles, reduces administrative errors, and maximizes claim approval rates." },
    { name: 'Voice-Activated Charting & Documentation', description: "Allows dentists and hygienists to dictate notes, observations, and treatment details directly into patient records in real-time.", benefit: "Increases efficiency during examinations, reduces manual data entry, and ensures comprehensive record-keeping." },
    { name: 'Patient Risk Assessment & Stratification', description: "Identifies patients at higher risk for specific oral health issues (e.g., periodontitis, caries, oral cancer) based on genetic, lifestyle, and historical data.", benefit: "Enables proactive and preventative care, leading to better long-term patient outcomes." },
    { name: 'Supply Inventory Management & Forecasting', description: "Optimizes ordering, tracking, and reordering of dental supplies, instruments, and medications based on consumption rates and supplier lead times.", benefit: "Reduces waste, ensures availability of necessary materials, and lowers procurement costs." },
    { name: 'Marketing Personalization & Patient Outreach', description: "Analyzes patient demographics and treatment history to tailor marketing messages, promotional offers, and recall campaigns.", benefit: "Increases patient retention, attracts new clients, and improves marketing ROI." },
    { name: 'Treatment Outcome Prediction', description: "Predicts the success rates of various treatment modalities for individual patients based on a vast dataset of similar cases.", benefit: "Helps manage patient expectations and refine treatment strategies." },
    { name: 'Teledentistry Support', description: "Facilitates remote consultations, preliminary assessments, and follow-ups using AI-powered video analysis and symptom checkers.", benefit: "Increases accessibility for patients and expands clinic reach." },
    { name: 'Hygiene and Oral Care Coaching', description: "Provides personalized recommendations and reminders for at-home oral hygiene practices based on patient's specific needs and habits.", benefit: "Empowers patients to maintain better oral health between visits." },
    { name: 'Fraud Detection in Billing & Claims', description: "Identifies suspicious billing patterns or anomalies in claims data that may indicate fraudulent activity.", benefit: "Enhances financial security and prevents revenue loss." },
    { name: 'Staff Training & Performance Analysis', description: "Analyzes staff performance data (e.g., appointment efficiency, patient feedback) and suggests personalized training modules or areas for improvement.", benefit: "Boosts team productivity, enhances skill sets, and improves overall service delivery." },
];

export default function DentalAIFunctionsPage() {
  return (
    <div className="w-full bg-gradient-to-br from-background to-muted/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                AI Tools for a Dental Practice
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
                                {dentalAiFunctions.map((func) => (
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
