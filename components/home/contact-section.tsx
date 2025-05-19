"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"

import { BackgroundBeams } from "@/components/shadcn/background-beams"
import { PlaceholdersAndVanishInput } from "@/components/shadcn/placeholders-and-vanish-input"
import ContactDialog from "./contact-dialog"

import { toast } from "sonner"
import { z } from "zod"

export function Contact() {
  const t = useTranslations("Home.sections.contact")
  const [email, setEmail] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState("")
  const emailValidation = z.string().email("Invalid email address")

  const handleInputChange = (values: string[]) => {
    setEmail(values[0])
  }

  const handleInputSubmit = () => {
    try {
      emailValidation.parse(email)
      setError("")
      setIsOpen(true)
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(t("errors.invalidEmail"))
        toast.error(t("errors.invalidEmail"))
      }
    }
  }

  return (
    <>
      <div
        id="contact"
        className="relative flex h-[40rem] w-full items-center justify-center rounded-md bg-muted/30 antialiased"
      >
        <div className="flex flex-col items-center space-y-8 p-4 text-center sm:space-y-10">
          <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-7xl">
            {t("title")}
          </h1>
          <div className="max-w-lg px-4">
            <p className="text-base text-neutral-500 sm:text-lg">
              {t("description")}
            </p>
          </div>
          <div className="w-full max-w-2xl px-4">
            <PlaceholdersAndVanishInput
              placeholders={[t("placeholders.email"), t("placeholders.hint")]}
              onChange={handleInputChange}
              onSubmit={handleInputSubmit}
              error={error}
            />
          </div>
        </div>

        <BackgroundBeams />
      </div>

      <ContactDialog isOpen={isOpen} onOpenChange={setIsOpen} email={email} />
    </>
  )
}
