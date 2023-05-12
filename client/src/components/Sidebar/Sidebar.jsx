import React from 'react'
// ==== Styles ====
import cl from './Sidebar.module.scss'
// ==== Components ====
import ListItem from '../ListItem/ListItem'
// ==== Context ====
import { useNotes } from '../../context/NoteProvider/NoteProvider'

const Sidebar = () => {
	const { notes, fetchNote } = useNotes()
	return (
		<aside className={cl.aside}>
			{!notes ? (
				<span>Empty</span>
			) : (
				notes.map(({ id, values }) => (
					<ListItem
						key={id}
						title={values.title}
						content={values.content}
						dateOfCreated={values.dateOfCreated}
						onClick={() => {
							fetchNote(id)
						}}
					/>
				))
			)}
		</aside>
	)
}

export default Sidebar
