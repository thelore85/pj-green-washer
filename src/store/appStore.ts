import { create } from 'zustand'
import type { AppStore } from './appStoreType'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create<AppStore>()(
  persist(
    (set) => ({
      // Data Store
      init: false,
      cardSelected: null,
      isNewScraperFormOpen: false,
      scrapers: [],
      searchQuery: '',

      // Actions
      setSearchQuery: (query) => set({ searchQuery: query }),
      initDataApp: (data) => set({ ...data, init: true }),
      selectCard: (id) => set({ cardSelected: id }),
      setNewScraperFormOpen: (isOpen) => set({ isNewScraperFormOpen: isOpen }),
      setNewScraper: (newScraper) =>
        set((store) => ({ scrapers: [...store.scrapers, newScraper] })),
    }),
    {
      name: 'appStorage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
