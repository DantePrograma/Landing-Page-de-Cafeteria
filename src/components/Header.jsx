import { Cart } from './Cart'
import './Header.css'

export function Header () {
    return (
        <header>
            <nav className='nav-list'>
                    <a href="#">NOSOTROS</a>
                    <a href="#coffe-section">PRODUCTOS</a>
                    <div className="logo">
                        ZE
                        <img src="src/imagenes/lamaquina.svg" alt="icono-empresa" />
                        US
                    </div>
                    <a href="#">CAFE</a>
                    <a href="#">OPINIONES</a>
                    <Cart />
                    
            </nav>
        </header>
    )
}