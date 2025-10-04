
'use client'

import { Sun, Home, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function FocusAreas() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const focuses = [
    {
      icon: Sun,
      title: "PV-Anlagen",
      subtitle: "Photovoltaik",
      description: "Werden Sie unabhängig von steigenden Strompreisen. Wir planen und installieren Ihre maßgeschneiderte Photovoltaikanlage mit oder ohne Batteriespeicher.",
      benefits: [
        "Kostenersparnis durch Eigenverbrauch",
        "Unabhängigkeit vom Energieversorger",
        "Beitrag zum Klimaschutz",
        "Wertsteigerung Ihrer Immobilie"
      ]
    },
    {
      icon: Home,
      title: "Smart Home",
      subtitle: "Intelligentes Wohnen",
      description: "Erleben Sie modernes Wohnen: Steuern Sie Beleuchtung, Heizung, Jalousien und mehr bequem per App oder Sprachbefehl.",
      benefits: [
        "Maximaler Komfort im Alltag",
        "Energieeinsparung durch intelligente Steuerung",
        "Erhöhte Sicherheit",
        "Flexibel erweiterbar"
      ]
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unsere Spezialgebiete
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir haben uns auf zukunftsweisende Technologien spezialisiert
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {focuses.map((focus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-teal-600 to-teal-800 p-8 text-white">
                <focus.icon className="h-16 w-16 mb-4" />
                <h3 className="text-3xl font-bold mb-2">{focus.title}</h3>
                <p className="text-teal-100">{focus.subtitle}</p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-6 text-lg">
                  {focus.description}
                </p>
                <div className="space-y-3 mb-6">
                  {focus.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/leistungen"
                  className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700"
                >
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
