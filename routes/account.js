const express = require('express');
const router = express.Router();
const accController = require('../controllers/accController')

router.get('/',function(req,res){
  res.send('Account checkpoint here')
})

router.post('/signin', accController.signIn)
router.post('/signup', accController.signUp)

module.exports = router;
