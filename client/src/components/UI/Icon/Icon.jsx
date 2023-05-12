import React from 'react'
// ==== Styles ====
import cl from './Icon.module.scss'
import cn from 'classnames'

const Icon = ({ icon, className, isActive = true, alt = 'Icon', ...props }) => {
	return (
		<div className={cn(cl.icon, className, !isActive && cl['icon_dis-active'])}>
			<img className={cl.icon__icon} src={icon} alt={alt} {...props} />
		</div>
	)
}

export default Icon
