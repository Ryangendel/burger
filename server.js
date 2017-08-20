var express = require("express");
var methodOverride = require('method-override')
var bodyParser = require('body-parser');
var exphbs = require ('express-handlebars');

var app = express() 

var PORT = process.env.PORT || 3030;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function(){
    console.log("App listening on PORT:" + PORT);
});

// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
//    });
   
//    require("./app/routing/apiroutes")(app);
//    require("./app/routing/htmlroutes")(app);



