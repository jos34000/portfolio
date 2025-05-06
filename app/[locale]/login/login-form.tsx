"use client"

import { BackHome } from "@/components/back-home"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "@/i18n/navigation"
import { useLogo } from "@/lib/hooks/use-logo"
import { useSignIn } from "@/lib/hooks/use-signIn"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { FaGithub, FaGoogle } from "react-icons/fa"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { form, isLoading, onSubmit, handleSocialSignIn, setIsLoading } =
    useSignIn()
  const t = useTranslations("Login")

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <BackHome
        isLoading={isLoading}
        onFinishLoading={() => setIsLoading(false)}
      />
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <Link
              href="/"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-28 items-center justify-center rounded-md">
                <Image
                  src={useLogo()}
                  alt="logo"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
              <span className="sr-only">Jos Inc.</span>
            </Link>
            <h1 className="text-xl font-bold">{t("welcome")}</h1>
            <div className="text-center text-sm">
              {t("dontHaveAccount")}{" "}
              <Link href={"/sign-up"} className="underline underline-offset-4">
                {t("signUp")}
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">{t("email")}</Label>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                {...form.register("email")}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">{t("password")}</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                {...form.register("password")}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("loading")}
                </>
              ) : (
                t("login")
              )}
            </Button>
          </div>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              {t("or")}
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Button
              variant="outline"
              type="button"
              className="w-full"
              onClick={() => handleSocialSignIn("github")}
            >
              <FaGithub />
              Github
            </Button>
            <Button
              variant="outline"
              type="button"
              className="w-full"
              onClick={() => handleSocialSignIn("google")}
            >
              <FaGoogle />
              Google
            </Button>
          </div>
        </div>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        {t("termsAndPolicy.text")}{" "}
        <Link href="/">{t("termsAndPolicy.terms")}</Link>{" "}
        {t("termsAndPolicy.and")}{" "}
        <Link href="/">{t("termsAndPolicy.privacy")}</Link>.
      </div>
    </div>
  )
}
