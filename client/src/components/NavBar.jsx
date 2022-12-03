import React from "react";
import { useSelector } from "react-redux";
import Search from "./Search";



export default function NavBar({handleSort,
    handleRating, handleGenreFilter, handleUbicationFilter}) {

        const genreIncludedGenre = useSelector(state => state.genres);

        

    return (
        <div >
            <div>
            <Search  />
            </div>

            <div key={genreIncludedGenre.id}>
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
                    
                    <option value='All'>Todos</option>
                    <option value='DataBase'>Base De Datos</option>
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
        </div>
    </div>
  )
    
}
