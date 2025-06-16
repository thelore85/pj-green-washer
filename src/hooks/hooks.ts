import { SCRAPER_CARDS_DB } from '@/lib/utils'
import { useStore } from '@/store/appStore'
import { useEffect } from 'react'

export const useInitApp = () => {
  // Load all data before launch the app
  const scrapersData = SCRAPER_CARDS_DB

  const init = useStore((store) => store.init)
  const initDataApp = useStore((store) => store.initDataApp)

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

  return init
}
