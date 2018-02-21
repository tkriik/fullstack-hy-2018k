const bodyParser  = require('body-parser')
const cors        = require('cors')
const express     = require('express')
const http        = require('http')
const mongoose    = require('mongoose')

const blogsRouter = require('./controllers/blogs')
const middleware  = require('./utils/middleware')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(middleware.logger)
app.use('/api/blogs', blogsRouter)
app.use(middleware.error)

const DB_PASSWORD = process.env.DB_PASSWORD
const DB_USER = process.env.DB_USER
const mongoUrl = `mongodb://${DB_USER}:${DB_PASSWORD}@ds145438.mlab.com:45438/blogilista`
mongoose.connect(mongoUrl)

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
