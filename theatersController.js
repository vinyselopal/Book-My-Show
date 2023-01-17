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

  if (!theater) {
    res.json({
      code: 404,
      message: 'The requested resource wasnt found',
      data: {}
    })
  }
  res.json(theater)
}

const createTheaterHandler = (req, res, next) => {
  const { theater } = req.body
  theaters.push(theater)
  if (!theater) {
    res.json({
      code: 400,
      message: 'Failed to create record',
      data: {
        error: 'Missing required value'
      }
    })
  }
  res.json({ id: theaters.length + 1 })
}

const updateTheaterHandler = (req, res, next) => {
  const { newTheater } = req.body
  const { id } = req.params
  if (!newTheater) {
    res.json({
      code: 400,
      message: 'Missing required value',
      data: {}
    })
  }
  if (!id) {
    res.json({
      code: 404,
      message: 'The requested resource wasnt found',
      data: {}
    })
  }
  theaters = theaters.filter(theater => theater.id === id)
  theaters.push(newTheater)
  res.json({ message: 'ok' })
}

const deleteTheaterHandler = (req, res, next) => {
  const { id } = req.params
  if (!id) {
    res.json({
      code: 404,
      message: 'The requested resource wasnt found',
      data: {}
    })
  }
  theaters = theaters.filter(theater => theater.id !== id)
  if (!theaters) { // check response
    res.json({
      code: 400,
      message: 'Missing required value',
      data: {}
    })
  }

  res.json({ message: 'ok' })
}

module.exports = {
  getManyTheatersHandler,
  getTheaterHandler,
  createTheaterHandler,
  updateTheaterHandler,
  deleteTheaterHandler
}
