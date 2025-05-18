import { useFieldContext } from "@/lib/hooks/useAppForm"
import { ComponentProps } from "react"
import { Input } from "../shadcn/input"
import { Label } from "../shadcn/label"

export function InputField({
  label,
  ...inputProps
}: { label: string } & ComponentProps<typeof Input>) {
  const field = useFieldContext<string>()
  const error = field.state.meta.errors[0]?.message
  return (
    <div className="space-y-2">
      <Label htmlFor={field.name}>{label}</Label>
      <Input
        {...inputProps}
        name={field.name}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        aria-invalid={!!error}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
