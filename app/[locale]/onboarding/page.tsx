"use client"

import { LoadingScreen } from "@/components/loading-screen"
import { Button } from "@/components/shadcn/button"
import { useRouter } from "@/i18n/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

import { GlassCard } from "@/components/onboarding/glass-card"
import Cookies from "js-cookie"
import StepCookies from "./steps/step-cookies"
import StepInterests from "./steps/step-interests"
import StepIntro from "./steps/step-intro"
import StepLanguage from "./steps/step-langugage"
import StepTheme from "./steps/step-theme"
export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const router = useRouter()
  const t = useTranslations("Common")
  const totalSteps = 5

  const handleNext = async () => {
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      Cookies.set("onboarding-completed", "true", {
        path: "/",
        sameSite: "None",
        secure: true,
      })
      router.push("/")
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSkip = async () => {
    router.push("/")
  }

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <>
      <LoadingScreen duration={1000} message="Preparing your experience..." />

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

      <div className="min-h-screen flex items-center justify-center p-4">
        <GlassCard interactive={false} className="w-full max-w-3xl">
          <div className="w-full h-1 bg-muted/50">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: `${((step - 1) / totalSteps) * 100}%` }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <motion.span
                key={`step-${step}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm font-medium text-muted-foreground"
              >
                {t("others.step")} {step} {t("others.of")} {totalSteps}
              </motion.span>
              <div className="flex space-x-1">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-2 h-2 rounded-full ${i + 1 === step ? "bg-primary" : "bg-muted-foreground/30"}`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
            </div>

            <div className="min-h-[450px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  {step === 1 && <StepIntro />}
                  {step === 2 && <StepLanguage />}
                  {step === 3 && <StepTheme />}
                  {step === 4 && <StepInterests />}
                  {step === 5 && <StepCookies />}
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between mt-8 pt-4 border-t border-border/30 gap-4">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={step === 1}
                  className={`${step === 1 ? "opacity-0" : "opacity-100"} backdrop-blur-sm bg-background/50`}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  {t("buttons.return")}
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSkip}
                  className="text-muted-foreground hover:text-foreground transition-colors text-xs"
                >
                  {t("buttons.skip")}
                </Button>

                <Button
                  onClick={handleNext}
                  className="backdrop-blur-sm bg-primary/90 hover:bg-primary/80"
                >
                  {step === totalSteps ? (
                    t("buttons.finish")
                  ) : (
                    <>
                      {t("buttons.next")}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </>
  )
}
