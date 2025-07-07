
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata = {
  title: 'AI Functions for Fitness Coaches | heidless ai',
  description: 'A comprehensive list of AI-powered capabilities to enhance fitness coaching, client engagement, and business growth.',
};

const fitnessCoachAiFunctions = [
    { name: 'Personalized Workout Plan Generation', description: "Generates highly customized workout routines based on client goals, current fitness level, available equipment, injury history, and real-time performance data", benefit: "Maximizes client progress, prevents plateaus, and ensures exercise safety" },
    { name: 'Dynamic Nutrition Guidance', description: "Provides tailored dietary recommendations, meal plans, and macro breakdowns based on client goals, dietary restrictions, activity levels, and food preferences", benefit: "Supports holistic health, optimizes body composition, and improves energy levels" },
    { name: 'Real-time Form Correction & Feedback', description: "Analyzes exercise form via video or sensor data during workouts to provide immediate, actionable feedback and prevent injuries", benefit: "Enhances exercise effectiveness, reduces injury risk, and improves client technique" },
    { name: 'Advanced Progress Tracking & Analytics', description: "Monitors client performance across various metrics (e.g., strength, endurance, body composition), analyzes trends, and visualizes progress over time with predictive insights", benefit: "Motivates clients, helps coaches make data-driven adjustments, and demonstrates value" },
    { name: 'Intelligent Client Engagement Bots', description: "Handles common client questions, sends personalized motivational messages, schedules check-ins, and provides basic coaching tips 24/7", benefit: "Improves client retention, enhances satisfaction, and frees up coach time" },
    { name: 'Injury Risk Assessment & Prevention', description: "Identifies potential injury risks based on client movement patterns, historical data, and biomechanical analysis, suggesting preventative exercises", benefit: "Promotes safer training, reduces client setbacks, and builds trust" },
    { name: 'Optimized Recovery Protocols', description: "Suggests personalized recovery strategies (e.g., stretching, foam rolling, sleep recommendations, hydration targets) based on workout intensity and individual needs", benefit: "Enhances performance, reduces muscle soreness, and accelerates physiological adaptation" },
    { name: 'Adaptive Goal Setting & Adjustment', description: "Assists clients in setting realistic, measurable goals and dynamically adjusts them based on progress, adherence, and life changes", benefit: "Keeps clients motivated, provides a clear roadmap, and ensures goals remain relevant" },
    { name: 'Behavioral Coaching & Habit Formation', description: "Provides AI-driven nudges, reminders, and strategies to help clients build positive habits (e.g., consistency, hydration) and overcome challenges", benefit: "Fosters long-term adherence to fitness goals and promotes sustainable lifestyle changes" },
    { name: 'Market Trend Analysis & Niche Identification', description: "Identifies popular fitness trends, emerging client demographics, and underserved niches to help coaches tailor services and marketing efforts", benefit: "Informs business strategy, attracts new clients, and ensures market relevance" },
    { name: 'Client Journey Personalization', description: "Maps out personalized client journeys from onboarding to advanced training, adapting content and interactions based on individual progress and needs", benefit: "Enhances client experience and long-term engagement" },
    { name: 'Automated Content Creation', description: "Generates engaging content related to fitness, nutrition, and wellness for marketing and client education (e.g., blog posts, social media captions)", benefit: "Saves time for coaches and expands their online presence" },
    { name: 'Wearable Device Integration & Data Analysis', description: "Integrates with client wearable devices (e.g., smartwatches, fitness trackers) to collect and analyze health data for more precise coaching", benefit: "Provides deeper insights into client health and activity, enabling more accurate recommendations" },
    { name: 'Client Lead Qualification & Nurturing', description: "Analyzes potential client inquiries to identify high-value leads and automates initial nurturing communications", benefit: "Optimizes sales efforts and increases client acquisition" },
    { name: 'Performance Prediction & Benchmarking', description: "Predicts future client performance based on current data and allows benchmarking against similar profiles to set realistic expectations", benefit: "Provides valuable insights for both coach and client, aiding in motivation and planning" },
];

export default function FitnessCoachAIFunctionsPage() {
  return (
    <div className="w-full bg-gradient-to-br from-background to-muted/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                Comprehensive AI Functions for Fitness Coaches
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
                                {fitnessCoachAiFunctions.map((func) => (
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
