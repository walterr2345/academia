import express from "express"
const app = express()
const port = 3000

app.use(express.json())
app.get('/ping', (_req, res) => {
    console.log("hola mundo");
    res.send('pop World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})