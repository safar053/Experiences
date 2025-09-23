import React, {useRef, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {ArrowIcon, GlobeIcon} from '@/icons'
import clsx from 'clsx'

import {useOutsideClick} from '@/hooks/useOutsideClick'
import {useCommonStore} from '@/store/commonStore'

const LocaleSwitcher: React.FC = () => {
    const {i18n} = useTranslation()
    const ref = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const {locale, setLocale} = useCommonStore()

    useOutsideClick(ref, () => {
        setIsOpen(false)
    })

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        setIsOpen(false)
        localStorage.setItem('locale', lng)
        setLocale(lng)
    }

    const locales = [
        {
            key: 'en',
            label: 'English'
        },
        {
            key: 'az',
            label: 'Azərbaycanca'
        },
        {
            key: 'ru',
            label: 'Русский'
        },
        {
            key: 'tr',
            label: 'Türkçe'
        }
    ]

    return (
        <div
            ref={ref}
            className="relative flex h-[35px] w-[170px] cursor-pointer items-center rounded-[10px] border border-[#2683DE] px-[10px]"
        >
            <span
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-full w-full items-center justify-between"
            >
                <span className="flex items-center gap-[6px] text-[#6B6B6B] select-none">
                    <GlobeIcon />
                    {locales.find((lng) => lng.key === locale).label}
                </span>
                <span
                    className={clsx('transition-all duration-300', {
                        ['-rotate-180']: isOpen
                    })}
                >
                    <ArrowIcon />
                </span>
            </span>
            <div
                className={clsx(
                    'absolute top-10 left-0 flex w-full flex-col gap-1 overflow-hidden rounded-[10px] border border-[#2683DE] bg-white',
                    {
                        hidden: !isOpen
                    }
                )}
            >
                {locales
                    ?.filter((lng) => lng.key !== locale)
                    ?.map((lng) => (
                        <span
                            key={lng.key}
                            onClick={() => changeLanguage(lng.key)}
                            className="cursor-pointer px-[10px] py-1 text-center text-left text-[#6B6B6B] hover:bg-[#E3F1FF] hover:text-[#2683DE]"
                        >
                            {lng.label}
                        </span>
                    ))}
            </div>
        </div>
    )
}

export default LocaleSwitcher
