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
            <div className="absolute -top-[68vw] -z-[1] aspect-square w-[100vw] rounded-full bg-[#FBFCFF]" />
            <div className="absolute top-[32vw] -z-[1] aspect-square w-[100vw] rounded-full bg-[#FBFCFF]" />
            <Header />
            <div className="flex w-full flex-1">{children}</div>
            <Footer />
        </main>
    )
}

export default MainLayout
