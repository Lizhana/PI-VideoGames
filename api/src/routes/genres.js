require('dotenv').config();
const {Router} = require('express');
const router = Router();
const axios = require('axios');
const {Videogame, Genre} = require('../db')
const{API_KEY} =process.env;

//-----------ROUTES TO GET ----GENRES------------>

router.get('/', async (req, res)=>{

    const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
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

});

module.exports = router;