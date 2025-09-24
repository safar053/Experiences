import {getRoutes} from '@/routes'
import {useTranslation} from 'react-i18next'
import {Link} from 'react-router-dom'

const Footer = () => {
    const {t} = useTranslation()

    return (
        <footer className="flex w-full flex-col items-center gap-4 bg-[#F1F1F1] px-4 py-6 sm:gap-6 sm:px-6 sm:py-8 md:gap-[30px] md:px-10 md:py-10 lg:px-16 lg:py-[40px] xl:px-[100px]">
            <Link to={getRoutes().home.path}>
                <img
                    src="/assets/images/logo.png"
                    className="w-[110px] sm:w-[120px] md:w-[135px]"
                    alt="Logo"
                />
            </Link>

            <ul className="flex flex-col items-center gap-2 sm:gap-[10px]">
                <li className="text-center text-sm sm:text-base">
                    <Link to={getRoutes().privacy_policy.path}>
                        {t('privacy_policy')}
                    </Link>
                </li>
                <li className="text-center text-sm sm:text-base">
                    <Link to={getRoutes().cookie_policy.path}>
                        {t('cookie_policy')}
                    </Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
