type ContactEmailProps = {
  email: string
  reason: string
  message: string
}

type ThankYouEmailProps = {
  userFirstname?: string
  email: string
  message: string
  reason: string
}

type VerifyEmailProps = {
  verificationUrl: string
  userFirstname?: string
  deviceInfo?: {
    device: string
    browser: string
    ip: string
  }
}
