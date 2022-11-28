import loader from './imagenes/loader.gif'

export default function Loader() {
    return(
    <div className="loader">
        <img src={loader} alt="loading"/>
        <h3><strong>LOADING . . .</strong></h3>
    </div>
    )
};