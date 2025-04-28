import type { Metadata } from "next"

import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"
import "./globals.css"

export const metadata: Metadata = {
  title: "Boiler plate de Jos",
  description: "Base de mes futures apps",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
