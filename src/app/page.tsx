// src/app/page.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Users, BookOpen, Heart, Award, Globe, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const HomePage = () => {
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
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Music School
                <span className="block text-yellow-300">On The Farm</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Empowering students from diverse backgrounds to express themselves creatively and preserve their cultures through music, song, dance, and visual arts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 text-lg px-8 py-4">
                  <Link href="/contact" className="flex items-center">
                    Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center animate-float">
                  <div className="w-60 h-60 bg-yellow-400 rounded-full flex items-center justify-center relative">
                    <Music className="h-24 w-24 text-blue-900" />
                    <div className="absolute -top-8 -right-8 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎵</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To elevate the standards and excellence of Ugandan music, art and the broader creative industry
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full card-hover border-blue-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-blue-900">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    KAMS is dedicated to providing accessible music and arts education to enhance technical proficiency of various stakeholders, promoting personal development, social cohesion, and cultural enrichment.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full card-hover border-blue-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-blue-900">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To elevate the standards and excellence of Ugandan music, art and the broader creative industry. This initiative seeks to foster a vibrant ecosystem conducive to growth and innovation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training programs tailored for musicians, dancers, and artists
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
              <Card className="h-full card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Music className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-blue-900">Music</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Learn various instruments including piano, guitar, violin, trumpet, saxophone, and traditional Ugandan instruments.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Individual & Group lessons
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Recording studio access
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Performance opportunities
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-green-900">Dance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Explore traditional Ugandan dances, contemporary styles, and ballet in our dedicated dance studio.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Traditional & Contemporary styles
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Cultural preservation
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Performance workshops
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-purple-900">Visual Arts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Develop artistic skills through drawing, painting, and other visual arts in our dedicated art studio.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Artist residencies
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Exhibition opportunities
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Community art projects
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Supporting underprivileged communities through sustainable and inclusive education
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="mb-4">
                <div className="text-4xl font-bold text-yellow-400">1300</div>
                <div className="text-blue-200">Students by Year 5</div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="mb-4">
                <div className="text-4xl font-bold text-yellow-400">3000</div>
                <div className="text-blue-200">Books in Library</div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="mb-4">
                <div className="text-4xl font-bold text-yellow-400">1:3</div>
                <div className="text-blue-200">Free to Paid Ratio</div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="mb-4">
                <div className="text-4xl font-bold text-yellow-400">1.5</div>
                <div className="text-blue-200">Acres of Land</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="text-center mt-12"
          >
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
              For every three paying students, one student from a less privileged background receives a scholarship to study free, creating a sustainable and equitable learning environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Musical Journey?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our community of passionate learners and help preserve Uganda's rich cultural heritage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 text-lg px-8 py-4">
                <Link href="/contact" className="flex items-center">
                  Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4">
                <Link href="/instruments">View Instruments</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage