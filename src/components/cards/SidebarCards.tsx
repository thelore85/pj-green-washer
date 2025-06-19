import LogoMain from '../navigation/LogoMain'
import ButtonSetting from '../cta/ButtonSetting'
import ScraperList from './UrlList'
import { useStore } from '@/store/appStore'

export default function SidebarCards() {
  const selectCard = useStore((state) => state.selectCard)

  const handleResetCardSelection = () => {
    selectCard(null)
  }

  return (
    <aside className="flex w-64 flex-col bg-gray-300">
      {/* Header  */}
      <div className="flex min-h-[8vh] items-center bg-gray-300 px-4 shadow" onClick={handleResetCardSelection}>
        <LogoMain />
      </div>

      {/* Sidebar Actions  */}
      <div className="p-4">{/* <SearchInput placeholder="Search Scrapers" /> */}</div>

      {/* Sidebar Body  */}
      <ScraperList />
      {/* Sidebar Footer  */}
      <div className="mx-4 border-t-1 border-gray-100 py-4">
        <ButtonSetting label="Settings" />
      </div>
    </aside>
  )
}
