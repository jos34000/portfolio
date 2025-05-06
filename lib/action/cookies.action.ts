"use server"

import { prisma } from "@/lib/db/client"
import { cookies } from "next/headers"

export type SupportedLanguage = "en" | "fr" | "es"

const setCookie = async (name: string, value: string) => {
  const cookieStore = await cookies()
  cookieStore.set(name, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  })
}

const getCookie = async (name: string) => {
  const cookieStore = await cookies()
  return cookieStore.get(name)?.value
}

const hasCookie = async (name: string) => {
  const cookieStore = await cookies()
  return cookieStore.has(name)
}

const deleteCookie = async (name: string) => {
  const cookieStore = await cookies()
  cookieStore.delete(name)
}

export const setLanguageCookie = async (language: SupportedLanguage) => {
  await setCookie("preferred-language", language)
}

export const getLanguageCookie = async (): Promise<SupportedLanguage> => {
  const value = await getCookie("preferred-language")
  return (value as SupportedLanguage) || "en"
}

export const setOnboardingCookie = async () => {
  await setCookie("onboarding-completed", "true")
}

export const removeOnboardingCookie = async () => {
  await deleteCookie("onboarding-completed")
}

export const hasOnboardingCookie = async () => {
  return await hasCookie("onboarding-completed")
}

export const saveOnboardingCompletion = async (
  userId: string,
  onboardingData: any
) => {
  await prisma.onboardingStats.create({
    data: {
      userId,
      data: onboardingData,
    },
  })
}
