import { useEffect, useRef } from 'react'

const useTimeout = (cb, delay) => {
	const timer = useRef(null)
	const cbRef = useRef(cb)

	useEffect(() => {
		cbRef.current = cb
	}, [cb])

	useEffect(() => {
		const tick = () => cbRef.current()

		if (typeof delay === 'number') {
			timer.current = window.setTimeout(tick, delay)

			return () => window.clearTimeout(timer.current)
		}
	}, [delay])

	return timer
}

export default useTimeout