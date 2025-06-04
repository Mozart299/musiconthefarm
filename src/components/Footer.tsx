"use client"

import Link from "next/link"
import { Music, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <span className="text-3xl">🐓</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Music School</div>
                <div className="text-lg font-bold text-yellow-400">ON THE FARM</div>
              </div>
            </div>
            <p className="text-blue-200 mb-6 max-w-md text-lg leading-relaxed">
              🌟 Where every child discovers their musical magic! Come join our farm family and grow your creativity in the most fun way possible! 🌱🎵
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-all transform hover:scale-110 border-2 border-blue-400">
                <span className="text-xl">📘</span>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-all transform hover:scale-110 border-2 border-blue-400">
                <span className="text-xl">📸</span>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-all transform hover:scale-110 border-2 border-blue-400">
                <span className="text-xl">🐦</span>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-all transform hover:scale-110 border-2 border-blue-400">
                <span className="text-xl">🎵</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400 flex items-center">
              <span className="text-2xl mr-2">🚀</span>
              Quick Adventures
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors flex items-center text-lg font-medium hover:scale-105 transform">
                  <span className="mr-2">🏠</span> Home Sweet Farm
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors flex items-center text-lg font-medium hover:scale-105 transform">
                  <span className="mr-2">📖</span> Our Story
                </Link>
              </li>
              <li>
                <Link href="/instruments" className="text-blue-200 hover:text-white transition-colors flex items-center text-lg font-medium hover:scale-105 transform">
                  <span className="mr-2">🎸</span> Musical Treasures
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-colors flex items-center text-lg font-medium hover:scale-105 transform">
                  <span className="mr-2">📞</span> Come Say Hi!
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400 flex items-center">
              <span className="text-2xl mr-2">📍</span>
              Find Our Farm!
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-lg">🏞️</span>
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-medium">Our Beautiful Location:</p>
                  <p className="text-white font-bold">Kitukutwe, Wakiso District</p>
                  <p className="text-blue-200 text-sm">🚗 Just 20km from Kampala!</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-lg">📱</span>
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Call or Text:</p>
                  <p className="text-white font-bold text-lg">+256779227192</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-lg">✉️</span>
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Send Email:</p>
                  <p className="text-white font-bold">info@musiconthefarm.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-lg">⏰</span>
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-medium">Farm Hours:</p>
                  <p className="text-white text-sm">☀️ Days: 9AM - 5PM</p>
                  <p className="text-white text-sm">🌙 Evenings: 6PM - 8PM</p>
                  <p className="text-white text-sm">🎉 Weekends: 9AM - 4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Message Section */}
        <div className="border-t-2 border-blue-600 mt-12 pt-8">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-6 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-2">🌟</div>
              <p className="text-blue-900 font-bold text-lg">
                "Every great musician started with their first note! Come grow your musical dreams with us!" 🎵🌱
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-600 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🐓</span>
              <p className="text-blue-400 text-sm">
                © {new Date().getFullYear()} Music School on the Farm. Made with ❤️ for all our musical families!
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-yellow-400 font-bold">Follow our farm adventures:</span>
              <div className="flex space-x-2">
                <span className="text-xl cursor-pointer hover:scale-110 transition-transform">📘</span>
                <span className="text-xl cursor-pointer hover:scale-110 transition-transform">📸</span>
                <span className="text-xl cursor-pointer hover:scale-110 transition-transform">🐦</span>
                <span className="text-xl cursor-pointer hover:scale-110 transition-transform">🎵</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer