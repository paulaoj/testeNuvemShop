const express = require("express")
const path = require("path")
const app = express()
const router = express.Router()
var cors = require('cors');

let headersList = {
 "Accept": "*/*",
 "User-Agent": "Super app (http://superapp.com/contact)",
 "Content-Type": "application/json"
}

let bodyContent = JSON.stringify({
    "client_id": "12259",
    "client_secret": "37563a0c3347fd06eddc75e8d3607a29dc5c8e8a6000cee1",
    "grant_type": "authorization_code",
    "code": "1d8401137cf350cd9480485160ba38f0af93b2b2" });

let response = await fetch("https://www.tiendanube.com/apps/authorize/token", { 
  method: "POST",
  body: bodyContent,
  headers: headersList
});

let data = await response.text();
console.log(data);


app.use(cors({origin:true,credentials: true}));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    } else {
        next();
    }
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
