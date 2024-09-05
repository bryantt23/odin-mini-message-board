const express = require('express')
const app = express()
const path = require("node:path")
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

const port = 3000
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

app.get('/', (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages })
})

app.get('/new', (req, res) => {
    res.render("form", { title: "Mini Messageboard", messages: messages })
})

app.post('/new', (req, res) => {
    messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });
    res.redirect("/")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})