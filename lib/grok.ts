function getGroqApiKey() {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    throw new Error('GROQ_API_KEY environment variable is missing or empty');
  }
  return apiKey;
}

export async function chatWithAda(message: string): Promise<string> {
  const apiKey = getGroqApiKey();
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'compound-mini',
      messages: [
        {
          role: 'system',
          content: 'You are Ada Lovelace, the visionary mathematician and first computer programmer. Explain computing ideas poetically but clearly. Be warm, curious, and intellectually rigorous.',
        },
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    }),
  });

  if (!response.ok) {
    throw new Error(`Groq API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content || '';
}

export async function generateStory(topic: string): Promise<string> {
  const apiKey = getGroqApiKey();
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'compound-mini',
      messages: [
        {
          role: 'system',
          content: `Write a short, inspiring tech story (2-3 paragraphs) narrated from Ada Lovelace's perspective. Make it poetic, profound, and about how computing shapes humanity.`,
        },
        {
          role: 'user',
          content: topic,
        },
      ],
      temperature: 0.8,
      max_tokens: 300,
    }),
  });

  if (!response.ok) {
    throw new Error(`Groq API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content || '';
}