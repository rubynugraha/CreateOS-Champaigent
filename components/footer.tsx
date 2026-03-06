'use client'

import { motion } from 'framer-motion'
import { Github, Heart, Zap } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-purple-500/20 bg-slate-950/50 backdrop-blur py-16 px-4 w-full">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-400" />
              AdaVerse
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              An interactive tribute to Ada Lovelace and women pioneers in computing. Celebrating visionary minds that shaped the digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#timeline"
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  href="#playground"
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >
                  Algorithm Playground
                </a>
              </li>
              <li>
                <a
                  href="#women-in-tech"
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >
                  Women in Tech
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe for stories of women changing technology.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg bg-slate-800 border border-purple-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium text-sm transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-purple-500/20 mb-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            © {currentYear} AdaVerse. Made with{' '}
            <Heart className="w-4 h-4 inline text-pink-500 fill-pink-500" /> for women in tech.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-purple-400 transition-colors flex items-center gap-2"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="#"
              className="hover:text-purple-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-purple-400 transition-colors"
            >
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
