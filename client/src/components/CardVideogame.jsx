import React from "react";
import { Link } from "react-router-dom";

export default function CardVideogame({name, image, genres, rating, id}){
    let genre = genres.split(',')
    if (genre.length > 2) {
        genre = genre.slice(0, 2)
    } 
    if (genre.length === 1) {
        genre = genre.toString()
    } else {
        genre = genre.toString() + '(...)'
    }

    return(
        <div>
            <Link to={'/videogame/' + id}>
            <img src={image} alt="imagen no disponible"/>
            <h4>{name}</h4>
            </Link>
            <p>{genre}</p>
            <p>{rating}</p>
        </div>
    )
}