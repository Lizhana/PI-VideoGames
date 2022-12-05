/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Css/paginad.css'

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
    <div>
      <nav className="dropdownmenu">
        <ul>
          <li onClick={() => paginado(currentPage -1)}>
            <a >Prev</a>
          </li>
          {pageNumbers &&
            pageNumbers.map((num) => (
              <li key={num}>
                <li onClick={() => paginado(num)}>
                 
                  <a>{num}</a>
                </li>
              </li>
            ))}
          <li onClick={() => paginado(currentPage +1)}>
           
            <a > Next </a>
          </li>
        </ul>
        <hr />
        <hr />
        <hr />
        <hr />
      </nav>
    </div>
  );
}
