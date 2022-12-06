import React from "react";
import { Link } from "react-router-dom";
import './Css/card.css'


export default function CardVideogame({name, background_image, genres, rating, id}){

   
   

try{
    return(
        
        <div className="cards">
          <Link to={`videogame/${id}`}    >
                <div >
            
            <img src={background_image ||" https://alfabetajuega.com/hero/2022/01/personajes-populares-videojuegos.webp?width=1200"} alt="imagen no disponible"
            className="imgcard" /></div>
            <h2>{name}</h2>
             
            <h3>Genre: {genres.join(', ')}</h3></Link>
        </div>
    )}
    catch(error) {
            console.log(error);
    }
}