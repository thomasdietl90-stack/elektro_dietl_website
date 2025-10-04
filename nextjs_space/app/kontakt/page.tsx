
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import HexagonBackground from '@/components/hexagon-background'
import ContactForm from '@/components/contact-form'

export default function ContactPage() {
  return (
    <div className="relative">
      <HexagonBackground />
      
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-teal-900 to-teal-700">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Kontakt
          </h1>
          <p className="text-xl text-teal-100 text-center max-w-3xl mx-auto">
            Wir freuen uns auf Ihre Anfrage
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Kontaktinformationen
              </h2>
              
              <div className="space-y-6">
                {/* Company Name */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Elektro&IT Engineering Dietl
                  </h3>
                  <p className="text-gray-600">Thomas Dietl, MSc</p>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                    <p className="text-gray-600">
                      Kapellengasse 8<br />
                      94234 Viechtach
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                    <a 
                      href="tel:+4916025676671" 
                      className="text-teal-600 hover:text-teal-700"
                    >
                      0160/2567671
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">E-Mail</h4>
                    <a 
                      href="mailto:elektro-it-dietl@gmx.de" 
                      className="text-teal-600 hover:text-teal-700"
                    >
                      elektro-it-dietl@gmx.de
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Erreichbarkeit</h4>
                    <p className="text-gray-600">
                      Montag - Freitag: 8:00 - 18:00 Uhr<br />
                      Samstag: Nach Vereinbarung
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-600 to-teal-800">
                  <MapPin className="h-16 w-16 text-white opacity-50" />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Nachricht senden
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
