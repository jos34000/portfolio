import { Code, Layers, Palette, Zap } from "lucide-react"
import { useState } from "react"
import { FloatingElement } from "../elements/floating-element"
import { SelectionOption } from "../elements/selection-option"

export default function StepInterests() {
  const [interests, setInterests] = useState<string[]>([])
  const toggleInterest = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((i) => i !== interest))
    } else {
      setInterests([...interests, interest])
    }
  }
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-3">
          Areas of Interest
        </h2>
        <p className="text-muted-foreground">
          What are you most interested in seeing in my portfolio? Select your
          interests to personalize your experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {[
          {
            id: "projects",
            name: "Projects",
            icon: <Code className="h-5 w-5" />,
          },
          {
            id: "skills",
            name: "Skills",
            icon: <Palette className="h-5 w-5" />,
          },
          {
            id: "experience",
            name: "Experience",
            icon: <Layers className="h-5 w-5" />,
          },
          {
            id: "blog",
            name: "Articles",
            icon: <Zap className="h-5 w-5" />,
          },
        ].map((item) => (
          <FloatingElement key={item.id} intensity={30} scale={1.02}>
            <SelectionOption
              selected={interests.includes(item.id)}
              onClick={() => toggleInterest(item.id)}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`p-2.5 rounded-full ${
                    interests.includes(item.id)
                      ? "bg-primary/20"
                      : "bg-muted/50"
                  }`}
                >
                  {item.icon}
                </div>
                <span className="font-medium">{item.name}</span>
              </div>
            </SelectionOption>
          </FloatingElement>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mt-4">
        This information will help us highlight the content that interests you
        the most.
      </p>
    </div>
  )
}
