import express from "express"
import dotenv from 'dotenv'
import personsRouter from '../src/routes/persons.router'
import moduleRouter from '../src/routes/modules.router'

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', personsRouter)
app.use('/api', moduleRouter)

app.listen(PORT, () => {
    console.log(`It is executing in the port: ${PORT}!`)
})