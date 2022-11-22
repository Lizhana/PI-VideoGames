require('dotenv').config();
const {Router} = require('express');
const router = Router();
const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Genre} = require('../db')

//-----------ROUTES TO GET----VIDEOGAMES-------->

router.get("/", async (req, res) => {
  const { name } = req.query;
  let dbVideogames = await Videogame.findAll({
    include: Genre,
  });
  dbVideogames = JSON.stringify(dbVideogames);
  dbVideogames = JSON.parse(dbVideogames);

  dbVideogames = dbVideogames.reduce(
    (acc, el) =>
      acc.concat({
        ...el,
        genres: el.genres.map((g) => g.name),
      }),
    []
  );

  if (name) {
    try {
      let vgNameApi = await axios.get(
        `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
      );
      const vgNameBdReady = await dbVideogames.filter((game) =>
        game.name.includes(name)
      );

      if (!vgNameApi.data.results && !vgNameBdReady.length) {
        return res.status(400).send(`El juego ${name} no se ha encontrado`);
      } else {
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

        const videogamesName = [...vgNameBdReady, ...vgNameApiReady].splice(
          0,
          15
        );

        return res.status(200).json(videogamesName);
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      let pages = 0;
      let apiVideogames = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}`
      );

      while (pages < 6) {
        pages++;
        const allGamesApi = apiVideogames.data.results.map((game) => {
          return {
            id: game.id,
            background_image: game.background_image,
            name: game.name,
            genres: game.genres?.map((g) => g.name),
            description: game.description_raw,
            released: game.released,
            rating: game.rating,
            platforms: "platform.map((e) => e)",
          };
        });
        allGames = [...dbVideogames, ...allGamesApi];
        apiVideogames = await axios.get(apiVideogames.data.next)
      }
      return res.status(200).json(allGames);
    } catch (error) {
      console.log(error);
    }
  }
});


//-----------ROUTES TO POST----VIDEOGAMES-------->

router.post('/', async (req, res)=>{




});



module.exports = router;