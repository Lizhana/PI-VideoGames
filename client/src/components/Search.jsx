import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import { getVideogamesByName } from "../actions";
import './Css/search.css'

export default function Search() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleInput = (event)=> {
        event.preventDefault()
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!name.length) {
            alert('Introduzca el nombre del videojuego')
        } else {
            dispatch(getVideogamesByName(name))
            setName('');
        }

    }

    const enter = (event)=> {
        if (event.key === 'Enter') {
            handleSubmit(name)
            setName('')
        }
    }

    return (
        <div  >
            <input type='text' placeholder="Videogame..." onChange={handleInput} value={name} onKeyPress={enter} className="search" />

            <button type="submit" onClick={handleSubmit} 
            className='bot'
            >Search</button>

        </div>
    )

}
