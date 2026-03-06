'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import ParticleBackground from './hero/particle-background'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Canvas Particle Background */}
      <div className="absolute inset-0 -z-10">
        <ParticleBackground />
      </div>
      
      <motion.div
        className="relative z-10 text-center max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Ada Portrait */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full blur-2xl opacity-50 animate-pulse" />
            <Image
              src="/ada-portrait.jpg"
              width={200}
              height={200}
              alt="Ada Lovelace - First Computer Programmer"
              className="relative rounded-full border-4 border-purple-500/50 shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Ada Lovelace
          </h1>
          <p className="text-xl md:text-2xl text-amber-300 font-light mb-6">
            The Visionary Mathematician & First Computer Programmer
          </p>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          className="text-lg md:text-xl text-slate-300 italic mb-8 border-l-4 border-purple-500 pl-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          "The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers."
        </motion.blockquote>

        {/* Description */}
        <motion.p
          className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Born in 1815, Ada Lovelace imagined machines that could create art and music long before computers existed. Her visionary work on Charles Babbage's Analytical Engine marked the beginning of computer science.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
            onClick={() => {
              document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Explore Timeline
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
            onClick={() => {
              document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Try Algorithm Playground
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-purple-400" />
      </motion.div>
    </section>
  )
}
