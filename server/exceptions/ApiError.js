class ApiError extends Error {
	status

	constructor(status, message) {
		super(message)

		this.status = status
	}

	static BadRequest(message) {
		return new ApiError(400, message)
	}

	static EmptyField(message) {
		return ApiError.BadRequest(message || 'Field is a required field')
	}

	static NotesNotFound(message) {
		return new ApiError(404, message || 'Notes not found')
	}

	static NoteNotFound(message) {
		return new ApiError(404, message || 'Note not found')
	}

	static NoteIdRequired(message) {
		return ApiError.BadRequest(message || 'Note id is required')
	}
}

module.exports = ApiError
