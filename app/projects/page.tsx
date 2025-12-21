import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Modern Kitchen Transformation",
      category: "Kitchen Remodel",
      image: "/beautiful-modern-kitchen-remodel-with-island.jpg",
      description: "Complete kitchen renovation with custom cabinetry and marble countertops",
    },
    {
      title: "Luxury Bathroom Suite",
      category: "Bathroom Renovation",
      image: "/modern-luxury-bathroom-renovation-with-marble-tile.jpg",
      description: "High-end bathroom remodel featuring walk-in shower and custom tilework",
    },
    {
      title: "Outdoor Living Space",
      category: "Deck Construction",
      image: "/elegant-outdoor-deck-and-porch-construction.jpg",
      description: "Beautiful deck and pergola addition for outdoor entertainment",
    },
    {
      title: "Home Extension Project",
      category: "Home Addition",
      image: "/modern-home-addition-construction.jpg",
      description: "Two-story addition seamlessly integrated with existing structure",
    },
    {
      title: "Commercial Renovation",
      category: "Commercial",
      image: "/commercial-building-construction-and-renovation.jpg",
      description: "Complete office space renovation for growing business",
    },
    {
      title: "Elegant Interior Finishes",
      category: "Interior Trim",
      image: "/elegant-interior-trim-and-crown-molding.jpg",
      description: "Custom millwork and crown molding throughout entire home",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-6">
            Our Work
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Project Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Browse through our collection of successful construction projects across New Jersey
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
