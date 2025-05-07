import { useRouter } from "@/i18n/navigation"
import { authClient } from "@/lib/auth/auth-client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

type FormValues = {
  firstName: string
  lastName: string
  email: string
  username: string
  password: string
  passwordConfirmation: string
  initials: string
}

export const useSignUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const t = useTranslations("SignUp")

  const formSchema = z
    .object({
      firstName: z.string().min(2, t("validation.firstNameLength")),
      lastName: z.string().min(2, t("validation.lastNameLength")),
      email: z.string().email(t("validation.email")),
      username: z.string().min(4, t("validation.username")),
      initials: z.string(),
      password: z.string().min(8, t("validation.password")),
      passwordConfirmation: z.string(),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      message: t("validation.passwordConfirmation"),
      path: ["passwordConfirmation"],
    })

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      initials: "",
      email: "",
      username: "",
      password: "",
      passwordConfirmation: "",
    },
  })

  const onSubmit = async (values: FormValues) => {
    try {
      setIsLoading(true)

      await authClient.signUp.email({
        callbackURL: "/login",
        email: values.email,
        password: values.password,
        name: `${values.firstName} ${values.lastName}`,
        username: values.username,
        firstName: values.firstName,
        lastName: values.lastName,
        initials: `${values.firstName
          .charAt(0)
          .toLocaleUpperCase()}${values.lastName
          .charAt(0)
          .toLocaleUpperCase()}`,
        fetchOptions: {
          onResponse: () => {
            setIsLoading(false)
          },
          onRequest: () => {
            setIsLoading(true)
          },
          onError: (ctx: { error: Error }) => {
            toast.error(ctx.error.message ?? t("notifications.genericError"))
          },
          onSuccess: async () => {
            toast.success(t("notifications.success"))
            router.push(`/login`)
          },
        },
      })
    } catch (err) {
      const error = err as Error
      toast.error(error.message || t("notifications.genericErrorSignUp"))
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialSignIn = async (provider: "github" | "google") => {
    await authClient.signIn.social({ provider })
  }

  return {
    form,
    isLoading,
    onSubmit,
    handleSocialSignIn,
    setIsLoading,
  }
}
