const getCats = (req, res) => {
  res.send({
    message: 'Getting Cats'
  })
}

const getCatId = (req, res) => {
  res.send(`Found Cat with an id of ${req.params.catId}`)
}

const bothParams = (req, res) => {
  res.send(
    `Getting ${req.params.catName}, a cat with an id of ${req.params.catId}`
  )
}

const getWow = (req, res) => {
  res.send("Wow, that's a very detailed path for no reason")
}

const getCatDetails = (req, res) => {
  res.send({ detaisl: `${req.query.catName} is ${req.query.catAge} years old` })
}

const createCatDetails = (req, res) => {
  req.body.catName = req.query.catName
  req.body.age = req.query.age
  req.body.breed = req.query.breed
  res.send(req.body)
}

module.exports = {
  getCats,
  getCatId,
  bothParams,
  getWow,
  getCatDetails,
  createCatDetails
}
