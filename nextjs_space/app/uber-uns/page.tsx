
import Image from 'next/image'
import { Users, Award, CheckCircle, Target } from 'lucide-react'
import HexagonBackground from '@/components/hexagon-background'

export default function AboutPage() {
  return (
    <div className="relative">
      <HexagonBackground />
      
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-900 to-teal-700">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Über uns
          </h1>
          <p className="text-xl text-teal-100 text-center max-w-3xl mx-auto">
            Erfahrung, Kompetenz und Leidenschaft für moderne Elektrotechnik
          </p>
        </div>
      </section>

      {/* Thomas Dietl Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Users className="h-10 w-10 text-teal-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Thomas Dietl, MSc</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Als Inhaber von Elektro&IT Engineering Dietl verfüge ich über einen 
                  Master of Science in Elektrotechnik und bringe über 10 Jahre praktische 
                  Erfahrung im Elektrohandwerk mit.
                </p>
                <p>
                  Meine akademische Ausbildung kombiniert mit langjähriger Praxiserfahrung 
                  ermöglicht es mir, auch komplexe technische Herausforderungen professionell 
                  und zuverlässig zu lösen.
                </p>
                <p>
                  Besonders spezialisiert habe ich mich auf die Zukunftsthemen Smart Home 
                  und Photovoltaik – Bereiche, die nicht nur technisch anspruchsvoll sind, 
                  sondern auch einen wichtigen Beitrag zur Energiewende leisten.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-teal-800/20 flex items-center justify-center">
                <Award className="h-32 w-32 text-teal-600 opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Unsere Stärken
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Über 10 Jahre Erfahrung",
                description: "Langjährige Expertise im Elektrohandwerk mit akademischem Hintergrund"
              },
              {
                icon: CheckCircle,
                title: "Qualität & Zuverlässigkeit",
                description: "Höchste Qualitätsstandards und termingerechte Ausführung aller Projekte"
              },
              {
                icon: Target,
                title: "Spezialisierung",
                description: "Fokus auf innovative Lösungen: PV-Anlagen und Smart Home Systeme"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <item.icon className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Unsere Philosophie
            </h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                Bei Elektro&IT Engineering Dietl steht der Kunde im Mittelpunkt. Wir glauben 
                daran, dass gute Elektrotechnik nicht nur funktionieren muss, sondern auch 
                verständlich und zukunftssicher sein sollte.
              </p>
              <p>
                Deshalb nehmen wir uns Zeit für ausführliche Beratung und entwickeln gemeinsam 
                mit unseren Kunden individuelle Lösungen, die perfekt zu ihren Bedürfnissen 
                und ihrem Budget passen.
              </p>
              <p>
                Ob es um die Installation einer effizienten PV-Anlage, die Einrichtung eines 
                komfortablen Smart Home Systems oder klassische Elektroinstallationen geht – 
                wir arbeiten mit höchster Präzision, modernem Equipment und bleiben stets auf 
                dem neuesten Stand der Technik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-teal-900 to-teal-700">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Warum Elektro&IT Engineering Dietl?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Persönliche Beratung und individuelle Lösungen",
              "Über 10 Jahre Erfahrung im Elektrohandwerk",
              "Akademischer Hintergrund (MSc Elektrotechnik)",
              "Spezialisierung auf PV-Anlagen und Smart Home",
              "Zuverlässige und termingerechte Projektabwicklung",
              "Faire Preise und transparente Kostenplanung",
              "Einsatz modernster Technologien",
              "Umfassender Service von Beratung bis Wartung"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-teal-300 flex-shrink-0 mt-1" />
                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
