
import { CheckCircle, Image as ImageIcon } from 'lucide-react'
import HexagonBackground from '@/components/hexagon-background'

export default function ReferencesPage() {
  const projects = [
    {
      title: "PV-Anlage Einfamilienhaus",
      category: "Photovoltaik",
      description: "Installation einer 10 kWp PV-Anlage mit Batteriespeicher für maximale Eigennutzung",
      features: [
        "10 kWp Leistung",
        "8 kWh Batteriespeicher",
        "Monitoring-System",
        "Optimale Ausrichtung"
      ]
    },
    {
      title: "Smart Home Komplettlösung",
      category: "Smart Home",
      description: "Umfassende Smart Home Installation mit Beleuchtungs-, Heizungs- und Sicherheitssteuerung",
      features: [
        "Zentrale Steuerung",
        "Sprachsteuerung",
        "Energiemonitoring",
        "Sicherheitskameras"
      ]
    },
    {
      title: "Elektroinstallation Neubau",
      category: "Elektroinstallation",
      description: "Komplette Elektroinstallation eines Einfamilienhauses mit moderner Ausstattung",
      features: [
        "Vollständige Verkabelung",
        "E-Auto Ladestation",
        "LED-Beleuchtung",
        "Netzwerkverkabelung"
      ]
    },
    {
      title: "Automatisierung Ferienhaus",
      category: "Automatisierung",
      description: "Automatisierung von Jalousien, Beleuchtung und Heizung mit Fernzugriff",
      features: [
        "Jalousiesteuerung",
        "Heizungsautomatisierung",
        "Fernzugriff per App",
        "Zeitschaltungen"
      ]
    }
  ]

  return (
    <div className="relative">
      <HexagonBackground />
      
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-teal-900 to-teal-700">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Referenzen
          </h1>
          <p className="text-xl text-teal-100 text-center max-w-3xl mx-auto">
            Überzeugen Sie sich von unseren erfolgreich realisierten Projekten
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
            <p className="text-gray-700">
              Hier finden Sie eine Auswahl unserer erfolgreich abgeschlossenen Projekte. 
              Aus Gründen der Privatsphäre unserer Kunden zeigen wir exemplarische Projektbeschreibungen 
              ohne detaillierte Standortinformationen. Gerne stellen wir Ihnen im persönlichen Gespräch 
              weitere Referenzen zur Verfügung.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Image Placeholder */}
                <div className="relative h-56 bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center">
                  <ImageIcon className="h-24 w-24 text-white opacity-30" />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-teal-900">{project.category}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Unsere Leistung in Zahlen
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Jahre Erfahrung" },
              { number: "100+", label: "Zufriedene Kunden" },
              { number: "50+", label: "PV-Anlagen installiert" },
              { number: "30+", label: "Smart Home Projekte" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Das sagen unsere Kunden
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Sehr professionelle und zuverlässige Arbeit. Die PV-Anlage läuft einwandfrei und die Beratung war hervorragend.",
                author: "Familie M."
              },
              {
                text: "Endlich ein Smart Home, das wirklich funktioniert! Die Installation war schnell und die Einweisung sehr verständlich.",
                author: "Herr S."
              },
              {
                text: "Von der Planung bis zur Inbetriebnahme alles perfekt. Sehr empfehlenswert!",
                author: "Familie K."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-teal-600 font-semibold">– {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
