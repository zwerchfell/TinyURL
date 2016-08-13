/**
 * Created by Zhihao on 8/10/16.
 */
var express = require('express');
var router = express.Router();

router.get('*', function(req, res) {
    var shortUrl = req.originalUrl.slice(1);
    var longUrl = "";//TODO
    res.redirect(longUrl);
});

module.exports = router;