var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');
var indexRouter = require('./routes/index');
var mongoose =

app.longToShortHash = {};
app.shortToLongHash = {};

app.use('/public', express.static(__dirname + "/public"))
app.use('/', indexRouter);
app.use('/api/v1', restRouter);
app.use('/:shortUrl', redirectRouter);

app.listen(3000);