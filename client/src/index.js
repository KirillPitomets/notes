import React from 'react'
import { createRoot } from 'react-dom/client'
// ==== Styles ====
import './styles/index.scss'
// ==== Context ====
import NoteProvider from './context/NoteProvider/NoteProvider'
// ==== Components ====
import App from './App/App'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<NoteProvider>
		<App />
	</NoteProvider>
)
