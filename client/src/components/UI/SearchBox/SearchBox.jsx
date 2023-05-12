import React, { useState } from 'react'
// ==== Styles ====
import cl from './SearchBox.module.scss'
import cn from 'classnames'

const SearchBox = ({
	placeholder,
	className,
	onFinish,
	value = '',
	...props
}) => {
	const [isFocus, setIsFocus] = useState(false)

	const handleInputFocus = () => {
		setIsFocus(true)
	}

	const handleBlur = e => {
		if (e.target.value) return
		setIsFocus(false)
	}

	return (
		<form onSubmit={e =>{
      e.preventDefault()
      console.log(e.target[0].value)
    }}>
			<label className={cn(cl.wrapper, isFocus && cl.wrapper_focus, className)}>
				<input
					placeholder={placeholder}
					className={cl.input}
					onFocus={handleInputFocus}
					onBlur={handleBlur}
					{...props}
				/>
			</label>
		</form>
	)
}

export default SearchBox
