'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Zap } from 'lucide-react'

export default function AlgorithmVisualizer() {
  const [fibNum, setFibNum] = useState(8)
  const [fibResult, setFibResult] = useState<number[]>([])
  const [primeNum, setPrimeNum] = useState(20)
  const [primeResult, setPrimeResult] = useState<number[]>([])
  const [activeTab, setActiveTab] = useState('fibonacci')

  const fibonacci = (n: number) => {
    const arr: number[] = [0, 1]
    for (let i = 2; i < n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2]
    }
    setFibResult(arr.slice(0, n))
  }

  const primeChecker = (n: number) => {
    const primes: number[] = []
    for (let i = 2; i <= n; i++) {
      let isPrime = true
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false
          break
        }
      }
      if (isPrime) primes.push(i)
    }
    setPrimeResult(primes)
  }

  return (
    <section id="playground" className="py-32 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
            <Zap className="w-8 h-8 text-orange-400" />
            Algorithm Playground
          </h2>
          <p className="text-slate-400 text-lg">Experience the algorithms that changed the world</p>
        </motion.div>

        {/* Algorithm Cards */}
        <motion.div
          className="bg-slate-800/30 backdrop-blur border border-purple-500/30 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-900/50">
              <TabsTrigger value="fibonacci">Fibonacci Sequence</TabsTrigger>
              <TabsTrigger value="prime">Prime Numbers</TabsTrigger>
            </TabsList>

            {/* Fibonacci Tab */}
            <TabsContent value="fibonacci" className="space-y-6">
              <div className="bg-slate-900/50 rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Fibonacci Sequence</h3>
                <p className="text-slate-300 mb-6">
                  Generate a Fibonacci sequence where each number is the sum of the two preceding ones. This ancient algorithm inspired by nature demonstrates recursive thinking.
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        How many numbers? (max 15)
                      </label>
                      <Input
                        type="number"
                        min="2"
                        max="15"
                        value={fibNum}
                        onChange={(e) => setFibNum(Math.max(2, Math.min(15, Number(e.target.value))))}
                        className="bg-slate-800 border-purple-500/30 text-white"
                      />
                    </div>
                    <div className="flex items-end">
                      <Button
                        onClick={() => fibonacci(fibNum)}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      >
                        Generate
                      </Button>
                    </div>
                  </div>

                  {fibResult.length > 0 && (
                    <motion.div
                      className="pt-6 border-t border-purple-500/20"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className="text-sm text-slate-400 mb-3">Sequence:</p>
                      <div className="flex flex-wrap gap-2">
                        {fibResult.map((num, idx) => (
                          <motion.div
                            key={idx}
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 font-mono font-bold"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            {num}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </TabsContent>

            {/* Prime Numbers Tab */}
            <TabsContent value="prime" className="space-y-6">
              <div className="bg-slate-900/50 rounded-lg p-6 border border-pink-500/20">
                <h3 className="text-2xl font-bold text-pink-300 mb-4">Prime Numbers Finder</h3>
                <p className="text-slate-300 mb-6">
                  Find all prime numbers up to a given number. Primes are fundamental to cryptography and secure communication.
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Find primes up to (max 100)
                      </label>
                      <Input
                        type="number"
                        min="2"
                        max="100"
                        value={primeNum}
                        onChange={(e) => setPrimeNum(Math.max(2, Math.min(100, Number(e.target.value))))}
                        className="bg-slate-800 border-pink-500/30 text-white"
                      />
                    </div>
                    <div className="flex items-end">
                      <Button
                        onClick={() => primeChecker(primeNum)}
                        className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600"
                      >
                        Calculate
                      </Button>
                    </div>
                  </div>

                  {primeResult.length > 0 && (
                    <motion.div
                      className="pt-6 border-t border-pink-500/20"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <p className="text-sm text-slate-400 mb-3">
                        Found {primeResult.length} prime numbers:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {primeResult.map((num, idx) => (
                          <motion.div
                            key={idx}
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500/20 to-orange-500/20 border border-pink-500/30 text-pink-300 font-mono font-bold"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            {num}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
