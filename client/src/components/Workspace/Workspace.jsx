import React, { useEffect, useState } from 'react'
// ==== Utils ====
import { getTimeString } from '../../utils/getTimeString.js'
import { getDateString } from '../../utils/getDateString.js'
// ==== Hooks ====
import { useDebounce } from '../useDebounce'
// ==== Styles ====
import cl from './Workspace.module.scss'
import cn from 'classnames'
// ==== Context ====
import {
	useNotes,
	HASH_VALUES_NAME,
} from '../../context/NoteProvider/NoteProvider'
// ==== Component ====
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Loading from '../UI/Loading/Loading'

const Workspace = () => {
	const [title, setTitle] = useState('')
	const [textareaValue, setTextareaValue] = useState('')

	const { note, isEdit, fetchEdit } = useNotes()
	const [editNoteDebounce, isLoadingDebounce] = useDebounce(
		(noteId, values) => {
			fetchEdit(noteId, values)
		},
		500
	)

	useEffect(() => {
		if (note) {
			setTextareaValue(note.values.content)
			setTitle(note.values.title)
		}
	}, [note])

	const handleContentValue = e => {
		setTextareaValue(e.target.value)

		editNoteDebounce(note.id, { [HASH_VALUES_NAME.content]: e.target.value })
	}

	const handleTitleValue = e => {
		setTitle(e.target.value)

		editNoteDebounce(note.id, { [HASH_VALUES_NAME.title]: e.target.value })
	}

	return (
		<section className={cl.main}>
			<div className={cn(cl.main__wrapper, !note && cl.main__wrapper_center)}>
				{isLoadingDebounce && (
					<div className={cl.loader}>
						<Loading text='Saving...' />
					</div>
				)}
				{note ? (
					<>
						<time className={cl.info}>
							{getDateString(note?.values.dateOfCreated, {
								dateStyle: 'medium',
							})}{' '}
							at{' '}
							{getTimeString(note?.values.dateOfCreated, {
								timeStyle: 'short',
							})}
						</time>
						{isEdit ? (
							<>
								<input
									className={cl.title}
									name='title'
									value={title}
									onChange={handleTitleValue}
								/>
								<textarea
									className={cl.content}
									value={textareaValue}
									onChange={handleContentValue}
								/>
							</>
						) : (
							<>
								<h2 className={cl.title}>{title}</h2>
								<ReactMarkdown className='markdown'>
									{textareaValue}
								</ReactMarkdown>
							</>
						)}
					</>
				) : (
					<span className={cl.placeholder}>Select a note or create</span>
				)}
			</div>
		</section>
	)
}

export default Workspace
