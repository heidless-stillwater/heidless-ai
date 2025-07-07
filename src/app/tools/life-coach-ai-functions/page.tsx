
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const metadata = {
  title: 'AI Functions for Life Coaches | heidless ai',
  description: 'A comprehensive list of AI-powered capabilities to enhance life coaching, client development, and personal growth.',
};

const lifeCoachAiFunctions = [
    { name: 'Personalized Goal Setting & Action Planning', description: "Assists clients in defining clear, achievable, and meaningful goals across various life domains (e.g., career, relationships, health) and creates actionable steps", benefit: "Increases clarity, motivation, and provides a structured path to achievement" },
    { name: 'Dynamic Progress Tracking & Visualization', description: "Monitors client progress towards goals, tracks habits, and visualizes achievements over time with insightful dashboards and reports", benefit: "Keeps clients accountable, celebrates milestones, and helps coaches identify areas for intervention" },
    { name: 'Intelligent Habit Formation & Breaking', description: "Provides AI-driven strategies, personalized reminders, and motivational nudges to help clients build positive habits and overcome detrimental ones", benefit: "Fosters sustainable personal growth and long-term behavioral change" },
    { name: 'Emotional Intelligence & Resilience Development', description: "Offers tailored exercises, guided reflections, and insights to help clients understand, manage, and express their emotions effectively", benefit: "Improves self-awareness, emotional regulation, and enhances coping mechanisms for stress" },
    { name: 'Decision-Making Support & Scenario Analysis', description: "Guides clients through complex personal or professional decisions by analyzing options, potential outcomes, and aligning choices with core values", benefit: "Empowers clients to make informed, confident choices and reduces indecision" },
    { name: 'Communication Skills Enhancement', description: "Provides interactive practice scenarios, feedback on communication styles, and strategies for improving verbal and non-verbal interactions", benefit: "Strengthens relationships, improves professional presence, and resolves conflicts" },
    { name: 'Personalized Stress & Well-being Management', description: "Suggests tailored relaxation techniques, mindfulness exercises, and coping mechanisms based on client stress triggers and preferences", benefit: "Enhances mental well-being, reduces burnout, and promotes inner peace" },
    { name: 'Time Management & Productivity Optimization', description: "Helps clients identify time-wasting activities, prioritize tasks, and develop efficient routines to maximize productivity and reduce overwhelm", benefit: "Increases efficiency, improves work-life balance, and reduces procrastination" },
    { name: 'Resource Recommendation Engine', description: "Suggests highly relevant books, articles, online courses, workshops, or tools based on individual client needs, goals, and learning styles", benefit: "Accelerates learning, provides targeted support, and expands client's personal development toolkit" },
    { name: 'Client Engagement & Accountability Bots', description: "Offers 24/7 support for common queries, sends motivational check-ins, provides gentle reminders, and facilitates self-reflection exercises", benefit: "Improves client retention, enhances satisfaction, and extends coaching support beyond sessions" },
    { name: 'Mindset & Belief System Analysis', description: "Identifies limiting beliefs or negative thought patterns through client input and suggests reframing techniques or cognitive exercises", benefit: "Helps clients overcome mental blocks and foster a more positive outlook" },
    { name: 'Conflict Resolution Coaching', description: "Provides frameworks and communication strategies for clients to navigate interpersonal conflicts more effectively", benefit: "Improves relationship dynamics and reduces personal stress" },
    { name: 'Career Pathing & Skill Development', description: "Analyzes client skills, interests, and market trends to suggest potential career paths and relevant skill development opportunities", benefit: "Supports professional growth and career transitions" },
    { name: 'Personal Finance Habits & Budgeting Guidance', description: "Offers personalized advice on budgeting, saving, and spending habits to help clients achieve financial well-being", benefit: "Promotes financial literacy and helps achieve monetary goals" },
    { name: 'Work-Life Balance Optimization', description: "Assists clients in identifying imbalances and developing strategies to create a healthier, more fulfilling integration of work and personal life", benefit: "Reduces stress, prevents burnout, and increases overall life satisfaction" },
];

export default function LifeCoachAIFunctionsPage() {
  return (
    <div className="w-full bg-gradient-to-br from-background to-muted/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                Comprehensive AI Functions for Life Coaches
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
                                {lifeCoachAiFunctions.map((func) => (
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
