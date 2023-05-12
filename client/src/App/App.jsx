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

const App = () => {
	const { isModalDisplay, handleModal } = useNotes()
	
	return (
		<>
			<Modal isDisplay={isModalDisplay} handleModal={handleModal}>


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
