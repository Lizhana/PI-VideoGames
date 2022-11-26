import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import { getVideogamesByName } from "../actions";

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
        <div>
            <input type='text' placeholder="Videojuego..." onChange={handleInput} value={name} onKeyPress={enter}/>
            <button type="submit" onClick={handleSubmit} >Buscar</button>

        </div>
    )

}
