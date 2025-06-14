import BackupCard from '@/components/cards/BackupCard'
import ScraperCard from '@/components/cards/ScraperCard'
import ScraperForm from '@/components/form/ScraperForm'
import FooterApp from '@/components/navigation/FooterApp'
import NavMain from '@/components/navigation/NavMain'
import { useEffect } from 'react'
import { useStore } from './store/appStore'
import { SCRAPER_CARDS_DB } from '@/lib/utils'
import Loader from './components/common/Loader'
import SidebarLayout from './layouts/sidebar/SidebarLayout'

export default function App() {
  const initDataApp = useStore((store) => store.initDataApp)
  const init = useStore((store) => store.init)
  const scrapersData = SCRAPER_CARDS_DB

  useEffect(() => {
    const appInitialization = () => {
      if (!init) {
        setTimeout(() => {
          initDataApp({ scrapers: scrapersData })
        }, 5000)
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
        <SidebarLayout>
          <NavMain />
          <ScraperCard />
          <BackupCard />
          <FooterApp />
        </SidebarLayout>

        {/* // Modals and Pop-Up used in the App  */}
        <ScraperForm />
      </>
    )
  }
}
