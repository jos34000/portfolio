"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { ParticleBackground } from "@/components/3d-particle-background"
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
  const [canRender, setCanRender] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (window.location.pathname === "/onboarding") {
      setCanRender(true)
      return
    }
    const onboardingComplete = localStorage.getItem("onboarding-completed")
    if (onboardingComplete !== "true") {
      router.replace("/onboarding")
      return
    }
    setCanRender(true)
  }, [router])

  useEffect(() => {
    if (!canRender) return
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [canRender])

  if (!canRender) return null

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

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
        <LoadingScreen message="Preparing portfolio..." />
      ) : (
        <main className="min-h-screen bg-background">
          <ParticleBackground />
          <FloatingNav navItems={defaultNavItems} />

          <HeroSection />
          <AboutSection />
          <Carroussel />
          <ProjectsSection />
          <Contact />
          <Footer />

          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors z-50"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </main>
      )}
    </>
  )
}
