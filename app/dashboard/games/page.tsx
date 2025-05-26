"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function GamesPage() {
  const games = [
    { name: "AVIATOR", color: "from-purple-400 to-purple-600", icon: "✈️", players: "1,234" },
    { name: "MINER", color: "from-green-400 to-green-600", icon: "⛏️", players: "856" },
    { name: "DICE", color: "from-pink-400 to-pink-600", icon: "🎲", players: "2,341" },
    { name: "Lucky Bag", color: "from-blue-500 to-blue-700", icon: "🎁", players: "3,567" },
    { name: "ROULETTE", color: "from-red-400 to-red-600", icon: "🎰", players: "1,789" },
    { name: "BLACKJACK", color: "from-gray-400 to-gray-600", icon: "🃏", players: "945" },
  ]

  return (
    <div className="space-y-8">
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">Games</h1>
        <p className="text-gray-600 dark:text-gray-400">Choose from our exciting collection of games</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {games.map((game, index) => (
          <motion.div
            key={game.name}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -3 }}
            className="cursor-pointer"
          >
            <Card className={`h-64 bg-gradient-to-br ${game.color} border-0 shadow-xl overflow-hidden relative group`}>
              <CardContent className="p-6 h-full flex flex-col justify-between text-white relative z-10">
                <div className="text-center">
                  <div className="text-4xl mb-4">{game.icon}</div>

                  <h3 className="text-2xl font-bold mb-2">{game.name}</h3>

                  <p className="text-white/80 text-sm mb-4">{game.players} players online</p>
                </div>

                <Button
                  variant="secondary"
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm transition-colors duration-200"
                >
                  Play Now
                </Button>

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
    </div>
  )
}
