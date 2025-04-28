"use server"

import { Resend } from "resend"

export const sendEmail = async (
  email: string,
  subject: string,
  message: string
) => {
  const resend = new Resend(process.env.RESEND_API_KEY)
  await resend.emails.send({
    from: "exoskel@marcelyn.fr",
    to: "jocelynsainson@icloud.com",
    subject: subject,
    text: `Email de contact : ${email}\nMessage : ${message}`,
  })
}
