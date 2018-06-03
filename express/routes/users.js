var express = require('express');
var router = express.Router();

var fetch = require('node-fetch');

var data;

// json

fetch('http://jsonplaceholder.typicode.com/users/')
    .then(function (res) {
        return res.json();
    }).then(function (json) {
    data = json;
    console.log(json);
}).catch(function (err) {
    console.log(err);
})
;

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('users', {userData: data});
    //res.send(data);
   // res.send('Samson loves express!');

});

module.exports = router;