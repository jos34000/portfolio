import { getSessionCookie } from "better-auth/cookies"
import createMiddleware from "next-intl/middleware"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { routing } from "./i18n/routing"

const onboardingRoutes = ["/onboarding"]
const postOnboardingRoutes = ["/login", "/register", "/dashboard"]
const restrictedRoutes = ["/dashboard", "/settings", "/profile"]

const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname
  const locale = pathname.split("/")[1]
  const isOnboardingCompleted = request.cookies.has("onboarding-completed")
  const hasSession = getSessionCookie(request)

  const createRedirectUrl = (path: string) => {
    return new URL(`/${locale}${path}`, request.url)
  }

  // Remove locale from pathname for route checking
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "")

  try {
    if (
      restrictedRoutes.some((route) => pathnameWithoutLocale.startsWith(route))
    ) {
      if (!hasSession) {
        return NextResponse.redirect(createRedirectUrl("/403"))
      }
    }

    if (!isOnboardingCompleted) {
      if (
        postOnboardingRoutes.some((route) =>
          pathnameWithoutLocale.startsWith(route)
        )
      ) {
        return NextResponse.redirect(createRedirectUrl("/onboarding"))
      }
    } else {
      if (
        onboardingRoutes.some((route) =>
          pathnameWithoutLocale.startsWith(route)
        )
      ) {
        return NextResponse.redirect(createRedirectUrl("/dashboard"))
      }
    }

    const handleI18nRouting = createMiddleware(routing)
    return handleI18nRouting(request)
  } catch (error) {
    return NextResponse.redirect(createRedirectUrl("/500"))
  }
}

export default middleware

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
}
