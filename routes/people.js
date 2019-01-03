const express = require('express')
const router = express.Router()
const peopleController = require('../controllers/peopleController')

router.get('/:accid', peopleController.readByAccId) //show all people who like me based on Account
router.post('/', peopleController.addPeople) //add people who like me
router.put('/:id', peopleCOntroller.update) //update people who like mw
router.delete('/:id', peopleController.delete) //delete people who like me