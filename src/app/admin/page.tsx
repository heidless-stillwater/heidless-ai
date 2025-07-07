import { BriefAnalyzerForm } from "@/app/brief-analyzer/BriefAnalyzerForm";

export default function AdminPage() {
  return (
    <div className="w-full mx-auto md:max-w-[95%] px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground md:text-xl">
          Use the Brief Analyzer tool below to get AI-powered summaries of client briefs.
        </p>
      </div>
      <div className="max-w-3xl mx-auto mt-10">
        <BriefAnalyzerForm />
      </div>
    </div>
  );
}
