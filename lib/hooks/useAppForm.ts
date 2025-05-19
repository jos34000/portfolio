import { ButtonField } from "@/components/form/button-field"
import { InputField } from "@/components/form/input-field"
import { SelectField } from "@/components/form/select-field"
import { TextareaField } from "@/components/form/textarea-field"
import { createFormHook, createFormHookContexts } from "@tanstack/react-form"

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts()

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField: InputField,
    TextareaField: TextareaField,
    SelectField: SelectField,
  },
  formComponents: {
    SubmitButton: ButtonField,
  },
  fieldContext,
  formContext,
})
