import { useRef, useCallback, useState } from 'react'

export const useDebounce = (cb, delay) => {
	const timer = useRef()
	const [isLoading, setIsLoading] = useState(false)

	const debounce = useCallback(
		args => {
			setIsLoading(true)

			if (timer.current) {
				clearTimeout(timer.current)
			}

			timer.current = setTimeout(() => {
				cb(args)

				setIsLoading(false)
			}, delay)
		},
		[cb, delay]
	)

		return [debounce, isLoading]
}


