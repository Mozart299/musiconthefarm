"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Music,
  Users,
  BookOpen,
  Heart,
  Award,
  Globe,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold mb-4 border-2 border-white/30">
                🌟 Welcome to Our Farm! 🌟
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Kitty Town Music &
                <span className="block text-blue-900">Arts School</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                🎵 Where kids and grown-ups discover their musical magic in the
                most fun way possible! Join our farm family today! 🚜
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-4 rounded-full shadow-lg"
                >
                  <Link href="/contact" className="flex items-center">
                    🚀 Start the Adventure!{" "}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-orange-600 hover:bg-white text-lg px-8 py-4 rounded-full border-2"
                >
                  <Link href="/about">📖 Our Story</Link>
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
                <motion.div 
                  className="w-80 h-80 bg-white rounded-full flex items-center justify-center shadow-2xl border-8 border-blue-600"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-60 h-60 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center relative p-4">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-blue-200 shadow-inner">
                      <Image
                        src="/logo.jpeg"
                        alt="Kitty Town Music & Arts School Logo"
                        width={240}
                        height={240}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <motion.div 
                      className="absolute -top-8 -right-8 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="text-2xl">🎵</span>
                    </motion.div>
                    <motion.div 
                      className="absolute -bottom-8 -left-8 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="text-2xl">🎸</span>
                    </motion.div>
                    <motion.div 
                      className="absolute -top-8 -left-8 w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span className="text-lg">🎤</span>
                    </motion.div>
                    <motion.div 
                      className="absolute -bottom-8 -right-8 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                      animate={{ scale: [1.2, 1, 1.2] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span className="text-lg">🎨</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fun Stats Section */}
      <section className="py-20 bg-yellow-400 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              🌱 Our Growing Farm Family! 🌱
            </h2>
            <p className="text-xl text-blue-800 max-w-3xl mx-auto">
              Look how much our musical farm has grown!
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-white border-4 border-green-200 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">📚</div>
                  <div className="text-3xl font-bold text-green-900">3000</div>
                  <div className="text-green-700 font-medium">Books</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-white border-4 border-orange-200 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">🎯</div>
                  <div className="text-3xl font-bold text-orange-900">1:3</div>
                  <div className="text-orange-700 font-medium">
                    Free to Paid
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              🌈 Why We're Special! 🌈
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Our mission and vision guide everything we do on the farm!
            </p>
          </motion.div>

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
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-3xl">❤️</span>
                  </div>
                  <CardTitle className="text-3xl text-pink-900 text-center">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed text-center">
                    We make music and arts education super fun and accessible
                    for everyone! Every child deserves to discover their
                    creative superpowers, no matter their background. 🦸‍♀️🦸‍♂️
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all transform hover:scale-105 border-4 border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50">
                <CardHeader>
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-3xl">🌟</span>
                  </div>
                  <CardTitle className="text-3xl text-cyan-900 text-center">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed text-center">
                    To grow the most amazing creative community in Uganda! We're
                    building a place where music, art, and culture bloom like
                    flowers in our garden. 🌻🌺
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-6">
              🎪 Our Fun Learning Adventures! 🎪
            </h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto">
              From tiny tots to grown-ups, everyone finds their musical magic
              here!
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
              <Card className="h-full hover:shadow-xl transition-all transform hover:scale-105 border-4 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-3xl">🎸</span>
                  </div>
                  <CardTitle className="text-2xl text-blue-900 text-center">
                    Music Madness!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-center">
                    Guitar, piano, drums, traditional Ugandan instruments, and
                    more! Every kid becomes a rockstar! 🌟
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Fun group lessons & solo time
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Real recording studio access
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Farm concerts & shows
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all transform hover:scale-105 border-4 border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-3xl">💃</span>
                  </div>
                  <CardTitle className="text-2xl text-purple-900 text-center">
                    Dance Party!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-center">
                    Traditional Ugandan dances, modern moves, and creative
                    expression. Let's dance! 🕺
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Cultural dance traditions
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Modern dance styles
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
              <Card className="h-full hover:shadow-xl transition-all transform hover:scale-105 border-4 border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50">
                <CardHeader>
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-3xl">🎨</span>
                  </div>
                  <CardTitle className="text-2xl text-emerald-900 text-center">
                    Art Adventures!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-center">
                    Painting, drawing, crafts, and creative projects. Every
                    artist shines bright! ✨
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Creative art projects
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Art exhibitions & shows
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Community art adventures
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Amazing Impact!
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Supporting families through fun, inclusive education that grows
              with love! 💝
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="text-center">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🌟</div>
                <p className="text-lg text-white/90 leading-relaxed">
                  For every three paying students, one student from a less
                  privileged background receives a scholarship to study free!
                  We're creating a sustainable and equitable learning
                  environment where everyone can grow their musical talents. 🌱
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <div className="text-8xl mb-6">🚀</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              Ready to Join Our Musical Farm? 🚜🎵
            </h2>
            <p className="text-xl mb-8 text-blue-800">
              Come grow your creativity with us! Every great musician started
              with their first note. 🌱
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-4 rounded-full shadow-lg"
              >
                <Link href="/contact" className="flex items-center">
                  🎯 Start Learning Today!{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg px-8 py-4 rounded-full border-2"
              >
                <Link href="/instruments">🎸 See Our Instruments</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;