require('dotenv').config();
const {Router} = require('express');
const router = Router();
const axios = require('axios');
const {Videogame, Genre} = require('../db');
const { where } = require('sequelize');
const db = require('../db');
const {API_KEY} = process.env;

//-----------ROUT TO GET-----VIDEOGAME:Params------->

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    if (id.length > 10) {
      

      var searchdbvg  = await Videogame.findByPk(id, {
        include: [{
           model: Genre,
           attributes: ['name'],
           through: {
             attributes: []
           }
        }]
    });
     
    if (searchdbvg) {
       let genrestr=[]
       for (let i=0;i<searchdbvg.genres.length;i++) {
           genrestr.push(searchdbvg.genres[i].name)
       }
       const objdbgame = {
          id: searchdbvg.id,
          name: searchdbvg.name,
          platforms: searchdbvg.platforms, //platform
          released: searchdbvg.released, //reldate
          background_image: "https://alfabetajuega.com/hero/2022/01/personajes-populares-videojuegos.webp?width=1200",
          description: searchdbvg.description,
          rating: searchdbvg.rating,
          genres: genrestr.toString()
       }
       return res.status(200).json(objdbgame)

        }
      }
     else 
    {
      const game = await axios.get(
        `https://api.rawg.io/api/games/${id}?&key=${API_KEY}`);

      if(game.data.id){
        let genrestr=[]
            for (i=0;i<game.data.genres.length;i++) {
                genrestr.push(' ' + game.data.genres[i].name )
            } 
            let platformstr=[]
            for (i=0;i<game.data.platforms.length;i++) {
              platformstr.push(' '+game.data.platforms[i].platform.name)
            } 

        const foundApi = {
          id: game.data.id,
          background_image: game.data.background_image,
          name: game.data.name,
          genres: genrestr.toString(),
          released: game.data.released,
          rating: game.data.rating,
          platforms: platformstr.toString(),
        } 
        return res.status(200).json(foundApi)
      }
      }
  } 
  catch (error) {
    console.log(error.message);
  }
})









//-----------ROUT TO DELETE-----VIDEOGAME{params}------->

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
 
  try {
    if (id.length < 10) {
      return res.status(400).send('The videogame cannot be deleted');
    } else {
      let videoGameDelete = await Videogame.findByPk(id);
      videoGameDelete.destroy();
      res.status(200).send('Deleted Videogame');
    }
  } catch (error) {
    console.log(error.message);
  }

});

//-----------ROUT TO PUT-----VIDEOGAME{body}------->



module.exports = router;