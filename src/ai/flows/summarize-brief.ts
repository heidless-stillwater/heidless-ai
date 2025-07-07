'use server';

/**
 * @fileOverview Summarizes a client brief or mockup description into key points to aid the design process.
 *
 * - summarizeBrief - A function that summarizes the brief.
 * - SummarizeBriefInput - The input type for the summarizeBrief function.
 * - SummarizeBriefOutput - The return type for the summarizeBrief function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeBriefInputSchema = z.object({
  brief: z
    .string()
    .describe('The client brief or mockup description to be summarized.'),
});
export type SummarizeBriefInput = z.infer<typeof SummarizeBriefInputSchema>;

const SummarizeBriefOutputSchema = z.object({
  summary: z.string().describe('A summary of the client brief.'),
});
export type SummarizeBriefOutput = z.infer<typeof SummarizeBriefOutputSchema>;

export async function summarizeBrief(input: SummarizeBriefInput): Promise<SummarizeBriefOutput> {
  return summarizeBriefFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeBriefPrompt',
  input: {schema: SummarizeBriefInputSchema},
  output: {schema: SummarizeBriefOutputSchema},
  prompt: `You are an expert design assistant. Summarize the key points of the following client brief or mockup description, to help a designer start their work. Return a concise summary.

Brief: {{{brief}}}`,
});

const summarizeBriefFlow = ai.defineFlow(
  {
    name: 'summarizeBriefFlow',
    inputSchema: SummarizeBriefInputSchema,
    outputSchema: SummarizeBriefOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
