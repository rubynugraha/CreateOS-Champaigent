'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface AlgorithmData {
  name: string
  values: number[]
  description: string
  max: number
}

const algorithms: AlgorithmData[] = [
  {
    name: 'Fibonacci Sequence',
    values: [1, 1, 2, 3, 5, 8, 13, 21, 34],
    description: 'The sequence Ada studied in her mathematical work',
    max: 34,
  },
  {
    name: 'Prime Numbers',
    values: [2, 3, 5, 7, 11, 13, 17, 19, 23],
    description: 'Numbers divisible only by 1 and themselves',
    max: 23,
  },
  {
    name: 'Factorial Growth',
    values: [1, 2, 6, 24, 120, 720, 5040],
    description: 'Exponential growth pattern—fundamental to computing',
    max: 5040,
  },
]

export default function AlgorithmVisualizer() {
  const [selected, setSelected] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  const algorithm = algorithms[selected]
  const maxValue = algorithm.max

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center text-white">
        Algorithm Lab
      </h2>
      <p className="text-slate-300 text-center mb-12">
        Visualize the mathematical concepts that Ada explored
      </p>

      {/* Algorithm Selection */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {algorithms.map((algo, idx) => (
          <Button
            key={idx}
            onClick={() => {
              setSelected(idx)
              setIsAnimating(true)
            }}
            className={`transition-all ${
              selected === idx
                ? 'bg-purple-500 hover:bg-purple-600 text-white'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            {algo.name}
          </Button>
        ))}
      </div>

      {/* Visualization */}
      <div className="bg-slate-900 rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">
          {algorithm.name}
        </h3>
        <p className="text-slate-400 mb-8">{algorithm.description}</p>

        {/* Bar Chart */}
        <div className="h-64 flex items-end justify-center gap-2 px-4">
          {algorithm.values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ height: 0 }}
              animate={{ height: `${(value / maxValue) * 100}%` }}
              transition={{
                delay: idx * 0.1,
                duration: 0.6,
                ease: 'easeOut',
              }}
              className="flex-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t hover:from-purple-600 hover:to-pink-600 transition-colors group relative cursor-pointer"
              onAnimationComplete={() => {
                if (idx === algorithm.values.length - 1) {
                  setIsAnimating(false)
                }
              }}
            >
              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values List */}
        <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 text-center">
          {algorithm.values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.08 + 0.3,
                duration: 0.4,
              }}
              className="bg-slate-800 rounded px-3 py-2 text-slate-200 text-sm"
            >
              {value}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-slate-900 rounded-lg p-4 text-center">
          <div className="text-slate-400 text-sm mb-1">Count</div>
          <div className="text-3xl font-bold text-purple-400">
            {algorithm.values.length}
          </div>
        </div>
        <div className="bg-slate-900 rounded-lg p-4 text-center">
          <div className="text-slate-400 text-sm mb-1">Sum</div>
          <div className="text-3xl font-bold text-pink-400">
            {algorithm.values.reduce((a, b) => a + b, 0)}
          </div>
        </div>
        <div className="bg-slate-900 rounded-lg p-4 text-center">
          <div className="text-slate-400 text-sm mb-1">Max</div>
          <div className="text-3xl font-bold text-orange-400">
            {Math.max(...algorithm.values)}
          </div>
        </div>
      </div>
    </div>
  )
}
