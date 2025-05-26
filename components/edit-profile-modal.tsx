"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { X, Check } from "lucide-react"

interface EditProfileModalProps {
  isOpen: boolean
  onClose: () => void
  currentFirstName: string
  currentLastName: string
  onSave: (firstName: string, lastName: string) => void
}

export function EditProfileModal({
  isOpen,
  onClose,
  currentFirstName,
  currentLastName,
  onSave,
}: EditProfileModalProps) {
  const [firstName, setFirstName] = useState(currentFirstName)
  const [lastName, setLastName] = useState(currentLastName)
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSave = async () => {
    if (!firstName.trim() || !lastName.trim()) {
      return
    }

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    onSave(firstName.trim(), lastName.trim())
    setIsLoading(false)
    setShowSuccess(true)

    // Show success message for 2 seconds then close
    setTimeout(() => {
      setShowSuccess(false)
      onClose()
    }, 2000)
  }

  const handleClose = () => {
    if (!isLoading && !showSuccess) {
      setFirstName(currentFirstName)
      setLastName(currentLastName)
      onClose()
    }
  }

  const isFormValid = firstName.trim() && lastName.trim()
  const hasChanges = firstName.trim() !== currentFirstName || lastName.trim() !== currentLastName

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Success State */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-white dark:bg-gray-800 z-10 flex flex-col items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6"
                    >
                      <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2"
                    >
                      Profile Updated!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-gray-600 dark:text-gray-400 text-center"
                    >
                      Your profile has been successfully updated.
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Header */}
              <div className="p-6 text-center border-b border-gray-100 dark:border-gray-700 relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  disabled={isLoading || showSuccess}
                  className="absolute top-4 right-4 h-8 w-8 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-50"
                >
                  <X className="h-4 w-4" />
                </Button>

                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" />
                  <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-2xl font-bold">
                    {firstName.charAt(0)}
                    {lastName.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">Edit Profile</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Update your personal information</p>
              </div>

              {/* Form */}
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300 font-medium">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter your first name"
                      disabled={isLoading || showSuccess}
                      className="mt-2 h-12 text-base"
                    />
                  </div>

                  <div>
                    <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300 font-medium">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter your last name"
                      disabled={isLoading || showSuccess}
                      className="mt-2 h-12 text-base"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={handleClose}
                    disabled={isLoading || showSuccess}
                    className="flex-1 h-12 text-base"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    disabled={!isFormValid || !hasChanges || isLoading || showSuccess}
                    className="flex-1 h-12 text-base bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Saving...</span>
                      </div>
                    ) : (
                      "Save Changes"
                    )}
                  </Button>
                </div>

                {/* Form Validation Messages */}
                {!isFormValid && (firstName || lastName) && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-600 dark:text-red-400 text-center"
                  >
                    Both first name and last name are required.
                  </motion.p>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
