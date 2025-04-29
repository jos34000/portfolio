import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "./ui/button"

type Props = {
  isLoading: boolean
  onFinishLoading: () => void
}

export const BackHome = ({ isLoading, onFinishLoading }: Props) => {
  const [isNavigatingHome, setIsNavigatingHome] = useState(false)
  const router = useRouter()

  return (
    <>
      <Button
        variant="ghost"
        className="absolute top-4 left-4 flex items-center gap-2"
        size="sm"
        onClick={() => {
          setIsNavigatingHome(true)
          onFinishLoading()
          router.push("/")
        }}
      >
        {isNavigatingHome ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        )}
        Back to home
      </Button>
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/80">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      )}
    </>
  )
}
