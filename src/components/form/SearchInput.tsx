import { useStore } from '@/store/appStore'
import { Search } from 'lucide-react'

type Props = {
  placeholder: string
}

export default function SearchInput({ placeholder }: Props) {
  const setSearchQuery = useStore((state) => state.setSearchQuery)
  const searchQuery = useStore((state) => state.searchQuery)

  const handleInput = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <div className="flex items-center">
      <input
        value={searchQuery}
        onChange={(e) => handleInput(e.target.value)}
        type="text"
        className="bg-card w-full rounded-s-full p-2 text-xs"
        placeholder={placeholder}
      />
      <button type={'button'} className="bg-card rounded-e-full p-2 text-xs text-gray-500">
        <Search className="h-4 w-4" />
      </button>
    </div>
  )
}
