import personService from '../services/persons.services'

const getPersons = async (_req: any, res: any) => {
    try {
        const persons = await personService.getPersons()
        res.status(200).send({status:'ok',data:persons})
    } catch (error) {
        console.log(`Something go wron get all persons Controller':${error}`);
        res.status(500).send({ status: 'FAILED', data: { error } })
    }
}

export ={
    getPersons
}

