const express = require('express');
const app = express();

// Allow static HTML if needed (optional)
app.use(express.static('public'));

app.get("/gethello",(req,res)=>{
    res.send("Hello NodeJS!");
})

app.listen(8000,()=>{
    console.log("listening on 8000 port")
})