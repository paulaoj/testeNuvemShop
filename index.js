const express = require("express")
const path = require("path")
const app = express()
const router = express.Router()
const cors = require('cors')

app.use(cors({
    origin: '*'
}))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
    req.body('client_id', "12259")
    req.body('client_secret', "37563a0c3347fd06eddc75e8d3607a29dc5c8e8a6000cee1")
    req.body('grant_type', "authorization_code")
    req.body('code', "1340d9e7472386e26eef189752d65c3901de4492")
  });


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
