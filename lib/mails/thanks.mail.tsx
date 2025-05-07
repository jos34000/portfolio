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
          Thank you for your message — I&apos;ll get back to you soon!
        </Preview>
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
                  src="https://jossainson.dev/static/logo-dark.png"
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
                {userFirstname
                  ? `Thank you ${userFirstname}!`
                  : "Thank you for your message!"}
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
                I&apos;ve received your request and will get back to you as soon
                as possible after reviewing your message.
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
                    src={icons.clock}
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
                    Expected response time: within 24-48 hours
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
                    src={icons.calendar}
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
                    Business hours: Monday-Friday, 9AM-6PM (CET)
                  </Text>
                </div>
              </Section>

              <Section
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  padding: "24px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  marginBottom: "32px",
                }}
              >
                <Text
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#ffffff",
                    marginBottom: "16px",
                    textAlign: "center" as const,
                  }}
                >
                  Your Contact Request Summary
                </Text>

                {email && (
                  <div
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      padding: "12px",
                      borderRadius: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.7)",
                        margin: "0",
                      }}
                    >
                      <strong style={{ color: "#ffffff" }}>Email:</strong>{" "}
                      {email}
                    </Text>
                  </div>
                )}

                {reason && (
                  <div
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      padding: "12px",
                      borderRadius: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.7)",
                        margin: "0",
                      }}
                    >
                      <strong style={{ color: "#ffffff" }}>Reason:</strong>{" "}
                      {reason}
                    </Text>
                  </div>
                )}

                {message && (
                  <div
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      padding: "12px",
                      borderRadius: "8px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.7)",
                        margin: "0 0 8px 0",
                      }}
                    >
                      <strong style={{ color: "#ffffff" }}>Message:</strong>
                    </Text>
                    <Text
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.7)",
                        margin: "0",
                        lineHeight: "1.5",
                      }}
                    >
                      {message}
                    </Text>
                  </div>
                )}
              </Section>

              <Section
                style={{
                  textAlign: "center" as const,
                  marginBottom: "32px",
                }}
              >
                <Text
                  style={{
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "24px",
                  }}
                >
                  For immediate assistance, you can:
                </Text>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <Button
                    href="tel:+33625649572"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      padding: "20px",
                      borderRadius: "12px",
                      textDecoration: "none",
                      fontSize: "16px",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      maxWidth: "320px",
                      border: "none",
                    }}
                  >
                    Call now
                  </Button>

                  <Button
                    href="https://calendly.com/jocelyn-sainson/30min"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      color: "#ffffff",
                      padding: "20px",
                      borderRadius: "12px",
                      textDecoration: "none",
                      fontSize: "16px",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      maxWidth: "320px",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    Schedule a meeting
                  </Button>
                </div>
              </Section>

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
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "13px",
                      textDecoration: "none",
                      padding: "8px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(255,255,255,0.03)",
                      textAlign: "center" as const,
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
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "13px",
                      textDecoration: "none",
                      padding: "8px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(255,255,255,0.03)",
                      textAlign: "center" as const,
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
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "13px",
                      textDecoration: "none",
                      padding: "8px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(255,255,255,0.03)",
                      textAlign: "center" as const,
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
                  Join our growing community
                </Text>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "24px",
                    flexWrap: "wrap" as const,
                  }}
                >
                  <div
                    style={{
                      textAlign: "center" as const,
                      minWidth: "100px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#ffffff",
                        margin: "0",
                      }}
                    >
                      500+
                    </Text>
                    <Text
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.7)",
                        margin: "4px 0 0 0",
                      }}
                    >
                      Satisfied Clients
                    </Text>
                  </div>
                  <div
                    style={{
                      textAlign: "center" as const,
                      minWidth: "100px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#ffffff",
                        margin: "0",
                      }}
                    >
                      4.9/5
                    </Text>
                    <Text
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.7)",
                        margin: "4px 0 0 0",
                      }}
                    >
                      Average Rating
                    </Text>
                  </div>
                  <div
                    style={{
                      textAlign: "center" as const,
                      minWidth: "100px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#ffffff",
                        margin: "0",
                      }}
                    >
                      98%
                    </Text>
                    <Text
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.7)",
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
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  paddingTop: "32px",
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
                      color: "rgba(255,255,255,0.7)",
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
                      style={{ filter: "invert(1)" }}
                    />
                    Twitter
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
                      src={icons.lock}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)" }}
                    />
                    LinkedIn
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
                      src={icons.device}
                      width="20"
                      height="20"
                      alt=""
                      style={{ filter: "invert(1)" }}
                    />
                    Instagram
                  </Link>
                </div>
              </Section>
            </Section>

            <Text
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.5)",
                textAlign: "center" as const,
                margin: "0",
              }}
            >
              Thank you again for your trust. Talk to you soon!
            </Text>
          </Container>
        </Container>
      </Body>
    </Html>
  )
}
