var express = require('express')
var app = express()
app.set('views','./views')
app.set('view engine','ejs')
var indexRouter = require('./controller/index');
app.use('/', indexRouter)

app.listen(1999, function(){
    console.log('connected port 1999')

})