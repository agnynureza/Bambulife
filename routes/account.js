const express = require('express');
const router = express.Router();
const accController = require('../controllers/accController')

router.get('/',function(req,res){
  res.send('Account checkpoint here')
})

router.get('/signin')
router.post('/signup')

module.exports = router;
