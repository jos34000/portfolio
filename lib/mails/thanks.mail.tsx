import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

interface ThankYouContactEmailProps {
  userFirstname?: string
  email: string
  message: string
  reason: string
}

export default function ThankYouContactEmail({
  userFirstname,
  email,
  message,
  reason,
}: Readonly<ThankYouContactEmailProps>) {
  const theme = {
    background: "oklch(0 0 0)",
    foreground: "oklch(1 0 0)",
    card: "oklch(0.14 0 0)",
    muted: "oklch(0.72 0 0)",
    primary: "oklch(1 0 0)",
    primaryForeground: "oklch(0 0 0)",
    border: "oklch(0.26 0 0)",
    accent: "oklch(0.32 0 0)",
    success: "oklch(0.81 0.17 75.35)",
    destructive: "oklch(0.69 0.2 23.91)",
  }

  const icons = {
    clock:
      "https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/clock.svg",
    calendar:
      "https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/calendar.svg",
    phone:
      "https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/phone.svg",
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
        <Preview>
          Thank you for your message — I'll get back to you soon!
        </Preview>
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
            background: `radial-gradient(circle at 70% 30%, oklch(0.18 0 0) 0%, ${theme.background} 50%),
               radial-gradient(circle at 30% 70%, oklch(0.14 0 0) 0%, transparent 50%)`,
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
                  background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                  borderRadius: "50%",
                  padding: "16px",
                  display: "inline-block",
                  boxShadow: `0 0 60px rgba(255,255,255,0.1), inset 0 0 20px rgba(255,255,255,0.1)`,
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
                    boxShadow: `0 0 20px rgba(255,255,255,0.2)`,
                  }}
                />
              </div>
            </Section>

            <Section
              style={{
                backgroundColor: theme.card,
                borderRadius: "1rem",
                padding: "40px",
                boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.5),
                   0 2px 4px -1px rgba(0, 0, 0, 0.4),
                   inset 0 1px 0 rgba(255,255,255,0.05)`,
                border: `1px solid ${theme.border}`,
                position: "relative",
                overflow: "hidden",
                zIndex: "1",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "60%",
                  height: "1px",
                  background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3))`,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "1px",
                  height: "40%",
                  background: `linear-gradient(180deg, rgba(255,255,255,0.3), transparent)`,
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
                }}
              >
                {userFirstname
                  ? `Thank you ${userFirstname}!`
                  : "Thank you for your message!"}
              </Text>

              <Text
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: theme.muted,
                  marginBottom: "32px",
                  textAlign: "center",
                  padding: "0 20px",
                }}
              >
                I've received your request and will get back to you as soon as
                possible after reviewing your message.
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
                    src={icons.clock}
                    width="20"
                    height="20"
                    alt=""
                    style={{ filter: "invert(1)" }}
                  />
                  Expected response time: within 24-48 hours
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
                    src={icons.calendar}
                    width="20"
                    height="20"
                    alt=""
                    style={{ filter: "invert(1)" }}
                  />
                  Business hours: Monday-Friday, 9AM-6PM (CET)
                </Text>
              </Section>

              <Section
                style={{
                  margin: "32px 0",
                  padding: "24px",
                  borderRadius: "0.75rem",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: `1px solid ${theme.border}`,
                  position: "relative",
                }}
              >
                <Text
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: theme.foreground,
                    marginBottom: "16px",
                    textAlign: "center",
                  }}
                >
                  Your Contact Request Summary
                </Text>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {email && (
                    <div
                      style={{
                        padding: "12px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(255,255,255,0.05)",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "14px",
                          color: theme.muted,
                          margin: "0",
                        }}
                      >
                        <strong style={{ color: theme.foreground }}>
                          Email:
                        </strong>{" "}
                        {email}
                      </Text>
                    </div>
                  )}

                  {reason && (
                    <div
                      style={{
                        padding: "12px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(255,255,255,0.05)",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "14px",
                          color: theme.muted,
                          margin: "0",
                        }}
                      >
                        <strong style={{ color: theme.foreground }}>
                          Reason:
                        </strong>{" "}
                        {reason}
                      </Text>
                    </div>
                  )}

                  {message && (
                    <div
                      style={{
                        padding: "12px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(255,255,255,0.05)",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "14px",
                          color: theme.muted,
                          margin: "0",
                        }}
                      >
                        <strong style={{ color: theme.foreground }}>
                          Message:
                        </strong>
                      </Text>
                      <Text
                        style={{
                          fontSize: "14px",
                          color: theme.muted,
                          margin: "8px 0 0 0",
                          lineHeight: "1.5",
                        }}
                      >
                        {message}
                      </Text>
                    </div>
                  )}
                </div>
              </Section>

              <Section
                style={{
                  marginBottom: "32px",
                  textAlign: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: "16px",
                    color: theme.muted,
                    marginBottom: "24px",
                  }}
                >
                  For immediate assistance, you can:
                </Text>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Button
                    href="tel:+33625649572"
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
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      minWidth: "200px",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Img
                        src={icons.phone}
                        width="20"
                        height="20"
                        alt=""
                        style={{ filter: "invert(0)" }}
                      />
                      <span>Call now</span>
                    </div>
                  </Button>

                  <Button
                    href="https://calendly.com/jocelyn-sainson/30min"
                    style={{
                      backgroundColor: theme.accent,
                      color: theme.foreground,
                      padding: "16px 36px",
                      borderRadius: "0.75rem",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      letterSpacing: "0.025em",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      minWidth: "200px",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Img
                        src={icons.calendar}
                        width="20"
                        height="20"
                        alt=""
                        style={{ filter: "invert(1)" }}
                      />
                      <span>Schedule a meeting</span>
                    </div>
                  </Button>
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
                    fontSize: "14px",
                    color: theme.muted,
                    marginBottom: "16px",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  Common Questions
                </Text>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <Link
                    href="#"
                    style={{
                      color: theme.muted,
                      fontSize: "13px",
                      textDecoration: "none",
                      padding: "8px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(255,255,255,0.03)",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <Img
                      src={icons.book}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)" }}
                    />
                    What are your service packages?
                  </Link>
                  <Link
                    href="#"
                    style={{
                      color: theme.muted,
                      fontSize: "13px",
                      textDecoration: "none",
                      padding: "8px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(255,255,255,0.03)",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <Img
                      src={icons.globe}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)" }}
                    />
                    What are your rates?
                  </Link>
                  <Link
                    href="#"
                    style={{
                      color: theme.muted,
                      fontSize: "13px",
                      textDecoration: "none",
                      padding: "8px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(255,255,255,0.03)",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <Img
                      src={icons.device}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)" }}
                    />
                    How soon can we start?
                  </Link>
                </div>
              </Section>

              <Section
                style={{
                  marginTop: "32px",
                  padding: "16px",
                  borderTop: `1px solid ${theme.border}`,
                  textAlign: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: "14px",
                    color: theme.muted,
                    marginBottom: "16px",
                  }}
                >
                  Join our growing community
                </Text>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "24px",
                  }}
                >
                  <div>
                    <Text
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: theme.foreground,
                        margin: "0",
                      }}
                    >
                      500+
                    </Text>
                    <Text
                      style={{
                        fontSize: "12px",
                        color: theme.muted,
                        margin: "4px 0 0 0",
                      }}
                    >
                      Satisfied Clients
                    </Text>
                  </div>
                  <div>
                    <Text
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: theme.foreground,
                        margin: "0",
                      }}
                    >
                      4.9/5
                    </Text>
                    <Text
                      style={{
                        fontSize: "12px",
                        color: theme.muted,
                        margin: "4px 0 0 0",
                      }}
                    >
                      Average Rating
                    </Text>
                  </div>
                  <div>
                    <Text
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: theme.foreground,
                        margin: "0",
                      }}
                    >
                      98%
                    </Text>
                    <Text
                      style={{
                        fontSize: "12px",
                        color: theme.muted,
                        margin: "4px 0 0 0",
                      }}
                    >
                      Response Rate
                    </Text>
                  </div>
                </div>
              </Section>

              <Section
                style={{
                  marginTop: "32px",
                  padding: "16px",
                  borderTop: `1px solid ${theme.border}`,
                  textAlign: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: "14px",
                    color: theme.muted,
                    marginBottom: "16px",
                  }}
                >
                  Connect with us
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
                      color: theme.muted,
                      fontSize: "12px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Img
                      src={icons.globe}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)", marginTop: "-2px" }}
                    />
                    Twitter
                  </Link>
                  <Link
                    href="#"
                    style={{
                      color: theme.muted,
                      fontSize: "12px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Img
                      src={icons.lock}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)", marginTop: "-2px" }}
                    />
                    LinkedIn
                  </Link>
                  <Link
                    href="#"
                    style={{
                      color: theme.muted,
                      fontSize: "12px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Img
                      src={icons.device}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)", marginTop: "-2px" }}
                    />
                    Instagram
                  </Link>
                </div>
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
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  height: "2px",
                  background: `linear-gradient(90deg, 
                    transparent 0%, 
                    rgba(255,255,255,0.1) 20%, 
                    rgba(255,255,255,0.2) 50%,
                    rgba(255,255,255,0.1) 80%,
                    transparent 100%)`,
                }}
              />

              <Text
                style={{
                  fontSize: "14px",
                  color: theme.muted,
                  marginBottom: "0",
                  fontStyle: "italic",
                }}
              >
                Thank you again for your trust. Talk to you soon!
              </Text>
            </Section>
          </Container>
        </Container>
      </Body>
    </Html>
  )
}
