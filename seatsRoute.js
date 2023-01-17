const seatsRoute = require('express').Router()

seatsRoute.get('/')
seatsRoute.get('/:id')
seatsRoute.post('/')
seatsRoute.put('/:id')
seatsRoute.delete('/:id')

module.exports = { seatsRoute }
