"use client"

import { Maintenance } from "@/components/shadcn/maintenance"
import { signOutAction } from "@/lib/actions/auth.action"
export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <Maintenance onBack={signOutAction} />
    </div>
  )
}
