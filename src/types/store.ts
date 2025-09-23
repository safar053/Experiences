
export interface CommonState {
    locale: string
    pageTitle: string

    setLocale: (locale: string) => void
    setPageTitle: (title: string) => void
}
