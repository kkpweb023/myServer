const express = require('express');
const api = express();
const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb+srv://kkpweb023:KkpP831722@cluster0.a9anlpj.mongodb.net/MyDataBase?retryWrites=true&w=majority',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true

    }
).then(()=>{console.log("db connection done")})