import express from 'express'
import personsController from '../controllers/persons.controller'

const router = express.Router()


router
    .get('/persons', personsController.getPersons)

export = router