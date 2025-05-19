"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"
import { z } from "zod"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/shadcn/dialog"
import { sendContactEmail } from "@/lib/actions/sendEmail.action"

import { Button } from "@/components/shadcn/button"
import { useAppForm } from "@/lib/hooks/useAppForm"
import { useStore } from "@tanstack/react-form"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"

export default function ContactDialog({
  isOpen,
  onOpenChange,
  email,
}: Readonly<ContactDialogProps>) {
  const t = useTranslations("Home.sections.contact.dialog")
  const [step, setStep] = useState(1)

  const prevStep = () => setStep(step - 1)

  const options = [
    { label: t("form.reason.options.job"), value: "job" },
    { label: t("form.reason.options.collaboration"), value: "collaboration" },
    { label: t("form.reason.options.suggestion"), value: "suggestion" },
    { label: t("form.reason.options.other"), value: "other" },
  ]

  const form = useAppForm({
    defaultValues: {
      email: email,
      message: "",
      reason: "",
    },
    validators: {
      onChange: z.object({
        email: z.string().email(),
        message: z.string().min(10, { message: t("form.message.error") }),
        reason: z.string().min(1, { message: t("form.reason.error") }),
      }),
      onSubmit: z.object({
        email: z.string().email(),
        message: z.string().min(10, { message: t("form.message.error") }),
        reason: z.string().min(1, { message: t("form.reason.error") }),
      }),
    },
    onSubmit: async ({ value }) => {
      try {
        await sendContactEmail({
          email,
          reason: value.reason,
          message: value.message,
        })
        toast.success(t("form.success"))
        onOpenChange(false)
        form.reset()
        setStep(1)
      } catch (error) {
        console.error(error)
        toast.error(t("form.error.generic"))
      }
    },
  })

  const message = useStore(form.store, (state) => state.values.message)
  const reason = useStore(form.store, (state) => state.values.reason)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="bg-background text-foreground rounded-lg border border-border shadow-2xl max-w-md w-full">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 ">
              {t(`steps.${step}.title`)}
            </DialogTitle>
            <DialogDescription className="text-neutral-500 text-sm">
              {t(`steps.${step}.description`)}
            </DialogDescription>
          </DialogHeader>
          <div className="my-6">
            {step === 1 && (
              <div>
                <form.AppField
                  name="message"
                  children={(field) => (
                    <field.TextareaField
                      label="Message"
                      placeholder={t("form.message.placeholder")}
                    />
                  )}
                />
              </div>
            )}
            {step === 2 && (
              <div>
                <form.AppField
                  name="reason"
                  children={(field) => (
                    <field.SelectField
                      label="Reason"
                      options={options}
                      value={reason || ""}
                      placeholder={t("form.reason.placeholder")}
                    />
                  )}
                />
              </div>
            )}
            {step === 3 && (
              <div className="space-y-3 text-sm bg-muted border border-neutral-800 p-4 rounded-lg">
                <p>
                  <strong className="text-foreground">
                    {t("form.preview.email")}:
                  </strong>{" "}
                  <span className="text-neutral-500">{email}</span>
                </p>
                <p>
                  <strong className="text-foreground">
                    {t("form.preview.message")}:
                  </strong>{" "}
                  <span className="text-neutral-500">{message}</span>
                </p>
                <p>
                  <strong className="text-foreground">
                    {t("form.preview.reason")}:
                  </strong>{" "}
                  <span className="text-neutral-500">{reason}</span>
                </p>
              </div>
            )}
          </div>
          <DialogFooter className="flex justify-between">
            {step > 1 && (
              <Button onClick={prevStep} variant="outline">
                {t("buttons.back")}
              </Button>
            )}
            {step < 3 ? (
              <form.Subscribe
                selector={(state) => {
                  if (step === 1) {
                    return {
                      value: state.values.message,
                      errors: state.errors[0]?.message || [],
                    }
                  } else {
                    return {
                      value: state.values.reason,
                      errors: state.errors[0]?.reason || [],
                    }
                  }
                }}
              >
                {({ value, errors }) => (
                  <Button
                    disabled={!value || errors.length > 0}
                    className="hover:border-zinc-500 cursor-pointer"
                    onClick={() => {
                      if (step === 1) {
                        form.validateField("message", "change")
                      } else {
                        form.validateField("reason", "change")
                      }

                      if (value && errors.length === 0) {
                        setStep(step + 1)
                      }
                    }}
                  >
                    {t("buttons.next")}
                  </Button>
                )}
              </form.Subscribe>
            ) : (
              <Button
                type="submit"
                className="hover:border-zinc-500"
                onClick={() => {
                  form.handleSubmit()
                }}
              >
                {form.state.isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  t("buttons.send")
                )}
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  )
}
