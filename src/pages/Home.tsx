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
    telegram: <TelegramIcon />,
    instagram: <InstagramIcon />,
    whatsapp: <WhatsappIcon />
}

const Home = () => {
    const {t} = useTranslation()
    const {locale} = useCommonStore()
    return (
        <div className="flex w-full flex-col items-center p-[100px] pt-[30px]">
            <h1 className="max-w-[880px] text-center text-[52px] font-semibold">
                {t('title')}
            </h1>
            <p className="mt-[30px] max-w-[400px] text-center text-[24px] font-normal">
                {t('desc')}
            </p>

            <ul className="mt-32 flex flex-col gap-[18px]">
                {botsUrls?.map((bot) => {
                    return (
                        <li key={bot.key}>
                            <Link
                                to={bot.url}
                                className="flex w-full items-center justify-between gap-[20px]"
                            >
                                <span>{bot.label}</span>
                                <span className="flex items-center justify-between rounded-full border border-[#E0E9F5] bg-white p-[8px]">
                                    <span className="flex items-center justify-center rounded-full bg-[#E0E9F5] p-[20px]">
                                        {botIcons[bot.key]}
                                    </span>
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>

            <p className="mt-[30px] max-w-[400px] text-center text-[24px] font-normal">
                {t('sub_desc')}
            </p>

            <ul className="mt-20 grid grid-cols-3 gap-[20px]">
                {steps[locale]?.map((step: string, index: number) => {
                    return (
                        <li
                            key={index}
                            className="flex h-full flex-col items-center justify-between gap-[20px] rounded-[15px] bg-[#f1f1f1] pt-[20px] text-[14px]"
                        >
                            <div className="flex max-w-[280px] flex-col items-center gap-[20px]">
                                <span className="rounded-[100px] bg-white px-[60px] py-[20px] text-center font-medium text-[#2683DE] uppercase">{`Step ${index + 1}`}</span>
                                <p className="text-center text-[14px] font-medium text-[#404040]">
                                    {step}
                                </p>
                            </div>
                            <img
                                className="px-[100px]"
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
