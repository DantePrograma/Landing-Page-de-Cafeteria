import { useState } from 'react'
import { Cart } from './Cart'
import { HamburguerMenu } from './HamburguerMenu'
import styled from 'styled-components'
import logo from '/src/imagenes/lamaquina.svg'

export function Header () {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        const isMobile = window.innerWidth <= 850;
        if (isMobile) {
            setClicked(!clicked);
        }
    }

    
    return (
        <>
        <NavBar>
        <div className="logo">
                        ZE
                        <img src={logo} alt="icono-empresa" />
                        US
        </div>
        <nav className={`nav-list ${clicked ? 'active' : ''}`}>
            .
                    <a onClick={handleClick} href="#">NOSOTROS</a>
                    <a onClick={handleClick} href="#coffe-products">PRODUCTOS</a>
                    <a onClick={handleClick} href="#">CAFE</a>
                    <a onClick={handleClick} href="#">OPINIONES</a>
                    <div>
                        <Cart />
                    </div>
                    
            </nav>
            <div className="burguer-button">
                        <HamburguerMenu clicked={clicked} handleClick={handleClick} />
                    </div>
        </NavBar>



        </>
    )
}

const NavBar = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&family=Rubik&family=Roboto&display=swap');
    background-color: var(--color5);
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    -webkit-box-shadow: 0px 10px 18px -6px rgba(0,0,0,0.41);
    -moz-box-shadow: 0px 10px 18px -6px rgba(0,0,0,0.41);
    box-shadow: 0px 10px 18px -6px rgba(0,0,0,0.41);
    padding: 0px 20px;


.nav-list {
    display: none;
    @media(min-width: 850px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }


}

.nav-list.active {
    width: 300px;
    height: 100%;
    padding: 70px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    color: white;
    background-color: white;
    box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .6);
}

.nav-list a {
    text-decoration: none;
    color: var(--color2);
    font-size: 19px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    position: relative;
    margin-right: 30px;
}

.nav-list a::after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: -32px;
    width: 100%;
    height: 5px;
    background: var(--color3);
    border-radius: 5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .5s;
}

.nav-list a:hover {
    color: var(--color3);
}

.nav-list a:hover::after {
    transform-origin: left;
    transform: scaleX(1);
} 

.logo {
    display: flex;
    align-items: center;
    font-size: 40px;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 500;
    color: var(--color2);
}

.nav-list img {
  width: 110px;
  height: 110px;
}

.burguer-button {
    @media (min-width: 850px) {
        display: none;
        border: 1px solid blue;
    }
}


`