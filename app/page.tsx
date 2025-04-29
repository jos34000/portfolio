import {
  Carroussel,
  Contact,
  Footer,
  HeroSection,
  Nav,
  Steps,
} from "@/components/home"

export default async function Home() {
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
