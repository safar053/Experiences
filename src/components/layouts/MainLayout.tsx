import React, {useEffect} from 'react'

import {useCommonStore} from '@/store/commonStore'
import Header from './Header'
import Footer from './Footer'

interface Props {
    children: React.ReactNode
    title: string
}

const MainLayout = ({children, title}: Props) => {
    const {locale, pageTitle, setPageTitle} = useCommonStore()

    useEffect(() => {
        setPageTitle(title)
    }, [setPageTitle, title])

    useEffect(() => {
        document.title = pageTitle
    }, [pageTitle, locale])

    return (
        <main className="relative flex min-h-[100vh] w-full flex-col overflow-hidden">
            <Header />
            <div className="flex w-full flex-1">{children}</div>
            <Footer />
        </main>
    )
}

export default MainLayout
