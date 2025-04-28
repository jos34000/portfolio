"use client";
import { Card, Carousel } from "@/components/ui/cards-carousel";

export function Carroussel() {
  const cards = data.map((card) => <Card key={card.src} card={card} />);

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Amazing features.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Authentication",
    title: "An authentication system.",
    src: "https://images.unsplash.com/photo-1519973759984-cf5a6c557cd8?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "UI",
    title: "A modern UI and UX.",
    src: "https://images.unsplash.com/photo-1720962158813-29b66b8e23e1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "API",
    title: "Keep your data safe.",
    src: "https://images.unsplash.com/photo-1526666361175-e3595627c376?q=80&w=2936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Future",
    title: "Modern and use latest technologies.",
    src: "https://images.unsplash.com/photo-1561555642-29be0d2dee1f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "User experience",
    title: "Easy to use.",
    src: "https://images.unsplash.com/photo-1692865814917-094cc56c5699?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
