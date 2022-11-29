import React from "react";
import { Link } from "react-router-dom";

export default function CardVideogame({name, background_image, genres, rating, id}){
   

try{

    
    return(
        <div>

            <Link to={`videogame/${id}`}    >
            <img src={background_image} alt="imagen no disponible"/>
            <h4>{name}</h4>
            </Link>
            <p>Genero: {genres.join(', ')}</p>
            <p>Rating: {rating}</p>
        </div>
    )}
    catch(error) {
            console.log(error);
    }
}