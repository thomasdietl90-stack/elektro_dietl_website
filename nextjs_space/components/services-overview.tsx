
'use client'

import { Sun, Home, Zap, Cog } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ServicesOverview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Sun,
      title: "PV-Anlagen",
      description: "Professionelle Planung und Installation von Photovoltaikanlagen für nachhaltige Energieversorgung"
    },
    {
      icon: Home,
      title: "Smart Home",
      description: "Intelligente Hausautomation für mehr Komfort, Sicherheit und Energieeffizienz"
    },
    {
      icon: Zap,
      title: "Elektroinstallationen",
      description: "Alle klassischen Elektroarbeiten für Neubau, Renovierung und Erweiterung"
    },
    {
      icon: Cog,
      title: "Automatisierungen",
      description: "Individuelle Automatisierungslösungen für Haushalt und Technik"
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Umfassende Elektrotechnik-Lösungen für private Kunden – 
            von der Beratung bis zur Umsetzung
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href="/leistungen">
                <div className="h-full p-6 bg-gradient-to-br from-teal-50 to-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                  <div className="bg-teal-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
