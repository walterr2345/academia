import express from "express"
import dotenv from 'dotenv'
import personsRouter from '../src/routes/persons.router'

dotenv.config()
const app = express()
const PORT = process.env.PORT

console.log(process.env.PORT);


app.use(express.json())
app.use(express.urlencoded({ extended: false })) 

app.use('/api', personsRouter)


// app.get('/ping', (_req, res) => {
//     console.log("hola mundo");
//     res.send('pop World!')
// })


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
})