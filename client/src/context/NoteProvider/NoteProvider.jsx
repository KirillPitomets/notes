import React, {
	useContext,
	createContext,
	useState,
	useCallback,
	useEffect,
} from 'react'
// ==== Api ====
import { NotesApi } from '../../api/Note'

const NoteContext = createContext([])

const NoteProvider = ({ children }) => {
	const [notes, setNotes] = useState([])
	const [note, setNote] = useState(null)
	const [isModalDisplay, setIsModalDisplay] = useState(false)
	const [isEdit, setIsEdit] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	const fetchNotes = useCallback(async () => {
		const data = await NotesApi.getAll()
		setNotes(data.notes)
	}, [])

	const fetchNote = useCallback(async id => {
		const data = await NotesApi.getOne(id)
		if (data.note) {
			setNote(data.note)
		} else if (data.message) {
			setErrorMessage(data.message)
		}
		setIsEdit(false)
	}, [])

	const fetchEdit = useCallback(async (id, values) => {
		await NotesApi.edit(id, values)
	}, [])

	const fetchDelete = useCallback(async (id) => {
		await NotesApi.delete(id)

		setNotes(prev => prev.filter(note => note.id !== id))
		setNote(null)
	}, [])

	const fetchCreate = useCallback(async () => {
		const data = await NotesApi.create({title: "Hello :)"})
		if (data.note) {
			setNote(data.note)
			fetchNotes()
		} else if (data.message) {
			setErrorMessage(data.message)
		}
	}, [fetchNotes])


	const handleEdit = () => {
		setIsEdit(prev => !prev)
	}

	const handleModal = () => {
		setIsModalDisplay(prev => !prev)
	}

	const clearErrorMessage = () => {
		setErrorMessage('')
	}

	useEffect(() => {
		fetchNotes()
	}, [fetchNotes, isEdit])

	return (
		<NoteContext.Provider
			value={{
				notes,
				note,
				isEdit,
				isModalDisplay,
				errorMessage,
				clearErrorMessage,
				handleModal,
				fetchNote,
				fetchDelete,
				handleEdit,
				fetchEdit,
				fetchCreate,
			}}
		>
			{children}
		</NoteContext.Provider>
	)
}

export default NoteProvider

const useNotes = () => useContext(NoteContext)
export { useNotes }
