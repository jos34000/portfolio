import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

interface VerifyEmailProps {
  verificationUrl: string
  userFirstname?: string
  deviceInfo?: {
    device: string
    browser: string
    ip: string
  }
}

export default function VerifyEmail({
  verificationUrl,
  userFirstname,
  deviceInfo,
}: Readonly<VerifyEmailProps>) {
  const icons = {
    lock: "https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/lock-simple.svg",
    globe:
      "https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/globe.svg",
    book: "https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/book-open.svg",
    lightbulb:
      "https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/lightbulb.svg",
    users:
      "https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/users.svg",
    device:
      "https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/device-mobile.svg",
  }

  return (
    <Html>
      <Head>
        <Preview>Verify your email address to continue</Preview>
      </Head>
      <Body
        style={{
          margin: "0",
          padding: "0",
          backgroundColor: "#000000",
          color: "#ffffff",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
          WebkitTextSizeAdjust: "100%",
          textSizeAdjust: "100%",
        }}
      >
        <Container
          style={{
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#000000",
            padding: "40px 20px",
          }}
        >
          <Container
            style={{
              width: "100%",
              maxWidth: "600px",
              margin: "0 auto",
              backgroundColor: "#000000",
            }}
          >
            <Section
              style={{
                textAlign: "center" as const,
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  padding: "16px",
                  display: "inline-block",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <Img
                  src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="60"
                  height="60"
                  alt="Logo"
                  style={{
                    borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,0.2)",
                  }}
                />
              </div>
            </Section>

            <Section
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                padding: "40px",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
                marginBottom: "20px",
              }}
            >
              <Text
                style={{
                  fontSize: "28px",
                  fontWeight: "600",
                  color: "#ffffff",
                  marginBottom: "24px",
                  textAlign: "center" as const,
                }}
              >
                {userFirstname ? `Welcome ${userFirstname}!` : "Welcome!"}
              </Text>

              <Text
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "32px",
                  textAlign: "center" as const,
                }}
              >
                We're excited to have you on board. To start your journey,
                please verify your email address by clicking the button below.
              </Text>

              <Section
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  padding: "20px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  marginBottom: "32px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    marginBottom: "12px",
                  }}
                >
                  <Img
                    src={icons.lock}
                    width="20"
                    height="20"
                    alt=""
                    style={{ filter: "invert(1)" }}
                  />
                  <Text
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.7)",
                      margin: "0",
                    }}
                  >
                    This verification link will expire in 24 hours
                  </Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <Img
                    src={icons.globe}
                    width="20"
                    height="20"
                    alt=""
                    style={{ filter: "invert(1)" }}
                  />
                  <Text
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.7)",
                      margin: "0",
                    }}
                  >
                    Only click links from trusted sources
                  </Text>
                </div>
              </Section>

              <Section
                style={{
                  textAlign: "center" as const,
                  marginBottom: "32px",
                }}
              >
                <Button
                  href={verificationUrl}
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    padding: "20px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: "500",
                    display: "inline-block",
                    minWidth: "200px",
                  }}
                >
                  Verify my email
                </Button>
              </Section>

              <Text
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "32px",
                  textAlign: "center" as const,
                  fontStyle: "italic",
                }}
              >
                If you didn't request this verification, you can safely ignore
                this email.
              </Text>

              <Section
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  paddingTop: "32px",
                  marginBottom: "32px",
                }}
              >
                <Text
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "16px",
                    textAlign: "center" as const,
                  }}
                >
                  Quick Links
                </Text>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "16px",
                  }}
                >
                  <Link
                    href="#"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "12px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Img
                      src={icons.book}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)" }}
                    />
                    Documentation
                  </Link>
                  <Link
                    href="#"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "12px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Img
                      src={icons.lightbulb}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)" }}
                    />
                    Getting Started
                  </Link>
                  <Link
                    href="#"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "12px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Img
                      src={icons.users}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)" }}
                    />
                    Community
                  </Link>
                </div>
              </Section>

              <Section
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  paddingTop: "32px",
                }}
              >
                <Text
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "8px",
                    textAlign: "center" as const,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <Img
                    src={icons.device}
                    width="20"
                    height="20"
                    alt=""
                    style={{ filter: "invert(1)" }}
                  />
                  This verification request was initiated from:
                </Text>
                <Text
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.7)",
                    textAlign: "center" as const,
                    margin: "4px 0 0 0",
                  }}
                >
                  {`${deviceInfo?.device ?? "Unknown"} • ${deviceInfo?.browser ?? "Unknown"} • ${deviceInfo?.ip ?? "Unknown"}`}
                </Text>
              </Section>
            </Section>

            <Section
              style={{
                textAlign: "center" as const,
                marginTop: "20px",
              }}
            >
              <Text
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "16px",
                }}
              >
                © 2024 Boiler Plate. All rights reserved.
              </Text>

              <Hr
                style={{
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  margin: "16px 0",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                <Link
                  href="#"
                  style={{
                    color: "#ffffff",
                    textDecoration: "none",
                    fontSize: "12px",
                    padding: "4px 12px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  style={{
                    color: "#ffffff",
                    textDecoration: "none",
                    fontSize: "12px",
                    padding: "4px 12px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  Unsubscribe
                </Link>
              </div>
            </Section>
          </Container>
        </Container>
      </Body>
    </Html>
  )
}
