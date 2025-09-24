import React, {useRef, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {ArrowIcon, GlobeIcon} from '@/icons'
import clsx from 'clsx'

import {useOutsideClick} from '@/hooks/useOutsideClick'
import {useCommonStore} from '@/store/commonStore'

type Locale = {key: 'en' | 'az' | 'ru' | 'tr'; label: string}

const LocaleSwitcher: React.FC = () => {
    const {i18n} = useTranslation()
    const ref = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)

    const {locale, setLocale} = useCommonStore()

    useOutsideClick(ref, () => setIsOpen(false))

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        setIsOpen(false)
        localStorage.setItem('locale', lng)
        setLocale(lng)
    }

    const locales: Locale[] = [
        {key: 'en', label: 'English'},
        {key: 'az', label: 'Azərbaycanca'},
        {key: 'ru', label: 'Русский'},
        {key: 'tr', label: 'Türkçe'}
    ]

    const current =
        locales.find((l) => l.key === (locale as Locale['key'])) ?? locales[0]

    return (
        <div
            ref={ref}
            className="relative flex h-8 w-24 cursor-pointer items-center rounded-[10px] border border-[#2683DE] px-2 sm:h-9 sm:w-32 sm:px-2.5 md:h-10 md:w-40 md:px-[10px] lg:w-[170px]"
        >
            <span
                onClick={() => setIsOpen((p) => !p)}
                className="flex h-full w-full items-center justify-between"
            >
                <span className="flex items-center gap-1.5 text-[#6B6B6B] select-none sm:gap-[6px]">
                    <GlobeIcon />
                    <span className="text-xs uppercase sm:text-sm md:hidden">
                        {(current.key || locale).toUpperCase()}
                    </span>
                    <span className="hidden text-[15px] md:inline">
                        {current.label}
                    </span>
                </span>

                <span
                    className={clsx('transition-transform duration-300', {
                        ['-rotate-180']: isOpen
                    })}
                >
                    <ArrowIcon />
                </span>
            </span>

            <div
                className={clsx(
                    `absolute top-9 left-0 z-10 flex w-full flex-col gap-1 overflow-hidden rounded-[10px] border border-[#2683DE] bg-white md:top-10`,
                    {hidden: !isOpen}
                )}
            >
                {locales
                    .filter((lng) => lng.key !== current.key)
                    .map((lng) => (
                        <span
                            key={lng.key}
                            onClick={() => changeLanguage(lng.key)}
                            className="cursor-pointer px-2 py-1 text-left text-xs text-[#6B6B6B] hover:bg-[#E3F1FF] hover:text-[#2683DE] sm:text-sm md:px-[10px] md:py-1.5 md:text-[15px]"
                        >
                            <span className="uppercase md:hidden">
                                {lng.key.toUpperCase()}
                            </span>
                            <span className="hidden md:inline">
                                {lng.label}
                            </span>
                        </span>
                    ))}
            </div>
        </div>
    )
}

export default LocaleSwitcher
