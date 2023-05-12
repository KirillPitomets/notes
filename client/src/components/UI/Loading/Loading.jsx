import React from 'react'
// ==== Styles ====
import cl from './Loading.module.scss'

const Loading = ({ text }) => {
	return (
		<div className={cl.loading}>
			<div className={cl.dot}></div>
			<div className={cl.dot}></div>
			<div className={cl.dot}></div>
			<div className={cl.dot}></div>
			<div className={cl.dot}></div>
			<div className={cl.dot}></div>
			<div className={cl.dot}></div>
			<div className={cl.dot}></div>
			<div className={cl.text}>
				<p className={cl.text__text}>{text}</p>
			</div>
		</div>
	)
}

export default Loading
