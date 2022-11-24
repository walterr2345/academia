import express from 'express'
import personsController from '../controllers/persons.controller'

const router = express.Router()


router
    .get('/persons', personsController.getPersons)
    .get('/persons/:id', personsController.getPerson)
    .post('/persons', personsController.postPersons)
    .put('/persons/:id', personsController.updatePerson)
    .delete('/persons/:id', personsController.deletePerson)
export = router