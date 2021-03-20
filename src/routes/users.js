//Here is where we declare the modules
const express = require('express')

//import the controllers and middleware
const { usersController } = require('../controllers/index')
const { catchErrors } = require('../middleware/error-handler')

//set up the router
const router = express.Router()

//get all users
router.get('/', catchErrors(usersController.index))

//get top 10 users
router.get('/topten', catchErrors(usersController.indexten))

//search (hardcoded for now)
router.get('/search', catchErrors(usersController.search))

//make a new boy
router.post('/', catchErrors(usersController.store))

//see one boy
router.get('/:id', catchErrors(usersController.show))

//get rid of a boy
router.delete('/:id', catchErrors(usersController.delete))

//update a boy
router.put('/:id', catchErrors(usersController.update))

module.exports = router