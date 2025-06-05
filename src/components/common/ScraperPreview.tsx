import { useStore } from '@/store/appStore'

type ScraperPreviewProps = {
  id: string
  title: string
  description: string
  running?: boolean
}

export default function ScraperPreview({ title, description, running, id }: ScraperPreviewProps) {
  const cardSelected = useStore((state) => state.cardSelected)
  const selectCard = useStore((state) => state.selectCard)

  const styleSelected = cardSelected === id ? 'bg-background' : 'bg-card'
  const styleActive = running ? 'border-green-600' : 'border-gray-400'

  const handleScraperPreviewClick = () => {
    selectCard(id)
  }

  return (
    <div
      onClick={handleScraperPreviewClick}
      className={`mb-3 flex items-center rounded-2xl border-l-4 px-4 py-2 ${styleSelected} ${styleActive}`}
    >
      <div className="">
        <h3 className="mb-1 font-bold">
          {title.slice(0, 20)} {title.length >= 20 && '..'}
        </h3>
        <div className="text-xs text-gray-400">
          {description.slice(0, 25)} {description.length >= 25 && '..'}
        </div>
      </div>
    </div>
  )
}
