/**
 * Created by Zhihao on 8/7/16.
 */

var express = require('express');
var app = express();
var apiRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');

app.use('/api/v1', apiRouter);
app.use('/:shortUrl', redirectRouter);

app.listen(3000);