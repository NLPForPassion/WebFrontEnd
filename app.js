var express = require('express')
var app = express()
app.set('views','./views')
app.set('view engine','ejs')
var indexRouter = require('./controller/index');
app.use('/', indexRouter)

app.listen(process.env.PORT ||1999)
   

