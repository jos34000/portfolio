import { useFieldContext } from "@/lib/hooks/useAppForm"
import { ComponentProps } from "react"
import { Label } from "../shadcn/label"
import { Textarea } from "../shadcn/textarea"

export function TextareaField({
  label,
  ...textareaProps
}: { label: string } & ComponentProps<typeof Textarea>) {
  const field = useFieldContext<string>()
  const error = field.state.meta.errors.map((error) => error.message).join(", ")
  return (
    <div className="space-y-2">
      <Label htmlFor={field.name}>{label}</Label>
      <Textarea
        {...textareaProps}
        name={field.name}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        aria-invalid={!!error}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
