const loginRoute = require('express').Router()
const { loginHandler } = require('./loginController')

loginRoute.get('/', loginHandler)

module.exports = {loginRoute}