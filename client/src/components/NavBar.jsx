import React from "react";
import { useSelector } from "react-redux";
import Search from "./Search";
import './Css/navbar.css'



export default function NavBar({handleSort,
    handleRating, handleGenreFilter, handleUbicationFilter}) {

        const genreIncludedGenre = useSelector(state => state.genres);

        

    return (
        <div className="selectdiv">

            <div key={genreIncludedGenre.id} className='btn-select' >
            <select className="select" onChange={(e) => handleSort(e)}>
                    <option>Order</option>
                    <option value='A-Z' >A-Z</option>
                    <option value='Z-A'>Z-A</option>
            </select>

            <select className="select" onChange={(e) => handleRating(e)}>
                    <option>Rating</option>
                    <option value="Top"> Top</option>
                    <option value="Low"> Low</option>
            </select> 

            <select className="select" onChange={(e) => handleUbicationFilter(e)}> 
                    
                    <option value='All'>All</option>
                    <option value='DataBase'>Data Base</option>
                    <option value='API'>Existent</option>
            </select>        
            

            <select className="select" onChange={(e) => handleGenreFilter(e)}>
                    <option>Genres</option>
                    <option value='genreIncluded'>genreIncluded</option> 

                    {genreIncludedGenre.map((genre) => (
                        <option key={genre.id} value={genre.name}>
                            {genre.name}
                        </option>
                    ))}
            </select>
            <div>
                
            <Search  />
            </div>
        </div>
    </div>
  )
    
}
