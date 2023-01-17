const { roomsRoute } = require('./roomsRoute')
const theatersRoute = require('express').Router()

const {
  getManyTheatersHandler,
  getTheaterHandler,
  createTheaterHandler,
  updateTheaterHandler,
  deleteTheaterHandler
} = require('./theatersController.js')

theatersRoute.get('/', getManyTheatersHandler)
theatersRoute.get('/:id', getTheaterHandler)
theatersRoute.post('/', createTheaterHandler)
theatersRoute.put('/:id', updateTheaterHandler)
theatersRoute.delete('/:id', deleteTheaterHandler)

theatersRoute.use('/:id/rooms', roomsRoute)

module.exports = { theatersRoute }
