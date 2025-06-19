import SidebarCards from '@/components/cards/SidebarCards'

type SidebarLayoutPorps = {
  children: React.ReactNode
}

export default function SidebarLayout({ children }: SidebarLayoutPorps) {
  return (
    <main className="flex h-screen">
      <SidebarCards />
      <div className="flex flex-1 flex-col">{children}</div>
    </main>
  )
}
