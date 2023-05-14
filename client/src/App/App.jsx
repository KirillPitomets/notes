import React from 'react'
// ==== Context ====
import { useNotes } from '../context/NoteProvider/NoteProvider'
// ==== Styles ====
import cl from './App.module.scss'
// ==== Components ====
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Workspace from '../components/Workspace/Workspace'
import Modal from '../components/Modal/Modal'
import Button from '../components/UI/Button/Button'
import { useDebounce } from '../components/useDebounce'

const App = () => {
	const { isModalDisplay, handleModal, fetchDelete, note } = useNotes()
	const [deleteNoteDebounce, isLoading] = useDebounce(async () => {
  await fetchDelete(note.id)
		handleModal()
	}, 500)

	return (
		<>
			<Modal isModalDisplay={isModalDisplay} handleModal={handleModal}>
				Are you sure you want to remove this note ?
				<div className={cl.buttons}>
					<Button onClick={deleteNoteDebounce}>Delete</Button>
					<Button onClick={handleModal}>Cancel</Button>
				</div>
				{isLoading && <span>Loading...</span>}
			</Modal>

			<Header />
			<main className={cl.main}>
				<Sidebar />
				<Workspace />
			</main>
		</>
	)
}

export default App

/*
App,
Sidebar,
ListItem,
Workspace,
SearchBox 

*/
