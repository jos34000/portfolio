"use client"

import {
  removeOnboardingCookie,
  setOnboardingCookie,
} from "@/lib/action/cookies.action"

export const useOnboarding = () => {
  const isCompleted = () => {
    if (typeof window === "undefined") return false
    return localStorage.getItem("onboarding-completed") === "true"
  }

  const markAsCompleted = async () => {
    localStorage.setItem("onboarding-completed", "true")
    await setOnboardingCookie()
  }

  const markAsIncomplete = async () => {
    localStorage.removeItem("onboarding-completed")
    await removeOnboardingCookie()
  }

  return {
    isCompleted: isCompleted(),
    markAsCompleted,
    markAsIncomplete,
  }
}
