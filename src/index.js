require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const mongoose = require('mongoose')

const mongo_config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(process.env.MONGO_URL, mongo_config)
mongoose.connection.once('open', () => {
    console.log('connection open')
})

app.use(cors())

app.use(express.json())

app.use(routes)

app.listen(process.env.PORT)