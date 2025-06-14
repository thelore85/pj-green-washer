import LogoMain from './LogoMain'
import Button from '../cta/Buttons'
import SearchInput from '../form/SearchInput'
import ButtonSetting from '../cta/ButtonSetting'
import ScraperList from '../cards/ScraperList'
import { useStore } from '@/store/appStore'

export default function SidebarCards() {
  const selectCard = useStore((state) => state.selectCard)
  const setNewScraperFormOpen = useStore((state) => state.setNewScraperFormOpen)

  const handleResetCardSelection = () => {
    selectCard(null)
  }

  return (
    <aside className="flex w-64 flex-col bg-gray-300">
      {/* Header  */}
      <div
        className="flex min-h-[8vh] items-center bg-gray-300 px-4 shadow"
        onClick={handleResetCardSelection}
      >
        <LogoMain />
      </div>

      {/* Sidebar Actions  */}
      <div className="p-4">
        <Button label="+ New Scraper" onClick={() => setNewScraperFormOpen(true)} />
        <SearchInput placeholder="Search Scrapers" />
      </div>

      {/* Sidebar Body  */}
      <ScraperList />
      {/* Sidebar Footer  */}
      <div className="mx-4 border-t-1 border-gray-100 py-4">
        <ButtonSetting label="Settings" />
      </div>
    </aside>
  )
}
