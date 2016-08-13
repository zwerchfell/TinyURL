/**
 * Created by Zhihao on 8/7/16.
 */

var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.post('/urls', jsonParser, function(req, res) {
    var longUrl = req.body.longUrl;
    //TODO
});


module.exports = router;