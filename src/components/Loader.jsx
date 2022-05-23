import gifLoader from "../imagenes/loader.gif"

export default function Loader() {

    return (
        <div className="loader">
            <img className="loader-img" src={gifLoader} alt="" />
            <h2 className='loader-text'>Cargando...</h2>
        </div>
    );
}