import { create } from 'zustand'
import type { AppStore } from './appStoreType'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create<AppStore>()(
  persist(
    (set) => ({
      // Data Store
      init: false,
      cardSelected: null,
      urlSelected: null,
      claimCards: [],
      urlList: [],
      searchQuery: '',

      // Actions
      setSearchQuery: (query) => set({ searchQuery: query }),
      initDataApp: (data) => set({ ...data, init: true }),
      selectCard: (id) => set({ cardSelected: id }),
      selectUrl: (url) => set({ urlSelected: url }),
    }),
    {
      name: 'appStorage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
