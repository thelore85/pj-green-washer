import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'

type ModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  triggerLabel?: string
  children: React.ReactNode
}

export function Modal({ open, onOpenChange, title, children }: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div>
          {children}
          <DialogFooter></DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
