"use client"

import { useEffect } from "react"
import Script from "next/script"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react"

export default function ContactPage() {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement("link")
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    return () => {
      // Cleanup link on unmount
      const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')
      if (existingLink) {
        document.head.removeChild(existingLink)
      }
    }
  }, [])

  const handleStartMeeting = () => {
    window.open("https://calendly.com/famdispatchingllc/30min", "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <Navigation />
      <WhatsAppButton />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-6">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Let's Start Your Project
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to begin? Get a free consultation and quote today
          </p>
        </div>
      </section>

      <section className="py-12 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Phone</h3>
                <p className="text-gray-700 mb-1">+1 (440) 490-7685</p>
                <p className="text-sm text-gray-500">Mon-Fri 8am-6pm</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Email</h3>
                <p className="text-gray-700 mb-1">info@builttough.com</p>
                <p className="text-sm text-gray-500">We reply within 24 hours</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Service Area</h3>
                <p className="text-gray-700 mb-1">All of New Jersey</p>
                <p className="text-sm text-gray-500">Licensed & Insured</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Business Hours</h3>
                <p className="text-gray-700 text-sm mb-1">Monday - Friday: 8am - 6pm</p>
                <p className="text-gray-700 text-sm mb-1">Saturday: 9am - 4pm</p>
                <p className="text-gray-700 text-sm">Sunday: Closed</p>
              </div>
            </div>

            {/* Calendly Section */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Schedule a Meeting</h2>
                  <p className="text-gray-600 text-lg mb-6">
                    Book a free 30-minute consultation to discuss your project
                  </p>
                  <Button
                    onClick={handleStartMeeting}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-8 py-6 shadow-lg hover-scale"
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    Start Meeting
                  </Button>
                </div>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/famdispatchingllc/30min"
                  style={{ minHeight: "700px", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
