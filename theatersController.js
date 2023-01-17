let theaters = [
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

const getManyTheatersHandler = (req, res, next) => {
  if (req.query.cities) {
    return res.json({
      code: 400,
      message: `Something went wrong while processing your request. 
      Invalid filter cities.`,
      data: {}
    })
  }
  return res.json(theaters)
}

const getTheaterHandler = (req, res, next) => {
  const { id } = req.params
  // const {
  //   page,
  //   perPage,
  //   totalPages
  // } = new
  const theater = theaters
    .find(theater => theater.id === id)
  res.json(theater)
}

const createTheaterHandler = (req, res, next) => {
  const { theater } = req.body
  theaters.push(theater)
  res.json({ id: theaters.length + 1 })
}

const updateTheaterHandler = (req, res, next) => {
  const { newTheater } = req.body
  theaters = theaters.filter(theater => theater.id === newTheater.id)
  theaters.push(newTheater)
  res.json({ message: 'ok' })
}

const deleteTheaterHandler = (req, res, next) => {
  const { id } = req.params
  theaters = theaters.filter(theater => theater.id !== id)
  res.json({ message: 'ok' })
}

module.exports = {
  getManyTheatersHandler,
  getTheaterHandler,
  createTheaterHandler,
  updateTheaterHandler,
  deleteTheaterHandler
}
