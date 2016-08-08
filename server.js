/**
 * Created by Zhihao on 8/7/16.
 */
var express = require('express');
var app = express();
var apiRouter = require('./routes/api');
var redirectRouter = require('./routes/redirect');

app.use('/api/v1', apiRouter);
app.use('/:shortUrl', redirectRouter);


router.get('*', function(req, res) {
    var shortUrl = req.originalUrl.slice(1);
    var longUrl = ""; //TODO
    res.redirect(longUrl);
});