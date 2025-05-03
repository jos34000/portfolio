import { Maintenance } from "@/components/ui/maintenance"

export default async function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <Maintenance
        title="New Feature Coming Soon"
        description="This section is under development. We are working hard to provide you with an exceptional experience."
      />
    </div>
  )
}
