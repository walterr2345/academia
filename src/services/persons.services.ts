import pool from "../connection/connection";

const getPersons = async () => {
    try {
        return await pool.query('SELECT * FROM persons')
    } catch (error) {
        console.log(`something go wrong get personsService ${error}`);
        throw (error)
    }
}

const getPerson = async (idPerson: number) => {
    try {
        return await pool.query('SELECT * FROM persons WHERE id_person = $1',
            [idPerson])
    } catch (error) {
        console.log(`Something go wrong to get a person Service ${error}`);
        throw error
    }
}

const postPerson = async (
    persons: {
        first_name: string,
        last_name: string,
        email: string,
        cellphone: number
    }) => {
    try {
        const postPersons = await pool.query('INSERT INTO persons(first_name ,last_name,email,cellphone) values ($1,$2,$3,$4)',
            [
                persons.first_name,
                persons.last_name,
                persons.email,
                persons.cellphone
            ]
        )
        return postPersons
    } catch (error) {
        console.log(`Someting go wron to post person Servire ${error} `);
        throw (error)
    }
}

const updatePerson = async (
    persons: {
        first_name?: string,
        last_name?: string,
        email?: string,
        cellphone?: number
    },
    idPerson: number) => {
    try {
        const personUpdate = await pool.query(
            'UPDATE  persons SET first_name =$1,last_name =$2,email=$3,cellphone=$4 WHERE id_person =$5',
            [
                persons.first_name,
                persons.last_name,
                persons.email,
                persons.cellphone,
                idPerson
            ]
        )
        return personUpdate
    } catch (error) {
        console.log(`Something go wrong update person service ${error}`);
        throw error
    }
}

const deletePerson = async (idPerson: number) => {
    try {
        const deletePerson = await pool.query('DELETE FROM persons WHERE id_person =$1',
            [idPerson])
        return deletePerson
    } catch (error) {
        console.log(`Something go wrong delete person service ${error}`);
        throw (error)
    }
}

export = {
    getPersons,
    postPerson,
    updatePerson,
    deletePerson,
    getPerson,
}
