const theaters = [
  {
    id: 1,
    name: 'theater1',
    address: 'A1/bla',
    city: 'bangalore'
  },
  {
    id: 2,
    name: 'theater1',
    address: 'A1/bla',
    city: 'bangalore'
  },
  {
    id: 3,
    name: 'theater1',
    address: 'A1/bla',
    city: 'bangalore'
  }
]

const getAllTheatersHandler = (req, res, next) => {
  res.json([])
}
const getTheaterHandler = (req, res, next) => {
  const { id } = req.params
  res.json(theaters.find(theater => theater.id === id))
}
const createTheaterHandler = (req, res, next) => {
  res.json({ id: 1 })
}
const updateTheaterHandler = (req, res, next) => {
  res.json({ message: 'ok' })
}
const deleteTheaterHandler = (req, res, next) => {
  res.json({ message: 'ok' })
}

module.exports = {
  getAllTheatersHandler,
  getTheaterHandler,
  createTheaterHandler,
  updateTheaterHandler,
  deleteTheaterHandler
}
