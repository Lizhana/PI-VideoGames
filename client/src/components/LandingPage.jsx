import React from "react";
import {Link} from 'react-router-dom';
import './Css/landing.css'
import land from'./imagenes/landing.gif'

export default function LandingPage() {
   return ( 
   <div className="landing">
    <img src={land} alt="" />
    <br /><br /><br />
        <div className="title">
        <h1>Welcome Videogames</h1>
        </div>
    <div>
       
       
        <Link to='/home'>
       <button>PLAY</button>
        </Link>
        <br /><br /><br /><br />
   
        </div>
        </div>
    )
}