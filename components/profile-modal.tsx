"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { ChevronRight, History, MessageCircle, Bell, Moon, Copy, LogOut, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import { EditProfileModal } from "@/components/edit-profile-modal"

interface ProfileModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const [pushNotifications, setPushNotifications] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false)
  const [userProfile, setUserProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "jo**********@gmail.com",
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCopyReferralCode = () => {
    navigator.clipboard.writeText("LUCKY123456")
    // You could add a toast notification here
  }

  const handleLogout = () => {
    // Handle logout logic
    router.push("/auth/signin")
    onClose()
  }

  const handleThemeToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light")
  }

  const handleEditProfile = () => {
    setIsEditProfileOpen(true)
  }

  const handleSaveProfile = (firstName: string, lastName: string) => {
    setUserProfile((prev) => ({
      ...prev,
      firstName,
      lastName,
    }))
  }

  const menuItems = [
    {
      icon: History,
      label: "Transaction History",
      onClick: () => {
        router.push("/dashboard/transactions")
        onClose()
      },
      hasArrow: true,
    },
    {
      icon: MessageCircle,
      label: "Contact Support",
      onClick: () => {
        // Handle contact support
        onClose()
      },
      hasArrow: true,
    },
  ]

  const preferenceItems = [
    {
      icon: Bell,
      label: "Push Notifications",
      type: "toggle" as const,
      value: pushNotifications,
      onChange: setPushNotifications,
    },
    {
      icon: Moon,
      label: "Dark Mode",
      type: "toggle" as const,
      value: mounted ? theme === "dark" : false,
      onChange: handleThemeToggle,
    },
    {
      icon: Copy,
      label: "Copy Referral Code",
      type: "button" as const,
      onClick: handleCopyReferralCode,
    },
    {
      icon: LogOut,
      label: "Log Out",
      type: "button" as const,
      onClick: handleLogout,
      className: "text-red-600 dark:text-red-400",
    },
  ]

  if (!mounted) return null

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={onClose}
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
                {/* Header */}
                <div className="p-6 text-center border-b border-gray-100 dark:border-gray-700 relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="absolute top-4 right-4 h-8 w-8 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <X className="h-4 w-4" />
                  </Button>

                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" />
                    <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-2xl font-bold">
                      {userProfile.firstName.charAt(0)}
                      {userProfile.lastName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    {userProfile.firstName} {userProfile.lastName}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{userProfile.email}</p>

                  <Button
                    onClick={handleEditProfile}
                    className="bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white px-8 py-2 rounded-full"
                  >
                    Edit Profile
                  </Button>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Menu Items */}
                  <div className="space-y-2 mb-6">
                    {menuItems.map((item, index) => (
                      <motion.button
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={item.onClick}
                        className="w-full flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left group"
                      >
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="flex-1 text-gray-800 dark:text-gray-200 font-medium text-base">
                          {item.label}
                        </span>
                        {item.hasArrow && (
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                        )}
                      </motion.button>
                    ))}
                  </div>

                  {/* Preferences */}
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 px-2">Preferences</p>
                    <div className="space-y-2">
                      {preferenceItems.map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (menuItems.length + index) * 0.1 }}
                          className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                        >
                          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                            <item.icon className={`w-6 h-6 ${item.className || "text-blue-600 dark:text-blue-400"}`} />
                          </div>
                          <span
                            className={`flex-1 font-medium text-base ${
                              item.className || "text-gray-800 dark:text-gray-200"
                            }`}
                          >
                            {item.label}
                          </span>
                          {item.type === "toggle" && (
                            <Switch
                              checked={item.value}
                              onCheckedChange={item.onChange}
                              className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300 dark:data-[state=unchecked]:bg-gray-600"
                            />
                          )}
                          {item.type === "button" && item.onClick && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={item.onClick}
                              className="p-2 h-auto text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </Button>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        currentFirstName={userProfile.firstName}
        currentLastName={userProfile.lastName}
        onSave={handleSaveProfile}
      />
    </>
  )
}
