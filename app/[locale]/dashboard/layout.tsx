"use server"
import { AppSidebar } from "@/components/app-sidebar"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { Separator } from "@/components/shadcn/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/shadcn/sidebar"
import { redirect } from "@/i18n/navigation"
import { getSessionAction } from "@/lib/actions/auth.action"
import { getLocale } from "next-intl/server"
import { cookies } from "next/headers"

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"

  const { success, session } = await getSessionAction()
  const currentLocale = await getLocale()

  if (!session || !success) {
    redirect({ href: "/login", locale: currentLocale })
  }

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <BreadcrumbNav />
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
