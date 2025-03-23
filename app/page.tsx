"use client";
import { ChatDemo } from "@/components/chat-demo";
import { getAIResponse } from "@/server/ai";
import { useState } from 'react';

export default function Home() {

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const handleClick = async () => {
    try {
      const response = await getAIResponse(prompt);
      setResponse(response);
      console.log(response);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center max-w-2xl mx-auto">
      <h1>AI - Next.js</h1>
      <input 
        type="text" 
        placeholder="Enter your prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
      {response && <p>{response}</p>}
      <div className="border rounded-md p-4">
        <ChatDemo />
      </div>    
    </main>

  );  
}


