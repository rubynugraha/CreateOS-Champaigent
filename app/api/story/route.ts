export const runtime = 'edge'

import { generateStory } from '@/lib/openai'

export async function POST(req: Request) {
  try {
    const { topic } = await req.json()

    if (!topic) {
      return Response.json({ error: 'Topic is required' }, { status: 400 })
    }

    const story = await generateStory(topic)

    return Response.json({ story })
  } catch (error) {
    console.error('Story generation error:', error)
    return Response.json(
      { error: 'Failed to generate story' },
      { status: 500 }
    )
  }
}
