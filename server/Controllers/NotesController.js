const { prisma } = require('../prisma/prisma-client')
// ==== Exceptions ====
const ApiError = require('../exceptions/ApiError')

class NotesController {
	/**
	 *  @method GET
	 *  @return json.(note)
	 * **/
	static async getAll(req, res, next) {
		try {
			const notes = await prisma.note.findMany()

			if (!notes.length) throw ApiError.NotesNotFound()

			return res.status(200).json({ notes })
		} catch (err) {
			next(err)
		}
	}
	/**
	 *  @method GET
	 *  @urlParams id
	 *  @return json.(note)
	 * **/
	static async get(req, res, next) {
		try {
			console.log('GET NOTE CONTROLLER')
			const { id } = req.params

			if (!id) {
				throw ApiError.BadRequest('Note id is required')
			}
			const note = await prisma.note.findUnique({ where: { id } })

			if (!note) throw ApiError.NoteNotFound()

			return res.status(200).json({ note })
		} catch (err) {
			next(err)
		}
	}
	/**
	 *  @method POST
	 *  @return json.(note)
	 * **/
	static async create(req, res, next) {
		try {
			const { title, content } = req.body
			if (!title) {
				throw ApiError.EmptyField('Title is a required field')
			}

			const createdNote = await prisma.note.create({
				data: {
					title,
					content,
				},
			})

			return res.status(200).json({ note: createdNote })
		} catch (err) {
			next(err)
		}
	}
	/**
	 *  @method PUT
	 *  @urlParams id
	 *  @return json.(note)
	 * **/
	static async edit(req, res, next) {
		try {
			const { title, content } = req.body
			const { id } = req.params

			if (!id) {
				throw ApiError.BadRequest('Note id is required')
			}

			if (!title && !content) {
				throw ApiError.EmptyField('Title or content is a required filed')
			}

			const editedNote = await prisma.note.update({
				where: { id },
				data: { title, content },
			})

			return res.status(200).json({ note: editedNote })
		} catch (err) {
			next(err)
		}
	}
	/**
	 *  @method DELETE
	 *  @urlParams id
	 *  @return {message: String}
	 * **/
	static async delete(req, res, next) {
		try {
			const { id } = req.params

			if (!id) {
				throw ApiError.BadRequest('Note id is required')
			}

			await prisma.note.delete({ where: { id } })

			return res.status(200).json({ message: 'Note successfully deleted' })
		} catch (err) {
			next(err)
		}
	}
}

// start 23:54 // pause 00:56 end 01:06

module.exports = NotesController
