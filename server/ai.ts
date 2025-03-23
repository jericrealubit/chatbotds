"use server";

import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

export async function getAIResponse(prompt: string) {
  try {
    const { text } = await generateText({
      model: openai('gpt-4-turbo'),
      prompt: prompt,
    });
    return text;  
  } catch (error) {
    console.error(error);
    return "An error occurred while generating the response.";
  }
  
}
