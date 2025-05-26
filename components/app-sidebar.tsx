"use client"

import { useState } from "react"
import { Home, Gamepad2, BarChart3, CreditCard, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ProfileModal } from "@/components/profile-modal"

const menuItems = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Games",
    url: "/dashboard/games",
    icon: Gamepad2,
  },
  {
    title: "Results",
    url: "/dashboard/results",
    icon: BarChart3,
  },
  {
    title: "Transactions",
    url: "/dashboard/transactions",
    icon: CreditCard,
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      <Sidebar
        className={`border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        <SidebarHeader className="p-6 relative">
          <div className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-2"}`}>
            <div className="text-2xl">🎲</div>
            {!isCollapsed && <span className="text-xl font-bold text-blue-600 dark:text-blue-400">LuckyBag</span>}
          </div>

          {/* Collapse Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute -right-3 top-6 h-6 w-6 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 shadow-sm"
          >
            {isCollapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
          </Button>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            {!isCollapsed && (
              <SidebarGroupLabel className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
                MENU
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => {
                  const isActive = pathname === item.url
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className={`transition-all duration-300 hover:scale-105 ${
                          isCollapsed ? "justify-center p-3" : "justify-start"
                        } ${
                          isActive
                            ? "bg-blue-50 dark:bg-blue-950 text-[#0059E6] hover:bg-blue-50 dark:hover:bg-blue-950"
                            : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                        }`}
                      >
                        <Link
                          href={item.url}
                          className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-3"} p-3 w-full`}
                          title={isCollapsed ? item.title : undefined}
                        >
                          <item.icon className={`w-5 h-5 ${isActive ? "text-[#0059E6]" : "text-current"}`} />
                          {!isCollapsed && <span>{item.title}</span>}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-6">
          <div
            className={`flex items-center ${
              isCollapsed ? "justify-center" : "space-x-3"
            } p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer`}
            onClick={() => setIsProfileModalOpen(true)}
            title={isCollapsed ? "John Doe - Profile" : undefined}
          >
            <Avatar className="w-10 h-10 flex-shrink-0">
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                JD
              </AvatarFallback>
            </Avatar>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-800 dark:text-gray-200 text-sm truncate">John Doe</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Profile</p>
              </div>
            )}
          </div>
        </SidebarFooter>
      </Sidebar>

      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
    </>
  )
}
