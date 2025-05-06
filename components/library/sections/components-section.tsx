"use client"
import { LibraryItem } from "@/components/library/library-item"
import { LibrarySectionTitle } from "@/components/library/library-section-title"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ComponentsSectionProps {
  searchQuery: string
  filters: string[]
}

export function ComponentsSection({
  searchQuery,
  filters,
}: ComponentsSectionProps) {
  const components = [
    {
      id: "button",
      name: "Button",
      description: "Un bouton interactif pour les actions utilisateur",
      category: "Interaction",
      code: `<Button>Click me</Button>`,
      preview: () => <Button>Click me</Button>,
      usage: `import { Button } from "@/components/ui/button"

export function MyComponent() {
  return <Button>Click me</Button>
}`,
    },
    {
      id: "card",
      name: "Card",
      description: "Un conteneur pour afficher du contenu",
      category: "Layout",
      code: `<Card>
  <CardContent className="p-6">
    Contenu de la carte
  </CardContent>
</Card>`,
      preview: () => (
        <Card>
          <CardContent className="p-6">Contenu de la carte</CardContent>
        </Card>
      ),
      usage: `import { Card, CardContent } from "@/components/ui/card"

export function MyComponent() {
  return (
    <Card>
      <CardContent>Contenu de la carte</CardContent>
    </Card>
  )
}`,
    },
    {
      id: "tabs",
      name: "Tabs",
      description: "Onglets pour organiser le contenu",
      category: "Navigation",
      code: `<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Onglet 1</TabsTrigger>
    <TabsTrigger value="tab2">Onglet 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Contenu de l'onglet 1</TabsContent>
  <TabsContent value="tab2">Contenu de l'onglet 2</TabsContent>
</Tabs>`,
      preview: () => (
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Onglet 1</TabsTrigger>
            <TabsTrigger value="tab2">Onglet 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Contenu de l'onglet 1</TabsContent>
          <TabsContent value="tab2">Contenu de l'onglet 2</TabsContent>
        </Tabs>
      ),
      usage: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MyComponent() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Onglet 1</TabsTrigger>
        <TabsTrigger value="tab2">Onglet 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Contenu de l'onglet 1</TabsContent>
      <TabsContent value="tab2">Contenu de l'onglet 2</TabsContent>
    </Tabs>
  )
}`,
    },
  ]

  const filteredComponents = components.filter((component) => {
    const matchesSearch =
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilters =
      filters.length === 0 ||
      filters.some(
        (filter) => component.category.toLowerCase() === filter.toLowerCase()
      )

    return matchesSearch && matchesFilters
  })

  return (
    <section className="mb-12">
      <LibrarySectionTitle
        title="Composants"
        description="Composants réutilisables pour construire votre interface utilisateur"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredComponents.map((component) => (
          <LibraryItem
            key={component.id}
            title={component.name}
            description={component.description}
            category={component.category}
            preview={component.preview}
            code={component.code}
            usage={component.usage}
          />
        ))}
      </div>

      {filteredComponents.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          Aucun composant ne correspond à votre recherche.
        </div>
      )}
    </section>
  )
}
