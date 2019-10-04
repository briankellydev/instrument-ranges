var express = require('express');
var router = express.Router();
var svc = require("./services/MainService");
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// get all data/stuff of the body (POST) parameters
// parse application/json 
router.use(bodyParser.json()); 

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
router.use(methodOverride('X-HTTP-Method-Override')); 

router.use(express.static(__dirname + '/public')); 

// Get Families
router.get('/api/families', svc.getFamilies);

// Get Instruments
router.get('/api/instruments/', svc.getInstruments);

// frontend routes =========================================================
router.get('/', function(req, res) {
    res.sendFile('public/index.html', {root: __dirname}); // load our public/index.html file
});

module.exports = router;