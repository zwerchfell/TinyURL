var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');
var index = require('./routes/index');

app.longToShortHash = {};
app.shortToLongHash = {};

app.use('/', index);
app.use('/api/v1', restRouter);
app.use('/:shortUrl', redirectRouter);

app.listen(3000);