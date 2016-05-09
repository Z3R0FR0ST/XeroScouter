var express         = require('express');
var router          = express.Router();
module.exports = function(app) {
    
    router.get('/', function(req, res) {
        res.render('index')
    });
    router.get('/about', function(req, res) {
        res.render('about')
    });
    router.get('/teams', function(req, res) {
        res.render('teams')
    });
    app.use('/', router)
}