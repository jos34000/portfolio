"use server"

import ContactRequestEmail from "@/lib/mails/contact.mail"
import { sendEmail } from "@/lib/mails/resend"
import ThankYouEmail from "@/lib/mails/thanks.mail"
import { getTranslations } from "next-intl/server"

export async function sendContactEmail({
  email,
  reason,
  message,
}: ContactEmailProps) {
  const t = await getTranslations("Mail.thanks")
  try {
    await sendEmail(
      "jocelynsainson@icloud.com",
      reason,
      await ContactRequestEmail({
        email,
        reason,
        message,
      })
    )
    await sendEmail(
      email,
      t("preview"),
      await ThankYouEmail({ email, message, reason })
    )
    return { success: true }
  } catch (error) {
    console.error("Error sending contact email:", error)
    return { success: false }
  }
}
