"use client"
import { Card, Carousel } from "@/components/ui/cards-carousel"
import { data } from "../data/carrousel.data"

export function Carroussel() {
  const cards = data.map((card) => <Card key={card.src} card={card} />)

  return (
    <div className="w-full h-full py-10" id="skills">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        What can I do for you?
      </h2>
      <Carousel items={cards} />
    </div>
  )
}
