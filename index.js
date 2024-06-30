const express = require("express")
const path = require("path")
const app = express()
const router = express.Router()
const cors = require('cors')

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    res.header("Access-Control-Allow-Headers", "Content-Type")
    app.use(cors())
    next()
})

router.get("/", (req ,res)=>{
    res.sendFile(path.join(__dirname + "/index.html"))
})
router.get("/contato", (req ,res)=>{
    res.sendFile(path.join(__dirname + "/contato.html"))
})
app.use(router)
app.listen(process.env.PORT || 3333, ()=>{
    console.log("SERVIDOR RODANDO")
})
