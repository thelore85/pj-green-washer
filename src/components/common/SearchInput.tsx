import { Search } from 'lucide-react'

type Props = {
  placeholder: string
}

export default function SearchInput({ placeholder }: Props) {
  return (
    <div className="flex items-center">
      <input
        type="text"
        className="bg-card w-full rounded-full border-1 p-2 text-xs"
        placeholder={placeholder}
      />
      <button className="bg-card ml-2 rounded-full p-2 text-xs text-gray-500 hover:bg-gray-200">
        <Search className="h-4 w-4" />
      </button>
    </div>
  )
}
