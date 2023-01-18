const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  console.log(req.headers)
  const token = req.headers['authorization'].split(' ')[1].trim()

  if (!token) {
    return res.status(401).json({
      code: 401,
      message: 'unauthenticated',
      data: {}
    })
  }

  try {
    const { username } = jwt.verify(req.body.token, 'secret')
    req.username = username
    next()
  } catch {
    return res.status(401).json({
      code: 401,
      message: 'invalid jwt token',
      data: {}
    })
  }
}

module.exports = { authMiddleware }
