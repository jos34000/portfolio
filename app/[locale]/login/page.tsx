"use client"
import { BackHome } from "@/components/back-home"
import { Button } from "@/components/shadcn/button"
import { useRouter } from "@/i18n/navigation"
import { providerAction } from "@/lib/actions/auth.action"
import { useLogo } from "@/lib/hooks/use-logo"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaGithub, FaGoogle } from "react-icons/fa"
import { toast } from "sonner"
import { LoginForm } from "./login-form"

export default function LoginPage() {
  const t = useTranslations("Login")
  const router = useRouter()
  const [isBackHome, setIsBackHome] = useState(false)
  const [isGoSignUp, setIsGoSignUp] = useState(false)
  const [isGithubLoading, setIsGithubLoading] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)

  const handleProvider = async (provider: "github" | "google") => {
    try {
      if (provider === "github") setIsGithubLoading(true)
      if (provider === "google") setIsGoogleLoading(true)

      const result = await providerAction(provider)
      if (result.success && result.session?.url) {
        window.location.href = result.session.url
      }
    } catch {
      toast.error(t("notifications.genericError"))
    } finally {
      setIsGithubLoading(false)
      setIsGoogleLoading(false)
    }
  }

  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <BackHome
            isLoading={isBackHome}
            onFinishLoading={() => setIsBackHome(false)}
          />
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
                {t("dontHaveAccount")} <br />
                <Button
                  variant="link"
                  onClick={() => {
                    setIsGoSignUp(true)
                    router.push("/sign-up")
                  }}
                  className={cn(isGoSignUp && "animate-pulse")}
                >
                  {t("signUp")}
                </Button>
              </div>
            </div>
            <LoginForm />
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
                onClick={() => handleProvider("github")}
                disabled={isGithubLoading}
              >
                {isGithubLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <FaGithub className="mr-2" />
                )}
                Github
              </Button>
              <Button
                variant="outline"
                type="button"
                className="w-full"
                onClick={() => handleProvider("google")}
                disabled={isGoogleLoading}
              >
                {isGoogleLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <FaGoogle className="mr-2" />
                )}
                Google
              </Button>
            </div>
          </div>
          <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            {t("termsAndPolicy.text")}{" "}
            <Link href="/">{t("termsAndPolicy.terms")}</Link>{" "}
            {t("termsAndPolicy.and")}{" "}
            <Link href="/">{t("termsAndPolicy.privacy")}</Link>.
          </div>
        </div>
      </div>
    </div>
  )
}
