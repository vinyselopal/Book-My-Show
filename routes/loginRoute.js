const loginRoute = require('express').Router()
const { loginHandler } = require('../controllers/loginController')

loginRoute.post('/', loginHandler)

module.exports = {loginRoute}