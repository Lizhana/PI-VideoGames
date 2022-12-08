require('dotenv').config();
const {Router} = require('express');
const router = Router();
const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Genre} = require('../db');

//-----------ROUTES TO GET----VIDEOGAMES-------->

router.get("/", async (req, res) => {
  const { name } = req.query;

  let dbVideogames = await Videogame.findAll({
    include: Genre,
  });


  dbVideogames = JSON.stringify(dbVideogames);
  dbVideogames = JSON.parse(dbVideogames);

  dbVideogames = dbVideogames.reduce(
    (aac, el) =>
      aac.concat({
        ...el,
        genres: el.genres.map((g) => g.name),
      }),
    []
  );


  if (name) {
    try {
      let vgNameBdReady = await dbVideogames.filter((game) =>
        game.name.toLowerCase().includes(name.toLowerCase())
      );

      let vgNameApi = await axios.get(
        `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`, {headers: {'Accept-Encoding':
        'gzip, deflate, compress'}}
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

      const videogamesName = [...vgNameBdReady, ...vgNameApiReady].splice(
        0,
        15
      );

      if (!videogamesName.length) {
        return res.status(400).send(`${name} videogame not found`);
      }

      return res.status(200).json(videogamesName);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      let gamesDb = [...dbVideogames];
      let videogamesApi = [];
      let apiVideogames = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=3`,
        {headers: {'Accept-Encoding':
      'gzip, deflate, compress'}}
      );
      let allGamesApi = apiVideogames.data.results.map((game) => {
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

      let apiVideogamesB = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=2`, {headers: {'Accept-Encoding':
        'gzip, deflate, compress'}}
      );
      let allGamesApiB = apiVideogamesB.data.results.map((game) => {
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

      let apiVideogamesC = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=4`, {headers: {'Accept-Encoding':
        'gzip, deflate, compress'}}
      );
      let allGamesApiC = apiVideogamesC.data.results.map((game) => {
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

      let apiVideogamesD = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=5`, {headers: {'Accept-Encoding':
        'gzip, deflate, compress'}}
      );
      let allGamesApiD = apiVideogamesD.data.results.map((game) => {
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

      let apiVideogamesE = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=6`,
        {headers: {'Accept-Encoding':
      'gzip, deflate, compress'}}
      );
      let allGamesApiE = apiVideogamesE.data.results.map((game) => {
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
     

      let gamesAllApi = allGamesApi.concat(allGamesApiB, allGamesApiC, allGamesApiD, allGamesApiE);


      videogamesApi.push(gamesAllApi);

      if(gamesDb.length){
        for (let i = 0; i < gamesDb.length; i++) {    
          videogamesApi[0].unshift(gamesDb[i])
        };

        return res.status(200).json(videogamesApi[0])
      }
      return res.status(200).json(videogamesApi[0]);
    } catch (error) {
      console.log(error);
    }
  }
});

router.post("/", async (req, res) => {
  const {
    name,
    description,
    released,
    rating,
    genres,
    platforms,
    background_image,
    createdInDb,
  } = req.body;

  try {
    if (!name || !platforms || !genres) {
      return res.status(400).send("Mandatory data missing");
    }

    let noRepeat = await Videogame.findOne({
      where: {
        name: name,
        released: released,
      },
    });

    if (noRepeat) {
      return res
        .status(400)
        .send(`There is already a ${name} videogame released in ${released}`);
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
      where: { name: genres },
    });
    createvg.addGenre(vgNewGenre);

    return res
      .status(200)
      .send(`The videogame ${name} has been created successfully`);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;