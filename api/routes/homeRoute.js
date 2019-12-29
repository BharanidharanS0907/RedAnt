var express = require('express')
var router = express.Router()
var usernameCont = require('../controllers/UsernameController')
var passwordCont = require('../controllers/PasswordController')

router.get('/', function(req, res){
    res.status(200).send("In home page");
});

router.get('/username', function (req, res) {
    usernameCont.getUserNameCont(req,res)
});

router.get('/password', function (req, res) {
    passwordCont.getPasswordCont(req, res)
});

module.exports = router