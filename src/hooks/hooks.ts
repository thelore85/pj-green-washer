import { CLAIM_CARD_DB } from '@/lib/db'
import { useStore } from '@/store/appStore'
import { useEffect } from 'react'

export const useInitApp = () => {
  // App Store
  const init = useStore((store) => store.init)
  const initDataApp = useStore((store) => store.initDataApp)

  // Obj definition
  const claimCards = CLAIM_CARD_DB
  const urlList = [...new Set(claimCards.map((claim) => claim.url))]
  const initObj = { claimCards, urlList }

  useEffect(() => {
    const appInitialization = () => {
      if (!init) {
        setTimeout(() => {
          initDataApp(initObj)
        }, 2000)
      }
    }
    appInitialization()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [init])

  return init
}
