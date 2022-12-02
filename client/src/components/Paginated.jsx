import React from "react";

export default function Paginated({ videogamesPerPage, allVideogames, paginado}) {
    
    const pageNumbers = [] 
    const pageMax = Math.ceil(allVideogames/videogamesPerPage) //declaro un arreglo vacio

    for (let i = 1; i < pageMax; i++) { //todos los videojuegos dividido los videojuegos por pag que quiero
        pageNumbers.push(i+1)   //lo guardo en pageNumbers
    }
    return (
        <div className='pagination_container'>

            <p>holakhvjhvbaa</p>
            <ul>
                { pageNumbers && pageNumbers.map(num=> {
                    return (
                    <li key={num}> 
                    <a onClick={() => paginado(num)}>{num}</a>
                    </li>
                     )
                  })} 
            </ul>
        </div>
    )
}