"use client"

import { useState } from "react"
import { z } from "zod"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { sendContactEmail } from "@/lib/action/send-contact-email"
import { contactStepSchema } from "@/lib/schemas/contacting.schema"
import { cn } from "@/lib/utils"

import { Button } from "../ui/button"

type ContactDialogProps = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  email: string
  onSubmit: (data: { email: string; message: string; reason: string }) => void
}

export const ContactDialog = ({
  isOpen,
  onOpenChange,
  email,
  onSubmit,
}: ContactDialogProps) => {
  const [message, setMessage] = useState("")
  const [reason, setReason] = useState("")
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateStep = () => {
    try {
      if (step === 1) {
        contactStepSchema.step1.parse({ message })
      } else if (step === 2) {
        if (!reason) {
          setErrors({ reason: "Please select a reason" })
          return false
        }
        contactStepSchema.step2.parse({ reason })
      } else if (step === 3) {
        contactStepSchema.step3.parse({ email, message, reason })
      }
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (typeof err.path[0] === "string") {
            newErrors[err.path[0]] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1)
    }
  }

  const prevStep = () => setStep(step - 1)

  const handleSubmit = async () => {
    if (validateStep()) {
      onSubmit({ email, message, reason })
      await sendContactEmail({
        email,
        reason,
        message,
      })

      setStep(1)
      setMessage("")
      setReason("")
      setErrors({})
    }
  }

  const getStepTitle = () => {
    if (step === 1) return "Your request"
    if (step === 2) return "Select a reason"
    return "Confirmation"
  }

  const getStepDescription = () => {
    if (step === 1) return "Describe your request!"
    if (step === 2) return "Choose one of the following reasons"
    return "Check the information before sending"
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-neutral-950 text-neutral-200 rounded-lg border border-neutral-800 shadow-2xl max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 pb-2">
            {getStepTitle()}
          </DialogTitle>
          <DialogDescription className="text-neutral-500 text-sm">
            {getStepDescription()}
          </DialogDescription>
        </DialogHeader>
        <div className="my-6">
          {step === 1 && (
            <div>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your request here & add links if necessary ..."
                className={`bg-neutral-950 border-neutral-800 text-neutral-200 rounded-lg focus:ring-2 focus:ring-teal-500 min-h-[150px] placeholder:text-neutral-700 ${
                  errors.message ? "border-red-500" : "border-neutral-800"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
          )}
          {step === 2 && (
            <div>
              <Select onValueChange={setReason}>
                <SelectTrigger
                  className={cn(
                    "bg-neutral-950 text-neutral-200 rounded-lg transition-all duration-300",
                    errors.reason ? "border-red-500" : "border-neutral-800",
                    "hover:border-sky-600 focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  )}
                >
                  <SelectValue placeholder="Select a reason" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-950 border-neutral-800 text-neutral-200">
                  <SelectItem value="job">Job offer</SelectItem>
                  <SelectItem value="collaboration">Collaboration</SelectItem>
                  <SelectItem value="suggestion">Suggestion</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.reason && (
                <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
              )}
            </div>
          )}
          {step === 3 && (
            <div className="space-y-3 text-sm bg-neutral-950 border border-neutral-800 p-4 rounded-lg">
              <p>
                <strong className="text-neutral-200">Email:</strong>{" "}
                <span className="text-neutral-500">{email}</span>
              </p>
              <p>
                <strong className="text-neutral-200">Message:</strong>{" "}
                <span className="text-neutral-500">{message}</span>
              </p>
              <p>
                <strong className="text-neutral-200">Reason:</strong>{" "}
                <span className="text-neutral-500">{reason}</span>
              </p>
            </div>
          )}
        </div>
        <DialogFooter className="flex justify-between">
          {step > 1 && (
            <Button
              onClick={prevStep}
              className="bg-neutral-950 border hover:border-indigo-500 text-neutral-200 rounded-lg hover:bg-neutral-900 px-6 py-2 transition-colors duration-300"
            >
              Back
            </Button>
          )}
          {step < 3 ? (
            <Button
              onClick={nextStep}
              className="bg-neutral-950 border hover:border-sky-500 text-neutral-200 rounded-lg  hover:bg-neutral-900 px-6 py-2 transition-all duration-300"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-neutral-950 border hover:border-sky-500 text-neutral-200 rounded-lg hover:bg-neutral-900 px-6 py-2 transition-all duration-300"
            >
              Send
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
