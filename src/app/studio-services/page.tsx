"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Music, Mic, Headphones, Radio, Disc, Users, Clock, Star, ArrowRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const StudioServicesPage = () => {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <div className="text-8xl mb-6">🎤</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Professional Studio Services!</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              🌟 Take your musical journey to the next level with our professional recording studio, DJ training, podcast production, and equipment rental services! 🚀
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-gradient-to-b from-blue-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="text-6xl mb-4">🎵</div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Professional Music Services on the Farm!
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              🎪 From learning to professional recording - we've got everything you need to make it in the music world!
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Recording Studio */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all transform hover:scale-105 border-4 border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50">
                <CardHeader>
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto border-4 border-purple-300">
                    <span className="text-4xl">🎧</span>
                  </div>
                  <CardTitle className="text-3xl text-purple-900 text-center">Recording Studio Magic!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed text-center">
                    🌟 Professional recording facilities where dreams become reality! Record your songs, develop as an artist, and learn from the pros!
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>🎤 Professional recording sessions</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>🎵 Music production training</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>🔧 Audio engineering workshops</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>⭐ Artist mentorship programs</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>🏠 Hourly/daily studio rentals</span>
                    </div>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3 text-lg font-bold">
                    🎤 Book Studio Time!
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* DJ Training */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all transform hover:scale-105 border-4 border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50">
                <CardHeader>
                  <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mb-6 mx-auto border-4 border-cyan-300">
                    <span className="text-4xl">🎧</span>
                  </div>
                  <CardTitle className="text-3xl text-cyan-900 text-center">DJ Training Academy!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed text-center">
                    🎛️ Learn to be the coolest DJ on the block! From beginner beats to professional performances - we'll teach you everything!
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>🎚️ Basic turntable techniques</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>🎵 Music mixing fundamentals</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>🎛️ Professional mixing techniques</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>🎉 Event DJing preparation</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>💼 Business skills for DJs</span>
                    </div>
                  </div>
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl py-3 text-lg font-bold">
                    🎛️ Start DJ Training!
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Podcast Production */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all transform hover:scale-105 border-4 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto border-4 border-green-300">
                    <span className="text-4xl">🎙️</span>
                  </div>
                  <CardTitle className="text-3xl text-green-900 text-center">Podcast Production Hub!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed text-center">
                    📻 Share your voice with the world! Learn podcasting from A to Z and use our professional podcast studio!
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>📝 Content creation workshops</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>🎤 Audio recording techniques</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>✂️ Editing and post-production</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>📈 Podcast marketing strategies</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>🏠 Professional studio rental</span>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 text-lg font-bold">
                    🎙️ Start Podcasting!
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Equipment Rental */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all transform hover:scale-105 border-4 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
                <CardHeader>
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto border-4 border-orange-300">
                    <span className="text-4xl">🎵</span>
                  </div>
                  <CardTitle className="text-3xl text-orange-900 text-center">Equipment Rental Services!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed text-center">
                    🛠️ Need professional equipment? Rent our top-quality gear for your events, recordings, or practice sessions!
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>🎤 Recording equipment packages</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>🔊 Sound systems & PA equipment</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>🎛️ DJ gear and turntables</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>🎸 Live performance instruments</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>🚐 Mobile services available</span>
                    </div>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-xl py-3 text-lg font-bold">
                    🎵 Rent Equipment!
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-20 bg-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="text-6xl mb-4">💰</div>
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-6">
              Affordable Professional Services!
            </h2>
            <p className="text-xl text-yellow-700 max-w-3xl mx-auto">
              🌟 Quality professional services that won't break the bank! Special rates for students and long-term bookings!
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="hover:shadow-xl transition-all border-4 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900 text-center">🎤 Studio Rentals</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-3xl font-bold text-blue-900">From UGX 50,000</div>
                  <p className="text-blue-700">per hour</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✅ Professional recording setup</li>
                    <li>✅ Audio engineer support</li>
                    <li>✅ All equipment included</li>
                    <li>✅ Student discounts available</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="hover:shadow-xl transition-all border-4 border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-900 text-center">🎧 DJ Training</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-3xl font-bold text-purple-900">UGX 200,000</div>
                  <p className="text-purple-700">4-week course</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✅ Beginner to advanced levels</li>
                    <li>✅ Professional equipment training</li>
                    <li>✅ Performance opportunities</li>
                    <li>✅ Certificate upon completion</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="hover:shadow-xl transition-all border-4 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-900 text-center">🎙️ Podcast Training</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-3xl font-bold text-green-900">UGX 150,000</div>
                  <p className="text-green-700">3-week course</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✅ Content creation to publishing</li>
                    <li>✅ Professional recording techniques</li>
                    <li>✅ Marketing and distribution</li>
                    <li>✅ Studio access included</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <div className="text-8xl mb-6">🚀</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Go Professional? 🌟
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              🎵 Take your music to the next level with our professional services! Book your session today! 🎤
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 text-lg px-8 py-4 rounded-full shadow-lg">
                <Link href="/contact">🎤 Book Studio Time!</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white hover:bg-white text-purple-900 text-lg px-8 py-4 rounded-full border-2">
                <Link href="/contact">📞 Get More Info!</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default StudioServicesPage