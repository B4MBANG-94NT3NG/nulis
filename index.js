var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var main = require('./app/main')
var app = express()
var { color } = require('./lib/color.js')
const PORT = process.env.PORT || 8080 || 5000 || 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(logger('dev'))
app.use(express.json())

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', main)
app.use(function (req, res, next) {
  next(createError(404))

})

app.use(function (err, req, res, next) {
  res.render('error')

})

app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT,'green'))
})

module.exports = app
