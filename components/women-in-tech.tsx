'use client'

import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

const women = [
  {
    name: 'Ada Lovelace',
    era: '1815-1852',
    contribution: 'First Computer Programmer',
    description: 'Pioneered computer algorithm and visionary for computing potential',
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Grace Hopper',
    era: '1906-1992',
    contribution: 'COBOL Programming Language',
    description: 'Created the first compiler and revolutionized programming languages',
    color: 'from-pink-500 to-pink-600'
  },
  {
    name: 'Hedy Lamarr',
    era: '1914-2000',
    contribution: 'Frequency Hopping Technology',
    description: 'Invented frequency-hopping spread spectrum, foundation of WiFi and Bluetooth',
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'Sheryl Sandberg',
    era: '1969-Present',
    contribution: 'Tech Leadership',
    description: 'COO of Meta, advocate for women in technology and workplace equality',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Katherine Johnson',
    era: '1918-2020',
    contribution: 'Space Program Mathematics',
    description: 'Critical mathematical computations for NASA\'s space missions',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    name: 'Satya Nadella',
    era: 'Advocates',
    contribution: 'Diversity in Tech',
    description: 'Leaders and pioneers advancing women representation in technology',
    color: 'from-green-500 to-green-600'
  }
]

export default function WomenInTech() {
  return (
    <section id="women-in-tech" className="relative py-32 px-4 w-full">
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <Users className="w-8 h-8 text-pink-400" />
            Women in Computing
          </h2>
          <p className="text-slate-400 text-lg">Celebrating pioneers and leaders who shaped the digital world</p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {women.map((person, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Gradient Border Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${person.color} rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300`} />

              {/* Card Content */}
              <motion.div
                className="relative bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl p-8 h-full hover:border-purple-500/60 transition-colors"
                whileHover={{ y: -8 }}
              >
                {/* Color Accent Bar */}
                <div className={`h-1 w-12 bg-gradient-to-r ${person.color} rounded-full mb-6`} />

                {/* Name */}
                <h3 className="text-2xl font-bold text-white mb-2">{person.name}</h3>

                {/* Era */}
                <p className="text-sm text-slate-400 mb-3">{person.era}</p>

                {/* Contribution */}
                <p className={`text-lg font-semibold bg-gradient-to-r ${person.color} bg-clip-text text-transparent mb-4`}>
                  {person.contribution}
                </p>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed">{person.description}</p>

                {/* Learn More Link */}
                <motion.div
                  className="mt-6 pt-6 border-t border-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <a
                    href="#"
                    className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors"
                  >
                    Learn more →
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
