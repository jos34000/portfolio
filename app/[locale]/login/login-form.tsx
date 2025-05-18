import { useRouter } from "@/i18n/navigation"
import { loginAction } from "@/lib/actions/auth.action"
import { useAppForm } from "@/lib/hooks/useAppForm"
import { useTranslations } from "next-intl"
import { toast } from "sonner"
import { z } from "zod"

export function LoginForm() {
  const router = useRouter()
  const t = useTranslations("Login")

  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: z.object({
        email: z.string().email({ message: t("validation.email") }),
        password: z.string().min(8, { message: t("validation.password") }),
      }),
    },
    onSubmit: async ({ value }) => {
      try {
        const response = await loginAction({
          email: value.email,
          password: value.password,
        })
        if (response.success) {
          toast.success(t("notifications.success"))
          router.push("/dashboard")
        } else {
          toast.error(response.error)
        }
      } catch {
        toast.error(t("notifications.genericErrorLogin"))
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
      <div className="flex flex-col gap-6">
        <div className="grid gap-3">
          <form.AppField
            name="email"
            children={(field) => (
              <field.TextField label={t("email")} placeholder={t("email")} />
            )}
          />
        </div>
        <div className="grid gap-3">
          <form.AppField
            name="password"
            children={(field) => (
              <field.TextField
                label={t("password")}
                placeholder={t("password")}
                type="password"
              />
            )}
          />
        </div>
        <form.AppForm>
          <form.SubmitButton>{t("login")}</form.SubmitButton>
        </form.AppForm>
      </div>
    </form>
  )
}
