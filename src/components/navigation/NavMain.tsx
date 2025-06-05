import { Sidebar, User } from 'lucide-react'

export default function NavMain() {
  return (
    <nav className="flex min-h-[8vh] items-center justify-between bg-white px-4 shadow">
      <Sidebar />
      <User className="text-primary me-1 rounded-full bg-pink-200 p-1" size={40} />
    </nav>
  )
}
