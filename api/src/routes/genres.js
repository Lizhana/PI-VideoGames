require('dotenv').config();
const {Router} = require('express');
const router = Router();
const axios = require('axios');
const {Videogame, Genre} = require('../db')
const{API_KEY} =process.env;

//-----------ROUTES TO GET ----GENRES------------>

router.get('/', async (req, res)=>{

    try{

    const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`, {headers: {'Accept-Encoding':
    'gzip, deflate, compress'}});

    const nameGenres = genresApi.data.results;
    
    nameGenres.forEach(async (g) => {
        await Genre.findOrCreate({
            where: {
                name: g.name,
            }
        })
    });

    const allGenres = await Genre.findAll();
    res.status(200).json(allGenres)
        } catch {
            
        }

});

module.exports = router;