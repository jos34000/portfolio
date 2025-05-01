import {
  Body,
  Button,
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
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f9f9f9",
          padding: "20px",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <Section style={{ marginBottom: "20px" }}>
            <Text style={{ fontSize: "18px", fontWeight: "bold" }}>
              Nouvelle demande de contact !
            </Text>
          </Section>
          <Section style={{ marginBottom: "10px" }}>
            <Text>
              <strong>Email :</strong> {senderEmail}
            </Text>
          </Section>
          <Section style={{ marginBottom: "10px" }}>
            <Text>
              <strong>Raison du contact :</strong> {reason}
            </Text>
          </Section>
          <Section style={{ marginBottom: "20px" }}>
            <Text>
              <strong>Message :</strong>
            </Text>
            <Text style={{ whiteSpace: "pre-line" }}>{message}</Text>
          </Section>
          <Section>
            <Button
              href="/sign-in"
              style={{
                backgroundColor: "#6366f1",
                color: "#ffffff",
                padding: "12px 24px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Vérifier mon adresse
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default ContactRequestEmail
