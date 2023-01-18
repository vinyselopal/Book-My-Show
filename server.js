const app = require('express')()
const PORT = 8000

const { theatersRoute } = require('./theatersRoute')
const { loginRoute } = require('./loginRoute')
const { authMiddleware } = require('./middlewares.js')

app.listen(() => console.log(`server is running on port: ${PORT}`), PORT)

app.use('/theaters', authMiddleware, theatersRoute)
app.use('/login', loginRoute)
