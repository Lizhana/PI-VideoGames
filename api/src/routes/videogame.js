require('dotenv').config();
const {Router} = require('express');
const router = Router();
const axios = require('axios');
const {Videogame, Genre} = require('../db');
const { where } = require('sequelize');
const {API_KEY} = process.env;

//-----------ROUT TO GET-----VIDEOGAME:Params------->

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id.length > 10) {
      let dbVideogame = await Videogame.findOne({
        where: {
          id: id,
        },
      });
      return res.status(200).json(dbVideogame);
    } else {
      let apiVideogame = await axios.get(
        `https://api.rawg.io/api/games/${id}?&key=${API_KEY}`
      );

      apiVideogame = apiVideogame.data.results.map((game) => {
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
    }
  } catch (error) {
    console.log(error);
  }
}); 

//-----------ROUT TO DELETE-----VIDEOGAME{body}------->

router.delete("/", async (req, res) => {
  const { idDelete } = req.body;
  console.log(idDelete);
  try {
    if (idDelete.length < 10) {
      return res.status(400).send("No puedes eliminar el juego");
    } else {
      const videoGameDelete = await Videogame.findOne({
        where: { id: idDelete },
      });
      videoGameDelete.destroy();
      res.status(200).send("Videogame Deleted");
    }
  } catch (error) {
    console.log(error);
  }
});

//-----------ROUT TO PUT-----VIDEOGAME{body}------->



module.exports = router;