"use client"
import { LibraryIconItem } from "@/components/library/library-icon-item"
import { LibrarySectionTitle } from "@/components/library/library-section-title"
import * as LucideIcons from "lucide-react"

interface IconsSectionProps {
  searchQuery: string
  filters: string[]
}

export function IconsSection({
  searchQuery,
  filters,
}: Readonly<IconsSectionProps>) {
  const iconNames = [
    "Home",
    "Settings",
    "User",
    "Mail",
    "Calendar",
    "Search",
    "Bell",
    "Heart",
    "Star",
    "Sun",
    "Moon",
    "Cloud",
    "Download",
    "Upload",
    "Trash",
    "Edit",
    "Copy",
    "Check",
    "X",
    "Menu",
    "ChevronDown",
    "ChevronUp",
    "ChevronLeft",
    "ChevronRight",
  ]

  const icons = iconNames.map((name) => ({
    id: name.toLowerCase(),
    name,
    component: LucideIcons[name as keyof typeof LucideIcons],
    category: "Lucide",
    usage: `import { ${name} } from "lucide-react"

export function MyComponent() {
  return <${name} className="h-6 w-6" />
}`,
  }))

  const filteredIcons = icons.filter((icon) => {
    const matchesSearch = icon.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())

    const matchesFilters =
      filters.length === 0 ||
      filters.some(
        (filter) => icon.category.toLowerCase() === filter.toLowerCase()
      )

    return matchesSearch && matchesFilters
  })

  return (
    <section className="mb-12">
      <LibrarySectionTitle
        title="Icônes"
        description="Icônes disponibles dans votre application"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredIcons.map((icon) => {
          const IconComponent = icon.component
          return (
            <LibraryIconItem
              key={icon.id}
              name={icon.name}
              category={icon.category}
              icon={<IconComponent className="h-6 w-6" />}
              usage={icon.usage}
            />
          )
        })}
      </div>

      {filteredIcons.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          Aucune icône ne correspond à votre recherche.
        </div>
      )}
    </section>
  )
}
