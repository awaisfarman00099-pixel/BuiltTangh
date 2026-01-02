import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img
              src="/Your paragraph text (1).png"
              alt="Built Tough Construction"
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              Building excellence in New Jersey since 1994. Your trusted partner for residential and commercial
              construction.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-4 h-4 text-gray-600 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-4 h-4 text-gray-600 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-gray-600 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>Kitchen Remodeling</li>
              <li>Bathroom Renovations</li>
              <li>Decks & Porches</li>
              <li>Home Additions</li>
              <li>Commercial Construction</li>
              <li>Interior Trim</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-900 font-medium text-sm">+1 (440) 490-7685</div>
                  <div className="text-xs text-gray-500 mt-0.5">Mon-Fri 8am-6pm</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="mailto:info@builttough.com"
                    className="text-gray-900 hover:text-blue-600 transition-colors font-medium text-sm"
                  >
                    info@builttough.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                <div className="text-gray-900 font-medium text-sm">Serving all of New Jersey</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Built Tough Construction. All rights reserved.04f9ad64ed24a48f.vercel-dns-017.com.
          </p>
        </div>
      </div>
    </footer>
  )
}
