"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  })

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('🎉 Thank you for wanting to join our farm family! We\'ll contact you super soon! 🚜💕')
  }

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center"
          >
            <div className="text-8xl mb-6">📞</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Talk & Meet!</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              🌟 Ready to start your amazing musical adventure? Get in touch with our farm family today! We can't wait to meet you! 🎵
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <motion.div 
              {...fadeInUp}
              className="space-y-8"
            >
              <div>
                <div className="text-6xl mb-4 text-center">🤝</div>
                <h2 className="text-4xl font-bold text-green-900 mb-6 text-center">Come Say Hello!</h2>
                <p className="text-lg text-green-700 mb-8 text-center">
                  💫 We'd love to hear from you! Whether you want to join our classes, have questions about our programs, or want to visit our beautiful farm, don't be shy - reach out! 🌻
                </p>
              </div>

              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.div variants={fadeInUp}>
                  <Card className="hover:shadow-xl transition-all border-4 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-blue-300">
                          <span className="text-2xl">🏞️</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-blue-900 mb-2 text-xl">Our Farm Location!</h3>
                          <p className="text-gray-700">
                            📍 Kitukutwe, Wakiso District, Uganda<br />
                            🚗 Just 20km from Kampala City Center!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="hover:shadow-xl transition-all border-4 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-green-300">
                          <span className="text-2xl">📱</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-green-900 mb-2 text-xl">Call or Text Us!</h3>
                          <p className="text-gray-700 text-lg font-medium">📞 +256779227192</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="hover:shadow-xl transition-all border-4 border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-purple-300">
                          <span className="text-2xl">✉️</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-purple-900 mb-2 text-xl">Send Us an Email!</h3>
                          <p className="text-gray-700 text-lg">📧 nsentongo@gmail.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="hover:shadow-xl transition-all border-4 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-orange-300">
                          <span className="text-2xl">⏰</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-orange-900 mb-2 text-xl">When We're Open!</h3>
                          <p className="text-gray-700">
                            ☀️ Day Classes: 9:00 AM - 5:00 PM<br />
                            🌙 Evening Classes: 6:00 PM - 8:00 PM<br />
                            🎉 Weekend Classes: 9:00 AM - 4:00 PM
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              {...fadeInUp}
              className="lg:pl-8"
            >
              <Card className="hover:shadow-xl transition-all border-4 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
                <CardHeader>
                  <CardTitle className="text-3xl text-yellow-900 flex items-center justify-center">
                    <span className="text-4xl mr-3">💌</span>
                    Send Us a Message!
                  </CardTitle>
                  <CardDescription className="text-center text-lg text-yellow-700">
                    🌟 Fill out this form and we'll get back to you faster than a rooster at sunrise! 🐓
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                          👤 Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                          placeholder="What should we call you? 😊"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                          📧 Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                          📱 Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                          placeholder="+256..."
                        />
                      </div>
                      <div>
                        <label htmlFor="program" className="block text-sm font-bold text-gray-700 mb-2">
                          🎭 What Interests You?
                        </label>
                        <select
                          id="program"
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                        >
                          <option value="">Pick your adventure! 🌟</option>
                          <option value="music">🎸 Music Lessons</option>
                          <option value="dance">💃 Dance Classes</option>
                          <option value="art">🎨 Visual Arts</option>
                          <option value="traditional">🥁 Traditional Instruments</option>
                          <option value="recording">🎤 Recording Studio</option>
                          <option value="other">✨ Something Else</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                        💭 Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                        placeholder="Tell us about yourself! What would you like to learn? Any questions? We're all ears! 👂✨"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all">
                      <Send className="h-5 w-5 mr-2" />
                      🚀 Send Our Message!
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 bg-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12"
          >
            <div className="text-6xl mb-4">🚜</div>
            <h2 className="text-4xl font-bold text-orange-900 mb-6">Come Visit Our Amazing Farm!</h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto">
              🌟 We'd love to show you around our 1.5-acre musical paradise! Come see where the magic happens! ✨
            </p>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <Card className="hover:shadow-xl transition-all border-4 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-5xl mb-4 text-center">🏡</div>
                    <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">Schedule Your Farm Tour!</h3>
                    <p className="text-gray-700 mb-6 text-center">
                      🎪 Come explore our music rooms, dance studio, art studio, recording equipment, and our huge collection of instruments! We'll show you around and chat about how our farm can be part of your musical journey! 🌱
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 justify-center">
                        <span className="text-xl">🎵</span>
                        <span className="text-gray-700">9 dedicated music rooms</span>
                      </div>
                      <div className="flex items-center space-x-3 justify-center">
                        <span className="text-xl">🎤</span>
                        <span className="text-gray-700">Professional recording studio</span>
                      </div>
                      <div className="flex items-center space-x-3 justify-center">
                        <span className="text-xl">💃</span>
                        <span className="text-gray-700">Dance and art studios</span>
                      </div>
                      <div className="flex items-center space-x-3 justify-center">
                        <span className="text-xl">📚</span>
                        <span className="text-gray-700">3000+ book library</span>
                      </div>
                      <div className="flex items-center space-x-3 justify-center">
                        <span className="text-xl">🌳</span>
                        <span className="text-gray-700">Beautiful outdoor spaces</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-2xl border-2 border-blue-200">
                    <div className="text-4xl mb-4 text-center">📞</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Contact us to arrange your magical visit!</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-3">
                        <span className="text-xl">📱</span>
                        <span className="text-gray-700 font-medium">+256779227192</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3">
                        <span className="text-xl">✉️</span>
                        <span className="text-gray-700 font-medium">nsentongo@gmail.com</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3 text-lg font-bold shadow-lg">
                        🏠 Book Your Farm Visit!
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <div className="text-8xl mb-6">🎉</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Musical Adventure Starts Here! 🌟
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              🚀 Don't wait - your creative journey is calling! Let's make beautiful music together on our farm! 🎵🚜
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 text-lg px-8 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all">
                📞 Call Us Now!
              </Button>
              <Button variant="outline" className="border-4 border-white text-white hover:bg-white hover:text-purple-900 text-lg px-8 py-4 rounded-full font-bold">
                🏠 Visit Our Farm!
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage