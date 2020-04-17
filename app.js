const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.get('/',(req,res)=>{
    if(req.query.url){
        fetch(req.query.url)
        .then(data=>data.json())
        .then(result=>res.send(result));
    }
})

app.listen(PORT,()=>console.log(`SERVER RUNNING ON PORT ${PORT}`));