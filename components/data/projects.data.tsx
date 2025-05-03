type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and responsive design.",
    image: "/static/Projects-screenshots/Portfolio.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/jos34000/portfolio",
    demo: "https://jocelynsainson.com",
    featured: true,
  },
  {
    title: "Exoskel",
    description:
      "A complete boiler plate for a full-stack application with Next.js, TypeScript, Prisma, and Tailwind CSS.",
    image: "/static/Projects-screenshots/Exoskel.png",
    tags: ["Next.js", "TypeScript", "Prisma"],
    github: "https://github.com/jos34000/exoskel",
    demo: "https://ecommerce-demo.jocelynsainson.com",
  },
]
