const express = require('express');
const path = require('path');
const bodyparser = require("body-parser");
const session = require("express-session");
const { v4: uuidv4} = require("uuid"); 

const router = require('./router');    

const app = express();

const port = process.env.PORT||3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine','ejs');

//load static assets
app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')));

app.use(session({
    secret:uuidv4(), // '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    resave:false,
    saveUninitialized:true
}));

app.use('/route',router);

//home route
app.get('/',(req,res)=>{
    res.render('base',{title:"Engineering Institute"});
})

//add-student route
app.get('/add-student',(req,res)=>{
    res.render('add_student');
})

//update-student route
app.get('/update-student',(req,res)=>{
    res.render('update_student');
})

//bachelor-degree route
app.get('/bachelor-degree',(req,res)=>{
    res.render('bachelor_degrees');
})

//Update-degree route
app.get('/update-degree',(req,res)=>{
    res.render('update_degrees');
})

//Course-list1 route
app.get('/course-list1',(req,res)=>{
    res.render('course_list1');
})

//Course-list2 route
app.get('/course-list2',(req,res)=>{
    res.render('course_list2');
})



app.listen(port,()=>{console.log("Listening to the server on http://localhost:3000")});