'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const timelineEvents = [
  {
    year: 1815,
    title: 'Ada Lovelace Born',
    description: 'Augusta Ada King-Noel enters the world in London.',
  },
  {
    year: 1833,
    title: 'Meets Charles Babbage',
    description:
      'At 17, Ada meets the brilliant mathematician and begins a lifelong collaboration.',
  },
  {
    year: 1843,
    title: 'First Algorithm',
    description:
      'Ada publishes her translation of Luigi Menabrea\'s paper on the Analytical Engine, adding notes that describe what we now call the first algorithm.',
  },
  {
    year: 1852,
    title: 'Ada Passes Away',
    description:
      'At 36, Ada\'s legacy endures as the visionary who imagined computing a century before it existed.',
  },
  {
    year: 2024,
    title: 'AI Revolution',
    description:
      'Ada\'s dream of machines that think becomes reality through artificial intelligence.',
  },
]

export default function CinematicTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return (
    <div ref={ref} className="relative py-20 w-full">
      <div className="max-w-3xl mx-auto px-4 relative">
        <motion.h2
          style={{ opacity }}
          className="text-5xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
        >
          A Century of Vision
        </motion.h2>

        <div className="space-y-12">
          {timelineEvents.map((event, i) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-8"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  style={{ scale }}
                  className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                />
                {i < timelineEvents.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-purple-400 to-transparent mt-4" />
                )}
              </div>

              <motion.div
                style={{ opacity }}
                className="pb-8 pt-2"
              >
                <p className="text-3xl font-bold text-purple-300">{event.year}</p>
                <h3 className="text-xl font-semibold text-white mt-2">
                  {event.title}
                </h3>
                <p className="text-slate-300 mt-2">{event.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
