import { prisma } from "@/lib/db/client"
import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { sendEmail } from "../mail/sendEmail"
import { VerifyEmail } from "../mail/verify-email"

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  user: {
    deleteUser: {
      enabled: true,
    },
    additionalFields: {
      username: {
        type: "string",
        required: true,
        defaultValue: "",
      },
      firstName: {
        type: "string",
        required: true,
        defaultValue: "",
      },
      lastName: {
        type: "string",
        required: true,
        defaultValue: "",
      },
      initials: {
        type: "string",
        required: true,
        defaultValue: "",
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      await sendEmail(
        user.email,
        "Vérifiez votre email",
        VerifyEmail({ verificationUrl: url, userFirstname: user.name })
      )
    },
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
})

type Session = typeof auth.$Infer.Session
