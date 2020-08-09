var express = require('express')
var router =express.Router()
var hoangan =require('../models/index')
router.get('/home',hoangan.viewhome)

module.exports = router