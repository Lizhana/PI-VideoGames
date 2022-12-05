import loader from './imagenes/loader.gif'
import './Css/loader.css'

export default function Loader() {
    return(
        
    <div className="loader">
        <div className='.loaderdiv'>
        <img src={loader} alt="loading" className='loaderi'/>
        <h2><strong>LOADING . . .</strong></h2>
</div>
    </div>
    )
};