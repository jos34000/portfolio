"use client"
import { LibraryColorItem } from "@/components/library/library-color-item"
import { LibrarySectionTitle } from "@/components/library/library-section-title"

interface ColorsSectionProps {
  searchQuery: string
  filters: string[]
}

export function ColorsSection({ searchQuery, filters }: ColorsSectionProps) {
  const colors = [
    {
      id: "primary",
      name: "Primary",
      description: "Couleur principale de l'application",
      category: "Base",
      lightValue: "oklch(0 0 0)",
      darkValue: "oklch(1 0 0)",
      cssVariable: "var(--primary)",
      usage: "text-primary, bg-primary, border-primary",
    },
    {
      id: "secondary",
      name: "Secondary",
      description: "Couleur secondaire de l'application",
      category: "Base",
      lightValue: "oklch(0.94 0 0)",
      darkValue: "oklch(0.25 0 0)",
      cssVariable: "var(--secondary)",
      usage: "text-secondary, bg-secondary, border-secondary",
    },
    {
      id: "accent",
      name: "Accent",
      description: "Couleur d'accent pour les éléments mis en évidence",
      category: "Base",
      lightValue: "oklch(0.94 0 0)",
      darkValue: "oklch(0.32 0 0)",
      cssVariable: "var(--accent)",
      usage: "text-accent, bg-accent, border-accent",
    },
    {
      id: "background",
      name: "Background",
      description: "Couleur de fond principale",
      category: "Background",
      lightValue: "oklch(0.99 0 0)",
      darkValue: "oklch(0 0 0)",
      cssVariable: "var(--background)",
      usage: "bg-background",
    },
    {
      id: "foreground",
      name: "Foreground",
      description: "Couleur de texte principale",
      category: "Text",
      lightValue: "oklch(0 0 0)",
      darkValue: "oklch(1 0 0)",
      cssVariable: "var(--foreground)",
      usage: "text-foreground",
    },
    {
      id: "muted",
      name: "Muted",
      description: "Couleur atténuée pour les éléments secondaires",
      category: "Text",
      lightValue: "oklch(0.97 0 0)",
      darkValue: "oklch(0.23 0 0)",
      cssVariable: "var(--muted)",
      usage: "bg-muted, text-muted-foreground",
    },
    {
      id: "border",
      name: "Border",
      description: "Couleur de bordure standard",
      category: "Border",
      lightValue: "oklch(0.92 0 0)",
      darkValue: "oklch(0.26 0 0)",
      cssVariable: "var(--border)",
      usage: "border-border",
    },
  ]

  const filteredColors = colors.filter((color) => {
    const matchesSearch =
      color.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      color.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilters =
      filters.length === 0 ||
      filters.some(
        (filter) => color.category.toLowerCase() === filter.toLowerCase()
      )

    return matchesSearch && matchesFilters
  })

  return (
    <section className="mb-12">
      <LibrarySectionTitle
        title="Couleurs"
        description="Palette de couleurs de votre application"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColors.map((color) => (
          <LibraryColorItem
            key={color.id}
            name={color.name}
            description={color.description}
            category={color.category}
            lightValue={color.lightValue}
            darkValue={color.darkValue}
            cssVariable={color.cssVariable}
            usage={color.usage}
          />
        ))}
      </div>

      {filteredColors.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          Aucune couleur ne correspond à votre recherche.
        </div>
      )}
    </section>
  )
}
