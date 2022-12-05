import React from "react";
import {Link} from 'react-router-dom';
import './Css/landing.css'

export default function LandingPage() {
   return ( 
   <div className="landing">
    
    <br /><br /><br />
        <div className="title">
        <h1>Welcome Videogames</h1>
        </div>
    <div>
       
       
        <Link to='/home'>
       <button className="buttonLan">PLAY</button>
        </Link>
        <br /><br /><br /><br />
   
        </div>
        </div>
    )
}