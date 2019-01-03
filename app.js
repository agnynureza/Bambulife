const express = require('express');
const logger = require('morgan');
const cors = require('cors')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const indexRouter = require('./routes/index');
const app = express();

require('dotenv').config()

mongoose.connect('mongodb://agnynureza:a12345@ds157089.mlab.com:57089/bambulife',{useNewUrlParser:true})
                .then(
                    () => {console.log('Database up !')},
                    err => {console.log(`Error : ${err}`)}
                )

app.use(logger('dev'));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json());
app.use(cors())

app.use('/', indexRouter);

module.exports = app;
