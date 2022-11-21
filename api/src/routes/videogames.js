const {Router} = require('express');
const router = Router();
const axios = require('axios').default;
const {APIKEY} = process.env
const {Videogame, Genre} = require('../db')

//-----------ROUTES TO GET----VIDEOGAMES-------->

router.get("/", async (req, res) => {
  const { name } = req.query;
  let dbVideogames = await Videogame.findAll({
    include: Genre,
  });
  dbVideogames = JSON.stringify(dbVideogames);
  dbVideogames = JSON.parse(dbVideogames);
  console.log(dbVideogames);

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
            `https://api.rawg.io/api/games?search=${name}&key=${APIKEY}`
            );

            let vgNameDb = dbVideogames.filter((vg) => vg.name.includes(name));

            if (!vgNameApi.data.count && !vgNameDb.length) {
                return res.status(204).json(`El juego ${name} no se ha encontrado`);
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
                genres: game.genre.map((g) => g.name),
                description: game.description_raw,
                released: game.released,
                rating: game.rating,
                platforms: platform.map((e) => e),
                };

                })
                const vgNameBdReady = dbVideogames.filter(game => game.name.includes(name))

                videogamesName = [...vgNameBdReady, ...vgNameApiReady].splice(0,15)

            

            }
        } 
        catch (error) {

        }
    }

});


//-----------ROUTES TO POST----VIDEOGAMES-------->

router.post('/', async (req, res)=>{




});



module.exports = router;