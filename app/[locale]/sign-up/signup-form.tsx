"use client"

import { useRouter } from "@/i18n/navigation"
import { signUpAction } from "@/lib/actions/auth.action"
import { useAppForm } from "@/lib/hooks/useAppForm"
import { useTranslations } from "next-intl"
import { toast } from "sonner"
import { z } from "zod"

export default function SignUpForm() {
  const t = useTranslations("SignUp")
  const router = useRouter()

  const form = useAppForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      passwordConfirmation: "",
    },
    validators: {
      onSubmit: z
        .object({
          firstName: z.string().min(2, t("validation.firstNameLength")),
          lastName: z.string().min(2, t("validation.lastNameLength")),
          email: z.string().email(t("validation.badEmail")),
          username: z.string().min(4, t("validation.usernameLength")),
          password: z
            .string()
            .min(8, t("validation.passwordLength"))
            .refine((password) => /[A-Z]/.test(password), {
              message: t("validation.passwordUppercase"),
            })
            .refine((password) => /[a-z]/.test(password), {
              message: t("validation.passwordLowercase"),
            })
            .refine((password) => /\d/.test(password), {
              message: t("validation.passwordNumber"),
            })
            .refine((password) => /[^A-Za-z0-9]/.test(password), {
              message: t("validation.passwordSpecial"),
            }),
          passwordConfirmation: z.string(),
        })
        .refine((data) => data.password === data.passwordConfirmation, {
          message: t("validation.passwordConfirmation"),
          path: ["passwordConfirmation"],
        }),
    },
    onSubmit: async ({ value }) => {
      try {
        const response = await signUpAction({
          firstName: value.firstName,
          lastName: value.lastName,
          email: value.email,
          username: value.username,
          password: value.password,
        })

        if (response.success) {
          toast.success(t("notifications.success"))
          router.push(`/verify?email=${encodeURIComponent(value.email)}`)
        } else {
          toast.error(response.error)
        }
      } catch {
        toast.error(t("notifications.genericErrorSignUp"))
      }
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <div className="flex flex-col gap-6 max-w-md mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <form.AppField
              name="firstName"
              children={(field) => (
                <field.TextField
                  label={t("form.firstName")}
                  placeholder={t("form.placeholders.firstName")}
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-3">
            <form.AppField
              name="lastName"
              children={(field) => (
                <field.TextField
                  label={t("form.lastName")}
                  placeholder={t("form.placeholders.lastName")}
                />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid gap-3">
            <form.AppField
              name="username"
              children={(field) => (
                <field.TextField
                  label={t("form.username")}
                  placeholder="JohnDoe007"
                />
              )}
            />
          </div>
          <div className="grid gap-3">
            <form.AppField
              name="email"
              children={(field) => (
                <field.TextField
                  label={t("form.email")}
                  placeholder="johndoe@example.com"
                />
              )}
            />
          </div>
          <div className="grid gap-3">
            <form.AppField
              name="password"
              children={(field) => (
                <field.TextField
                  type="password"
                  label={t("form.password")}
                  placeholder="********"
                />
              )}
            />
          </div>
          <div className="grid gap-3">
            <form.AppField
              name="passwordConfirmation"
              children={(field) => (
                <field.TextField
                  type="password"
                  label={t("form.confirmPassword")}
                  placeholder="********"
                />
              )}
            />
          </div>
          <form.AppForm>
            <form.SubmitButton>{t("form.buttons.signUp")}</form.SubmitButton>
          </form.AppForm>
        </div>
      </div>
    </form>
  )
}
