import {Link} from 'react-router-dom'

import {LocaleSwitcher} from '../shared'
import {getRoutes} from '@/routes'

const Header = () => {
    return (
        <header className="flex items-center justify-between bg-transparent px-4 py-3 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-28">
            <Link to={getRoutes().home.path}>
                <img src="/assets/images/logo.png" width={135} />
            </Link>
            <LocaleSwitcher />
        </header>
    )
}

export default Header
