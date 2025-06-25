import { create } from 'zustand'
import type { AppStore } from './appStoreType'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create<AppStore>()(
  persist(
    (set) => ({
      // Data Store
      init: false,
      cardSelected: null,
      articleSelected: null,
      claimCards: [],
      articleList: [],
      searchQuery: '',

      // Actions
      setSearchQuery: (query) => set({ searchQuery: query }),
      initDataApp: (data) => set({ articleList: data, init: true }),
      selectCard: (id) => set({ cardSelected: id }),
      selectArticle: (id) => set({ articleSelected: id }),
    }),
    {
      name: 'appStorage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
