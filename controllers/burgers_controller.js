var express = require ("express");

var router = express.Router();

var burger = require ("../models/burger.js");

router.get("/", function (req, res){
    burger.all(function(data){
        var allHBSObject = {
            burgers: data
        };
        res.render("index", allHBSObject);
    });
});

router.post("/", function(req, res){
    burger.create([
        "burger_name", "devoured"
    ],[
        req.body.burger_name, req.body.devoured
    ], function(){
        res.redirect("/");
    });
});

router.put("/:id", function(req, res){
    var eaten = "id =" + req.
})

module.exports = router;