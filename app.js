const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const catController = require('./controllers/CatController')

// Middleware will be required here

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send({ msg: 'Server Running' })
})

app.get('/cats', catController.getCats)

app.get('/cats/:catId', catController.getCatId)

app.get('/cats/:catName/details/:catId', catController.bothParams)

app.get('/cats/cats/wow/cats/dogs/and/cats', catController.getWow)

app.get('/cat/details', catController.getCatDetails)

app.post('/cat/details', catController.createCatDetails)
// Middleware will be used here

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
