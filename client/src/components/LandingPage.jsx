import React from "react";
import {Link} from 'react-router-dom';

export default function LandingPage() {
   return ( <div>
        <Link to='/home'>
       <h1>Comienza la experiencia Videogames</h1> 
       <button>PLAY</button>
        </Link>
    </div>)
}