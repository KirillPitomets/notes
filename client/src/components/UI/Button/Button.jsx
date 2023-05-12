import React from 'react'
// ==== Styles ====
import cl from './Button.module.scss'
import cn from 'classnames'

const Button = ({ children, isActive = true, ...props }) => {
	return (
		<button className={cn(cl.button, !isActive && cl.button_dis_active)} {...props}>
			{children}
		</button>
	)
}

export default Button
