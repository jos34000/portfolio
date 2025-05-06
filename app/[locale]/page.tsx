"use client"

import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

import { defaultNavItems } from "@/components/data/nav.data"
import { Footer } from "@/components/home"
import { AboutSection } from "@/components/home/about-section"
import { Carroussel } from "@/components/home/carroussel"
import { Contact } from "@/components/home/contact-section"
import { HeroSection } from "@/components/home/hero-section"
import { ProjectsSection } from "@/components/home/projects-section"
import { LoadingScreen } from "@/components/loading-screen"
import { FloatingNav } from "@/components/ui/floating-navbar"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const t = useTranslations("Home")

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <style jsx global>{`
        :root {
          --primary-rgb: 0, 0, 0;
          --secondary-rgb: 148, 148, 148;
          --spotlight-color: 0, 0, 0;
        }
        .dark {
          --primary-rgb: 255, 255, 255;
          --secondary-rgb: 115, 115, 115;
          --spotlight-color: 255, 255, 255;
        }
      `}</style>

      {loading ? (
        <LoadingScreen message={t("loading")} />
      ) : (
        <main className="min-h-screen bg-background">
          <FloatingNav navItems={defaultNavItems} />

          <HeroSection />
          <AboutSection />
          <Carroussel />
          <ProjectsSection />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  )
}
