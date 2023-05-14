import React from 'react'
// ==== Context ====
import { useNotes } from '../../context/NoteProvider/NoteProvider'
// ==== Styles ====
import cl from './Sidebar.module.scss'
// ==== Components ====
import ListItem from '../ListItem/ListItem'
import Notification from '../UI/Notification/Notification'

const Sidebar = () => {
	const { notes, fetchNote, errorMessage, clearErrorMessage } = useNotes()

	return (
		<aside className={cl.aside}>
			{!notes ? (
				<span>Empty</span>
			) : (
				notes.map(({ id, title, content, dateOfCreated }) => (
					<ListItem
						key={id}
						title={title}
						content={content}
						dateOfCreated={dateOfCreated}
						onClick={() => {
							fetchNote(id)
						}}
					/>
				))
			)}

			{errorMessage && (
				<Notification
					style='error'
					text={errorMessage}
					finalFunc={clearErrorMessage}
					duration={2500}
				/>
			)}
		</aside>
	)
}

export default Sidebar
