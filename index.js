const express = require("express")
const path = require("path")
const app = express()
const router = express.Router()
const cors = require('cors')

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
