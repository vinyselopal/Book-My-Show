let theaters = [
  {
    id: '1',
    name: 'theater1',
    address: 'A1/bla',
    city: 'bangalore'
  },
  {
    id: "2",
    name: 'theater1',
    address: 'A1/bla',
    city: 'bangalore'
  },
  {
    id: "3",
    name: 'theater1',
    address: 'A1/bla',
    city: 'bangalore'
  }
]

const getManyTheatersHandler = (req, res, next) => {
  try {
    if (req.query.cities) {
      
      return res.status(400).json({
        code: 400,
        message: `Something went wrong while processing your request. 
        Invalid filter cities.`,
        data: {}
      })
    }

    return res.json(theaters)
  } catch (err) {
    next(err)
  }
}

const getTheaterHandler = (req, res, next) => {
  try {
    const { id } = req.params

    const theater = theaters
      .find(theater => theater.id === id)
    if (!theater) {
      return res.status(404).json({
        code: 404,
        message: 'The requested resource wasnt found',
        data: {}
      })
    }
    return res.json(theater)
  } catch (err) {
    next(err)
  }
  
}

const createTheaterHandler = (req, res, next) => {
  try {
    const { theater } = req.body
    theaters.push(theater)
    if (!theater) {
      return res.status(400).json({
        code: 400,
        message: 'Failed to create record',
        data: {
          error: 'Missing required value'
        }
      })
    }
    return res.json({ id: theaters.length + 1 })
  } catch (err) {
    next(err)
  }
  
}

const updateTheaterHandler = (req, res, next) => {
  try {
    const { newTheater } = req.body
    const { id } = req.params
    if (!newTheater) {
      return res.status(400).json({
        code: 400,
        message: 'Missing required value',
        data: {}
      })
    }
    if (!id) {
      return res.status(404).json({
        code: 404,
        message: 'The requested resource wasnt found',
        data: {}
      })
    }
    theaters = theaters.filter(theater => theater.id === id)

    theaters.push(newTheater)
    return res.json({ message: 'ok' })

  } catch (err) {
    next(err)
  }
  
}

const deleteTheaterHandler = (req, res, next) => {
  try {
    const { id } = req.params
    if (!id) {
      return res.status(404).json({
        code: 404,
        message: 'The requested resource wasnt found',
        data: {}
      })
    }
    theaters = theaters.filter(theater => theater.id !== id)
    if (!theaters) { // check response
      return res.status(400).json({
        code: 400,
        message: 'Missing required value',
        data: {}
      })
    }
  
    return res.json({ message: 'ok' })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getManyTheatersHandler,
  getTheaterHandler,
  createTheaterHandler,
  updateTheaterHandler,
  deleteTheaterHandler
}
