import { ButtonField } from "@/components/form/button-field"
import { InputField } from "@/components/form/input-field"
import { TextareaField } from "@/components/form/textarea-field.tsx"
import { createFormHook, createFormHookContexts } from "@tanstack/react-form"

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts()

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField: InputField,
    TextareaField: TextareaField,
  },
  formComponents: {
    SubmitButton: ButtonField,
  },
  fieldContext,
  formContext,
})
