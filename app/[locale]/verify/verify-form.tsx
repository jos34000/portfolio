import { BackHome } from "@/components/back-home"
import { Button } from "@/components/shadcn/button"
import { Link, useRouter } from "@/i18n/navigation"
import { resendVerificationEmailAction } from "@/lib/actions/auth.action"
import { useLogo } from "@/lib/hooks/use-logo"
import { cn } from "@/lib/utils"
import { CheckCircle, Loader2, Mail, RefreshCw } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

export function EmailVerificationForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isBackHome, setIsBackHome] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [isGoingToLogin, setIsGoingToLogin] = useState(false)
  const t = useTranslations("Verification")
  const email = searchParams.get("email") ?? ""

  const handleResendEmail = async () => {
    setIsResending(true)
    const result = await resendVerificationEmailAction(email)
    if (result.success) {
      toast.success(t("notifications.resendSuccess"))
    } else {
      toast.error(result.error)
    }
    setIsResending(false)
  }

  const handleGoToLogin = () => {
    setIsGoingToLogin(true)
    router.push("/login")
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <BackHome
        isLoading={isBackHome}
        onFinishLoading={() => setIsBackHome(false)}
      />
      <div className="flex flex-col items-center gap-6">
        <Link href="/" className="flex flex-col items-center gap-2 font-medium">
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

        <div className="flex flex-col items-center text-center gap-2">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">{t("title")}</h1>
          <p className="text-muted-foreground">
            {t("subtitle")} <br />
            <span className="font-medium text-foreground">{email}</span>
          </p>
        </div>

        <div className="flex items-center gap-2 bg-muted p-4 rounded-lg w-full">
          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
          <p className="text-sm">{t("checkInbox")}</p>
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          <p className="text-sm text-muted-foreground">{t("dontReceive")}</p>
          <Button
            variant="outline"
            className="w-full"
            onClick={handleResendEmail}
            disabled={isResending}
          >
            {isResending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("resending")}
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                {t("resend")}
              </>
            )}
          </Button>
          <Button
            variant="ghost"
            className="w-full"
            onClick={handleGoToLogin}
            disabled={isGoingToLogin}
          >
            {t("backToLogin")}
          </Button>
        </div>
      </div>
    </div>
  )
}
