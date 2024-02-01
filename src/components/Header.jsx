import { Cart } from "./Cart";
import { HamburguerMenu } from "./HamburguerMenu";
import styled from "styled-components";
import logo from "/src/imagenes/lamaquina.svg";
import { Login } from "./Login";

export function Header({ clicked, handleClick }) {
  return (
    <>
      <NavBar>
        <div className="header-container">
          <div className="burguer-button">
            <HamburguerMenu clicked={clicked} handleClick={handleClick} />
          </div>
          <div className="logo">
            ZE
            <img src={logo} alt="icono-empresa" />
            US
          </div>

          <nav className={`nav-list ${clicked ? "active" : ""}`}>
            <a onClick={handleClick} href="#">
              NOSOTROS
            </a>
            <a onClick={handleClick} href="#coffe-products">
              PRODUCTOS
            </a>

            <a onClick={handleClick} href="#">
              CAFE
            </a>
            <a onClick={handleClick} href="#">
              OPINIONES
            </a>
          </nav>
          <div className="right-menu">
            <div>
                <Login />
            </div>
            <Cart handleClick={handleClick} />
          </div>
        </div>
      </NavBar>
    </>
  );
}

const NavBar = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans&family=Rubik&family=Roboto&display=swap");
  background-color: white;
  width: 100%;
  margin: 0 auto;
  height: 90px;
  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.54);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.54);
  padding: 0px 20px;
  @media (max-width: 850px) {
    height: 60px;
    padding: 0px 8px;
  }

  .header-container {
    width: 100%;
    max-width: 1500px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .right-menu {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .nav-list {
    display: none;
    @media (min-width: 850px) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }
  }

  .nav-list.active {
    width: 180px;
    height: 100%;
    padding: 70px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    color: white;
    background-color: white;
    box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.6);
  }

  .nav-list a {
    text-decoration: none;
    color: var(--color2);
    font-size: 19px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 600;
    position: relative;
  }

  .nav-list a::after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: -32px;
    width: 100%;
    height: 5px;
    background: var(--color3);
    border-radius: 5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.5s;
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
    font-family: "Noto Sans", sans-serif;
    font-weight: 500;
    color: var(--color2);
  }

  .logo img {
    width: 100px;
    height: 100px;
    @media (max-width: 850px) {
      width: 70px;
      height: 70px;
    }
  }

  .burguer-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bi-person {
    font-size: 24px;
  }

  .burguer-button {
    @media (min-width: 850px) {
      display: none;
    }
  }
`;
