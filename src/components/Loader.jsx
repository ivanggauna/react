import gifLoader from "../images/loader.gif";
import "./styles/Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <img className="loader-img" src={gifLoader} alt="" />
    </div>
  );
}
