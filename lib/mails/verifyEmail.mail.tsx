import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Text,
} from "@react-email/components"

interface VerifyEmailProps {
  verificationUrl: string
  userFirstname?: string
}

export default function VerifyEmail({
  verificationUrl,
  userFirstname,
}: VerifyEmailProps) {
  return (
    <Html>
      <Head>
        <Preview>Confirmez votre adresse email pour continuer</Preview>
      </Head>
      <Body
        style={{ backgroundColor: "#f9fafb", fontFamily: "Arial, sans-serif" }}
      >
        <Container
          style={{
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            maxWidth: "600px",
            margin: "40px auto",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Text
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            {userFirstname ? `Hello ${userFirstname},` : "Hello,"}
          </Text>
          <Text style={{ fontSize: "16px", marginBottom: "30px" }}>
            Merci de créer un compte chez nous ! Cliquez sur le bouton
            ci-dessous pour vérifier votre adresse email et finaliser votre
            inscription :
          </Text>
          <Button
            href={verificationUrl}
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
          <Text
            style={{ fontSize: "14px", color: "#6b7280", marginTop: "30px" }}
          >
            Si vous n'avez pas créé de compte, vous pouvez ignorer cet email.
          </Text>
          <Text style={{ fontSize: "14px", color: "#6b7280" }}>
            — L'équipe de votre application 🚀
          </Text>
        </Container>
      </Body>
    </Html>
  )
}
