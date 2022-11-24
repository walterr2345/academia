import moduleService from '../services/module.service'

const getModules = async (_req: any, res: any) => {
    try {
        const modules = await moduleService.getModule()
        res.status(200).send({
            status: `SUCCESS`,
            data: modules
        })
    } catch (error) {
        console.log(`Something go wrong to get modules Controller`);
        res.status(500).send({ data: error })
    }
}

const postModule = async (req: any, res: any) => {
    try {
        const newModule = await moduleService.postModule(req.body)
        res.status(201).send({
            status: `SUCESS`,
            data: newModule,
        })
    } catch (error) {
        console.log(`Something go wrong post `);
        res.status(500).send({ data: error })
    }
}

export = {
    getModules,
    postModule
}