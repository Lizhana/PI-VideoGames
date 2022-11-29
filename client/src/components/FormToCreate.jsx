import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { postVideogame, getGenres } from "../actions";
import { useDispatch, useSelector } from "react-redux";

function validate(input) {
    let errors = {}
    if (!input.name) {
        errors.name = 'Name is required' 
    } else if (!input.rating || input.rating<0 || input.rating >5) {
        errors.rating = 'Rating must be a nummber between 0-5'
    } else if (input.platform.length===0) {
        errors.platform = 'Platform is required'
    }
    return errors 
}

export default function FormTocreate() {
    return (
<div>

    holaa mundo!!
</div>

    )
    }    
