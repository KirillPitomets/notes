import React, { useState } from 'react'
// ==== Context ====
import { useNotes } from '../../../context/NoteProvider/NoteProvider'
// ==== Hooks ====
import useTimeout from '../../../hooks/useTimeout'
// ==== Styles ====
import cl from './Notification.module.scss'
import cn from 'classnames'
// ==== Components ====

/**
 * @style error | warning | success
 * @styles  Example {left: '20px', right, top: '20px', bottom}
 * */

const Notification = ({ style = 'error', finalFunc, text, duration, styles }) => {
	const [isDisplay, setIsDisplay] = useState(true)

	useTimeout(() => {
		setIsDisplay(false)
		finalFunc()
	}, duration)

	return isDisplay ? (
		<div
			className={cn(
				cl.notification,
				cl[`notification_${style.trim().toLocaleLowerCase()}`]
			)}
			style={ styles }
		>
			<p className={cl.text}>{text}</p>
		</div>
	) : (
		<></>
	)
}

export default Notification
