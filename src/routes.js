const express = require('express')
const Devcontroller = require('./controllers/Dev')
const LikeController = require('./controllers/Like')
const UnLikeController = require('./controllers/UnLike')

const routes = express.Router()

routes.get('/devs', Devcontroller.index)
routes.post('/devs', Devcontroller.store)
routes.post('/devs/:dev_id/likes', LikeController.store)
routes.post('/devs/:dev_id/unlikes', UnLikeController.store)

module.exports = routes