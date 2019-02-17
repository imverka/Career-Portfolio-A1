//Maninderpal Singh 
// ID: 300942719 
// 16/02/2019
// controller/index.js
let express = require('express');
let router = express.Router();

module.exports.diplayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
  }

  module.exports.displayAboutPage = (req, res, next) => {
    res.render('about', { title: 'About me' });
  }

  module.exports.displayContactPage = (req, res, next) => {
    res.render('contactA', { title: 'Contact me' });
  }

  module.exports.displayProjectsPage = (req, res, next) => {
    res.render('projects', { title: 'Projects' });
  }

  module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', { title: 'Services' });
  }

  module.exports.diplayFavThings = (req, res, next) => {
    res.render('index', { title: 'Favourites' });
  }