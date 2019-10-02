const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    return res.send("init");
});

app.listen(8000);