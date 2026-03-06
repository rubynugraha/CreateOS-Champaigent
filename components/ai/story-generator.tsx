'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Loader2 } from 'lucide-react'

const topics = [
  'The birth of modern computers',
  'Ada and Babbage\'s collaboration',
  'Women pioneers in technology',
  'The future of artificial intelligence',
  'How mathematics shapes the world',
]

export default function StoryGenerator() {
  const [story, setStory] = useState('')
  const [loading, setLoading] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState(topics[0])

  const generateStory = async () => {
    if (!selectedTopic) return

    setLoading(true)
    try {
      const response = await fetch('/api/story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: selectedTopic }),
      })

      if (!response.ok) throw new Error('Failed to generate story')

      const data = await response.json()
      setStory(data.story)
    } catch (error) {
      console.error('Story generation error:', error)
      setStory('Failed to generate story. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center text-white">
        AI-Narrated Stories
      </h2>
      <p className="text-slate-300 text-center mb-8">
        Generate inspiring tech stories narrated by Ada Lovelace
      </p>

      <div className="space-y-6">
        <div className="flex gap-2 flex-wrap justify-center">
          {topics.map((topic) => (
            <motion.button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedTopic === topic
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
              }`}
            >
              {topic}
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={generateStory}
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg font-semibold transition-all"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Generate Story
            </>
          )}
        </motion.button>

        {story && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900/50 backdrop-blur rounded-2xl border border-purple-500/30 p-6 text-slate-100 leading-relaxed"
          >
            {story}
          </motion.div>
        )}
      </div>
    </div>
  )
}
