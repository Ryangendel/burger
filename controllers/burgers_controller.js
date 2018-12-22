var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// var db = require("../models/todo.js");

router.get('/', function(req, res){
    //create an object that holds information from both the burger and menu table
    var info = {
        brgr: [],
        itm: []
    };
    //grab data from burger table
    burger.selectAll(function(data){
        for(var i=0;i<data.length; i++){
            info.brgr.push(data[i]);
        }
        //grab data from menu table
        burger.getMenu(function(data){
            for(var i=0;i<data.length; i++){
                info.itm.push(data[i]);
            }
            //send it all to the index.handlebars
            res.render('index', info);
        });
    });
});


router.get('/menu', function(req, res){
    burger.getMenu(function(data){
        res.render('restaurantMenu', { itm: data });
    });
});

router.post('/create', function(req, res){
    burger.insertOne([req.body.burgerInput], function(){
        res.redirect('/');
    });
});

// router.post('/create', function(req, res){
//
//     db.Todo.create({
//         text: req.body.text,
//         complete: req.body.complete
//     })
//         .then(function(){
//             burger.insertOne([req.body.burgerInput], function(){
//                 res.redirect('/');
//         })
//                 .catch(function(err) {
//                     // Whenever a validation or flag fails, an error is thrown
//                     // We can "catch" the error to prevent it from being "thrown", which could crash our node app
//                     res.json(err);
//                 });
//
//     });
// });

router.put('/update/:id', function(req, res){
    burger.updateOne([req.body.devoured], [req.params.id], function(){
        res.redirect('/');
    });
});

router.delete('/delete/:id', function(req, res){
    burger.deleteOne([req.params.id], function(){
        res.redirect('/');
    });
});

module.exports = router;