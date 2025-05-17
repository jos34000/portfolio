import { Settings } from "@/components/home/settings"
import { routing } from "@/i18n/routing"

import { hasLocale } from "next-intl"
import { notFound } from "next/navigation"

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <main key={locale}>
      {children}
      <Settings />
    </main>
  )
}
