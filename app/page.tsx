"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone, Star, Award } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById("stats")
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setStatsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <WhatsAppButton />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <Badge className="bg-navy/10 text-navy border-navy/20 px-4 py-1.5 text-sm font-medium">
                Trusted for 31+ Years in Texas
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight">
                Building with Excellence
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Changing the industry's reputation, one project at a time. Professional construction services you can
                trust.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-navy hover:bg-navy-light text-white rounded-full px-8 shadow-sm hover-scale"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-navy hover:bg-gray-50 rounded-full px-8 bg-transparent"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  +1 (832) 2827247
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-navy">1000+</div>
                  <div className="text-sm text-gray-600">Projects Done</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy">4.7★</div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy">24hr</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden soft-shadow-xl">
                <img
                  src="/modern-construction-site-with-workers-building-bea.jpg"
                  alt="Construction Excellence"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 soft-shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-amber" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Licensed & Insured</div>
                    <div className="text-sm text-gray-600">Fully certified contractor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-navy">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From dream kitchens to complete commercial builds, we do it all
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Kitchen Remodels",
                image: "/beautiful-modern-kitchen-remodel-with-island.jpg",
                description: "Transform your kitchen into the heart of your home",
              },
              {
                title: "Bathroom Renovations",
                image: "/modern-luxury-bathroom-renovation-with-marble-tile.jpg",
                description: "Luxury bathroom designs with premium finishes",
              },
              {
                title: "Home Additions",
                image: "/modern-home-addition-construction.jpg",
                description: "Expand your living space with seamless additions",
              },
            ].map((service, index) => (
              <div key={index} className="group card-minimal card-hover">
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold text-navy">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white rounded-full px-8 bg-transparent"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber text-amber" />
              ))}
              <span className="text-2xl font-bold text-navy ml-2">4.7</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Based on 100+ verified reviews</p>
          </div>

          <div className="text-center">
            <Link href="/testimonials">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white rounded-full px-8 bg-transparent"
              >
                Read All Reviews
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-navy to-navy-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="w-16 h-16 bg-amber/20 rounded-full flex items-center justify-center mx-auto">
            <Award className="w-8 h-8 text-amber" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Get a free consultation and quote fromTexas's most trusted construction company
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-amber hover:bg-amber/90 text-navy font-semibold rounded-full px-8 shadow-lg hover-scale"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
