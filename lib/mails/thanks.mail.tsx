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

interface ThankYouContactEmailProps {
  userFirstname?: string
}

export default function ThankYouContactEmail({
  userFirstname,
}: ThankYouContactEmailProps) {
  return (
    <Html>
      <Head>
        <Preview>
          Merci pour votre message — je vous réponds très vite !
        </Preview>
      </Head>
      <Body
        style={{
          fontFamily: "Inter, Arial, sans-serif",
          backgroundColor: "#f9fafb",
          padding: "40px",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "32px",
            borderRadius: "12px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <Section style={{ textAlign: "center", marginBottom: "32px" }}>
            <Text
              style={{ fontSize: "28px", fontWeight: "bold", color: "#111827" }}
            >
              Merci {userFirstname ? `${userFirstname}` : ""} pour votre message
              !
            </Text>
            <Text
              style={{ fontSize: "16px", color: "#6b7280", marginTop: "12px" }}
            >
              J'ai bien reçu votre demande et je reviendrai vers vous dès que
              possible après lecture de votre message.
            </Text>
          </Section>

          <Section style={{ textAlign: "center", marginBottom: "32px" }}>
            <Text
              style={{
                fontSize: "16px",
                color: "#6b7280",
                marginBottom: "24px",
              }}
            >
              Si votre demande est urgente, n'hésitez pas à m'appeler
              directement ou à réserver un créneau pour discuter ensemble.
            </Text>
            <Button
              href="tel:+33625649572"
              style={{
                backgroundColor: "#3b82f6",
                color: "#ffffff",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "16px",
                textDecoration: "none",
                fontWeight: "600",
                marginBottom: "16px",
                display: "inline-block",
              }}
            >
              📞 Appeler maintenant
            </Button>
            <br />
            <Button
              href="https://calendly.com/jocelyn-sainson/30min"
              style={{
                backgroundColor: "#10b981",
                color: "#ffffff",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "16px",
                textDecoration: "none",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              📅 Réserver un créneau
            </Button>
          </Section>

          <Section
            style={{
              borderTop: "1px solid #e5e7eb",
              marginTop: "32px",
              paddingTop: "16px",
              textAlign: "center",
            }}
          >
            <Text style={{ fontSize: "12px", color: "#9ca3af" }}>
              Merci encore pour votre confiance. À très bientôt !
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
