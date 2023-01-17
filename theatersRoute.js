const { roomsRoute } = require('./roomsRoute')
const theatersRoute = require('express').Router()

const {
  getAllTheatersHandler,
  getTheaterHandler,
  createTheaterHandler,
  updateTheaterHandler,
  deleteTheaterHandler
} = require('./theatersController.js')

theatersRoute.get('/', getAllTheatersHandler)
theatersRoute.get('/:id', getTheaterHandler)
theatersRoute.post('/', createTheaterHandler)
theatersRoute.put('/:id', updateTheaterHandler)
theatersRoute.delete('/:id', deleteTheaterHandler)

theatersRoute.use('/:id/rooms', roomsRoute)

module.exports = { theatersRoute }
