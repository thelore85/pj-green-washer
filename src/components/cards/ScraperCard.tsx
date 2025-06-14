import { Pen } from 'lucide-react'
import Button from '../cta/Buttons'
import { useEffect, useState } from 'react'
import type { TScraperCard } from '@/types/compTypes'
import BodyCanvas from '../../layouts/sidebar/BodyCanvas'
import { useStore } from '@/store/appStore'

export default function ScraperCard() {
  // Store
  const cardSelecteId = useStore((state) => state.cardSelected)
  const scrapers = useStore((state) => state.scrapers)
  const cardSelected = scrapers.find((scraper) => scraper.id === cardSelecteId)

  // State
  // const [schedulerCheck, setSchedulerCheck] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [cardData, setCardData] = useState(cardSelected)

  // Effects
  useEffect(() => {
    setCardData(cardSelected)
  }, [cardSelected])

  // come fare per tipizzare newData in modo che sia una parte di TscraperCardPreview?

  const handleUpdateCardData = (newData: Partial<TScraperCard>) => {
    setCardData((prev) => (prev ? { ...prev, ...newData } : prev))
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submitting form')
  }

  if (cardSelected) {
    return (
      <BodyCanvas>
        <div className="bg-card mx-auto w-full max-w-[800px] rounded-2xl p-6 shadow-md">
          {/* Main Content Header  */}
          <div className="flex items-center justify-between pb-4">
            <div>
              <h1 className="mb-2 text-3xl font-bold">{cardData?.title}</h1>
              <p className="text-sm font-light text-gray-400">{cardData?.description}</p>
            </div>
            <div className="text-right text-xs text-gray-400">
              <div className="mb-1">
                Scheduler:{' '}
                {cardData?.running ? (
                  <span className="text-green-500">Active</span>
                ) : (
                  <span className="text-gray-500">Not Activated</span>
                )}
              </div>
            </div>
          </div>

          {/* Form  */}
          <form onSubmit={handleFormSubmit} className="rounded-2xl border-1 border-gray-200 p-4">
            <div>
              <div className="mb-8 border-b-1 border-gray-100">
                <h3 className="mb-3 text-xl font-bold">Sript Setting</h3>
                <div>
                  <label className="mb-1 text-xs text-gray-400">Web Target</label>
                  <input
                    type="text"
                    value={cardData?.web}
                    className="mb-4 w-full rounded-md border border-gray-300 p-2"
                    placeholder="Enter URL to scrape"
                    disabled={!editMode}
                    onChange={(e) => handleUpdateCardData({ web: e.target.value })}
                  />
                </div>
                <label className="mb-1 text-xs text-gray-400">Script</label>
                <textarea
                  value={cardData?.script}
                  className="mb-4 h-40 w-full rounded-md border border-gray-300 p-2"
                  placeholder="Enter your scraping script here"
                  disabled={!editMode}
                  onChange={(e) => handleUpdateCardData({ script: e.target.value })}
                ></textarea>
                <div>
                  <label className="mb-1 text-xs text-gray-400">Path</label>
                  <input
                    value={cardData?.path}
                    type="text"
                    className="mb-4 w-full rounded-md border border-gray-300 p-2"
                    placeholder="/api/scrape"
                    disabled={!editMode}
                    onChange={(e) => handleUpdateCardData({ path: e.target.value })}
                  />
                </div>
              </div>

              {/* Scheduler  
          <div className="mb-8 border-b-1 border-gray-100">
            <div className="mb-2">
              <h3 className="mb-1 text-xl font-bold">Scheduler</h3>
            </div>

            
            <div className="mb-4 flex items-center gap-2">
              <input
                id="schedulerCheck"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={schedulerCheck}
                onChange={() => setSchedulerCheck(!schedulerCheck)}
                disabled={!editMode}
              />
              <label htmlFor="schedulerCheck" className="text-xs text-gray-400">
                Check if you want to schedule this scraper
              </label>
            </div>

            

            
            {schedulerCheck && (
              <>
                <div className="mb-4 flex">
                  
                  <div className="me-4 mb-2 flex items-center gap-2">
                    <input
                      type="radio"
                      name="schedule"
                      value="day"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      disabled={!editMode}
                    />
                    <label className="items-center">Daily</label>
                  </div>
                  
                  <div className="me-4 mb-2 flex items-center gap-2">
                    <input
                      type="radio"
                      name="schedule"
                      value="week"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      disabled={!editMode}
                    />
                    <label className="items-center">Weekly</label>
                  </div>
                  
                  <div className="mb-2 flex items-center gap-2">
                    <input
                      type="radio"
                      name="schedule"
                      value="month"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      disabled={!editMode}
                    />
                    <label className="items-center">Monthly</label>
                  </div>
                </div>
                <Button label="Schedule" variant="tertiary" />
              </>
            )}



            {!schedulerCheck && <Button label="Run Now" variant="tertiary" />}
          </div>

          */}

              {/* Output  */}
              <div className="mb-8 border-b-1 border-gray-100">
                <h3 className="mb-3 text-xl font-bold">Output</h3>
                <div className="mb-6 h-40 w-full rounded-md border border-gray-300 p-2">
                  {cardData?.output}
                </div>
              </div>

              {/* Save and Edit Buttons  */}
              <div className="flex items-center justify-end gap-2">
                {editMode && <Button onClick={() => setEditMode(!editMode)}>Save</Button>}
                {!editMode && (
                  <Button variant="secondary" onClick={() => setEditMode(!editMode)}>
                    <Pen className="me-2" size={16} />
                    Edit
                  </Button>
                )}
              </div>
            </div>
          </form>
        </div>
      </BodyCanvas>
    )
  }
}
