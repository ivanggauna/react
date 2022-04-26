
import './estilos/NavBar.css';


function NavBar() {

    const logo = '../src/logoNew.webp';    

    return (

        <header className="header">

            <div className="contenedor-logo">
               <a href="#"><img src={logo} alt="marca" /></a>
            </div>

            <nav>
                <ul className="contenedor-nav">
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Productos</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>

            </nav>

        </header>



    )

}

export default NavBar