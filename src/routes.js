const express = require('express')
const Devcontroller = require('./controllers/Dev')
const LikeController = require('./controllers/Like')

const routes = express.Router()

routes.post('/devs', Devcontroller.store)
routes.post('/devs/:dev_id/likes', LikeController.store)

module.exports = routes