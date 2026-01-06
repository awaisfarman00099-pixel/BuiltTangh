"use client"

import { useEffect } from "react"
import Script from "next/script"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Calendar, MessageCircle } from "lucide-react"

export default function ContactPage() {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement("link")
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    // Add custom styles to hide scrollbar and ensure full visibility
    const style = document.createElement("style")
    style.textContent = `
      .calendly-inline-widget {
        overflow: hidden !important;
      }
      .calendly-inline-widget iframe {
        height: 100% !important;
        overflow: hidden !important;
        border: none !important;
      }
      .calendly-badge-widget {
        display: none !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      // Cleanup link and style on unmount
      const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')
      if (existingLink) {
        document.head.removeChild(existingLink)
      }
      const existingStyle = document.querySelector('style')
      if (existingStyle && existingStyle.textContent?.includes('calendly-inline-widget')) {
        document.head.removeChild(existingStyle)
      }
    }
  }, [])

  const handleStartMeeting = () => {
    window.open("https://calendly.com/famdispatchingllc/30min", "_blank")
  }

  const handleWhatsApp = () => {
    const phoneNumber = "14404907685"
    const message = "Hi! I'm interested in learning more about your construction services."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <Navigation />
      <WhatsAppButton />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-gray-50/50" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-gray-100 text-gray-700 text-sm font-medium mb-6 shadow-sm">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-navy to-gray-900 bg-clip-text text-transparent mb-6 tracking-tight">
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
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Phone</h3>
                <p className="text-gray-700 mb-1 font-medium">+1 (832) 282-7247</p>
                <p className="text-sm text-gray-500">Mon-Fri 8am-6pm</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Email</h3>
                <p className="text-gray-700 mb-1 font-medium">info@builttough.site</p>
                <p className="text-sm text-gray-500">We reply within 24 hours</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Service Area</h3>
                <p className="text-gray-700 mb-1 font-medium">3902 NASA Pkwy 
                Houston Texas 77586</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Business Hours</h3>
                <p className="text-gray-700 text-sm mb-1">Monday - Friday: 8am - 6pm</p>
                <p className="text-gray-700 text-sm mb-1">Saturday: 9am - 4pm</p>
                <p className="text-gray-700 text-sm">Sunday: Closed</p>
              </div>

              <div className="bg-gradient-to-br from-[#25D366] to-[#20BA5A] border border-[#25D366]/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">WhatsApp</h3>
                <p className="text-white/90 mb-1 font-medium">+1 (832) 282-7247</p>
                <p className="text-sm text-white/80 mb-4">Chat with us instantly</p>
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-white text-[#25D366] hover:bg-white/90 font-semibold rounded-xl py-3 shadow-lg transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message on WhatsApp
                </Button>
              </div>
            </div>

            {/* Calendly Section */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="relative z-10">
                  <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-110 transition-transform duration-300">
                      <Calendar className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4 tracking-tight">
                      Schedule a Meeting
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                      Book a free 30-minute consultation to discuss your project
                    </p>
                    <Button
                      onClick={handleStartMeeting}
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full px-8 py-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-10"
                    >
                      <Calendar className="mr-2 w-5 h-5" />
                      Start Meeting
                    </Button>
                  </div>
                  <div className="mt-8 border-t border-gray-200 pt-8 overflow-hidden">
                    <div
                      className="calendly-inline-widget rounded-2xl overflow-hidden"
                      data-url="https://calendly.com/famdispatchingllc/30min"
                      style={{ 
                        height: "900px", 
                        width: "100%",
                        overflow: "hidden"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
