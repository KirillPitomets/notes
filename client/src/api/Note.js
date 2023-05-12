const NOTE_ENTITY_ID = 'dcUCkdW61cT4oAW6tdKmoI'
const DB_ID = 'crWRqxW5jdLyoynwPFifiW'
const API_KEY = 'brWOxdQYnlgyoAWPtdU8o_'
const DB_API = `https://quintadb.com/apps/${DB_ID}`

class NotesApi {
	static async getAll() {
		const fetchUrl = `${DB_API}/dtypes/entity/${NOTE_ENTITY_ID}.json?`
		const params = new URLSearchParams({
			rest_api_key: API_KEY,
			name_value: 1,
			page: 1,
			per_page: 200,
		})

		const res = await fetch(fetchUrl + params, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(async data => await data.json())

		return res.records
	}

	static async getOne(id) {
		const fetchUrl = `${DB_API}/dtypes/${id}.json?`
		const params = new URLSearchParams({
			rest_api_key: API_KEY,
			name_value: 1,
		})

		const res = await fetch(fetchUrl + params, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(async data => await data.json())

		return res.record
	}

	static async edit(id, values) {
		const fetchUrl = `${DB_API}/dtypes/${id}.json?`
		const jsonValues = JSON.stringify(values)
		const params = new URLSearchParams({
			rest_api_key: API_KEY,
			json_values: jsonValues,
		})

		await fetch(fetchUrl + params, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}

	static async delete(id) {
		const fetchUrl = `${DB_API}/dtypes/${id}.json?`
		const params = new URLSearchParams({
			rest_api_key: API_KEY,
		})

		await fetch(fetchUrl + params, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}

	static async create(values) {
		const fetchUrl = `${DB_API}/dtypes.json`
		const jsonData = JSON.stringify({ ...values, entity_id: NOTE_ENTITY_ID })
		const params = new URLSearchParams({
			rest_api_key: API_KEY,
			json_values: jsonData,
		})

		await fetch(fetchUrl + params, {
			method: 'POST',
			json_values: jsonData
		})
	}
}

export { NotesApi }
