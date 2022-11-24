import personsServices from "./persons.services";
import pool from "../connection/connection";


const assignatedPersonNew = async (idPerson: number) => {
    const person = await personsServices.getPerson(idPerson)
    if (!person) {
        throw console.error();
    }
    try {
        
    } catch (error) {
        
    }

}