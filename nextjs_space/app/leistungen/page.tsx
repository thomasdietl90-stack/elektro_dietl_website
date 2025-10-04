
import { Sun, Home, Zap, Cog, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import HexagonBackground from '@/components/hexagon-background'
import ServiceCard from '@/components/service-card'

export default function ServicesPage() {
  const services = [
    {
      icon: Sun,
      title: "PV-Anlagen (Photovoltaik)",
      description: "Professionelle Planung und Installation von Photovoltaikanlagen für Ihr Zuhause",
      featured: true,
      benefits: [
        "Individuelle Bedarfsanalyse und Wirtschaftlichkeitsberechnung",
        "Hochwertige Solarmodule und Wechselrichter",
        "Professionelle Montage auf Dach oder Freifläche",
        "Integration von Batteriespeichern für maximale Eigennutzung",
        "Anmeldung und Inbetriebnahme",
        "Monitoring und Wartung",
        "Nachhaltige Energieversorgung und Kosteneinsparung"
      ],
      details: "Mit einer eigenen Photovoltaikanlage produzieren Sie Ihren eigenen sauberen Strom und machen sich unabhängiger von steigenden Energiepreisen. Wir planen und installieren Ihre PV-Anlage professionell und beraten Sie umfassend zu Fördermöglichkeiten. Von der ersten Beratung über die Montage bis zur Inbetriebnahme – alles aus einer Hand."
    },
    {
      icon: Home,
      title: "Smart Home Systeme",
      description: "Intelligente Hausautomation für mehr Komfort, Sicherheit und Energieeffizienz",
      featured: true,
      benefits: [
        "Zentrale Steuerung von Beleuchtung, Heizung und mehr",
        "Sprachsteuerung (Alexa, Google Home, Apple HomeKit)",
        "Automatisierte Szenarien und Zeitsteuerung",
        "Energiemonitoring und Optimierung",
        "Sicherheitsfunktionen (Kameras, Sensoren, Alarme)",
        "Fernzugriff per Smartphone oder Tablet",
        "Integration verschiedener Hersteller und Systeme"
      ],
      details: "Smart Home bedeutet intelligentes Wohnen. Wir installieren und konfigurieren moderne Smart Home Systeme, die Ihren Alltag komfortabler und energieeffizienter machen. Steuern Sie Beleuchtung, Heizung, Jalousien und Sicherheitstechnik bequem per App oder Sprachbefehl."
    },
    {
      icon: Zap,
      title: "Elektroinstallationen",
      description: "Alle klassischen Elektroarbeiten für Neubau, Renovierung und Erweiterung",
      featured: false,
      benefits: [
        "Komplette Elektroinstallationen für Neubau und Renovierung",
        "Erweiterung bestehender Elektroinstallationen",
        "Installation von Steckdosen, Schaltern und Lampen",
        "Verlegung von Leitungen und Kabeln",
        "Anschluss von Haushaltsgeräten und Technik",
        "E-Mobilität: Installation von Wallboxen/Ladestationen",
        "Elektroprüfungen und Sicherheitschecks"
      ],
      details: "Von der einfachen Steckdose bis zur kompletten Elektroinstallation eines Neubaus – wir sind Ihr kompetenter Partner für alle Elektroarbeiten. Unsere Arbeit entspricht allen aktuellen Normen und Sicherheitsstandards."
    },
    {
      icon: Cog,
      title: "Automatisierungen",
      description: "Individuelle Automatisierungslösungen für Haushalt und Technik",
      featured: false,
      benefits: [
        "Automatische Jalousie- und Rollladensteuerung",
        "Lichtsteuerung mit Zeitschaltung und Sensorik",
        "Heizungssteuerung und Klimaautomatisierung",
        "Bewässerungssysteme",
        "Garagentorsteuerung",
        "Sicherheitstechnik (automatische Alarme, Videoüberwachung)",
        "Integration in bestehende Systeme"
      ],
      details: "Automatisierung bedeutet mehr Komfort und Effizienz. Wir entwickeln individuelle Automatisierungslösungen, die perfekt auf Ihre Bedürfnisse zugeschnitten sind und Ihnen Zeit und Energie sparen."
    }
  ]

  const featuredServices = services.filter(s => s.featured)
  const regularServices = services.filter(s => !s.featured)

  return (
    <div className="relative">
      <HexagonBackground />
      
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-teal-900 to-teal-700">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Unsere Leistungen
          </h1>
          <p className="text-xl text-teal-100 text-center max-w-3xl mx-auto">
            Professionelle Elektrotechnik für moderne Anforderungen
          </p>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Unsere Spezialgebiete</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wir haben uns auf zukunftsweisende Technologien spezialisiert, die Nachhaltigkeit, 
              Komfort und Effizienz vereinen.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} service={service} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Regular Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Weitere Leistungen</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Umfassender Service für alle Bereiche der Elektrotechnik
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {regularServices.map((service, index) => (
              <ServiceCard key={index} service={service} featured={false} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-teal-900 to-teal-700">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Interesse an unseren Leistungen?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch
          </p>
          <Link 
            href="/kontakt"
            className="inline-flex items-center px-8 py-4 bg-white text-teal-900 rounded-lg font-semibold hover:bg-teal-50 transition-colors shadow-lg"
          >
            Jetzt Kontakt aufnehmen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
