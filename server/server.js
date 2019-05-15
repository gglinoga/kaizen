const knex = require('./db/database');
const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

app.listen(PORT, () =>{
    console.log("app listening on PORT " + PORT);

});