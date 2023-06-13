import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Supermercado Vital</h1>

        <nav>
            <ul>
                <li>
                   Carnes
                </li>

                <li>
                    Lácteos
                </li>

                <li>
                    Almacén
                </li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar