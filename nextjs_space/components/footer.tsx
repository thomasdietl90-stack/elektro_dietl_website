
import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-teal-900 to-teal-700 text-white">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Elektro&IT Engineering Dietl</h3>
            <p className="text-teal-100 mb-4">
              Ihr zuverlässiger Partner für professionelle Elektrotechnik, 
              Smart Home und PV-Anlagen in Viechtach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-teal-100 hover:text-white transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/uber-uns" className="text-teal-100 hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="text-teal-100 hover:text-white transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/referenzen" className="text-teal-100 hover:text-white transition-colors">
                  Referenzen
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-teal-100">
                  Kapellengasse 8<br />94234 Viechtach
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+4916025676671" className="text-teal-100 hover:text-white transition-colors">
                  0160/2567671
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:elektro-it-dietl@gmx.de" className="text-teal-100 hover:text-white transition-colors">
                  elektro-it-dietl@gmx.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-600 mt-8 pt-8 text-center text-teal-100">
          <p>© {new Date().getFullYear()} Elektro&IT Engineering Dietl. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
