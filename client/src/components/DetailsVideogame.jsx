import React, {useEffect} from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogamesById, deleteVideogame} from "../actions";
import Loader from "./Loader";

export default function DetailsVideogame() {

    const history = useHistory()

    const dispatch = useDispatch();
    let {id} = useParams();


    useEffect(()=> {

     dispatch(getVideogamesById(id));
        },[id, dispatch]);

        

 const detail = useSelector((state)=> state.detail);
        let idD = detail.id

       const handleSubmit = () => {
        if(idD.toString().length < 10) {
            alert('No puedes eliminar este juego')
            history.push("/home")
        } else{ 
            dispatch(deleteVideogame(idD))
            alert('Videojuego Eliminado')
            history.push("/home")
        }
       }

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
                <div>
                <input onClick={handleSubmit} type="submit" value="DELETE" />
                </div>
            </div>
         </div>
        
        </>
     )
}

