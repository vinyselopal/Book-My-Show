const { seatsRoute } = require('./seatsRoute')
const roomsRoute = require('express').Router()

roomsRoute.get('/') // all rooms of a theater
roomsRoute.get('/:id') // one room of a theater
roomsRoute.post('/') // one room of a theater
roomsRoute.put('/:id') // one room of a theater
roomsRoute.delete('/:id') // delete one room of a theater

roomsRoute.use('/seats/:id', seatsRoute)

module.exports = { roomsRoute }
