type SelectOptions = {
  label: string
  value: string
}

type ContactDialogProps = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  email: string
}
