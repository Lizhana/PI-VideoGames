import React from "react";

export default function Paginated({
  videogamesPerPage,
  allVideogames,
  paginado,
  currentPage
}) {


  let pageNumbers = [];

  let max = Math.ceil(allVideogames / videogamesPerPage);
  for (let i = 0; i < max; i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <nav>
      
      <button onClick={()=> paginado(currentPage-1)} >Prev</button>
        {pageNumbers &&
          pageNumbers.map((num) => (
            <p className="paginado" key={num}>
              <button  onClick={() => paginado(num)}>{num}</button>
            </p>  ))
          }
          <button onClick={()=> paginado(currentPage+1)} >Sig</button>
      
    </nav>
  );
}
