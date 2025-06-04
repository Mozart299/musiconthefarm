// src/app/instruments/page.tsx
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Music, Drum, Guitar, Piano, Mic, Users, Award } from "lucide-react"
import { motion } from "framer-motion"

const InstrumentsPage = () => {
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

  const westernInstruments = [
    {
      category: "String Instruments",
      icon: Guitar,
      instruments: [
        { name: "Acoustic Guitar", description: "Perfect for beginners and advanced players", quantity: "Available: 18" },
        { name: "Electric Guitar", description: "Rock, jazz, and contemporary styles", quantity: "Available: 18" },
        { name: "Violin", description: "Classical and contemporary violin training", quantity: "Available: 13" },
        { name: "Ukulele", description: "Fun and easy to learn for all ages", quantity: "Available: 8" }
      ]
    },
    {
      category: "Keyboard Instruments",
      icon: Piano,
      instruments: [
        { name: "Upright Piano", description: "Traditional acoustic piano training", quantity: "Available: 2" },
        { name: "Electric Piano", description: "Modern digital piano with various sounds", quantity: "Available: 3" }
      ]
    },
    {
      category: "Wind Instruments",
      icon: Mic,
      instruments: [
        { name: "Trumpet", description: "Brass instrument for jazz and classical", quantity: "Available: 2" },
        { name: "Saxophone", description: "Jazz, blues, and contemporary styles", quantity: "Available: 2" },
        { name: "Flute", description: "Beautiful woodwind for all skill levels", quantity: "Available: 10" },
        { name: "Clarinet", description: "Versatile woodwind instrument", quantity: "Available: 2" },
        { name: "Recorder", description: "Great starting instrument for children", quantity: "Available: 3" }
      ]
    },
    {
      category: "Percussion",
      icon: Drum,
      instruments: [
        { name: "Complete Drum Set", description: "Full acoustic drum kit for all styles", quantity: "Available: 4" },
        { name: "Voice Training", description: "Vocal techniques and performance", quantity: "Available: 8 stations" }
      ]
    }
  ]

  const ugandanInstruments = [
    {
      name: "Xylophone (Amadinda/Akadinda)",
      description: "Traditional Buganda percussion instrument with wooden keys",
      cultural: "Central to Buganda court music and ceremonies"
    },
    {
      name: "Endingidi",
      description: "Single-stringed fiddle played with a bow",
      cultural: "Traditional string instrument used in folk music"
    },
    {
      name: "Thumb Piano (Likembe)",
      description: "Plucked idiophone with metal tines on wooden board",
      cultural: "Popular across East Africa for storytelling and entertainment"
    },
    {
      name: "Ngoma Drums",
      description: "Traditional drums of various sizes for different rhythms",
      cultural: "Essential for ceremonies, dances, and communication"
    },
    {
      name: "Enanga (Bow Harp)",
      description: "Arched harp with strings attached to a wooden resonator",
      cultural: "Used by traditional healers and storytellers"
    },
    {
      name: "Enkwanzi (Panpipes)",
      description: "Set of bamboo pipes of different lengths",
      cultural: "Traditional wind instrument for folk melodies"
    },
    {
      name: "Endere (Flute)",
      description: "Traditional bamboo flute with finger holes",
      cultural: "Used in pastoral communities and folk music"
    }
  ]

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Musical Instruments</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Discover the wide range of Western and traditional Ugandan instruments we teach at KAMS
            </p>
          </motion.div>
        </div>
      </section>

      {/* Western Instruments Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Western Instruments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn classical and contemporary music with our comprehensive collection of Western instruments
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {westernInstruments.map((category, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <category.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-2xl text-gray-900">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.instruments.map((instrument, idx) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">{instrument.name}</h4>
                          <p className="text-gray-600 text-sm mb-2">{instrument.description}</p>
                          <p className="text-blue-600 text-sm font-medium">{instrument.quantity}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Traditional Instruments Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Traditional Ugandan Instruments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preserve and celebrate Uganda's rich musical heritage through traditional instruments
            </p>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="mb-12"
          >
            <Card className="bg-gradient-to-r from-orange-100 to-yellow-100 border-orange-200">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-900 flex items-center">
                  <Users className="h-6 w-6 mr-2" />
                  Cultural Heritage Preservation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-800 leading-relaxed">
                  Our traditional instrument program is designed to preserve Uganda's rich cultural heritage. We incorporate these instruments into performances, cultural exchange programs, and community workshops to ensure these beautiful traditions continue to thrive for future generations.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {ugandanInstruments.map((instrument, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <AccordionItem value={`item-${index}`} className="bg-white rounded-lg shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Music className="h-5 w-5 text-orange-600" />
                        </div>
                        <span className="text-lg font-semibold text-gray-900">{instrument.name}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-3">
                        <p className="text-gray-600">{instrument.description}</p>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <p className="text-sm text-orange-800">
                            <span className="font-medium">Cultural Significance:</span> {instrument.cultural}
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Learning Approach Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Learning Approach</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              We combine traditional teaching methods with modern techniques to provide comprehensive music education
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
              <Card className="bg-blue-800 border-blue-600 text-white">
                <CardHeader>
                  <Music className="h-8 w-8 text-yellow-400 mb-4" />
                  <CardTitle className="text-xl">Individual Lessons</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200">
                    One-on-one instruction tailored to each student's pace and learning style for optimal progress.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-blue-800 border-blue-600 text-white">
                <CardHeader>
                  <Users className="h-8 w-8 text-yellow-400 mb-4" />
                  <CardTitle className="text-xl">Group Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200">
                    Ensemble playing and group learning to develop teamwork and performance skills.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-blue-800 border-blue-600 text-white">
                <CardHeader>
                  <Award className="h-8 w-8 text-yellow-400 mb-4" />
                  <CardTitle className="text-xl">Cultural Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200">
                    Blending Western techniques with traditional Ugandan music for a holistic education.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default InstrumentsPage