const axios = require('axios');

exports.homeRoutes = (req,res)=>{

// Make a get request to /api/users
axios.get('http://localhost:3000/api/users')
    .then(function(response){
        res.render('index',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
    
}


exports.add_student = (req,res)=>{
    res.render('add_student');
}

exports.update_student = (req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render("update_student",{user:userdata.data})
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.update_degrees = (req,res)=>{
    res.render('update_degrees');
}