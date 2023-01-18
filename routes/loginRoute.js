const loginRoute = require('express').Router()
const { loginHandler } = require('../controllers/loginController')

loginRoute.get('/', loginHandler)

module.exports = {loginRoute}