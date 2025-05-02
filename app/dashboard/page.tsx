"use client"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

import { authClient } from "@/lib/auth/auth-client"

export default function DashboardPage() {
  const [sessions, setSessions] = useState<any>(null)

  useEffect(() => {
    const checkSession = async () => {
      const { data: session } = await authClient.useSession()
      console.log("Session data:", session)
      setSessions(session)

      if (!session) {
        redirect("/login")
      }
    }

    checkSession()
  }, [])

  return null
}
