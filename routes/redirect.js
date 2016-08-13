var express = require('express');
var router = express.Router();
var urlService = require('../services/urlService');

router.get('*', function(req, res) {
    var shortUrl = req.originalUrl.slice(1);
    var longUrl = urlServer.getLongUrl(shortUrl, req.app.shortToLongHash);
    res.redirect(longUrl);
});

module.exports = router;