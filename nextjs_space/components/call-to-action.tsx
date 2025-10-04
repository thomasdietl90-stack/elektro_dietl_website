
'use client'

import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CallToAction() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-teal-900 to-teal-700 overflow-hidden">
      <div className="absolute inset-0 hexagon-pattern opacity-10" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Bereit für Ihr nächstes Projekt?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. 
            Gemeinsam finden wir die optimale Lösung für Ihre Anforderungen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-900 rounded-lg font-semibold hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl"
            >
              Kontaktformular
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+4916025676671"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              <Phone className="mr-2 h-5 w-5" />
              0160/2567671
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
