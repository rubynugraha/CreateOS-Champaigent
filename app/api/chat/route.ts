export const runtime = 'edge'

import { chatWithAda } from '@/lib/grok'

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    if (!message) {
      return Response.json({ error: 'Message is required' }, { status: 400 })
    }

    const response = await chatWithAda(message)

    return Response.json({ text: response })
  } catch (error) {
    console.error('Chat error:', error)
    return Response.json({ error: 'Failed to process chat' }, { status: 500 })
  }
}
