'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function AnalyticalEngine() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let animationId: number
    let rotation = 0

    const drawGear = (
      x: number,
      y: number,
      radius: number,
      teeth: number,
      rotation: number,
      color: string
    ) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)

      // Draw gear teeth
      ctx.fillStyle = color
      ctx.beginPath()
      for (let i = 0; i < teeth; i++) {
        const angle = (i / teeth) * Math.PI * 2
        const nextAngle = ((i + 1) / teeth) * Math.PI * 2

        // Outer points
        const x1 = Math.cos(angle) * radius
        const y1 = Math.sin(angle) * radius
        const x2 = Math.cos(nextAngle) * radius
        const y2 = Math.sin(nextAngle) * radius

        // Inner valley
        const innerRadius = radius * 0.7
        const x3 = Math.cos(angle + (nextAngle - angle) * 0.5) * innerRadius
        const y3 = Math.sin(angle + (nextAngle - angle) * 0.5) * innerRadius

        if (i === 0) {
          ctx.moveTo(x1, y1)
        }
        ctx.lineTo(x2, y2)
        ctx.lineTo(x3, y3)
      }
      ctx.closePath()
      ctx.fill()

      // Draw center hole
      ctx.fillStyle = '#0f172a'
      ctx.beginPath()
      ctx.arc(0, 0, radius * 0.3, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
    }

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = '#0f172a'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw background grid
      ctx.strokeStyle = '#1e293b'
      ctx.lineWidth = 1
      for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.height)
        ctx.stroke()
      }
      for (let i = 0; i < canvas.height; i += 50) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.width, i)
        ctx.stroke()
      }

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Draw main gear
      drawGear(
        centerX - 80,
        centerY,
        40,
        12,
        rotation,
        '#a78bfa'
      )

      // Draw driven gears
      drawGear(
        centerX + 80,
        centerY,
        35,
        14,
        -rotation * 1.3,
        '#ec4899'
      )

      drawGear(
        centerX,
        centerY - 80,
        30,
        10,
        rotation * 0.9,
        '#f97316'
      )

      // Draw connecting rods
      ctx.strokeStyle = '#475569'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(centerX - 80, centerY)
      ctx.lineTo(centerX + 80, centerY)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(centerX, centerY - 80)
      ctx.stroke()

      // Draw central bearing
      ctx.fillStyle = '#64748b'
      ctx.beginPath()
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2)
      ctx.fill()

      rotation += 0.03

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-800">
        <canvas
          ref={canvasRef}
          className="w-full h-96 bg-slate-950"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
          <div className="text-purple-400 font-semibold mb-2">Mechanism Type</div>
          <div className="text-slate-300">Differential Gear System</div>
        </div>
        <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
          <div className="text-pink-400 font-semibold mb-2">Power Source</div>
          <div className="text-slate-300">Steam Engine</div>
        </div>
        <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
          <div className="text-orange-400 font-semibold mb-2">Output Method</div>
          <div className="text-slate-300">Punch Card Results</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-6 border border-slate-800"
      >
        <h3 className="text-white font-semibold mb-3">About the Engine</h3>
        <p className="text-slate-300 leading-relaxed">
          Charles Babbage's Analytical Engine was the first general-purpose computer. Ada Lovelace's notes on the engine were three times longer than the original article, and included what is recognized as the first computer algorithm.
        </p>
      </motion.div>
    </div>
  )
}
