import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Props = {
  params: { username: string }
}

export const dynamic = "force-dynamic"

const LibraryPage = async ({ params }: Props) => {
  return (
    <main className="flex flex-col min-h-screen bg-background px-4 py-8 md:px-12 lg:px-24">
      <header className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Librairie
        </h1>
        <div className="flex gap-2 mt-2 md:mt-0">
          <Input
            type="search"
            placeholder="Rechercher un composant, une image, un template..."
            className="w-full md:w-80 bg-muted border-input focus-visible:ring-ring"
            aria-label="Recherche dans la librairie"
          />
          <Button variant="outline" className="hidden md:inline-flex">
            Filtrer
          </Button>
        </div>
      </header>
      <section className="flex-1">
        <a
          href={`/dashboard/${params.username}`}
          className="text-primary underline mb-4 inline-block"
        >
          Retour au dashboard
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Ajoute ici tes composants, images, templates, etc. */}
        </div>
      </section>
    </main>
  )
}

export default LibraryPage
