const {host, port} = require("./config.json");
const express = require('express');

let app = express();

app.listen(port, host, ()=>{
    console.log(`http://${host}:${port}`)
})