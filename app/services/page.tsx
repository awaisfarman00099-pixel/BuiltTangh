import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Bathroom Renovations",
      description: "Transform your bathroom into a luxurious sanctuary with our expert renovation services.",
      image: "/modern-luxury-bathroom-renovation-with-marble-tile.jpg",
      features: [
        "Custom tile work and flooring",
        "Modern fixtures and fittings",
        "Vanity installation",
        "Walk-in showers and tubs",
        "Lighting and ventilation",
        "Accessibility modifications",
      ],
    },
    {
      title: "Kitchen Remodels",
      description: "Create the heart of your home with custom kitchen designs and quality craftsmanship.",
      image: "/beautiful-modern-kitchen-remodel-with-island.jpg",
      features: [
        "Custom cabinetry design",
        "Countertop installation",
        "Kitchen island construction",
        "Modern appliance integration",
        "Backsplash and flooring",
        "Lighting design",
      ],
    },
    {
      title: "Decks & Porches",
      description: "Extend your living space with beautifully crafted outdoor decks and porches.",
      image: "/elegant-outdoor-deck-and-porch-construction.jpg",
      features: [
        "Custom deck design",
        "Quality lumber selection",
        "Railings and stairs",
        "Screened porches",
        "Outdoor kitchens",
        "Weatherproof finishes",
      ],
    },
    {
      title: "Home Additions",
      description: "Expand your home with seamless additions that match your existing architecture.",
      image: "/modern-home-addition-construction.jpg",
      features: [
        "Room additions",
        "Second story additions",
        "Garage construction",
        "Sunrooms and extensions",
        "Foundation work",
        "Matching existing aesthetics",
      ],
    },
    {
      title: "Commercial Services",
      description: "Complete commercial construction and renovation for businesses of all sizes.",
      image: "/commercial-building-construction-and-renovation.jpg",
      features: [
        "Office renovations",
        "Retail spaces",
        "Restaurant construction",
        "Warehouse improvements",
        "ADA compliance",
        "Commercial build-outs",
      ],
    },
    {
      title: "Interior Trim & Millwork",
      description: "Add the finishing touches with premium interior trim and millwork.",
      image: "/elegant-interior-trim-and-crown-molding.jpg",
      features: [
        "Crown molding installation",
        "Baseboards and chair rails",
        "Custom built-ins",
        "Door and window casing",
        "Wainscoting",
        "Coffered ceilings",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-6">
            Our Expertise
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Services We Offer
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive construction solutions for residential and commercial projects
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                <div className="bg-gray-50 rounded-2xl p-8 mb-8 border border-gray-200">
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-6 rounded-xl">
                    Get a Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
