import { useStore } from '@/store/appStore'
import ScraperPreview from './ScraperPreviewCard'

export default function ScraperList() {
  const scrapers = useStore((store) => store.scrapers)
  const searchQuery = useStore((store) => store.searchQuery)

  const scrapersFiltered = scrapers.filter((card) => {
    const title = card.title.toLocaleLowerCase()
    return title.includes(searchQuery)
  })

  return (
    <div className="h-full overflow-auto p-4">
      {scrapersFiltered.map((scraper) => {
        return (
          <ScraperPreview
            key={scraper.id}
            id={scraper.id}
            title={scraper.title}
            description={scraper.description}
            running={scraper.running}
          />
        )
      })}
    </div>
  )
}
