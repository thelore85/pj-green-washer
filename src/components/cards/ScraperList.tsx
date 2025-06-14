import { useStore } from '@/store/appStore'
import ScraperPreview from './ScraperPreviewCard'

export default function ScraperList() {
  const scrapers = useStore((store) => store.scrapers)

  return (
    <div className="h-full overflow-auto p-4">
      {scrapers.map((scraper) => {
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
