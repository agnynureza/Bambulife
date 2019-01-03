const express = require('express');
const router = express.Router();
const account = require('./account')
const data = require('./people')
const auth = require('../middleware/auth')

/* GET home page. */
router.get('/', function(req, res) {
  res.send("Welcome to Express");
});

router.use('/account', account)
router.use('/people-like-you', auth.check,data)

module.exports = router;
