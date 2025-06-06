"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "🏠 Home" },
    { href: "/about", label: "📖 About Us" },
    { href: "/instruments", label: "🎸 Instruments" },
    { href: "/studio-services", label: "🎤 Studio Services" },
    { href: "/contact", label: "📞 Contact" }
  ]

  return (
    <nav className="bg-yellow-400 shadow-lg fixed w-full z-50 top-0 border-b-4 border-orange-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 transform hover:scale-105 transition-all">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-blue-600 bg-white">
              <Image
                src="/logo.jpeg"
                alt="Music School on the Farm Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-xl font-bold text-blue-900">Kitty Music &</div>
              <div className="text-sm font-bold text-orange-600">ARTS SCHOOL</div>
            </div>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-blue-900 hover:text-orange-600 px-3 py-2 rounded-full text-sm font-bold transition-all hover:bg-white/20 hover:scale-105"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold px-6 py-2 shadow-lg transform hover:scale-105 transition-all border-2 border-blue-700">
              <Link href="/contact">🚀 Join the Fun!</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900 hover:text-orange-600 focus:outline-none p-2 rounded-full hover:bg-white/20 transition-all"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-yellow-300 border-t-2 border-orange-400 rounded-b-2xl">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-blue-900 hover:text-orange-600 block px-4 py-3 rounded-xl text-base font-bold hover:bg-white/30 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold py-3 shadow-lg">
                  <Link href="/contact">🚀 Join the Fun!</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation