import React from "react";
import {Link} from 'react-router-dom';
import './Css/landing.css'

export default function LandingPage() {
   return ( 
   <div className="landing">
       <h1>Comienza la experiencia Videogames</h1> 
        <Link to='/home'>
       <button>PLAY</button>
        </Link>
    </div>)
}