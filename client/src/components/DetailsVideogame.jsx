import React, {useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogamesById } from "../actions";
import Loader from "./Loader";

export default function DetailsVideogame() {

    const dispatch = useDispatch();
    const {id} = useParams();


    useEffect(()=> {

     dispatch(getVideogamesById(id));
        },[id, dispatch]);

        const detail = useSelector((state)=> state.detail);

       if(!detail.length){
       (<Loader></Loader>)
       }

    return (
        <> 
         <div>

            <Link to={'/home'} >
            <button>Home</button>
            </Link>
            <div>
                <img src={detail.background_image} alt="Not found" />
                <h1>Nombre: {detail.name}</h1>
                <p >Released: {detail.released}</p>
                <p className="platforms_detail">
                    Platforms: {detail.platforms}
                </p>
                <p className="genres_detail">Genres: {detail.genres}</p>
                <p className="rating_detail">Rating: {detail.rating}</p>
                <p className="description_detail">Description: {detail.description || detail.description_raw}</p>
            </div>
         </div>
        
        </>
     )
}

