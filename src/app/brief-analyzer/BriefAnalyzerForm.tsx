"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { summarizeBrief, type SummarizeBriefOutput } from '@/ai/flows/summarize-brief';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';

const formSchema = z.object({
  brief: z.string().min(50, {
    message: "Brief must be at least 50 characters long.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function BriefAnalyzerForm() {
  const [result, setResult] = useState<SummarizeBriefOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brief: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const summary = await summarizeBrief({ brief: data.brief });
      setResult(summary);
    } catch (error) {
      console.error("Error summarizing brief:", error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to analyze the brief. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="brief"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Client Brief</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste your detailed client brief here..."
                        className="min-h-[200px] text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Analyze Brief
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {result && (
        <Card className="animate-in fade-in-50">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Summary</CardTitle>
            <CardDescription>Here are the key points from the brief:</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap text-base leading-relaxed">{result.summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
