
'use client'

import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-teal-900 to-teal-700 overflow-hidden">
      {/* Hexagon Pattern Overlay */}
      <div className="absolute inset-0 hexagon-pattern opacity-10" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="h-8 w-8 text-teal-300" />
              <span className="text-teal-300 font-semibold">Über 10 Jahre Erfahrung</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Moderne Elektrotechnik für Ihr Zuhause
            </h1>
            
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Professionelle Lösungen für Elektroinstallationen, Smart Home, 
              PV-Anlagen und Automatisierungen – mit Fokus auf Nachhaltigkeit und Innovation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-900 rounded-lg font-semibold hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl"
              >
                Jetzt Beratung anfordern
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Unsere Leistungen
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Decorative Hexagons */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 border-4 border-teal-300 rotate-45 opacity-20" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-teal-300 rotate-45 opacity-30" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 border-4 border-teal-300 rotate-45 opacity-20" />
                </div>
              </div>
              {/* Center Icon */}
              <div className="relative z-10 bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <Zap className="h-32 w-32 text-teal-300" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
