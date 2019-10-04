// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var router         = express.Router();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================

// set our port
var port = process.env.PORT || 8080; 

// routes ==================================================
app.use(require('./app/routes')); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Server started on port ' + port);

// expose app           
exports = module.exports = app;  