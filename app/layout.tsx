import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfolio de Jos",
  description: "Portfolio détaillant mes compétences et mes projets",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "icon", url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png", type: "image/png" },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
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
