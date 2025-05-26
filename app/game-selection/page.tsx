"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function GameSelectionPage() {
  const router = useRouter()

  const games = [
    {
      id: "aviator",
      title: "AVIATOR",
      image: "/placeholder.svg?height=200&width=200",
      color: "from-purple-400 to-purple-600",
      description: "Fly high and win big!",
    },
    {
      id: "luckybag",
      title: "Lucky Bag",
      image: "/placeholder.svg?height=200&width=200",
      color: "from-blue-500 to-blue-700",
      description: "Your lucky numbers await!",
    },
  ]

  const handleGameSelect = (gameId: string) => {
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">LuckyBag 🎲</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">Choose your game and start winning!</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer"
            onClick={() => handleGameSelect(game.id)}
          >
            <Card className={`h-80 bg-gradient-to-br ${game.color} border-0 shadow-xl overflow-hidden relative group`}>
              <CardContent className="p-8 h-full flex flex-col items-center justify-center text-white relative z-10">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-3xl">🎮</span>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-4 text-center">{game.title}</h2>

                <p className="text-white/80 text-center">{game.description}</p>

                <motion.div
                  className="absolute inset-0 bg-white/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-500 dark:text-gray-400">Select a game to continue to your dashboard</p>
      </motion.div>
    </div>
  )
}
