"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { OnboardingCarousel } from "@/components/onboarding-carousel"

export default function VerifyPage() {
  const [code, setCode] = useState(["", "", "", ""])
  const [timeLeft, setTimeLeft] = useState(60)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)

      // Auto-focus next input
      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleContinue = () => {
    // Simulate verification
    router.push("/game-selection")
  }

  const handleResend = () => {
    setTimeLeft(60)
    setCode(["", "", "", ""])
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Dynamic Carousel */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex"
        >
          <OnboardingCarousel />
        </motion.div>

        {/* Right Side - Verification Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md mx-auto"
        >
          <Card className="shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Enter authentication code</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Enter the 4-digit that we have sent via the
                <br />
                Email generice****@gmail.com
              </p>

              {/* Code Input */}
              <div className="flex justify-center space-x-4 mb-6">
                {code.map((digit, index) => (
                  <Input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-xl font-bold border-2 focus:border-blue-500 transition-colors duration-200"
                  />
                ))}
              </div>

              <div className="text-center mb-6">
                <Link
                  href="/auth/phone"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                >
                  Use Phone Number
                </Link>
              </div>

              <Button
                onClick={handleContinue}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200 mb-4"
              >
                Continue →
              </Button>

              <div className="text-center">
                {timeLeft > 0 ? (
                  <p className="text-gray-500 text-sm">Resend code in {timeLeft}s</p>
                ) : (
                  <Button
                    variant="ghost"
                    onClick={handleResend}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Resend code
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
