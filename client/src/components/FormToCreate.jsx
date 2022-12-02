import { Link, useHistory } from "react-router-dom";
import { postVideogame } from "../actions";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

export default function FormTocreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const validate = (data) => {
    const { name, genres, platforms, rating, released } = data;

    if (!name || name.length < 3 || name.length > 25) {
      return alert("nombre invalido");
    }
    if (!released) {
      return alert("ingrese fecha de lanzamiento");
    }
    if (!rating || rating < "0.1" || rating > "5") {
      return alert("ingresa rating de 0.1 a 5.0");
    }
    if (!platforms.length) {
      return alert("ingrese al menos una plataforma");
    }
    if (!genres) {
      return alert("Elige al menos un genero");
    }
    dispatch(postVideogame(data));
    alert("Juego creado correctamente");
    history.push("/home");
  };

  return (
    <div>
      <h1>Crea tu Videojuego</h1>
      <form onSubmit={handleSubmit(validate)}>
        <label>Nombre:* </label>
        <input type="text" {...register("name")} />
        <br />
        <label>Descripcion: </label>
        <textarea name="Descripcion" {...register("description")} />
        <div>0/250</div>
        <br />
        <label>Fecha de lanzamiento:* </label>
        <input type="date" {...register("released")} />
        <br />
        <label>Rating:* </label>{" "}
        <input type="number" step="0.01" {...register("rating")} /> <br />
        <label>Ingresa Plataforma(s):* </label>
        <input
          type="text"
          {...register("platforms")}
          placeholder="ej: Xbox 360, Android..."
        />{" "}
        <br />
        <br />
        <label>Selecciona Genero(s): *</label>
        <br />
        <br />
        <input type="checkbox" {...register("genres")} value="Action" id="" />
        Action
        <input type="checkbox" {...register("genres")} value="Indie" id="" />
        Indie
        <input
          type="checkbox"
          {...register("genres")}
          value="Adventure"
          id=""
        />
        Adventure
        <input type="checkbox" {...register("genres")} value="RPG" id="" />
        RPG
        <input type="checkbox" {...register("genres")} value="Strategy" id="" />
        Strategy
        <input type="checkbox" {...register("genres")} value="Shooter" id="" />
        Shooter
        <input type="checkbox" {...register("genres")} value="Casual" id="" />
        Casual
        <input
          type="checkbox"
          {...register("genres")}
          value="Simulation"
          id=""
        />
        Simulation
        <input type="checkbox" {...register("genres")} value="Puzzle" id="" />
        Puzzle
        <input type="checkbox" {...register("genres")} value="Arcade" id="" />
        Arcade
        <input
          type="checkbox"
          {...register("genres")}
          value="Platformer"
          id=""
        />
        Platformer
        <input type="checkbox" {...register("genres")} value="Racing" id="" />
        Racing
        <input
          type="checkbox"
          {...register("genres")}
          value="Massively Multiplayer"
          id=""
        />
        Massively Multiplayer
        <input type="checkbox" {...register("genres")} value="Sports" id="" />
        Sports
        <input type="checkbox" {...register("genres")} value="Fighting" id="" />
        Fighting
        <input type="checkbox" {...register("genres")} value="Family" id="" />
        Family
        <input
          type="checkbox"
          {...register("genres")}
          value="Board Games"
          id=""
        />
        Board Games
        <input
          type="checkbox"
          {...register("genres")}
          value="Educational"
          id=""
        />
        Educational
        <input type="checkbox" {...register("genres")} value="Card" id="" />
        Card
        <hr />
        <input type="submit" value="Crear Videojuego" />
      </form>
        <Link to='/home'>
        <div>Volver a Home</div>
        </Link>
      <p> * indica campos obligatorios</p>
    </div>
  );
}
