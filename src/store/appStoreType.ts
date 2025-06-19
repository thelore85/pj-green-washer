import type { ClaimCards } from '@/types/compTypes'

export type AppStore = {
  init: boolean
  claimCards: ClaimCards[]
  urlList: string[] | null
  cardSelected: number | null
  urlSelected: string | null
  searchQuery: string
  setSearchQuery: (query: string) => void
  initDataApp: (data: Partial<AppStore>) => void
  selectCard: (id: number | null) => void
  selectUrl: (url: string | null) => void
}
