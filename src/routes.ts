import express from 'express'

import UserController from './app/controllers/UserController'

const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

export default routes
