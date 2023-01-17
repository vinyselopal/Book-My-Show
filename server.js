const app = require('express')()
const PORT = 8000
const { theatersRoute } = require('./theatersRoute')
app.listen(() => console.log(`server is running on port: ${PORT}`), PORT)

app.use('/theaters', theatersRoute)
