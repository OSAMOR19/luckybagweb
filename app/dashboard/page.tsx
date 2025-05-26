"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Download, Upload, Trophy } from "lucide-react"
import Image from "next/image"

export default function DashboardPage() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true)

  const games = [
    {
      name: "AVIATOR",
      color: "bg-gradient-to-br from-purple-400 to-purple-500",
      textColor: "text-white",
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      name: "MINER",
      color: "bg-gradient-to-br from-green-500 to-green-600",
      textColor: "text-white",
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      name: "DICE",
      color: "bg-gradient-to-br from-pink-400 to-purple-500",
      textColor: "text-white",
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      name: "Lucky Bag",
      color: "bg-gradient-to-br from-blue-800 to-blue-900",
      textColor: "text-white",
      image: "/placeholder.svg?height=120&width=200",
    },
  ]

  const quickActions = [
    { name: "Japa Deluxe", image: "/images/carousel1.jpg" },
    { name: "Oshofri", image: "/images/carousel2.jpg" },
    { name: "Big Bag", image: "/images/carousel3.jpg" },
    { name: "Mega Flex", image: "/placeholder.svg?height=80&width=80" },
  ]

  const transactions = [
    {
      type: "Deposit",
      amount: "₦20,000",
      time: "34m ago",
      description: "₦20,000 has been added to your account",
      icon: "deposit",
    },
    {
      type: "Withdrawal",
      amount: "₦20,000",
      time: "34m ago",
      description: "₦20,000 has been removed from your account",
      icon: "withdrawal",
    },
    {
      type: "Deposit",
      amount: "₦20,000",
      time: "34m ago",
      description: "₦20,000 has been added to your account",
      icon: "deposit",
    },
  ]

  const winners = [
    { user: "+234*******63", amount: "₦20,000", time: "34m ago" },
    { user: "+234*******63", amount: "₦20,000", time: "34m ago" },
    { user: "+234*******63", amount: "₦20,000", time: "34m ago" },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">Home</h1>
      </motion.div>

      {/* Games Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Games</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
          {games.map((game, index) => (
            <motion.div
              key={game.name}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              className="cursor-pointer"
            >
              <Card className={`h-24 ${game.color} border-0 shadow-lg rounded-xl overflow-hidden`}>
                <CardContent className="p-0 h-full flex items-center justify-center relative">
                  <span className={`font-bold text-lg ${game.textColor}`}>{game.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Balance and Actions */}
      <div className="grid lg:grid-cols-3 gap-6 max-w-6xl">
        {/* Balance Card */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-xl">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wide font-medium">
                    BALANCE
                  </p>
                  <div className="flex items-center space-x-3 mt-2">
                    <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                      {isBalanceVisible ? "₦2,000,000" : "₦••••••••"}
                    </h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsBalanceVisible(!isBalanceVisible)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      {isBalanceVisible ? <Eye className="w-6 h-6" /> : <EyeOff className="w-6 h-6" />}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          <Card className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-xl">
            <CardContent className="p-4">
              <Button className="w-full py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 justify-start">
                <Download className="w-5 h-5 mr-3" />
                Withdraw
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-xl">
            <CardContent className="p-4">
              <Button className="w-full py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 justify-start">
                <Upload className="w-5 h-5 mr-3" />
                Deposit
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Action</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.name}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              className="cursor-pointer"
            >
              <Card className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-xl">
                <CardContent className="p-4 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <Image
                      src={action.image || "/placeholder.svg"}
                      alt={action.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-medium text-gray-800 dark:text-gray-200 text-sm">{action.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Transactions and Winners */}
      <div className="grid lg:grid-cols-2 gap-6 max-w-6xl">
        {/* Transactions */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-blue-600 dark:text-blue-400 text-lg font-semibold">Transactions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {transactions.map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    {transaction.icon === "deposit" ? (
                      <Upload className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{transaction.type}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0">{transaction.time}</p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{transaction.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Winners */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-yellow-600 dark:text-yellow-400 text-lg font-semibold">
                Recent Winners
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {winners.map((winner, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Trophy className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{winner.user}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0">{winner.time}</p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Has just won {winner.amount}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
