import {Link} from 'react-router-dom'

import {LocaleSwitcher} from '../shared'
import {getRoutes} from '@/routes'

const Header = () => {
    return (
        <header className="flex items-center justify-between bg-transparent px-[100px] py-[14px]">
            <Link to={getRoutes().home.path}>
                <img src="/assets/images/logo.png" width={135} />
            </Link>
            <LocaleSwitcher />
        </header>
    )
}

export default Header
