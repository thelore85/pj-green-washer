import { CLAIM_CARD_DB } from '@/lib/db'
import { useStore } from '@/store/appStore'
import { useEffect } from 'react'

export const useInitApp = () => {
  // App Store
  const init = useStore((store) => store.init)
  const initDataApp = useStore((store) => store.initDataApp)

  // Obj definition
  const articleList = CLAIM_CARD_DB

  useEffect(() => {
    const appInitialization = () => {
      if (!init) {
        setTimeout(() => {
          initDataApp(articleList)
        }, 2000)
      }
    }
    appInitialization()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [init])

  return init
}
