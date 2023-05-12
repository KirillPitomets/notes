import React from 'react'
// ==== Styles ====
import cl from './Modal.module.scss'
import cn from 'classnames'

const Modal = ({ isModalDisplay, handleModal, children }) => {
	return (
		<div
			className={cn(cl.modal, isModalDisplay && cl.modal_active)}
			onClick={e => {
			handleModal()
			}}
		>
			<div className={cl.modal__wrapper}>{children}</div>
		</div>
	)
}

export default Modal
