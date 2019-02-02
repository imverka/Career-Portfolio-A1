let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create reference to the contact model
let contact = require('../models/contact');


// GET Contacts list page - READ
router.get('/', (req, res, next) => {
    contact.find((err, contactList) => {
        
        if(err){
            return console.error(err);
        }
        else{
            console.log(contactList);
            res.render('contacts/index', {
                title: 'Contact list',
                contactList: contactList
            });
            
        }
    })
});


module.exports = router;