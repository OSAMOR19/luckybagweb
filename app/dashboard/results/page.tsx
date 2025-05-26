"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"
import Image from "next/image"

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState("current")

  const currentDraws = [
    {
      id: 1,
      name: "Oshofri",
      prize: "₦100 to win ₦100,000",
      status: "Ongoing",
      time: "34m ago",
      icon: "/images/carousel2.jpg",
    },
    {
      id: 2,
      name: "Big Bag",
      prize: "₦100 to win ₦100,000",
      status: "Ongoing",
      time: "34m ago",
      icon: "/images/carousel3.jpg",
    },
    {
      id: 3,
      name: "Mega Flex",
      prize: "₦100 to win ₦100,000",
      status: "Ongoing",
      time: "34m ago",
      icon: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      name: "Mega Draw",
      prize: "₦100 to win ₦100,000",
      status: "Ongoing",
      time: "34m ago",
      icon: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 5,
      name: "Super Mega",
      prize: "₦100 to win ₦100,000",
      status: "Ongoing",
      time: "34m ago",
      icon: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 6,
      name: "Japa Deluxe",
      prize: "₦100 to win ₦100,000",
      status: "Ongoing",
      time: "34m ago",
      icon: "/images/carousel1.jpg",
    },
    {
      id: 7,
      name: "Japa Deluxe",
      prize: "₦100 to win ₦100,000",
      status: "Ongoing",
      time: "34m ago",
      icon: "/images/carousel1.jpg",
    },
  ]

  const pastDraws = [
    {
      id: 1,
      name: "Oshofri",
      prize: "₦100 to win ₦100,000",
      status: "Lost",
      time: "34m ago",
      icon: "/images/carousel2.jpg",
    },
    {
      id: 2,
      name: "Big Bag",
      prize: "₦100 to win ₦100,000",
      status: "Won",
      time: "34m ago",
      icon: "/images/carousel3.jpg",
    },
    {
      id: 3,
      name: "Mega Flex",
      prize: "₦100 to win ₦100,000",
      status: "Lost",
      time: "34m ago",
      icon: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      name: "Mega Draw",
      prize: "₦100 to win ₦100,000",
      status: "Won",
      time: "34m ago",
      icon: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 5,
      name: "Super Mega",
      prize: "₦100 to win ₦100,000",
      status: "Won",
      time: "34m ago",
      icon: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 6,
      name: "Big Bag",
      prize: "₦100 to win ₦100,000",
      status: "Won",
      time: "34m ago",
      icon: "/images/carousel3.jpg",
    },
    {
      id: 7,
      name: "Mega Flex",
      prize: "₦100 to win ₦100,000",
      status: "Lost",
      time: "34m ago",
      icon: "/placeholder.svg?height=60&width=60",
    },
  ]

  const winners = [
    { id: 1, user: "+234*******63", amount: "₦20,000", time: "34m ago" },
    { id: 2, user: "+234*******63", amount: "₦20,000", time: "34m ago" },
    { id: 3, user: "+234*******63", amount: "₦20,000", time: "34m ago" },
    { id: 4, user: "+234*******63", amount: "₦20,000", time: "34m ago" },
    { id: 5, user: "+234*******63", amount: "₦20,000", time: "34m ago" },
    { id: 6, user: "+234*******63", amount: "₦20,000", time: "34m ago" },
    { id: 7, user: "+234*******63", amount: "₦20,000", time: "34m ago" },
    { id: 8, user: "+234*******63", amount: "₦20,000", time: "34m ago" },
    { id: 9, user: "+234*******63", amount: "₦20,000", time: "34m ago" },
    { id: 10, user: "+234*******63", amount: "₦20,000", time: "34m ago" },
    { id: 11, user: "+234*******63", amount: "₦20,000", time: "34m ago" },
  ]

  const tabs = [
    { id: "current", label: "Current", color: "text-blue-600 border-blue-600" },
    { id: "past", label: "Past", color: "text-blue-600 border-blue-600" },
    { id: "winners", label: "Winners", color: "text-yellow-600 border-yellow-600" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Won":
        return "text-green-600"
      case "Lost":
        return "text-red-600"
      case "Ongoing":
        return "text-gray-600"
      default:
        return "text-gray-600"
    }
  }

  const renderDrawCard = (draw: any, index: number) => (
    <motion.div
      key={draw.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card className="bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
              <Image
                src={draw.icon || "/placeholder.svg"}
                alt={draw.name}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{draw.name}</h3>
                <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0">{draw.time}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{draw.prize}</p>
              <p className={`text-sm font-medium mt-1 ${getStatusColor(draw.status)}`}>Status: {draw.status}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  const renderWinnerCard = (winner: any, index: number) => (
    <motion.div
      key={winner.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card className="bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center flex-shrink-0">
              <Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{winner.user}</h3>
                <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0">{winner.time}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Has just won {winner.amount}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">Results</h1>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="flex space-x-8 border-b border-gray-200 dark:border-gray-700 max-w-4xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 px-1 font-semibold text-lg transition-colors relative ${
                activeTab === tab.id
                  ? tab.color
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                    tab.id === "winners" ? "bg-yellow-600" : "bg-blue-600"
                  }`}
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
        {activeTab === "current" && currentDraws.map((draw, index) => renderDrawCard(draw, index))}
        {activeTab === "past" && pastDraws.map((draw, index) => renderDrawCard(draw, index))}
        {activeTab === "winners" && winners.map((winner, index) => renderWinnerCard(winner, index))}
      </div>
    </div>
  )
}
