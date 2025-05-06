"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useUser } from "@/lib/hooks/use-user"
import { createSidebarData } from "./data/sidebar.data"

export function AppSidebar({
  username,
  locale,
  ...props
}: { username: string; locale: string } & React.ComponentProps<
  typeof Sidebar
>) {
  const { user } = useUser()
  const sidebarData = createSidebarData(user?.username ?? "")

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={sidebarData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.navMain} username={username} />
        <NavProjects projects={sidebarData.projects} username={username} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
