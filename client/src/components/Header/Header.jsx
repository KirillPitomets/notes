import React from 'react'
// ==== Assets ====
import plusIcon from '../../assets/icons/plus.svg'
import trashIcon from '../../assets/icons/trash.svg'
import noteIcon from '../../assets/icons/note.svg'
// ==== Context ====
import { useNotes } from '../../context/NoteProvider/NoteProvider'
// ==== Styles ====
import cl from './Header.module.scss'
// ==== Components ====
import Button from '../UI/Button/Button'
import Icon from '../UI/Icon/Icon'
import SearchBox from '../UI/SearchBox/SearchBox'

const Header = () => {
	const { note, handleEdit, handleModal } = useNotes()

	return (
		<header className={cl.header}>
			<div className={cl.header__wrapper}>
				<div className={cl.buttons}>
					<Button>
						<Icon icon={plusIcon} />
					</Button>
					<Button isActive={!!note} onClick={handleModal}>
						<Icon icon={trashIcon} isActive={!!note} />
					</Button>
					<Button isActive={!!note} onClick={handleEdit}>
						<Icon icon={noteIcon} isActive={!!note} />
					</Button>
				</div>
				<div className={cl.search}>
					<SearchBox placeholder='Search' />
				</div>
			</div>
		</header>
	)
}

export default Header
