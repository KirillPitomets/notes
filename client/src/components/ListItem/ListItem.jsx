import React from 'react'
// ==== Utils ====
import { сutText } from '../../utils/сutText'
import { getTimeString } from '../../utils/getTimeString'
// ==== Styles ====
import cl from './ListItem.module.scss'
import { getDateString } from '../../utils/getDateString'

const ListItem = ({ title, content, dateOfCreated, onClick }) => {
	return (
		<div className={cl.item} onClick={onClick}>
			<h3 className={cl.title}>{title && `${сutText(title, 20)}...`}</h3>
			<div className={cl.des}>
				<time>
					{new Date().getDate() === new Date(dateOfCreated).getDate()
						? getTimeString(dateOfCreated, { timeStyle: 'short' })
						: getDateString(dateOfCreated, { dateStyle: 'short' })}{' '}
				</time>{' '}
				<span>
					{content && content.length > 19
						? `${сutText(content, 7)}...`
						: content}
				</span>
			</div>
		</div>
	)
}

export default ListItem
