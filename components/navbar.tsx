'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/50 border-b border-purple-500/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Sparkles className="w-6 h-6 text-purple-400 group-hover:text-pink-400 transition-colors" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AdaVerse
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#timeline"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-slate-300 hover:text-purple-400 transition-colors font-medium"
            >
              Timeline
            </a>
            <a
              href="#playground"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-slate-300 hover:text-purple-400 transition-colors font-medium"
            >
              Playground
            </a>
            <a
              href="#women-in-tech"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('women-in-tech')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-slate-300 hover:text-purple-400 transition-colors font-medium"
            >
              Women in Tech
            </a>
          </div>

          {/* Mobile Menu Indicator */}
          <div className="md:hidden flex gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
