import {RefObject, useCallback} from 'react'

const useScollToBottom = (ref: RefObject<HTMLDivElement>) => {
    const scrollToBottom = useCallback(
        (behavior: 'smooth' | 'auto' | 'instant' = 'instant') => {
            if (ref.current) {
                ref.current.scrollTo({
                    top: ref.current.scrollHeight,
                    behavior
                })
            }
        },
        [ref]
    )

    return {
        scrollToBottom
    }
}

export default useScollToBottom
