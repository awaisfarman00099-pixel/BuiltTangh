import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CheckCircle, Award, Users, Clock, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Established 1994
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Building trust for over 31 years
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're on a mission to change the construction industry's reputation, one exceptional project at a time.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 1994, Built Tough Construction has been serving New Jersey with integrity, quality, and
                  dedication for over three decades.
                </p>
                <p>
                  What started as a small family business has grown into one of the region's most trusted construction
                  companies. Our mission is simple: change the construction industry's reputation one project at a time.
                </p>
                <p>
                  We believe in transparent communication, quality craftsmanship, and treating every project as if it
                  were our own home. With over 1,000 successful projects completed, we've built more than
                  structures—we've built lasting relationships.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/professional-construction-team-working-on-site.jpg"
                  alt="Built Tough Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-600 rounded-2xl -z-10 opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Our Core Values</h2>
            <p className="text-xl text-gray-600">What makes Built Tough different</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We demand the highest standards in every aspect of our work",
              },
              {
                icon: Users,
                title: "Communication",
                description: "We listen, plan, and keep you informed every step of the way",
              },
              {
                icon: Clock,
                title: "Reliability",
                description: "On-time completion and immediate response to your needs",
              },
              {
                icon: Shield,
                title: "Integrity",
                description: "Transparent pricing and honest business practices always",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-600 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <value.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Why Choose Built Tough?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "31+ years of proven experience in New Jersey",
              "Fully licensed and insured for your protection",
              "Transparent pricing with no hidden fees",
              "Response time under 24 hours guaranteed",
              "Quality materials from trusted suppliers",
              "Clean, organized work sites maintained daily",
              "Expert project management and planning",
              "100% client satisfaction commitment",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-200">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
