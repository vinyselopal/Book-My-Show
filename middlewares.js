const authMiddleware = (req, res, next) => {
  if (!req.body.token) {
    return res.status(403).json({
      code: 403,
      message: 'unauthorized',
      data: {}
    })
  }
  req.token = req.body.token
  next()
}

module.exports = { authMiddleware }
