import { Cart } from "./Cart";
import { HamburguerMenu } from "./HamburguerMenu";
import styled from "styled-components";
import logo from "/src/imagenes/lamaquina.svg";
import { Login } from "./Login";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setClicked(!clicked);
    }
  };
  return (
    <>
      <NavBar>
        <div className="header-container">
          <div className="burguer-button">
            <HamburguerMenu clicked={clicked} handleClick={handleClick} />
          </div>
          <div className="left-menu">
            <div className="logo">
              <Link onClick={handleClick} to={"/"}>
                <img className="logo-img" src={logo} alt="icono-empresa" />
              </Link>
            </div>

            <nav className={`nav-list ${clicked ? "mobile" : ""}`}>
              <Link onClick={handleClick} to={"products"}>
                PRODUCTOS
              </Link>
              <a onClick={handleClick} href="#nosotros">
                NOSOTROS
              </a>
              <Link onClick={handleClick} to={"products"}>
                CAFE
              </Link>
              <button onClick={handleClick} className="menu-close">
                <i className="bi bi-x-lg"></i>
              </button>
            </nav>
          </div>

          <div className="right-menu">
            <Login />
            <Cart handleClick={handleClick} />
          </div>
        </div>
      </NavBar>
    </>
  );
}

const NavBar = styled.header`
  background-color: white;
  width: 100%;
  margin: 0 auto;
  height: 90px;
  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.54);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.54);
  @media (max-width: 768px) {
    height: 70px;
    padding: 0 10px;
  }

  .header-container {
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 768px) {
      padding: 0px 15px;
    }
  }

  .right-menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
  }

  .left-menu {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .nav-list {
    display: none;
    @media (min-width: 768px) {
      display: flex;
      gap: 25px;
    }
  }

  .mobile {
    z-index: 1;
    width: 100%;
    max-width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 50px;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: white;
    box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.6);
  }

  .menu-close {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    font-size: 2em;
    background-color: transparent;
    @media (min-width: 768px) {
      display: none;
    }
  }

  .nav-list a {
    text-decoration: none;
    color: #000;
    font-size: 1.01rem;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    position: relative;
  }

  .nav-list a::after {
    @media (min-width: 768px) {
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
  }

  .nav-list a:hover {
    color: var(--color3);
  }

  .nav-list a:hover::after {
    transform-origin: left;
    transform: scaleX(1);
  }

  .logo {
    height: 110px;
    width: 110px;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      margin-left: 20px;
      height: 90px;
      width: 90px;
    }
  }

  .logo a {
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      padding: 4px;
    }
  }

  .logo-img {
    height: 100%;
    width: 100%;
  }

  .burguer-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bi-person {
    font-size: 24px;
    color: #000;
  }

  .bi-person:hover {
    color: var(--color3);
    transition: all 0.3s linear;
  }

  .burguer-button {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
