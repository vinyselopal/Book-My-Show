const express = require('express')
const app = express()
const PORT = 8000

const { theatersRoute } = require('./theatersRoute')
const { loginRoute } = require('./loginRoute')
const { authMiddleware } = require('./middlewares.js')

app.use(express.json())
app.use('/theaters', authMiddleware, theatersRoute)
app.use('/login', loginRoute)

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`))
