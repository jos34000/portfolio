import {
  Carroussel,
  Contact,
  Footer,
  HeroSection,
  Nav,
  Steps,
} from "@/components/home"

const simulateDelay = () => new Promise((resolve) => setTimeout(resolve, 1000))

export default async function Home() {
  await simulateDelay()

  return (
    <>
      <Nav />
      <HeroSection />
      <Carroussel />
      <Steps />
      <Contact />
      <Footer />
    </>
  )
}
