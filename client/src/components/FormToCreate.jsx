import { Link, useHistory } from "react-router-dom";
import { postVideogame } from "../actions";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import './Css/form.css'

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

    <div className="divform">

    <div className="divform2">
      <h1 className="hform" >Create your Videogame</h1>
      <form onSubmit={handleSubmit(validate)} className="form">
        <label>Name: </label>
        <input className="inpForm" type="text" {...register("name")} />
        <br />
        <label>Description: </label>
        <textarea
          className="inpForm"
          name="Descripcion"
          {...register("description")}
        />
        <br />
        <label>Release Date: </label>
        <input className="inpForm" type="date" {...register("released")} />
        <br />
        <label>Rating: </label>
        <input
          className="inpForm"
          type="number"
          step="0.01"
          {...register("rating")}
        />
        <br />
        <label>Platforms: </label>
        <input className="inpForm"
          type="text"
          {...register("platforms")}
          placeholder="ej: Xbox 360, Android..."
        />
        <br />
        <br />
        
        <div className="container">
          <label>Genres: *</label>
          <ul className="ks-cboxtags">
          <li>  <input
              type="checkbox"
              {...register("genres")}
              value="Action"
              id=""
            />
            <label> Action</label> </li>
          <li>  <input
              type="checkbox"
              {...register("genres")}
              value="Indie"
              id=""
            />
            <label> Indie</label> </li>
          <li>  <input
              type="checkbox"
              {...register("genres")}
              value="Adventure"
              id=""
            />
            <label> Adventure</label> </li>
          <li>  <input type="checkbox" {...register("genres")} value="RPG" id="" />
            <label> RPG</label> </li>
          <li>  <input
              type="checkbox"
              {...register("genres")}
              value="Strategy"
              id=""
            />
            <label> Strategy</label></li>
          <li>  <input
              type="checkbox"
              {...register("genres")}
              value="Shooter"
              id=""
            />
            <label> Shooter</label></li>
          <li>  <input
              type="checkbox"
              {...register("genres")}
              value="Casual"
              id=""
            />
            <label> Casual</label></li>
          <li>  <input
              type="checkbox"
              {...register("genres")}
              value="Simulation"
              id=""
            />
            <label> Simulation</label></li>
          <li>  <input
              type="checkbox"
              {...register("genres")}
              value="Puzzle"
              id=""
            />
            <label> Puzzle</label></li>
          <li>  <input
              type="checkbox"
              {...register("genres")}
              value="Arcade"
              id=""
            />
            <label> Arcade</label></li>
          <li>  <input
              type="checkbox"
              {...register("genres")}
              value="Platformer"
              id=""
            />
            <label> Platformer</label></li>
          <li>  <input
              type="checkbox"
              {...register("genres")}
              value="Racing"
              id=""
            />
            <label> Racing</label></li>
          <li>  <input
              type="checkbox"
              {...register("genres")}
              value="Massively Multiplayer"
              id=""
            />
            <label> Massively Multiplayer</label> </li>
          <li>  <input
              type="checkbox"
              {...register("genres")}
              value="Sports"
              id=""
            />
            <label> Sports</label></li>
          <li>  <input
              type="checkbox"
              {...register("genres")}
              value="Fighting"
              id=""
            />
            <label> Fighting</label></li>
          <li>  <input
              type="checkbox"
              {...register("genres")}
              value="Family"
              id=""
            />
            <label> Family</label></li> 
          <li>  <input
              type="checkbox"
              {...register("genres")}
              value="Board Games"
              id=""
            />
            <label> Board Games</label></li> 
          <li>  <input
              type="checkbox"
              {...register("genres")}
              value="Educational"
              id=""
            />
            <label> Educational</label></li> 
          <li>  <input type="checkbox" {...register("genres")} value="Card" id="" />
            <label> Card</label></li>
            <hr />
            <input className="inpForm" type="submit" value="Crear Videojuego" />
          </ul>
        </div>
      </form>
      <Link to="/home">
        <div>Back to Home</div>
      </Link>
      <p> * indica campos obligatorios</p>
    </div>
    </div>
  );
}
