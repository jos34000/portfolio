import { authClient } from "@/lib/auth/auth-client"
import { useEffect, useState } from "react"

export const useUser = () => {
  const [user, setUser] = useState<{
    name: string
    email: string
    initials: string
    firstName: string
    lastName: string
    emailVerified: boolean
    image: string
  } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSession = async () => {
      const { data: session } = await authClient.getSession()
      if (session) {
        setUser({
          name: session.user.name,
          email: session.user.email,
          initials: session.user.initials,
          firstName: session.user.firstName,
          lastName: session.user.lastName,
          emailVerified: session.user.emailVerified,
          image: session.user.image || "",
        })
      }
      setLoading(false)
    }

    fetchSession()
  }, [])

  return { user, loading }
}
