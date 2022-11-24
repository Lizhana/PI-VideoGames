require('dotenv').config();
const {Router} = require('express');
const router = Router();
const axios = require('axios');
const {Videogame, Genre} = require('../db');
const {API_KEY} = process.env;

//-----------ROUT TO GET-----VIDEOGAME------->

router.get('/:id', async (req, res)=>{
    const {id} = req.params
    console.log(id);
    try {
        if(id.length > 10){
        let dbVideogame = await Videogame.findOne({
            where :{
                id: id,
            }
        });
        return res.status(200).json(dbVideogame)
       }
       else{

        let apiVideogame = await axios.get(`https://api.rawg.io/api/games/${id}?&key=${API_KEY}`)

        

       }


    } catch (error) {
        
        console.log(error);
    }


});  //257201 -- Star Wars



module.exports = router;