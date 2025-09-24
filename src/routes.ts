import text from '@/text.json'

import {Routes} from './types/common'
import {Home, PrivacyPolicy, CookiePolicy} from './pages'

const routeItem = (
    key: string,
    title: string,
    path: string,
    component: React.FC
) => {
    return {
        key,
        title,
        path,
        component
    }
}

const getRoutes = (locale?: string): Routes => {
    const titles = text[locale || 'en']

    const routes: Routes = {
        home: routeItem('home', titles.home, '/', Home),
        privacy_policy: routeItem(
            'privacy_policy',
            titles.privacy_policy,
            '/privacy-policy',
            PrivacyPolicy
        ),
        cookie_policy: routeItem(
            'cookie_policy',
            titles.cookie_policy,
            '/cookie-policy',
            CookiePolicy
        )
    }

    return routes
}

export {getRoutes}
