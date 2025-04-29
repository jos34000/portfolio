"use server"

import { ReactElement } from "react"
import { Resend } from "resend"

export const sendEmail = async (
  email: string,
  subject: string,
  mail: ReactElement
) => {
  const resend = new Resend(process.env.RESEND_API_KEY)
  await resend.emails.send({
    from: "exoskel@marcelyn.fr",
    to: email,
    subject: subject,
    react: mail,
  })
}
