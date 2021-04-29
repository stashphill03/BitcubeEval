const express = require('express');
const path = require('path');
const bodyparser = require("body-parser");
const session = require("express-session");
const { v4: uuidv4} = require("uuid"); 
const morgan = require('morgan');
const dotenv = require('dotenv')

const router = require('./router');    

const connectDB = require('./server/database/connection')

const app = express();

require('dotenv').config({path:'config.env'})
const port = process.env.PORT||3000

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.set('view engine','ejs');

//log requests
app.use(morgan('tiny'));


//mongodb connection
connectDB();



//load static assets
app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')));

app.use(session({
    secret:uuidv4(), // '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    resave:false,
    saveUninitialized:true
}));




app.use('/',require('./router'))



app.listen(port,()=>{console.log(`Server is running on http://localhost:3000`)});