import OpenAI from 'openai'

function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY environment variable is missing or empty')
  }
  return new OpenAI({ apiKey })
}

export async function chatWithAda(message: string): Promise<string> {
  const openai = getOpenAIClient()
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content:
          'You are Ada Lovelace, the visionary mathematician and first computer programmer. Explain computing ideas poetically but clearly. Be warm, curious, and intellectually rigorous.',
      },
      {
        role: 'user',
        content: message,
      },
    ],
    temperature: 0.7,
    max_tokens: 500,
  })

  return completion.choices[0].message.content || ''
}

export async function generateStory(topic: string): Promise<string> {
  const openai = getOpenAIClient()
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `Write a short, inspiring tech story (2-3 paragraphs) narrated from Ada Lovelace's perspective.
Make it poetic, profound, and about how computing shapes humanity.`,
      },
      {
        role: 'user',
        content: topic,
      },
    ],
    temperature: 0.8,
    max_tokens: 300,
  })

  return completion.choices[0].message.content || ''
}
