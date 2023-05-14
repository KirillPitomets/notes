import axios from 'axios'
// ==== Utils ====
import { identifyError } from '../utils/identifyError'

const NOTES_API_URL = `http://localhost:7777/api/notes`
const $notes_api = axios.create({
	baseURL: NOTES_API_URL,
	headers: { 'Content-Type': 'application/json' },
})

class NotesApi {
	static async getAll() {
		try {
			const res = await $notes_api.get('get')

			return res.data
		} catch (err) {
			return identifyError(err)
		}
	}

	static async getOne(id) {
		try {
			const res = await $notes_api.get(`get/${id}`)
			return res.data
		} catch (err) {
			return identifyError(err)
		}
	}

	static async edit(id, values) {
		try {
			await $notes_api.put(`edit/${id}`, values)
		} catch (err) {
			console.log(err.response?.data.message)
			return identifyError(err)
		}
	}

	static async delete(id) {
		try {
			await $notes_api.delete(`delete/${id}`)
		} catch (err) {
			console.log(err.response?.data.message)
			return identifyError(err)
		}
	}

	static async create(values) {
		try {
			const res = await $notes_api.post(`create`, values)
			return res.data
		} catch (err) {
			console.log(err.response?.data.message)
			return identifyError(err)
		}
	}
}

export { NotesApi }
