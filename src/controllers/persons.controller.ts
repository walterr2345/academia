import personService from '../services/persons.services'

const getPersons = async (_req: any, res: any) => {
    try {
        const persons = await personService.getPersons()
        res.status(200).send({ status: 'ok', data: persons })
    } catch (error) {
        console.log(`Something go wron get all persons Controller':${error}`);
        res.status(500).send({ status: 'FAILED', data: { error } })
    }
}

const postPersons = async (req: any, res: any) => {
    try {
        const postPersons = await personService.postPerson(req.body)
        res.status(201).send({
            status: `SUCESS`,
            data: postPersons,
        })
    } catch (error) {
        console.log(`Something go wrong with post Persons Controller ${error}`);
        res.status(500).send({ data: error })
    }
}

const updatePerson = async (req: any, res: any) => {
    const idPerson = parseInt(req.params.id)
    console.log(req.params.id);
    
    if (!idPerson) {
        res.status(400).send('ID is missing ')
    }
    try {
        const putPerson = await personService.updatePerson(req.body, idPerson)
        res.status(200).send({
            status: `SUCESS`,
            data: putPerson,
        })
    } catch (error) {
        console.log(`Something go wrong with person Controller ${error}`);
        throw error
    }
}

const deletePerson =async (req:any, res:any) => {
    const idPerson =parseInt(req.body.id)
    if (!idPerson) {
        res.status(400).send(`ID is missing`)
    }
    try {
        const deletePerson = await personService.deletePerson(idPerson)
        res.status(200).send({
            status:`SUCESS`,
            data:deletePerson
        })
    } catch (error) {
        console.log(`Something go wrong delete person controller ${error}`);
        
    }
}

export = {
    getPersons,
    postPersons,
    updatePerson,
    deletePerson
}

