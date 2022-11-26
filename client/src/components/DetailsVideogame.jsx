import React, {useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogamesById } from "../actions";

export default function DetailsVideogame() {
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(()=> {
            dispatch(getVideogamesById(id));
        },[id, dispatch]);
    
        const detail = useSelector((state)=> state.detail);

        const hanleReset = ()=> {dispatch(getVideogamesById());
        }

    return (
        <div>
            
        </div>
     )
}