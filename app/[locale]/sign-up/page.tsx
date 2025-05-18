"use client"
import { BackHome } from "@/components/back-home"
import { Button } from "@/components/shadcn/button"
import { Link, useRouter } from "@/i18n/navigation"
import { providerAction } from "@/lib/actions/auth.action"
import { useLogo } from "@/lib/hooks/use-logo"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useState } from "react"
import { FaGithub, FaGoogle } from "react-icons/fa"
import SignUpForm from "./signup-form"

export default function SignUp() {
  const t = useTranslations("SignUp")
  const router = useRouter()
  const [isPending, setIsPending] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)

  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-2">
          <BackHome
            isLoading={isPending}
            onFinishLoading={() => setIsPending(false)}
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
                    width={250}
                    height={250}
                    className="object-contain"
                  />
                </div>
                <span className="sr-only">Jos Inc.</span>
              </Link>
              <h1 className="text-xl font-bold">{t("welcome")}</h1>
              <div className="text-center text-sm">
                {t("alreadyHaveAccount")} <br />
                <Button
                  variant="link"
                  onClick={() => {
                    setIsRedirecting(true)
                    router.push("/login")
                  }}
                  className={cn(isRedirecting && "animate-pulse")}
                >
                  {t("signIn")}
                </Button>
              </div>
            </div>
            <SignUpForm />
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
                onClick={() => providerAction("github")}
              >
                <FaGithub className="mr-2 h-4 w-4" />
                {t("form.buttons.github")}
              </Button>
              <Button
                variant="outline"
                type="button"
                className="w-full"
                onClick={() => providerAction("google")}
              >
                <FaGoogle className="mr-2 h-4 w-4" />
                {t("form.buttons.google")}
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
