import { prisma } from "@/lib/db/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  user: {
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
  },
});

type Session = typeof auth.$Infer.Session;
