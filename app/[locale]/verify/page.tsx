"use client"
import { EmailVerificationForm } from "./verify-form"

export default function EmailVerificationPage() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-md">
        <EmailVerificationForm />
      </div>
    </div>
  )
}
