"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Monica",
      rating: 5,
      text: "Professional, reliable, and excellent craftsmanship. Built Tough transformed our kitchen beyond our expectations. The attention to detail and quality of work was outstanding.",
      project: "Kitchen Remodel",
    },
    {
      name: "Jane Farrell",
      rating: 5,
      text: "Outstanding work on our bathroom renovation. The team was punctual, clean, and detail-oriented. They completed the project on schedule and within budget.",
      project: "Bathroom Renovation",
    },
    {
      name: "Chris Barone",
      rating: 5,
      text: "Built Tough exceeded our expectations. They stayed on schedule and delivered exceptional quality. The communication throughout the project was excellent.",
      project: "Home Addition",
    },
    {
      name: "Steven Fox",
      rating: 4,
      text: "Great experience from start to finish. Highly recommend for any construction project. The team was professional and respectful of our home.",
      project: "Deck Construction",
    },
    {
      name: "Sarah Thompson",
      rating: 5,
      text: "We hired Built Tough for a complete home renovation and couldn't be happier with the results. Every detail was perfect and the craftsmanship is top-notch.",
      project: "Full Home Renovation",
    },
    {
      name: "Michael Rodriguez",
      rating: 5,
      text: "The team at Built Tough turned our vision into reality. From the initial consultation to the final walkthrough, everything was handled professionally and efficiently.",
      project: "Commercial Build-Out",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-amber text-amber" />
              ))}
            </div>
            <span className="text-4xl font-bold text-white">4.7</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Client Testimonials</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what our satisfied clients have to say about working with Built Tough Construction
          </p>
          <Badge className="mt-6 bg-amber/20 text-amber border-amber/30">Based on 100+ Google Reviews</Badge>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Card className="p-12 bg-white shadow-2xl">
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber text-amber" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl text-gray-700 text-center mb-8 leading-relaxed text-balance">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="text-center">
                <div className="font-bold text-navy text-xl">{testimonials[currentTestimonial].name}</div>
                <div className="text-gray-600">{testimonials[currentTestimonial].project}</div>
              </div>
            </Card>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-navy hover:bg-navy hover:text-white bg-transparent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial ? "bg-navy w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-navy hover:bg-navy hover:text-white bg-transparent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">All Reviews</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white/5 backdrop-blur-sm border-white/10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber text-amber" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.project}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-amber hover:bg-amber/90 text-navy font-semibold text-lg">Review Us on Google</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
