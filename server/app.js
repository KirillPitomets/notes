const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
// ==== Routes ====
const notesRouter = require('./routes/notes.js')
// ==== Middleware ====
const errorMiddleware = require('./middleware/errorMiddleware')


require('dotenv').config()

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
	cors({
		origin: `http://${process.env.HOST}:${process.env.PORT}`,
	})
)

app.use('/api/notes', notesRouter)

// This middleware should be last
app.use(errorMiddleware)

module.exports = app
