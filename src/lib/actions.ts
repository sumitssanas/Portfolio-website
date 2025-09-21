'use server';

import { optimizeResume } from '@/ai/flows/optimize-resume';

export async function handleOptimizeResume(data: {
  resumeDataUri: string;
  jobDescription: string;
}) {
  try {
    const result = await optimizeResume(data);
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: errorMessage };
  }
}
