import {create} from 'zustand'

import {CommonState} from '@/types/store'

export const useCommonStore = create<CommonState>((set) => ({
    locale: 'en',
    pageTitle: '',

    setLocale: (locale) => set({locale}),
    setPageTitle: (title) => set({pageTitle: title})
}))
