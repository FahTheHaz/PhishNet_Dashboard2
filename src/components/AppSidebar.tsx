import { useState } from "react"
import { BarChart3, Key, Shield, Users, FileText, Settings, Clock, Home, Chrome } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const adminItems = [
  { title: "Dashboard", url: "/dashboard", icon: BarChart3 },
  { title: "API Keys", url: "/api-keys", icon: Key },
  { title: "Recent Scans", url: "/recent-scans", icon: Clock },
  { title: "User Management", url: "/admin/users", icon: Users },
  { title: "System Settings", url: "/admin/settings", icon: Settings },
  { title: "Documentation", url: "/documentation", icon: FileText },
]

const userItems = [
  { title: "Dashboard", url: "/dashboard", icon: BarChart3 },
  { title: "Browser Extension", url: "/extension", icon: Chrome },
  { title: "API Keys", url: "/api-keys", icon: Key },
  { title: "Recent Scans", url: "/recent-scans", icon: Clock },
  { title: "Documentation", url: "/documentation", icon: FileText },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" : "hover:bg-muted/50"

  // Mock admin check - replace with actual auth logic
  const isAdmin = typeof window !== "undefined" ? localStorage.getItem("viewMode") !== "user" : true // TODO: Replace with actual role check from auth context
  
  const navigationItems = isAdmin ? adminItems : userItems

  return (
    <Sidebar
      className={collapsed ? "w-14" : "w-64"}
      collapsible="icon"
    >
      <SidebarContent className="bg-background border-r">

        <SidebarGroup>
          <SidebarGroupLabel>{isAdmin ? "Admin Portal" : "Main"}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="w-4 h-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}