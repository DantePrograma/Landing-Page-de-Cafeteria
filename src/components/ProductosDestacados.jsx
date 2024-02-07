import React from "react";
import "./ProductosDestacados.css";
import merienda from "/src/imagenes/tazadecafenuevo.jpg";

export const ProductosDestacados = () => {
  return (
    <>
      <h1 className="h1-destacados">Nuevo!</h1>
      <section className="productos-destacados">
        <div className="left-productos-destacados">
          <h1>¡Proba nuestra nueva merienda!</h1>
          <p>
            Disfruta de nuestro cappuccino artesanal calentito junto con 2
            exquisitas medialunas.
          </p>
          <button className="comic-button">
            <span>SHOP</span>
          </button>
        </div>
        <div className="right-productos-destacados">
          <img src={merienda} alt="merienda-main" />
        </div>
      </section>
    </>
  );
};
