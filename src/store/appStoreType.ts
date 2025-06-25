import type { ArticleCard, ClaimCards } from '@/types/compTypes'

export type AppStore = {
  init: boolean
  claimCards: ClaimCards[]
  articleList: ArticleCard[] | null
  cardSelected: number | null
  articleSelected: number | null
  searchQuery: string
  setSearchQuery: (query: string) => void
  initDataApp: (data: ArticleCard[]) => void
  selectCard: (id: number | null) => void
  selectArticle: (id: number | null) => void
}
