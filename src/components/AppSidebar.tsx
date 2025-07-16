import { useState } from "react"
import { BarChart3, Key, Shield, Users, FileText, Settings, Clock, Home } from "lucide-react"
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

const mainItems = [
  { title: "Dashboard", url: "/dashboard", icon: BarChart3 },
  { title: "API Keys", url: "/api-keys", icon: Key },
  { title: "Recent Scans", url: "/recent-scans", icon: Clock },
  { title: "Documentation", url: "/documentation", icon: FileText },
]

const adminItems = [
  { title: "User Management", url: "/admin/users", icon: Users },
  { title: "System Settings", url: "/admin/settings", icon: Settings },
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
  const isAdmin = true

  return (
    <Sidebar
      className={collapsed ? "w-14" : "w-64"}
      collapsible="icon"
    >
      <SidebarContent className="bg-background border-r">
        {/* Logo/Brand */}
        <div className={`flex items-center gap-2 p-4 border-b ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <img src="/lovable-uploads/0911929d-f89d-4f35-8e2f-893150131aac.png" alt="PhishNet Logo" className="w-8 h-8 object-contain" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-bold text-lg">PhishNet</h2>
              <p className="text-xs text-muted-foreground">AI Protection</p>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
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

        {isAdmin && (
          <SidebarGroup>
            <SidebarGroupLabel>Admin</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {adminItems.map((item) => (
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
        )}
      </SidebarContent>
    </Sidebar>
  )
}