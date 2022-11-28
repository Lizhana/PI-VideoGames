import React, {useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogamesById } from "../actions";

export default function DetailsVideogame(props) {

    const dispatch = useDispatch();
    // const {id} = useParams();

    useEffect(()=> {
     dispatch(getVideogamesById(props.match.params.id));
        },[dispatch]);
    
        const videogame = useSelector((state)=> state.videogameDetail);

        const hanleReset = ()=> {dispatch(getVideogamesById());
        }

    return (
        <> 
         <div>

            <Link to={'/home'} onClick= {hanleReset} >
            <button>Home</button>
            </Link>
            <div>
                <img src={videogame.background_image} alt="Not found" />
                <h1>Nombre: {videogame.name}</h1>
                <p >Released: {videogame.released}</p>
                <p className="platforms_detail">
                    Platforms:  
                    {videogame.id?.length > 10 
                     ? videogame.platforms?.map(p => p.name).join(" - ")
                     : videogame.platforms?.map(p => p.platform.name).join(" - ")}
                </p>
                <p className="genres_detail">Genres: {videogame.genres?.map(g => g.name).join("-")}</p>
                <p className="rating_detail">Rating: {videogame.rating}</p>
                <p className="description_detail">Description: {videogame.description || videogame.description_raw}</p>
            </div>
         </div>
        
        </>
     )
}

