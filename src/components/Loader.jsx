import gifLoader from "../images/loader.gif"

export default function Loader() {

    return (
        <div className="loader">
            <img className="loader-img" src={gifLoader} alt="" />
        </div>
    );
}