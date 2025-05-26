"use client"

import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between p-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-4">
        <SidebarTrigger className="lg:hidden" />
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Button variant="ghost" size="icon" className="relative transition-colors duration-200">
            <Bell className="w-5 h-5" />
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs"
            >
              3
            </Badge>
          </Button>
        </div>
      </div>
    </header>
  )
}
