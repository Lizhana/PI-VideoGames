import React from "react";
import { useSelector } from "react-redux";
import Search from "./Search";



export default function NavBar({handleSort,
    handleRating, handleGenreFilter, handleUbicationFilter}) {

        const genreIncludedGenre = useSelector(state => state.genres);

    return (
        <div>
            <div className="navbar_container">
            <Search/>
            </div>

            <div>
            <select className="select" onChange={(e) => handleSort(e)}>
                    <option>Order</option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
            </select>

            <select className="select" onChange={(e) => handleRating(e)}>
                    <option>Rating</option>
                    <option value="Top">Rating Top</option>
                    <option value="Low">Rating Low</option>
            </select> 

            <select className="select" onChange={(e) => handleUbicationFilter(e)}> 
                    <option>Games</option>
                    <option value='genreIncluded'>genreIncluded</option>
                    <option value='DB'>DB</option>
                    <option value='API'>Existent</option>
            </select>        
            

            <select className="select" onChange={(e) => handleGenreFilter(e)}>
                    <option>Genres</option>
                    <option value='genreIncluded'>genreIncluded</option> 

                    {genreIncludedGenre.map((genre) => (
                        <option key={genre.name} value={genre.name}>
                            {genre.name}
                        </option>
                    ))}
            </select>
        </div>
    </div>
  )
    
}
