const express = require('express')
const bodyParser = require("body-parser")
const knex = require("./knex/knex")



const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    knex.select('*').from('todo').then(data => res.send(data))
})

app.post('/', (req, res) => {
    knex.insert(req.body).returning('*').into('todo').then(data => res.send(data));
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App running on ${PORT}`)
} )

