const express = require('express');
const app = express();

app.use(express.static('public'))

app.listen(8000,()=>{
    console.log("server listening on PORT:8000");
})