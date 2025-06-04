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

  interface InstrumentCategory {
    category: string;
    icon: string;
    color: 'blue' | 'purple' | 'orange' | 'green';
    instruments: Array<{ name: string; description: string; quantity: string; }>;
  }
  
  const westernInstruments: InstrumentCategory[] = [
      {
        category: "String Fun Time!",
        icon: "🎸",
        color: "blue",
      instruments: [
        { name: "Acoustic Guitar", description: "Perfect for campfire songs and beginners!", quantity: "🎸 We have 18!" },
        { name: "Electric Guitar", description: "Rock out with the coolest sounds!", quantity: "⚡ We have 18!" },
        { name: "Violin", description: "Make beautiful classical melodies!", quantity: "🎻 We have 13!" },
        { name: "Ukulele", description: "Tiny guitar, big smiles for everyone!", quantity: "🌺 We have 8!" }
      ]
    },
    {
      category: "Piano Paradise!",
      icon: "🎹",
      color: "purple",
      instruments: [
        { name: "Upright Piano", description: "The classic piano experience!", quantity: "🎹 We have 2!" },
        { name: "Electric Piano", description: "Modern sounds and fun effects!", quantity: "⚡ We have 3!" }
      ]
    },
    {
      category: "Wind Wonders!",
      icon: "🎺",
      color: "orange",
      instruments: [
        { name: "Trumpet", description: "Bright and bold brass sounds!", quantity: "🎺 We have 2!" },
        { name: "Saxophone", description: "Smooth jazz and soulful tunes!", quantity: "🎷 We have 2!" },
        { name: "Flute", description: "Light and airy melodies!", quantity: "🪈 We have 10!" },
        { name: "Clarinet", description: "Rich woodwind tones!", quantity: "🎶 We have 2!" },
        { name: "Recorder", description: "Perfect first instrument for kids!", quantity: "🌟 We have 3!" }
      ]
    },
    {
      category: "Rhythm & Beats!",
      icon: "🥁",
      color: "green",
      instruments: [
        { name: "Complete Drum Set", description: "Full drum kit for rock stars!", quantity: "🥁 We have 4!" },
        { name: "Voice Training", description: "Sing your heart out with confidence!", quantity: "🎤 We have 8 stations!" }
      ]
    }
  ]

  const ugandanInstruments = [
    {
      name: "Xylophone (Amadinda/Akadinda) 🎶",
      description: "Beautiful wooden keys that make magical sounds - the heart of Buganda music!",
      cultural: "🏰 This special instrument has been played in the royal courts of Buganda for hundreds of years during important ceremonies!"
    },
    {
      name: "Endingidi 🎻",
      description: "A one-string fiddle played with a bow - simple but so beautiful!",
      cultural: "🌾 Farmers and storytellers have used this instrument for generations to share stories and entertain families!"
    },
    {
      name: "Thumb Piano (Likembe) 👍",
      description: "Tiny metal strips on wood that you pluck with your thumbs - so fun!",
      cultural: "📚 Perfect for storytelling time! This instrument helps people tell amazing stories and entertain friends all over East Africa!"
    },
    {
      name: "Ngoma Drums 🥁",
      description: "Big and small drums that make different rhythms and beats!",
      cultural: "💬 These drums were like telephones long ago! They helped people send messages between villages and celebrate special events!"
    },
    {
      name: "Enanga (Bow Harp) 🏹",
      description: "A curved harp with strings - looks like a magical bow!",
      cultural: "🧙‍♂️ Traditional healers and wise storytellers use this mystical instrument to share ancient wisdom and healing songs!"
    },
    {
      name: "Enkwanzi (Panpipes) 🎵",
      description: "Bamboo pipes of different sizes that make beautiful melodies!",
      cultural: "🌾 Shepherds play these while watching their animals in the fields - creating peaceful music in nature!"
    },
    {
      name: "Endere (Flute) 🪈",
      description: "A bamboo flute with holes - simple and sweet sounding!",
      cultural: "🐄 Cattle herders love playing this flute! It keeps the animals calm and makes beautiful music in the countryside!"
    }
  ]

  const getColorClasses = (color: 'blue' | 'purple' | 'orange' | 'green') => {
    const colors = {
      blue: "border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50",
      purple: "border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50", 
      orange: "border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50",
      green: "border-green-200 bg-gradient-to-br from-green-50 to-emerald-50"
    }
    return colors[color]
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
            <div className="text-8xl mb-6">🎼</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Musical Treasures!</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              🎵 Discover all the amazing Western and traditional Ugandan instruments waiting for you on our farm! 🚜✨
            </p>
          </motion.div>
        </div>
      </section>

      {/* Western Instruments Section */}
      <section className="py-20 bg-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-4">🌍</div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">Western Instruments Playground!</h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              🎪 Learn classical and modern music with our awesome collection of instruments from around the world!
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
                <Card className={`hover:shadow-xl transition-all transform hover:scale-105 border-4 ${getColorClasses(category.color)}`}>
                  <CardHeader>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="text-6xl">{category.icon}</div>
                      <CardTitle className="text-3xl text-gray-900 text-center">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.instruments.map((instrument, idx) => (
                        <Card key={idx} className="bg-white/70 border-2 border-white/50 hover:shadow-lg transition-all">
                          <CardContent className="p-4">
                            <h4 className="font-bold text-gray-900 mb-2 text-lg">{instrument.name}</h4>
                            <p className="text-gray-600 text-sm mb-2">{instrument.description}</p>
                            <p className="text-blue-600 text-sm font-bold">{instrument.quantity}</p>
                          </CardContent>
                        </Card>
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
      <section className="py-20 bg-gradient-to-b from-orange-100 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-4">🇺🇬</div>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-6">Uganda's Musical Treasures!</h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto">
              🌟 Discover and celebrate Uganda's amazing musical heritage through these special traditional instruments!
            </p>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="mb-12"
          >
            <Card className="bg-gradient-to-r from-orange-200 to-yellow-200 border-4 border-orange-300 hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-3xl text-orange-900 flex items-center justify-center">
                  <span className="text-4xl mr-3">🏛️</span>
                  Keeping Our Culture Alive!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-900 leading-relaxed text-center text-lg">
                  🎭 Our traditional instrument program helps keep Uganda's beautiful cultural heritage alive and growing! We use these special instruments in performances, cultural exchange programs, and fun community workshops. This way, these amazing traditions will keep shining bright for all future generations! ✨🌟
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
                  <AccordionItem value={`item-${index}`} className="bg-white rounded-2xl shadow-lg border-4 border-yellow-200 hover:shadow-xl transition-all">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center border-2 border-orange-300">
                          <span className="text-2xl">🎵</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900">{instrument.name}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-4">
                        <p className="text-gray-700 text-lg">{instrument.description}</p>
                        <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200">
                          <CardContent className="p-4">
                            <p className="text-orange-900 font-medium">
                              <span className="font-bold text-lg">🌟 Cultural Magic:</span> {instrument.cultural}
                            </p>
                          </CardContent>
                        </Card>
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
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-4">🎓</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Make Learning Super Fun!</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              🌟 We mix the best old and new teaching methods to make music education exciting and easy!
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
              <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 transition-all">
                <CardHeader>
                  <div className="text-5xl mb-4 text-center">🎯</div>
                  <CardTitle className="text-xl text-center">One-on-One Magic!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 text-center">
                    👨‍🏫 Personal lessons just for you! Learn at your own pace with a teacher who focuses only on helping you shine!
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 transition-all">
                <CardHeader>
                  <div className="text-5xl mb-4 text-center">👥</div>
                  <CardTitle className="text-xl text-center">Group Adventures!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 text-center">
                    🎪 Play music with friends! Learn teamwork and have amazing performances together!
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 transition-all">
                <CardHeader>
                  <div className="text-5xl mb-4 text-center">🌍</div>
                  <CardTitle className="text-xl text-center">Best of Both Worlds!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 text-center">
                    🤝 Mix Western music techniques with beautiful Ugandan traditions for the most complete musical education ever!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <div className="text-8xl mb-6">🎸</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              Ready to Play Your First Song? 🎵
            </h2>
            <p className="text-xl mb-8 text-blue-800">
              🌟 Pick your favorite instrument and let's start making beautiful music together on our farm! 🚜
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all">
                🏠 Visit Our Farm!
              </button>
              <button className="border-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg px-8 py-4 rounded-full font-bold">
                📞 Ask Questions!
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default InstrumentsPage