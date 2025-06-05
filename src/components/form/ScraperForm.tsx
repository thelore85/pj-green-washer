import { useState } from 'react'
import type { TScraperCard } from '@/types/compTypes'
import { Modal } from '../ui/Modal'
import { useStore } from '@/store/appStore'

export default function ScraperForm() {
  // Store
  const isNewScraperFormOpen = useStore((state) => state.isNewScraperFormOpen)
  const setNewScraperFormOpen = useStore((state) => state.setNewScraperFormOpen)
  const setNewScraper = useStore((store) => store.setNewScraper)

  //State
  const [formData, setFormData] = useState<TScraperCard>()

  const handleFormDataUpdate = (newFiledData: Partial<TScraperCard>) => {
    setFormData((prev) => ({ ...prev, ...newFiledData }) as TScraperCard)
  }

  const handleFormSubmit = () => {
    const id = new Date().getTime().toString()
    const newScraper = { ...formData, id } as TScraperCard
    if (formData) {
      setNewScraper(newScraper)
    }
  }

  return (
    <Modal
      open={isNewScraperFormOpen}
      onOpenChange={setNewScraperFormOpen}
      title="Craete new Scraper"
      onSubmit={handleFormSubmit}
    >
      <div>
        <div className="mb-8 border-b-1 border-gray-100">
          <div>
            <label className="mb-1 text-xs text-gray-400">Title</label>
            <input
              type="text"
              value={formData?.title}
              className="mb-4 w-full rounded-md border border-gray-300 p-2"
              placeholder="Enter URL to scrape"
              onChange={(e) => handleFormDataUpdate({ title: e.target.value })}
            />
          </div>
          <div>
            <label className="mb-1 text-xs text-gray-400">Description</label>
            <input
              type="text"
              value={formData?.description}
              className="mb-4 w-full rounded-md border border-gray-300 p-2"
              placeholder="Enter URL to scrape"
              onChange={(e) => handleFormDataUpdate({ description: e.target.value })}
            />
          </div>
          <div>
            <label className="mb-1 text-xs text-gray-400">Web Target</label>
            <input
              type="text"
              value={formData?.web}
              className="mb-4 w-full rounded-md border border-gray-300 p-2"
              placeholder="Enter URL to scrape"
              onChange={(e) => handleFormDataUpdate({ web: e.target.value })}
            />
          </div>
          <label className="mb-1 text-xs text-gray-400">Script</label>
          <textarea
            value={formData?.script}
            className="mb-4 h-40 w-full rounded-md border border-gray-300 p-2"
            placeholder="Enter your scraping script here"
            onChange={(e) => handleFormDataUpdate({ script: e.target.value })}
          ></textarea>
          <div>
            <label className="mb-1 text-xs text-gray-400">Path</label>
            <input
              value={formData?.path}
              type="text"
              className="mb-4 w-full rounded-md border border-gray-300 p-2"
              placeholder="/api/scrape"
              onChange={(e) => handleFormDataUpdate({ path: e.target.value })}
            />
          </div>
        </div>
      </div>
    </Modal>
  )
}
