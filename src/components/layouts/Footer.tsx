import {getRoutes} from '@/routes'
import { useTranslation } from 'react-i18next'
import {Link} from 'react-router-dom'

const Footer = () => {
    const {t} = useTranslation()
    return (
        <footer className="flex w-full flex-col items-center bg-[#F1F1F1] px-[100px] py-[40px] gap-[30px]">
            <Link to={getRoutes().home.path}>
                <img src="/assets/images/logo.png" width={135} />
            </Link>
            <ul className='flex flex-col gap-[10px]'>
                <li className='text-center'>
                    <Link to={getRoutes().privacy_policy.path}>{t('privacy_policy')}</Link>
                </li>
                <li className='text-center'>
                    <Link to={getRoutes().cookie_policy.path}>{t('cookie_policy')}</Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
