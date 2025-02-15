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
router.get('/indexten', catchErrors(usersController.indexten))

//get 10 users paginated
router.get('/indexten/:pagenum', catchErrors(usersController.indextenpaginated))

//search (hardcoded for now)
router.get('/search', catchErrors(usersController.search))

router.get('/searchstream', catchErrors(usersController.searchStream))

router.get('/searchreturnid', catchErrors(usersController.searchreturnid))

router.get('/searchtopten', catchErrors(usersController.searchtopten))

//make a new boy
router.post('/', catchErrors(usersController.store))

//see one boy
router.get('/:id', catchErrors(usersController.show))

//get rid of a boy
router.delete('/:id', catchErrors(usersController.delete))

//update a boy
router.put('/:id', catchErrors(usersController.update))

module.exports = router