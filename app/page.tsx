import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import CinematicTimeline from '@/components/timeline/cinematic-timeline'
import AlgorithmVisualizer from '@/components/algorithm/algorithm-visualizer'
import WomenInTech from '@/components/women-in-tech'
import AdaChat from '@/components/ai/ada-chat'
import StoryGenerator from '@/components/ai/story-generator'
import { EngineWrapper } from '@/components/engine-wrapper'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* AI Ada Chat Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-purple-950">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-white">
            Talk to Ada
          </h2>
          <p className="text-slate-300 text-center mb-8">
            Explore computing concepts through conversation with Ada Lovelace herself
          </p>
          <AdaChat />
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-4 bg-slate-950">
        <CinematicTimeline />
      </section>

      {/* Algorithm Lab Section */}
      <section id="playground" className="py-20 px-4 bg-gradient-to-b from-slate-950 to-purple-950">
        <AlgorithmVisualizer />
      </section>

      {/* 3D Analytical Engine Section */}
      <section id="engine" className="py-20 px-4 bg-gradient-to-b from-slate-950 to-purple-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-white">
            The Analytical Engine
          </h2>
          <p className="text-slate-300 text-center mb-8">
            Explore the mechanical computer that Ada imagined into existence
          </p>
          <EngineWrapper />
        </div>
      </section>

      {/* Story Generator Section */}
      <section className="py-20 px-4 bg-slate-950">
        <StoryGenerator />
      </section>

      {/* Women in Tech Section */}
      <section id="women-in-tech" className="py-20 px-4 bg-gradient-to-b from-slate-950 to-purple-950">
        <WomenInTech />
      </section>

      <Footer />
    </main>
  )
}
