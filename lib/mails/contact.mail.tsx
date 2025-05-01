import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components"

interface ContactRequestEmailProps {
  senderEmail: string
  reason: string
  message: string
}

export function ContactRequestEmail({
  senderEmail,
  reason,
  message,
}: Readonly<ContactRequestEmailProps>) {
  return (
    <Html>
      <Head>
        <Preview>Nouvelle demande de contact</Preview>
      </Head>
      <Body
        style={{
          margin: "0",
          padding: "0",
          backgroundColor: "#f6f6f6",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        }}
      >
        <Container
          style={{
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <Section
            style={{
              backgroundColor: "#ffffff",
              padding: "30px",
              borderRadius: "4px",
              marginBottom: "20px",
              border: "1px solid #eaeaea",
            }}
          >
            <Text
              style={{
                fontSize: "24px",
                lineHeight: "24px",
                margin: "0 0 20px 0",
                textAlign: "center" as const,
                color: "#000000",
              }}
            >
              Nouvelle demande de contact !
            </Text>

            <Text
              style={{
                fontSize: "14px",
                lineHeight: "24px",
                margin: "0 0 10px 0",
                color: "#666666",
              }}
            >
              <strong style={{ color: "#000000" }}>Email :</strong>{" "}
              {senderEmail}
            </Text>

            <Text
              style={{
                fontSize: "14px",
                lineHeight: "24px",
                margin: "0 0 10px 0",
                color: "#666666",
              }}
            >
              <strong style={{ color: "#000000" }}>Raison du contact :</strong>{" "}
              {reason}
            </Text>

            <Text
              style={{
                fontSize: "14px",
                lineHeight: "24px",
                margin: "0 0 10px 0",
                color: "#666666",
              }}
            >
              <strong style={{ color: "#000000" }}>Message :</strong>
            </Text>

            <Text
              style={{
                fontSize: "14px",
                lineHeight: "24px",
                margin: "0",
                color: "#666666",
                whiteSpace: "pre-line",
              }}
            >
              {message}
            </Text>
          </Section>

          <Text
            style={{
              textAlign: "center" as const,
              fontSize: "12px",
              color: "#666666",
            }}
          >
            © 2024 Jocelyn Sainson. Tous droits réservés.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default ContactRequestEmail
