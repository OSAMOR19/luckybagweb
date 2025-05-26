"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Bell, Download, Upload, Gift } from "lucide-react"

export default function TransactionsPage() {
  const transactions = [
    {
      id: "TXN-001",
      type: "Deposit",
      amount: "₦20,000",
      description: "₦20,000 has been added to your account",
      time: "34m ago",
      icon: Upload,
    },
    {
      id: "TXN-002",
      type: "Withdrawal",
      amount: "₦20,000",
      description: "₦20,000 has been removed from your account",
      time: "34m ago",
      icon: Download,
    },
    {
      id: "TXN-003",
      type: "Withdrawal",
      amount: "₦100",
      description: "₦100 has been removed from your account to enter oshofri",
      time: "34m ago",
      icon: Download,
    },
    {
      id: "TXN-004",
      type: "Deposit",
      amount: "₦100,000",
      description: "₦100,000 has been added to your account from Big Bag game",
      time: "34m ago",
      icon: Upload,
    },
    {
      id: "TXN-005",
      type: "Bonus",
      amount: "₦10,000",
      description: "₦10,000 has been added to your account",
      time: "34m ago",
      icon: Gift,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between max-w-4xl"
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Transactions</h1>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full"></div>
          </div>

          <Button variant="secondary" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full">
            Clear All
          </Button>
        </div>
      </motion.div>

      {/* Transactions List */}
      <div className="space-y-4 max-w-4xl">
        {transactions.map((transaction, index) => (
          <motion.div
            key={transaction.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <transaction.icon className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-lg">{transaction.type}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">{transaction.time}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{transaction.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
