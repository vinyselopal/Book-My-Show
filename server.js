const express = require('express')
const app = express()
const PORT = 8000

const { theatersRoute } = require('./routes/theatersRoute')
const { loginRoute } = require('./routes/loginRoute')
const { authMiddleware } = require('./middlewares.js')

app.use(express.json())
app.use('/theaters', authMiddleware, theatersRoute)
app.use('/login', loginRoute)

app.use((err, req, res, next) => {
    console.log(err)
    return res.status(500).json({
      code: 500,
      message: 'server error',
      data: {}
    })
  })

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`))
