const e = require("express")

const express = require("express");
const route = express.Router();

const services = require('./server/services/render');
const controller = require('./server/controller/controller');



=======
var express = require("express");
var router = express.Router();


const credential = {
    email: "admin@gmail.com",
    password: "admin123"
}

// login user

route.post('/route/login',(req,res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.redirect('/index'); 
=======
router.post('/login',(req,res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.redirect('/route/index');

        //res.end("Login Successful...!");
    }else{
        res.end("Invalid Username")
    }
});

// route for dashboard

route.get('/index',(req,res)=>{
    if(req.session.user){
        res.render('index',{user:req.session.user})
     
=======
router.get('/index',(req,res)=>{
    if(req.session.user){
        res.render('index',{user:req.session.user})

    }else{
        res.send("Unauthorize User")
    }
})

//route for logout

route.get('/logout',(req,res)=>{
=======
router.get('/logout',(req,res)=>{

    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.render('base',{title:"Engineering Institute",logout:"logout Successsfully...!"})
        }
    })
})






/** 
*@description Root Route
*@method GET /
*/

//home route
route.get('/',services.homeRoutes);

/** 
*@description add student
*@method GET / add-student
*/

//add-student route
route.get('/add-student',services.add_student);

/** 
*@description update student
*@method GET / update-student
*/

//update-student route
route.get('/update-student',services.update_student);


//bachelor-degree route
route.get('/bachelor-degree',(req,res)=>{
    res.render('bachelor_degrees');
})

/** 
*@description update degree
*@method GET / update-degree
*/

//Update-degree route
route.get('/update-degree',services.update_degrees);


//Course-list1 route
route.get('/course-list1',(req,res)=>{
    res.render('course_list1');
})

//Course-list2 route
route.get('/course-list2',(req,res)=>{
    res.render('course_list2');
})


// API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);


module.exports = route
=======
module.exports = router;

