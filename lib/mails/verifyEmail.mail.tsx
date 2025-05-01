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
}

export default function VerifyEmail({
  verificationUrl,
  userFirstname,
}: Readonly<VerifyEmailProps>) {
  const theme = {
    background: "oklch(0 0 0)",
    foreground: "oklch(1 0 0)",
    card: "oklch(0.14 0 0)",
    muted: "oklch(0.72 0 0)",
    primary: "oklch(1 0 0)",
    primaryForeground: "oklch(0 0 0)",
    border: "oklch(0.26 0 0)",
    accent: "oklch(0.32 0 0)",
  }

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
          backgroundColor: theme.background,
          fontFamily: "Geist, sans-serif",
          color: theme.foreground,
          margin: "0",
          padding: "0",
        }}
      >
        <Container
          style={{
            background:
              "radial-gradient(circle at 70% 30%, oklch(0.18 0 0) 0%, " +
              theme.background +
              " 50%), radial-gradient(circle at 30% 70%, oklch(0.14 0 0) 0%, transparent 50%)",
            padding: "60px 20px",
            width: "100%",
          }}
        >
          <Container
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-100px",
                right: "-100px",
                width: "300px",
                height: "300px",
                background:
                  "radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
              }}
            />

            <Section
              style={{
                textAlign: "center",
                marginBottom: "32px",
                position: "relative",
                zIndex: "1",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                  borderRadius: "50%",
                  padding: "16px",
                  display: "inline-block",
                  boxShadow:
                    "0 0 60px rgba(255,255,255,0.1), inset 0 0 20px rgba(255,255,255,0.1)",
                }}
              >
                <Img
                  src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="60"
                  height="60"
                  alt="Logo"
                  style={{
                    borderRadius: "50%",
                    border: `2px solid ${theme.border}`,
                    boxShadow: "0 0 20px rgba(255,255,255,0.2)",
                  }}
                />
              </div>
            </Section>

            <Section
              style={{
                backgroundColor: theme.card,
                borderRadius: "1rem",
                padding: "40px",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
                border: `1px solid ${theme.border}`,
                position: "relative",
                overflow: "hidden",
                zIndex: "1",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "60%",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.8))",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "1px",
                  height: "40%",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.8), transparent)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "40%",
                  height: "1px",
                  background:
                    "linear-gradient(-90deg, transparent, rgba(255,255,255,0.3))",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "1px",
                  height: "30%",
                  background:
                    "linear-gradient(0deg, rgba(255,255,255,0.3), transparent)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "100px",
                  height: "100px",
                  background:
                    "radial-gradient(circle at top right, rgba(255,255,255,0.4), transparent 70%)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "80px",
                  height: "80px",
                  background:
                    "radial-gradient(circle at bottom left, rgba(255,255,255,0.2), transparent 70%)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  height: "200px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)",
                  opacity: "0.5",
                }}
              />

              <Text
                style={{
                  fontSize: "28px",
                  fontWeight: "600",
                  color: theme.foreground,
                  marginBottom: "24px",
                  textAlign: "center",
                  letterSpacing: "-0.025em",
                  position: "relative",
                }}
              >
                {userFirstname ? `Welcome ${userFirstname}!` : "Welcome!"}
              </Text>

              <Text
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: theme.muted,
                  marginBottom: "32px",
                  textAlign: "center",
                  padding: "0 20px",
                  position: "relative",
                }}
              >
                We're excited to have you on board. To start your journey,
                please verify your email address by clicking the button below.
              </Text>

              <Section
                style={{
                  margin: "32px 0",
                  padding: "16px",
                  borderRadius: "0.5rem",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: `1px solid ${theme.border}`,
                }}
              >
                <Text
                  style={{
                    fontSize: "14px",
                    color: theme.muted,
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <Img
                    src={icons.lock}
                    width="20"
                    height="20"
                    alt=""
                    style={{ filter: "invert(1)" }}
                  />
                  This verification link will expire in 24 hours
                </Text>
                <Text
                  style={{
                    fontSize: "14px",
                    color: theme.muted,
                    margin: "0",
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
                  Only click links from trusted sources
                </Text>
              </Section>

              <Section
                style={{
                  textAlign: "center",
                  margin: "40px 0",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-1px",
                      left: "20%",
                      right: "20%",
                      height: "1px",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                    }}
                  />

                  <Button
                    href={verificationUrl}
                    style={{
                      backgroundColor: theme.primary,
                      color: theme.primaryForeground,
                      padding: "16px 36px",
                      borderRadius: "0.75rem",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      letterSpacing: "0.025em",
                      boxShadow:
                        "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255,255,255,0.5)",
                      border: `1px solid ${theme.border}`,
                      background: `linear-gradient(180deg, ${theme.primary} 0%, oklch(0.9 0 0) 100%)`,
                    }}
                  >
                    Verify my email
                  </Button>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "-1px",
                      left: "30%",
                      right: "30%",
                      height: "1px",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    }}
                  />
                </div>
              </Section>

              <Text
                style={{
                  fontSize: "14px",
                  color: theme.muted,
                  marginTop: "32px",
                  textAlign: "center",
                  fontStyle: "italic",
                  position: "relative",
                }}
              >
                If you didn't request this verification, you can safely ignore
                this email.
              </Text>

              <Section
                style={{
                  marginTop: "32px",
                  padding: "16px",
                  borderTop: `1px solid ${theme.border}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    fontSize: "14px",
                    color: theme.muted,
                    marginBottom: "8px",
                    textAlign: "center",
                  }}
                >
                  Quick Links
                </Text>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "16px",
                    flexWrap: "wrap",
                    width: "100%",
                  }}
                >
                  <Link
                    href="#"
                    style={{
                      color: theme.muted,
                      fontSize: "12px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
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
                      color: theme.muted,
                      fontSize: "12px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
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
                      color: theme.muted,
                      fontSize: "12px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
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
                  marginTop: "32px",
                  padding: "16px",
                  borderTop: `1px solid ${theme.border}`,
                }}
              >
                <Text
                  style={{
                    fontSize: "12px",
                    color: theme.muted,
                    textAlign: "center",
                    margin: "0",
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
                    color: theme.muted,
                    textAlign: "center",
                    margin: "4px 0 0 0",
                  }}
                >
                  {`{Device} • {Browser} • {Location}`}
                </Text>
              </Section>
            </Section>

            <Section
              style={{
                textAlign: "center",
                marginTop: "40px",
                padding: "24px",
                backgroundColor: theme.card,
                borderRadius: "0.75rem",
                border: `1px solid ${theme.border}`,
                position: "relative",
                overflow: "hidden",
                zIndex: "1",
              }}
            >
              {/* Enhanced Gradient Border */}
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  height: "2px",
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 80%, transparent 100%)",
                }}
              />

              <Text
                style={{
                  fontSize: "12px",
                  color: theme.muted,
                  marginBottom: "16px",
                }}
              >
                © 2024 Boiler Plate. All rights reserved.
              </Text>

              <Hr
                style={{
                  border: "none",
                  borderBottom: `1px solid ${theme.border}`,
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
                    color: theme.foreground,
                    textDecoration: "none",
                    fontSize: "12px",
                    padding: "4px 12px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: `1px solid ${theme.border}`,
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  style={{
                    color: theme.foreground,
                    textDecoration: "none",
                    fontSize: "12px",
                    padding: "4px 12px",
                    borderRadius: "4px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: `1px solid ${theme.border}`,
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)",
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
