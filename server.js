// Load in dependancies
var express             = require('express');
var mongoose            = require('mongoose');
var methodOverride      = require('method-override');
var bodyParser          = require('body-parser');
var morgan              = require('morgan');
var jade                = require('jade');
var jQuery              = require('jquery');
var mysql               = require('mysql');

// Temporarily disabled, prepending a full routing
//var angular             = require('angular');

// Database setup
// Only temporary, whilst I fix db.js
var mongodb = mongoose.connect('mongodb://mongo:deathcode@127.0.0.1:27017/XeroScouter');
var mysql   = mysql.createConnection({
    host          : 'localhost',
    user          : 'XeroScouter',
    password      : 'errorcodexero',
    database      : 'firstteamscouter'
  });

// Select port for web interface - 8080
var port = process.env.PORT || 8080;

// Initialize the application
var app                 = express();
var router              = express.Router();

// Logging and Parsing
// Sets public directory
app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.use(methodOverride());

// Enable Jade/Pug as templating engine
app.set('view engine', 'jade');

// To make routing easier for Jade
app.use('/libs', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/libs', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/node_modules/animate.css/'));

// Makes access easier
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/libs', express.static(__dirname + '/public/libs'));

// Compiled custom scripts, for the sake of convienience
app.use('/css', express.static(__dirname + '/build/public/css'));
app.use('/js', express.static(__dirname + '/build/public/js'));

// So we can globally access controllers
app.use('/controllers', express.static(__dirname + '/app/controllers'));
app.use('/routes', express.static(__dirname + '/app/routes'));
app.use('/models', express.static(__dirname + '/app/models'));

// Actual routing
require('./app/routes/main.routes')(app);

app.listen(port);
console.log('Listening on port ' + port);
