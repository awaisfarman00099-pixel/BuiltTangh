"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/testimonials", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-gray-500/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src="/Your paragraph text (1).png"
                alt="Built Tough Construction"
                className="h-14 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href ? "text-navy" : "text-gray-600 hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => window.open("https://calendly.com/famdispatchingllc/30min", "_blank")}
              className="bg-navy hover:bg-navy-light text-white rounded-full px-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <Phone className="w-4 h-4 mr-2" />
              +1 (440) 490-7685
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-navy p-2">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm font-medium transition-colors py-2 ${
                  pathname === link.href ? "text-navy" : "text-gray-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => window.open("https://calendly.com/famdispatchingllc/30min", "_blank")}
              className="w-full bg-navy hover:bg-navy-light text-white rounded-full cursor-pointer"
            >
              <Phone className="w-4 h-4 mr-2" />
              +1 (440) 490-7685
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
