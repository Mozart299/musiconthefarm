// src/app/about/page.tsx
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
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About KAMS</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Kitty Arts & Music School is a music and arts institution in Kitukutwe, Wakiso district, Uganda, dedicated to providing quality music and arts education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full card-hover border-blue-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-3xl text-blue-900">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    KAMS is dedicated to providing accessible music and arts education to enhance technical proficiency of various stakeholders, promoting personal development, social cohesion, and cultural enrichment.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full card-hover border-blue-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-3xl text-green-900">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To elevate the standards and excellence of Ugandan music, art and the broader creative industry. This initiative seeks to foster a vibrant ecosystem conducive to growth and innovation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Goals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to creating lasting impact through comprehensive arts education
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
              <Card className="h-full card-hover">
                <CardHeader>
                  <Users className="h-8 w-8 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">Skills Development for Youth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Providing young people with valuable skills they can build careers on while fostering creativity and discipline.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full card-hover">
                <CardHeader>
                  <Heart className="h-8 w-8 text-red-600 mb-4" />
                  <CardTitle className="text-xl">Sustainable & Inclusive Business</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Supporting underprivileged communities by balancing paid and free programs for long-term sustainability.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full card-hover">
                <CardHeader>
                  <Globe className="h-8 w-8 text-green-600 mb-4" />
                  <CardTitle className="text-xl">Cultural Heritage Preservation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Celebrating and preserving Ugandan cultural heritage through traditional music, dance, and art forms.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full card-hover">
                <CardHeader>
                  <Award className="h-8 w-8 text-purple-600 mb-4" />
                  <CardTitle className="text-xl">Industry Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Training music technicians, sound engineers, and providing access to recording facilities for artist development.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full card-hover">
                <CardHeader>
                  <Users className="h-8 w-8 text-indigo-600 mb-4" />
                  <CardTitle className="text-xl">Community Space</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Providing choirs, bands, orchestras, and other groups with dedicated space to learn and practice.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full card-hover">
                <CardHeader>
                  <Globe className="h-8 w-8 text-orange-600 mb-4" />
                  <CardTitle className="text-xl">Future Musicians</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Creating a self-sustaining project that develops the future musicians and artists of Uganda.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Founder</h2>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">NS</span>
                </div>
                <CardTitle className="text-3xl text-gray-900">Nicholas Sentongo</CardTitle>
                <CardDescription className="text-lg text-gray-600">Founder & Director</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Nicholas Sentongo possesses a wealth of management experience from the UK's banking and retail sectors for over 18 years. He moved back to Uganda in 2020 and is currently the Team Lead at Dreampack Limited – one of the leading manufacturers of flexible packaging in Uganda.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  He sits on the Board of Directors for the Institute of Packaging Partners of Uganda (IPPU) and is also a Director and co-owner of FixnRev Mechanics, a leading automotive repair center in Kampala.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nicholas has demonstrated a commitment to community development as co-founder and director of Rising Stars Youth Club in Luton, England, aimed at providing youth with productive activities to keep them away from negative influences.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-blue-900 font-medium italic">
                    "His passion for arts, culture and community service drives the establishment of KAMS. He envisions the school as a haven for artistic expression, offering free education to some students while subsidizing costs for others."
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage