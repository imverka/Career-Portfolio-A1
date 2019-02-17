//Maninderpal Singh 
// ID: 300942719 
// 16/02/2019
// routes/index.js
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');
/* GET home page. */
router.get('/', indexController.diplayHomePage);

router.get('/about', indexController.displayAboutPage);

router.get('/contactA', indexController.displayContactPage);

router.get('/projects', indexController.displayProjectsPage);

router.get('/services', indexController.displayServicesPage);

//router.get('/favThings', indexController.diplayFavThings);

module.exports = router;