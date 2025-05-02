import { Button } from "@/components/ui/button"
import { WavyBackground } from "@/components/ui/wavy-background"

export const HeroSection = () => {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-4xl lg:text-7xl text-white font-bold font-sans tracking-tighter text-center">
        Jocelyn Sainson
      </h1>
      <p className="text-2xl md:text-3xl mt-4 text-white/80 font-medium font-sans tracking-normal text-center">
        Full-Stack Developer
      </p>
      <p className="text-base md:text-lg mt-6 text-white/60 max-w-2xl text-center font-sans tracking-normal">
        I build modern and high-performance web applications using Next.js,
        TypeScript and Prisma
      </p>
      <div className="flex gap-4 mt-8">
        <Button
          size="lg"
          variant="default"
          className="font-sans tracking-normal"
        >
          View Projects
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="font-sans tracking-normal"
        >
          Contact Me
        </Button>
      </div>
    </WavyBackground>
  )
}
