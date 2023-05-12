import React, {
	useContext,
	createContext,
	useState,
	useCallback,
	useEffect,
} from 'react'
// ==== Api ====
import { NotesApi } from '../../api/Note'
// ==== Constants ====
import { HASH_VALUES_NAME } from './constants'

const NoteContext = createContext([])

const NoteProvider = ({ children }) => {
	const [notes, setNotes] = useState([])
	const [note, setNote] = useState(null)
	const [isModalDisplay, setIsModalDisplay] = useState(false)
	const [isEdit, setIsEdit] = useState(false)

	const fetchNotes = useCallback(async () => {
		const data = await NotesApi.getAll()
		setNotes(data)
	}, [])

	const fetchNote = useCallback(async id => {
		const note = await NotesApi.getOne(id)
		setNote(note)
		setIsEdit(false)
	}, [])

	const fetchEdit = useCallback(async (id, values) => {
		await NotesApi.edit(id, values)
	}, [])

	const fetchDelete = useCallback(async id => {
		await NotesApi.delete(id)
		setNotes(prev => prev.filter(note => note.id !== id))
	}, [])

	const fetchCreate = useCallback(async values => {
		await NotesApi.create(values)
		fetchNotes()
	}, [])

	const handleEdit = () => {
		setIsEdit(prev => !prev)
	}

	const handleModal = () => {
		setIsModalDisplay(prev => !prev)
	}

	useEffect(() => {
		fetchNotes()
	}, [isEdit])

	return (
		<NoteContext.Provider
			value={{
				notes,
				note,
				isEdit,
				isModalDisplay,
				handleModal,
				fetchNote,
				fetchDelete,
				handleEdit,
				fetchEdit,
				fetchCreate
			}}
		>
			{children}
		</NoteContext.Provider>
	)
}

export default NoteProvider

const useNotes = () => useContext(NoteContext)
export { HASH_VALUES_NAME, useNotes }
