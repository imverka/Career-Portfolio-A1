let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create reference to the contact model
let contactModel = require('../models/contact');


// GET Contacts list page - READ
router.get('/', (req, res, next) => {
    contactModel.find((err, contactList) => {
        
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

//GET route for ADD page.... this will display the add page
router.get('/add', (req, res, next) => {
    res.render('contacts/add', {
        title: 'Add New Contact'
        
    });
});

//POST route for processing the ADD PAge
router.post('/add', (req, res, next) =>{
    let newContact = contactModel({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "age": req.body.age

    });

    contactModel.create(newContact, (err, contactModel) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/contact-list');
        }
    })
});


module.exports = router;