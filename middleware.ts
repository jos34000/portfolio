import { getSessionCookie } from "better-auth/cookies"
import createMiddleware from "next-intl/middleware"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { routing } from "./i18n/routing"

const onboardingRoutes = ["/onboarding"]

const postOnboardingRoutes = ["/login", "/register", "/dashboard"]

const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname
  const locale = pathname.split("/")[1]
  const isOnboardingCompleted = request.cookies.has("onboarding-completed")
  const hasSession = getSessionCookie(request)

  const createRedirectUrl = (path: string) => {
    return new URL(`/${locale}${path}`, request.url)
  }

  if (!isOnboardingCompleted) {
    if (postOnboardingRoutes.some((route) => pathname.includes(route))) {
      return NextResponse.redirect(createRedirectUrl("/onboarding"))
    }
  } else {
    if (onboardingRoutes.some((route) => pathname.includes(route))) {
      return NextResponse.redirect(createRedirectUrl("/dashboard"))
    }
  }

  if (pathname.includes("/dashboard")) {
    if (!hasSession) {
      return NextResponse.redirect(createRedirectUrl("/login"))
    }
  }

  const handleI18nRouting = createMiddleware(routing)
  return handleI18nRouting(request)
}

export default middleware

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
}
