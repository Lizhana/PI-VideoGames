import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { postVideogame, getGenres } from "../actions";
import { useDispatch, useSelector } from "react-redux";


function validate(input){
    let errors = {};
    if(!input.name.trim()) {
        errors.name = 'Write a name, please';
    } 
    if(!input.description.trim()) {
        errors.description = 'Write a description, please';
    }
    if(!input.platforms.length) {
        errors.platforms = 'Select a platform, please';
    }
    return errors;
}

export default function FormtOcreate() {
    const dispatch = useDispatch()
    const genre = useSelector((state) => state.genres);
    const platform = useSelector((state) => state.platforms)
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: '',
        image:'',
        description: '',
        released: '',
        rating: '',
        genres: [],
        platforms: [],
    })
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value //name se refiere a cada casillero q tiene que llenar, por eso en el form aparece name en todos
        })                              // el value son los inputs de arriba que van a ir cambiando de valor a medida q la persona ingrse los datos
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
   //     console.log(input)
    }

    function handleSelectGenre(e){
        setInput({
            ...input,
            genres: [...input.genres, e.target.value],
        })
    }

    function handleSelectPlatform(e){
        setInput({
            ...input,
            platforms: [...input.platforms, e.target.value]
        })
    };

    function handleSubmit(e){
        e.preventDefault();
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );

        if(Object.keys(errors).length === 0){
            dispatch(postVideogame(input));
            alert('Videogame created 👌');
            setInput({ //seteo todo mi input en cero
                    name: '',
                    image:'',
                    description: '',
                    released: '',
                    rating: '',
                    genres: [],
                    platforms: [],
        })
    }else {
        alert('ERROR: videogame not created 😕');
        return; }}

        function handleDeletePlatform(e){
            setInput({
                ...input,
                platforms: input.platforms.filter(p => p !==e),
    
            })
        }
    
        function handleDeleteGenre(e){
            setInput({
                ...input, //me traigo el estado anterior
                genres: input.genres.filter(g => g !==e), //filtrar por todo lo que NO sea ese elemento 
    
            })
        }
    
        useEffect(() => {
            dispatch(getGenres());
        }, [dispatch]);
    
    
        return(
            <>
            <div className='home_container'>
                <Link className='home' to= '/home'>HOME</Link>
                <h1 className='lets_go'>¡Let's go!</h1>
                <form className='form' onSubmit={(e) => handleSubmit(e)}>
                    <div>
                       
                        <input className='input'
                        placeholder='Videogame Name'
                        type= 'text'
                        value= {input.name}
                        name= 'name'
                        onChange={(e) => handleChange(e)}
                        />
                        {errors.name && (
                            <p className='error'>{errors.name}</p>
                        )}
                    </div>
                    <div>
                        
                        <input className='input'
                        placeholder='Image'
                        type= 'img'
                        value= {input.image}
                        name= 'image'
                        alt= 'not found'
                        onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        
                        <input className='input'
                        placeholder='Description'
                        type= 'text'
                        value= {input.description}
                        name= 'description'
                        onChange={(e) => handleChange(e)}
                        />
                        {errors.description && (
                            <p className='error'>{errors.description}</p>
                        )}
                    </div>
                    <div className='released_container'>
                        <label className='released'> Released </label>
                        <input className='released_input' 
                        type= 'date'
                        value= {input.released}
                        name= 'released'
                        onChange={(e) => handleChange(e)}
                        />
                    
                    
                        <label className='rating'>Rating </label>
                        <input className='rating_input'
                        placeholder='0 to 5'
                        type= 'number'
                        value= {input.rating}
                        min={0}
                        max={5}
                        name= 'rating'
                        onChange={(e) => handleChange(e)}
                        />
                    </div> 
                    <div className='genres_container'>
                    <label className='genres'>Genres </label>
                    <select className='genres_input' onChange={(e) => handleSelectGenre(e)}>
                        {genre.map(g => (
                            <option key={g.name} value={g.name}>{g.name}</option>
                        ))}
                    </select>
                    </div>
                    <div className='platforms_container'>
                    <label className='platforms'>Platforms </label>
                    <select className='platforms_input' onChange={(e) => handleSelectPlatform(e)}>
                        {platform.map(p => (
                            <option key={p.name} value={p.name}>{p.name}</option>
                        ))}
                    </select>
                    </div>
    
                    <div>
                        <button className='create' type='submit'>CREATE</button>
                      
                    </div>
                </form>
                {input.genres.map(g => 
                    <div className='x_genre_container'>
                    <label className='x_genre'>{g}</label>
                    <button className='x_genre_buttom' onClick={() => handleDeleteGenre(g)}>X</button>  
                    </div>  
                )}
                {input.platforms.map(p => 
                    <div className='x_platform_container'>
                    <label className='x_platform'>{p}</label>
                    <button className='x_platform_buttom' onClick={() => handleDeletePlatform(p)}>X</button>  
                    </div>  
                )}
            </div>
        </>
      )
    }    
