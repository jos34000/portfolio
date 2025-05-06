"use client"
import { LibraryImageItem } from "@/components/library/library-image-item"
import { LibrarySectionTitle } from "@/components/library/library-section-title"

interface ImagesSectionProps {
  searchQuery: string
  filters: string[]
}

export function ImagesSection({ searchQuery, filters }: ImagesSectionProps) {
  const images = [
    {
      id: "human-quality",
      name: "Human Quality",
      description: "Image illustrant les qualités humaines",
      path: "/images/human-quality.png",
      category: "Illustrations",
      tags: ["qualité", "humain", "compétence"],
    },
    {
      id: "human-quality-2",
      name: "Human Quality 2",
      description: "Image illustrant les qualités humaines (variante)",
      path: "/images/human-quality-2.png",
      category: "Illustrations",
      tags: ["qualité", "humain", "compétence"],
    },
    {
      id: "techno-back",
      name: "Backend Technologies",
      description: "Image illustrant les technologies backend",
      path: "/images/techno-back.png",
      category: "Technologies",
      tags: ["backend", "technologie", "développement"],
    },
    {
      id: "devops",
      name: "DevOps",
      description: "Image illustrant les outils DevOps",
      path: "/images/devops.png",
      category: "Technologies",
      tags: ["devops", "outils", "développement"],
    },
    {
      id: "os",
      name: "Operating Systems",
      description: "Image illustrant les systèmes d'exploitation",
      path: "/images/os.png",
      category: "Technologies",
      tags: ["os", "système", "exploitation"],
    },
    {
      id: "technos-front",
      name: "Frontend Technologies",
      description: "Image illustrant les technologies frontend",
      path: "/images/technos-front.png",
      category: "Technologies",
      tags: ["frontend", "technologie", "développement"],
    },
  ]

  const filteredImages = images.filter((image) => {
    const matchesSearch =
      image.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )

    const matchesFilters =
      filters.length === 0 ||
      filters.some(
        (filter) => image.category.toLowerCase() === filter.toLowerCase()
      )

    return matchesSearch && matchesFilters
  })

  return (
    <section className="mb-12">
      <LibrarySectionTitle
        title="Images"
        description="Images et illustrations disponibles dans votre application"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <LibraryImageItem
            key={image.id}
            title={image.name}
            description={image.description}
            category={image.category}
            path={image.path}
            tags={image.tags}
          />
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          Aucune image ne correspond à votre recherche.
        </div>
      )}
    </section>
  )
}
