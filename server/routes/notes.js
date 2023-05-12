const { Router } = require('express')
// ==== Controller ====
const NotesController = require('../controllers/NotesController')

const router = Router()

/**
 *	@Description Get all notes
 *	@url api/notes/get
 **/
router.get('/get', NotesController.getAll)

/**
 *	@Description Get one note
 *	@url api/notes/get/:id
 **/
router.get('/get/:id', NotesController.get)

/**
 *	@Description Edit the note
 *	@url api/notes/edit/:id
 **/
router.put('/edit/:id', NotesController.edit)

/**
 *	@Description Create a note
 *	@url api/notes/create
 **/
router.post('/create', NotesController.create)

/**
 *	@Description Delete the note
 *	@url api/notes/delete/:id
 **/
router.delete('/delete/:id', NotesController.delete)

module.exports = router
