import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

type ModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  triggerLabel?: string
  children: React.ReactNode
  onSubmit?: () => void
}

export function Modal({ open, onOpenChange, title, children, onSubmit }: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onSubmit?.()
            onOpenChange(false)
          }}
          className="space-y-4"
        >
          {children}
          <DialogFooter>
            <Button type="submit">Salva</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
