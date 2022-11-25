require('dotenv').config();
const {Router} = require('express');
const router = Router();
const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Genre} = require('../db');

//-----------ROUTES TO GET----VIDEOGAMES-------->

router.get('/', async (req, res) => {
  const { name } = req.query;
  let dbVideogames = await Videogame.findAll({
    include:  Genre
  });

  if (name) {
    try {
      let vgNameBdReady = await dbVideogames.filter((game) =>
      game.name.toLowerCase().includes(name.toLowerCase())
      );
      
      let vgNameApi = await axios.get(
        `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
      );

        const vgNameApiReady = vgNameApi.data.results.map((game) => {
          let platform = [];
          if (game.platforms) {
            for (let i = 0; i < game.platforms.length; i++) {
              platform.push(game.platforms[i].platform.name);
            }
          }
          return {
            id: game.id,
            background_image: game.background_image,
            name: game.name,
            genres: game.genres?.map((g) => g.name),
            released: game.released,
            rating: game.rating,
            platforms: platform.map((e) => e),
          };
        });

        const videogamesName = [...vgNameBdReady, ...vgNameApiReady].splice( 0, 15 );

        if(!videogamesName.length){ return res.status(400).send(`${name} videogame not found`)}

        return res.status(200).json(videogamesName);
        
      
    } 
    catch (error) {
      console.log(error);
    }
  } else {
    try {
      let pages = 0;
      let gamesDb = [...dbVideogames]
      let apiVideogames = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}`
      );

      while (pages < 6) {
        pages++;
        const allGamesApi = apiVideogames.data.results.map((game) => {
          let platform = [];
          if (game.platforms) {
            for (let i = 0; i < game.platforms.length; i++) {
              platform.push(game.platforms[i].platform.name);
            }
          }
          return {
            id: game.id,
            background_image: game.background_image,
            name: game.name,
            genres: game.genres?.map((g) => g.name),
            description: game.description_raw,
            released: game.released,
            rating: game.rating,
            platforms: platform,
          };
        });
        allGames = [...gamesDb, ...allGamesApi];
        apiVideogames = await axios.get(apiVideogames.data.next);

      }
      return res.status(200).json(allGames);
    } catch (error) {
      console.log(error);
    }
  }
});



router.post('/', async (req, res) => {
  const { name, description, released, rating, genres, platforms, background_image, createdInDb } =
    req.body;

  try {
    if (!name || !description || !platforms || !genres) {
      return res.status(400).send('Mandatory data missing');
    }

    let noRepeat = await Videogame.findOne({
      where:{
        name: name,
        released: released
      }
    })

    if(noRepeat) {
      return res.status(400).send(`There is already a ${name} videogame released in ${released}`)
    }

    let createvg = await Videogame.create({
      name,
      description,
      released,
      rating,
      platforms,
      background_image,
    });

   
   const vgNewGenre = await Genre.findAll({
      where: { name: genres},
      
    });
    createvg.addGenre(vgNewGenre);

    return res.status(200).send(`The videogame ${name} has been created successfully`);
  } catch (error) {
    console.log(error);
  }
});



module.exports = router;