import { Link } from "react-router-dom";
import "./styles/Buttons.css";

export default function Buttons() {
  return (
    <div className="Buttons">
      <Link to="/cart">
        <button className="Buttons-Cart">Ver pedido</button>
      </Link>
      <Link to="/">
        <button className="Buttons-Menu">Volver al menú</button>
      </Link>
    </div>
  );
}
