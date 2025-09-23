import {useMemo} from 'react'

type StorageState = {
    operatorId: number | null
    role: string
    refreshToken: string
    name: string
    surname: string
}

function readState(): StorageState {
    const operatorIdStr = localStorage.getItem('operatorId') ?? ''
    const operatorId = Number.isNaN(parseInt(operatorIdStr, 10))
        ? null
        : parseInt(operatorIdStr, 10)

    return {
        operatorId,
        role: localStorage.getItem('role') ?? '',
        refreshToken: localStorage.getItem('refreshToken') ?? '',
        name: localStorage.getItem('name') ?? '',
        surname: localStorage.getItem('surname') ?? ''
    }
}

export function useLocalStorage(): StorageState
export function useLocalStorage<T>(selector: (s: StorageState) => T): T

export function useLocalStorage<T>(selector?: (s: StorageState) => T) {
    const state = useMemo(readState, [])
    return selector ? selector(state) : state
}
