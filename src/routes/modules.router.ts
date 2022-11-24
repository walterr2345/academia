import express from 'express'
import moduleCController from '../controllers/modules.controller'

const router = express.Router()

router
    .get('/modules', moduleCController.getModules)
    .post('/modules', moduleCController.postModule)
export = router