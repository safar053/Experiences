import {FC} from 'react'

export interface Locale {
    key: string
    label: string
}

export type RouteItem = {
    key: string
    title: string
    path: string
    component: FC
}

export type Routes = {
    home: RouteItem
    privacy_policy: RouteItem
    cookie_policy: RouteItem
}

export interface IconProps {
    width?: number | string
    height?: number | string
    fill?: string
    stroke?: string
    className?: string
}

export enum BotTypes {
    Telegram = 3,
    Instagram = 5,
    Whatsapp = 2,
    Facebook = 4
}
