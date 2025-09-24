import {useTranslation} from 'react-i18next'
import {Link} from 'react-router-dom'

import {useCommonStore} from '@/store/commonStore'
import {botsUrls} from '@/data/botLinks'
import steps from '@/data/steps.json'
import Step1 from '@/assets/images/steps/step-1.png'
import Step2 from '@/assets/images/steps/step-2.png'
import Step3 from '@/assets/images/steps/step-3.png'
import Step4 from '@/assets/images/steps/step-4.png'
import Step5 from '@/assets/images/steps/step-5.png'
import Step6 from '@/assets/images/steps/step-6.png'
import {TelegramIcon, InstagramIcon, WhatsappIcon} from '@/icons'

const stepImages = [Step1, Step2, Step3, Step4, Step5, Step6]

const botIcons = {
    telegram: <TelegramIcon className="h-4 w-4 sm:h-8 sm:w-8" />,
    instagram: <InstagramIcon className="h-4 w-4 sm:h-8 sm:w-8" />,
    whatsapp: <WhatsappIcon className="h-4 w-4 sm:h-8 sm:w-8" />
}

const Home = () => {
    const {t} = useTranslation()
    const {locale} = useCommonStore()

    return (
        <div className="flex w-full flex-col items-center px-4 py-6 sm:px-6 sm:pt-8 md:px-10 md:pt-10 lg:px-16 lg:pt-[30px] xl:px-[100px]">
            <h1 className="max-w-[880px] text-center text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-[52px]">
                {t('title')}
            </h1>

            <p className="mt-4 max-w-[400px] text-center text-base font-normal sm:mt-6 sm:text-lg md:mt-8 md:text-xl lg:mt-[30px] lg:text-[24px]">
                {t('desc')}
            </p>

            <ul className="mt-12 flex flex-col gap-3 sm:mt-16 sm:gap-4 md:mt-20 md:gap-5 lg:mt-32 lg:gap-[18px]">
                {botsUrls?.map((bot) => {
                    return (
                        <li key={bot.key}>
                            <Link
                                target="_blank"
                                to={bot.url}
                                className="flex w-full items-center justify-between gap-3 sm:gap-4 md:gap-5 lg:gap-[20px]"
                            >
                                <span className="text-sm sm:text-base md:text-lg">
                                    {bot.label}
                                </span>
                                <span className="flex items-center justify-between rounded-full border border-[#E0E9F5] bg-white p-1.5 sm:p-2 md:p-[8px]">
                                    <span className="flex items-center justify-center rounded-full bg-[#E0E9F5] p-3 sm:p-4 md:p-[20px]">
                                        {botIcons[bot.key]}
                                    </span>
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>

            <p className="mt-6 max-w-[400px] text-center text-base font-normal sm:mt-8 sm:text-lg md:mt-10 md:text-xl lg:mt-[30px] lg:text-[24px]">
                {t('sub_desc')}
            </p>

            <ul className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 md:mt-20 md:grid-cols-3 md:gap-8 lg:mt-20 lg:gap-[20px]">
                {steps[locale]?.map((step: string, index: number) => {
                    return (
                        <li
                            key={index}
                            className="flex h-full flex-col items-center justify-between gap-3 rounded-[15px] bg-[#f1f1f1] pt-4 text-xs sm:gap-4 sm:pt-5 sm:text-sm md:gap-5 md:pt-6 md:text-base lg:gap-[20px] lg:pt-[20px] lg:text-[14px]"
                        >
                            <div className="flex max-w-[280px] flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-[20px]">
                                <span className="rounded-[100px] bg-white px-6 py-2 text-center text-xs font-medium text-[#2683DE] uppercase sm:px-10 sm:py-3 sm:text-sm md:px-12 md:py-4 md:text-base lg:px-[60px] lg:py-[20px]">{`Step ${index + 1}`}</span>
                                <p className="text-center text-xs font-medium text-[#404040] sm:text-sm md:text-base lg:text-[14px]">
                                    {step}
                                </p>
                            </div>
                            <img
                                className="h-auto w-full px-6 sm:px-12 md:px-16 lg:px-[100px]"
                                src={stepImages[index]}
                                alt=""
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Home
