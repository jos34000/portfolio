"use client"

import { BackHome } from "@/components/back-home"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth/auth-client"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { GalleryVerticalEnd, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "Your name must contain at least 2 characters"),
    lastName: z
      .string()
      .min(2, "Your last name must contain at least 2 characters"),
    email: z.string().email("Email invalide"),
    username: z.string().min(4, "Username must contain at least 4 characters"),
    initials: z.string(),
    password: z.string().min(8, "Password must contain at least 8 characters"),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords didn't match",
    path: ["passwordConfirmation"],
  })

type FormValues = z.infer<typeof formSchema>

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

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

      const { error } = await authClient.signUp.email({
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
            toast.error(ctx.error.message ?? "Une erreur est survenue")
          },
          onSuccess: async () => {
            toast.success("Compte créé avec succès !")
            router.push("/login")
          },
        },
      })
    } catch (err) {
      toast.error("Une erreur est survenue lors de l'inscription")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <BackHome
        isLoading={isLoading}
        onFinishLoading={() => setIsLoading(false)}
      />
      <form
        onSubmit={form.handleSubmit(onSubmit, (errors) => {
          const firstError = Object.values(errors)[0]
          if (firstError && firstError.message) {
            toast.error(firstError.message.toString())
          } else {
            toast.error("Veuillez corriger les erreurs du formulaire.")
          }
        })}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Jos Inc.</span>
            </a>
            <h1 className="text-xl font-bold">Welcome to Exoskel.</h1>
            <div className="text-center text-sm">
              Already have an account ?{" "}
              <a href="/login" className="underline underline-offset-4">
                Sign In
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col gap-3">
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="John"
                {...form.register("firstName")}
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Doe"
                {...form.register("lastName")}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="JohnDoe007"
                {...form.register("username")}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                {...form.register("email")}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                {...form.register("password")}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="passwordConfirmation">Confirm password</Label>
              <Input
                id="passwordConfirmation"
                type="password"
                placeholder="********"
                {...form.register("passwordConfirmation")}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Connecting...
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </div>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              Or
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Button
              variant="outline"
              type="button"
              className="w-full"
              onClick={async () => {
                await authClient.signIn.social({ provider: "github" })
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 
  0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
  0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 
  1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.304 
  3.495.997.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 
  0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
  0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.045.138 3 
  .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 
  3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 
  5.92.435.375.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 
  0 .315.21.694.825.576 4.765-1.588 8.2-6.084 8.2-11.386 
  0-6.627-5.373-12-12-12z"
                  fill="currentColor"
                />
              </svg>
              Github
            </Button>
            <Button
              variant="outline"
              type="button"
              className="w-full"
              onClick={async () => {
                await authClient.signIn.social({
                  provider: "linkedin",
                })
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 
  0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 
  0-1.75-.784-1.75-1.75s.784-1.75 
  1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 
  1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.065-1.867-3.065-1.868 
  0-2.155 1.459-2.155 2.968v5.701h-3v-10h2.879v1.367h.041c.401-.761 
  1.379-1.561 2.841-1.561 3.039 0 3.6 2 3.6 4.59v5.604z"
                  fill="currentColor"
                />
              </svg>
              Linkedin
            </Button>
          </div>
        </div>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
