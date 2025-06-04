"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Globe, Heart, Target, Eye } from "lucide-react"
import { motion } from "framer-motion"

const AboutPage = () => {
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
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center"
          >
            <div className="text-8xl mb-6">🏡</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Our Musical Farm!</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              🌟 Come learn about our wonderful farm family where music, arts, and dreams grow together in beautiful Kitukutwe! 🌟
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all transform hover:scale-105 border-4 border-pink-200 bg-gradient-to-br from-pink-50 to-rose-50">
                <CardHeader>
                  <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-4xl">🎯</span>
                  </div>
                  <CardTitle className="text-4xl text-pink-900 text-center">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed text-center">
                    🌱 We're dedicated to making music and arts education super accessible and fun! We help everyone discover their creative superpowers while celebrating Uganda's beautiful culture. Every child deserves to shine! ✨
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all transform hover:scale-105 border-4 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardHeader>
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-4xl">👁️</span>
                  </div>
                  <CardTitle className="text-4xl text-blue-900 text-center">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed text-center">
                    🌟 To grow the most amazing creative community in all of Uganda! We're building a vibrant ecosystem where music, art, and innovation bloom like beautiful flowers in our garden! 🌻🌺
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-4">🌈</div>
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-6">Our Big Dreams & Goals!</h2>
            <p className="text-xl text-yellow-800 max-w-3xl mx-auto">
              Here's how we're making magical things happen on our farm! 🪄
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all transform hover:scale-105 border-4 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">👦👧</div>
                  <CardTitle className="text-xl text-center text-blue-900">Skills for Young Stars!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    🌟 Giving young people amazing skills they can build exciting careers on while having tons of fun and learning discipline!
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all transform hover:scale-105 border-4 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">💚</div>
                  <CardTitle className="text-xl text-center text-green-900">Fair & Fun for Everyone!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    🤝 Supporting all families by mixing paid and free programs so everyone can join our musical family adventure!
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all transform hover:scale-105 border-4 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">🥁</div>
                  <CardTitle className="text-xl text-center text-orange-900">Celebrating Our Culture!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    🎭 Keeping Uganda's beautiful cultural heritage alive through traditional music, dance, and amazing art forms!
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all transform hover:scale-105 border-4 border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50">
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">🏆</div>
                  <CardTitle className="text-xl text-center text-purple-900">Growing Music Pros!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    🎵 Training amazing music technicians, sound engineers, and giving artists access to real recording facilities!
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all transform hover:scale-105 border-4 border-cyan-200 bg-gradient-to-br from-cyan-50 to-sky-50">
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">🏡</div>
                  <CardTitle className="text-xl text-center text-cyan-900">Our Community Home!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    🎪 Giving choirs, bands, orchestras, and music groups a special place to learn, practice, and perform together!
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all transform hover:scale-105 border-4 border-rose-200 bg-gradient-to-br from-rose-50 to-pink-50">
                <CardHeader>
                  <div className="text-4xl mb-4 text-center">🌟</div>
                  <CardTitle className="text-xl text-center text-rose-900">Future Music Stars!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    🚀 Creating a forever-growing project that develops Uganda's future musicians and artists - the next generation of stars!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-4">👨‍🌾</div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Meet Our Farm Leader!</h2>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <Card className="hover:shadow-xl transition-all border-4 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-yellow-400">
                  <span className="text-5xl font-bold text-white">NS</span>
                </div>
                <CardTitle className="text-3xl text-blue-900">Nicholas Sentongo</CardTitle>
                <CardDescription className="text-lg text-orange-600 font-medium">🌟 Founder & Farm Director 🌟</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-center text-lg">
                  🇬🇧 Nicholas brings 18 years of amazing experience from the UK's banking and retail world! He moved back to Uganda in 2020 and now leads the team at Dreampack Limited - one of Uganda's top packaging companies! 📦
                </p>
                <p className="text-gray-700 leading-relaxed text-center text-lg">
                  👔 He sits on the Board of Directors for the Institute of Packaging Partners of Uganda (IPPU) and is also a Director and co-owner of FixnRev Mechanics, a leading automotive repair center in Kampala! 🚗
                </p>
                <p className="text-gray-700 leading-relaxed text-center text-lg">
                  💫 Nicholas has always been passionate about helping young people! He co-founded and directed Rising Stars Youth Club in Luton, England, giving youth fun activities to keep them away from trouble! 🌟
                </p>
                <Card className="bg-gradient-to-r from-blue-100 to-green-100 border-2 border-blue-300">
                  <CardContent className="p-6">
                    <p className="text-blue-900 font-medium italic text-center text-lg">
                      💝 "His love for arts, culture and helping communities drives everything we do at our musical farm! He dreams of our school being a magical place for artistic expression, offering free education to some students while making it affordable for others!" 🎨🎵
                    </p>
                  </CardContent>
                </Card>
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
              Ready to Join Our Farm Family? 🚜💕
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Come visit us and see where the magic happens! Every great musician started somewhere! 🌱🎵
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 text-lg px-8 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all">
                🏠 Visit Our Farm!
              </button>
              <button className="border-4 border-white text-white hover:bg-white hover:text-purple-900 text-lg px-8 py-4 rounded-full font-bold">
                📞 Get in Touch!
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage