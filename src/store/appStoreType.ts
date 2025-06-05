import type { TScraperCard } from '@/types/compTypes'

export type AppStore = {
  init: boolean
  scrapers: TScraperCard[]
  cardSelected: string | null
  isNewScraperFormOpen: boolean
  initDataApp: (data: Partial<AppStore>) => void
  selectCard: (id: string | null) => void
  setNewScraperFormOpen: (isOpen: boolean) => void
  setNewScraper: (newScraper: TScraperCard) => void
}
