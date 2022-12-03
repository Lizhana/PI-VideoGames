/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames, getGenres, orderByName, orderByRating, filterByGenres, filterByUbication } from "../actions"
import CardVideogame from "./CardVideogame";
import NavBar from './NavBar';
import Loader from './Loader';
import Paginated from './Paginated';

export default function Home() {

   const dispatch = useDispatch()
   let allVideogames = useSelector((state)=> state.videogames) 

   const [currentPage, setCurrentPage] = useState(1)
 
    const [videogamesPerPage, setVideogamesPerPage] = useState(15)
  
    const indexOfLastVideogame = currentPage * videogamesPerPage


    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage
   
    const currentVideogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame)

  

    const [order, setOrder] = useState('') 


    
    
    const paginado = (pageNumber) => {   
        if(pageNumber < 1 || pageNumber > 7){
            
        } else {
        setCurrentPage(pageNumber)
    }
    }
    
    useEffect(() => {
        dispatch(getGenres())
        
    }, [dispatch]);

    useEffect(()=> {
        dispatch(getVideogames())
    }, [dispatch]);

   


    if(!allVideogames.length) {
        return ( <Loader/> )
    }
    

    const handleClick = (event)=> {
        event.preventDefault();
        dispatch(getVideogames())
    }

    const handleSort = (event)=> {
        event.preventDefault();
        dispatch(orderByName(event.target.value))
        setCurrentPage(1);
        setOrder(event.target.value)
    }

    const handleGenreFilter = (event)=> {
        event.preventDefault();
        dispatch(filterByGenres(event.target.value))
        setCurrentPage(1)
        setOrder(event.target.value)
    }

    const handleUbicationFilter = (event) => {
        event.preventDefault();
        dispatch(filterByUbication(event.target.value))
        setCurrentPage(1)
        setOrder(event.target.value);
    }

    const handleRating = (event)=>{
        event.preventDefault();
        dispatch(orderByRating(event.target.value));
        setCurrentPage(1);
        setOrder(event.target.value);
    }

    return (


        <div>
            <Link to='/createvideogame'>
                <button> Crea tu videojuego</button>
            </Link>

            <Link to="/">
            <button>Log Out</button>
            
            </Link>
            <div> 
                <NavBar
                handleSort= {handleSort}
                handleRating = {handleRating}
                handleGenreFilter = {handleGenreFilter}
                handleUbicationFilter ={handleUbicationFilter}
                />
                
            </div>

                <Paginated 
                videogamesPerPage ={videogamesPerPage}
                allVideogames ={allVideogames.length}
                paginado ={paginado}
                currentPage ={currentPage} />
         
            <ul>
                {currentVideogames?.map((g) => {
                    return (
                        <CardVideogame 
                        id={g.id}
                        name = {g.name}
                        background_image = {g.background_image}
                        genres = {g.genres}
                        rating = {g.rating}
                        platforms = {g.platform}
                        key = {g.id} />
                        );
                        
                    })}
            </ul>

           
            <div>

                <button onClick={(event)=>{handleClick(event)}} >Reload</button>
            </div>
        </div>
    )
}




