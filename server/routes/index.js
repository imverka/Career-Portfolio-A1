let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');
/* GET home page. */
router.get('/', indexController.diplayHomePage);

router.get('/about', indexController.displayAboutPage);

router.get('/contact', indexController.displayContactPage);

router.get('/products', indexController.displayProductPage);

router.get('/services', indexController.displayAboutPage);

router.get('/favThings', indexController.diplayFavThings);

module.exports = router;