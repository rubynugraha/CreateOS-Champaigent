'use client'

import { motion } from 'framer-motion'

const events = [
  {
    year: '1815',
    title: 'Ada Lovelace Born',
    description: 'Augusta Ada King is born on December 10 to Lord Byron and Annabella Milbanke in London.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    year: '1833',
    title: 'Meets Charles Babbage',
    description: 'At age 17, Ada meets Charles Babbage and becomes fascinated with his Analytical Engine.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    year: '1843',
    title: 'First Algorithm Published',
    description: 'Ada publishes her groundbreaking notes on the Analytical Engine, including the first computer algorithm.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    year: '1852',
    title: 'Ada Passes Away',
    description: 'Ada Lovelace dies at age 36, leaving behind a legacy that shaped the future of computing.',
    color: 'from-blue-500 to-blue-600'
  }
]

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Life & Legacy
          </h2>
          <p className="text-slate-400 text-lg">Journey through Ada's remarkable life and contributions to science</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 rounded-full" />

          {/* Timeline Events */}
          <div className="space-y-16">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 md:gap-12`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 transition-colors"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-2xl font-bold bg-gradient-to-r ${event.color} bg-clip-text text-transparent`}>
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-slate-300">{event.description}</p>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="flex-shrink-0 z-10">
                  <motion.div
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${event.color} shadow-lg shadow-purple-500/50 border-4 border-slate-950`}
                    whileHover={{ scale: 1.4 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  />
                </div>

                {/* Spacer */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
