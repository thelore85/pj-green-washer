import BackupCard from '@/components/common/BackupCard'
import ScraperCard from '@/components/common/ScraperCard'
import ScraperForm from '@/components/form/ScraperForm'
import FooterApp from '@/components/navigation/FooterApp'
import NavMain from '@/components/navigation/NavMain'
import SidebarCards from '@/components/navigation/SidebarCards'
import { useEffect } from 'react'
import { useStore } from './store/appStore'
import { SCRAPER_CARDS_DB } from '@/lib/utils'
import Loader from './components/common/Loader'

export default function App() {
  const initDataApp = useStore((store) => store.initDataApp)
  const init = useStore((store) => store.init)
  const scrapersData = SCRAPER_CARDS_DB

  useEffect(() => {
    const appInitialization = () => {
      if (!init) {
        setTimeout(() => {
          initDataApp({ scrapers: scrapersData })
        }, 3000)
      }
    }
    appInitialization()
  }, [init, initDataApp, scrapersData])

  if (!init) {
    return <Loader />
  }

  if (init) {
    return (
      <>
        <main className="flex h-screen">
          <SidebarCards />
          <div className="flex flex-1 flex-col">
            <NavMain />
            <ScraperCard />
            <BackupCard />
            <FooterApp />
          </div>
        </main>

        {/* // Modals and Pop-Up used in the App  */}
        <ScraperForm />
      </>
    )
  }
}
