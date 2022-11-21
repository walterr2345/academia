import pool from "../connection/connection";

const getPersons = async () => {
    try {
        return await pool.query('SELECT * FROM persons')
    } catch (error) {
        console.log(`something go wrong get personsService ${error}`);
        throw (error)
    }
}

export = {
    getPersons,
}
