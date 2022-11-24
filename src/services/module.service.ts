import pool from "../connection/connection";

const getModule = async () => {
    try {
        return await pool.query('SELECT * FROM modules')
    } catch (error) {
        console.log(`Something go wrong to get modules Servvices${error}`);
        throw error
    }
}

const postModule = async (
    modules: {
        name_module: string
    }
) => {
    try {
        const module = await pool.query('INSERT INTO modules(name_module) values ($1)',
            [modules.name_module]
        )
        return module
    } catch (error) {
        console.log(`Something go wrong post module person service ${error}`);
        throw error
    }
}



export = {
    getModule,
    postModule
}