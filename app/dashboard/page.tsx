"use client"
import { redirect } from "next/navigation"
import { useEffect } from "react"

import { authClient } from "@/lib/auth/auth-client"

export default function DashboardPage() {
  useEffect(() => {
    const checkSession = async () => {
      const { data: session } = await authClient.getSession()
      if (!session) {
        redirect("/login")
        return
      }
      const username = session.user?.username
      if (username) {
        redirect(`/dashboard/${username}`)
      }
    }
    checkSession()
  }, [])
  return null
}
