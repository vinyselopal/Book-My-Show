const users = [
  {
    username: 'a',
    password: '123'
  },
  {
    username: 'b',
    password: '123'
  },
  {
    username: 'c',
    password: '123'
  }
]

const loginHandler = (req, res, next) => {
  const { username, password } = req.body.creds

  const userNameExists = users.find(user => user.username === username)
  if (!userNameExists) {
    return res.status(400).json({
      code: 400,
      message: 'username does not exist',
      data: {}
    })
  }

  const checkPassword = (userNameExists.password === password)

  if (!checkPassword) {
    return res.status(400).json({
      code: 400,
      message: 'username does not exist',
      data: {}
    })
  }

  const token = ''
  return res.json({
    message: 'Login successful',
    token
  })
}

module.exports = { loginHandler }
