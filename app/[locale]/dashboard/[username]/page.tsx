"use client"

import { Maintenance } from "@/components/shadcn/maintenance"
import { useSignOut } from "@/lib/hooks/use-signOut"

export default function DashboardPage() {
  const signOut = useSignOut()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <Maintenance onBack={signOut} />
    </div>
  )
}
