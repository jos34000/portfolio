"use client"
import { Card, Carousel } from "@/components/shadcn/cards-carousel"
import { useTranslations } from "next-intl"
import { useCarouselData } from "../data/carrousel.data"

export function Carroussel() {
  const t = useTranslations("Home.sections.skills")
  const data = useCarouselData()
  const cards = data.map((card) => <Card key={card.src} card={card} />)

  return (
    <div className="w-full h-full py-10" id="skills">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        {t("title")}
      </h2>
      <Carousel items={cards} />
    </div>
  )
}
