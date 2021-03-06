var express = require ('express');
var app = express();
var bodyParser = require ('body-parser');

var PORT = process.env.PORT || 8080;


//  create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true}));

// parse various different custom json types as a json
app.use(bodyParser.json({type: 'application/*+json'}))

// parse spme custom thing into a Buffer
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

// parse an HTML body into a string
app.use(bodyParser.text({type: 'text/html'}))

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js") (app);

app.listen(PORT, function(){
    console.log ("App listening to: " + PORT);
});