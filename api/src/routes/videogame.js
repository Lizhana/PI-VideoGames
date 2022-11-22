require('dotenv').config();
const {Router} = require('express');
const router = Router();
const axios = require('axios');
const {Videogame, Genre} = require('../db');
const {APIKEY} = process.env;

//-----------ROUT TO GET-----VIDEOGAME------->

router.get('/', async (req, res)=>{
    

    try {
        
    } catch (error) {
        
    }


});

module.exports = router;