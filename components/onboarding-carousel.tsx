"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const carouselData = [
  {
    id: 1,
    title: "How to Play?",
    description: "Dial our USSD code, pick your lucky numbers, and enter the draw. It's fast, simple, and rewarding!",
    image: "/images/carousel1.jpg",
  },
  {
    id: 2,
    title: "100% Fair & Transparent",
    description: "Every draw is random and fair, ensuring equal chances for all players. Your luck, your win!",
    image: "/images/carousel2.jpg",
  },
  {
    id: 3,
    title: "Real Prizes, Real Winners!",
    description: "Cash prizes, gadgets, and more! Participate today and be the next big winner!",
    image: "/images/carousel3.jpg",
  },
]

export function OnboardingCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">LuckyBag 🎲</h2>

        <div className="relative w-[400px] h-[300px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={carouselData[currentSlide].image || "/placeholder.svg"}
                alt={carouselData[currentSlide].title}
                width={400}
                height={300}
                className="w-full h-full object-contain animate-float"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              {carouselData[currentSlide].title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{carouselData[currentSlide].description}</p>
          </motion.div>
        </AnimatePresence>

        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentSlide ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
